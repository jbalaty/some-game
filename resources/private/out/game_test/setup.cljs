(ns game-test.setup)

(defn setup-canvas [canvas-width canvas-height]
  (let [canvas (.createElement js/document "canvas")
        body (.-body js/document)
        ]
    (.appendChild body canvas)
    (aset canvas "width" canvas-width)
    (aset canvas "height" canvas-height)
    (.getContext canvas "2d"))
  )
