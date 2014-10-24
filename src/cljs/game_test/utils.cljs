(ns game-test.utils)

(defn jslog [obj]
  (.log js/console obj))

(defn jslog-obj [obj]
  (.log js/console (clj->js obj)))



(defn testfun [a b]
  (+ a b))

;https://github.com/davesann/cljs-uuid
(defn new-uuid []
  (java.util.UUID/randomUUID)
  )