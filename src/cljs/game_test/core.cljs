(ns game-test.core
  (:require [clojure.browser.repl]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [game-test.setup :as setup]
            [game-test.game-logic :as game]
            [game-test.renderer-canvas :as render]
            [figwheel.client :as fw :include-macros true]))

(def localhost? (-> js/window
                    (.-location)
                    (.-host)
                    (.indexOf "localhost")
                    (>= 0)))
(if localhost?
  (enable-console-print!))

(defonce app-state (atom {:text "------"}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text app)))))
  app-state
  {:target (. js/document (getElementById "app"))})

;; START OF TEST CODE
(def world (atom {:entities [
                        {
                          :name   "a"
                          :coords {:x 0 :y 0}
                          :velocity {:x 0 :y 0}
                          :color "#FFAAEE"
                          }
                        {
                          :name   "b"
                          :coords {:x 1 :y 1}
                          :velocity {:x 0 :y 1}
                          :color "#00AAAA"
                          }
                        {
                          :name   "c"
                          :coords {:x 2 :y 1}
                          :velocity {:x 0 :y 2}
                          }
                        {
                          :name   "d"
                          :coords {:x 3 :y 1}
                          :velocity {:x 1 :y 0}
                          :color "#33AA33"
                          }
                        {
                          :name   "e"
                          :coords {:x 5 :y 6}
                          :velocity {:x -1 :y -1}
                          :color "#FFAA33"
                          }
                        ]
            :items    []}) )
(def renderer (setup/setup-render :canvas))
(defn render [world]
  (render/draw-playfield renderer)
  (render/draw-entities renderer (:entities world))
  )
(def time-from-start (atom 0))

(defn game-loop []
  (swap! time-from-start + 3000)
  (.log js/console (str "Time from start: " @time-from-start))
  (reset! world (game/step @world 3000))
  (render @world)
  (js/setTimeout game-loop 3000)
  )
(game-loop)



;(if localhost?
; (fw/watch-and-reload
;  :websocket-url   "ws://localhost:3449/figwheel-ws"
;  :jsload-callback (fn [] (print "reloaded"))))
