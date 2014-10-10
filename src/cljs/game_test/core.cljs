(ns game-test.core
  (:require [clojure.browser.repl]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [game-test.setup :as setup]
            [game-test.game-logic :as logic]
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
(def canvas-width 400)
(def canvas-height 400)

(def ctx (setup/setup-canvas canvas-width canvas-height))
(def entities (atom [
                      {
                        :coords {:x 0 :y 0}
                        }
                      {
                        :coords {:x 1 :y 1}
                        }
                      {
                        :coords {:x 2 :y 1}
                        }
                      {
                        :coords {:x 3 :y 1}
                        }
                      ]))

(defn render []
  (render/draw-playfield ctx canvas-width canvas-height)
  (render/draw-entities ctx @entities))

(render)

;(if localhost?
; (fw/watch-and-reload
;  :websocket-url   "ws://localhost:3449/figwheel-ws"
;  :jsload-callback (fn [] (print "reloaded"))))
