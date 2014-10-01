(ns game-test.renderer-canvas)

(defn draw-playfield [ctx canvas-width canvas-height]
  (aset ctx "fillStyle" "#AAAAAA")
  (.fillRect ctx 0 0 canvas-width canvas-height))

(defn draw-entity [ctx entity]
  (let [x (get-in entity [:coords :x])
        y (get-in entity [:coords :y])
        size 4]
    (.fillRect ctx x y size size)
    ))

(defn draw-entities [ctx entities]
  (set! (.-font ctx) "30px Arial")
  (aset ctx "fillStyle" "#000000")
  (doall (map #(draw-entity ctx %) entities)))
