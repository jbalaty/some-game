(ns tests.game-test.core
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [game-test.utils :as gutils]))

(deftest dumb-utils-test
         (is (= 4 (gutils/testfun 1 3))))

(deftest always-failing-test
         (is (= false true)))

(deftest always-ok-test
         (is (= true true)))

;;(t/test-ns 'tests.game-test.core)
;(run-tests)





