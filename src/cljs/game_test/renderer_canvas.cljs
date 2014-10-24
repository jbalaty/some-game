(ns game-test.renderer-canvas)

(defn draw-playfield [renderer]
  (let [ctx (:context renderer)]
    (aset ctx "fillStyle" "#FFFFFF")
    (.fillRect ctx 0 0 (:canvas-width renderer) (:canvas-height renderer)))
  )

(defn draw-entity [ctx entity]
  (let [x (get-in entity [:coords :x])
        y (get-in entity [:coords :y])
        size 12]
    (aset ctx "fillStyle" (or (:color entity) "#AAAAAA"))
    (.fillText ctx (get-in entity [:name]) (* size x) (+ size (* size y)))
    ))

(defn draw-entities [renderer entities]
  (let [ctx (:context renderer)]
    (set! (.-font ctx) "12px Arial")
    (aset ctx "fillStyle" "#000000")
    ;(doall (map #(draw-entity ctx %) entities))
    (dorun (map #(draw-entity ctx %) entities)))
  )

