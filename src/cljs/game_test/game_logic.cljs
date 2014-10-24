(ns game-test.game-logic
  (:require [game-test.utils :as ut]))

(defn move-entity [entity time-diff]
  (-> entity
      (update-in [:coords :x] + (get-in entity [:velocity :x]))
      (update-in [:coords :y] + (get-in entity [:velocity :y]))
      )
  )

(defn step [world time-diff]
  (let [ents (:entities world)
        newents (map move-entity ents)]
    (assoc world :entities newents))
  )
