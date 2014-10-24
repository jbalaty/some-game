(ns game-test.utils)

(defn jslog [obj]
  (.log js/console obj))



(defn testfun [a b]
  (+ a b))

(defn new-uuid []
  (java.util.UUID/randomUUID))