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

(defn setup-render [type]
  (case type
    :canvas (let [canvas-width 400
                  canvas-height 400
                  ctx (setup-canvas canvas-width canvas-height)
                  ]
              {:context ctx :dimensions [canvas-height canvas-width]})
    :html nil
    )
  )
