(ns game-test.renderer-canvas)

(defn draw-playfield [ctx canvas-width canvas-height]
  (aset ctx "fillStyle" "#FFFFFF")
  (.fillRect ctx 0 0 canvas-width canvas-height))

(defn draw-entity [ctx entity]
  (let [x (get-in entity [:coords :x])
        y (get-in entity [:coords :y])
        size 12]
    ;(.fillRect ctx x y size size)
    (.fillText ctx "X" (* size x) (+ size (* size y)))
    ))

(defn draw-entities [ctx entities]
  (set! (.-font ctx) "12px Arial")
  (aset ctx "fillStyle" "#000000")
  ;(doall (map #(draw-entity ctx %) entities))
  (dorun (map #(draw-entity ctx %) entities))
  )

