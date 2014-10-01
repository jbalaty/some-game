(ns tests.game-test.core
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [game-test.utils :as gutils]))

;(deftest somewhat-less-wat
;         (is (= "{}[]" (+ {} []))))
;
;(deftest javascript-allows-div0
;         (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))
;
;(with-test
;  (defn pennies->dollar-string
;        [pennies]
;        {:pre [(integer? pennies)]}
;        (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
;  (testing "assertions are nice"
;           (is (thrown-with-msg? js/Error #"integer?" (pennies->dollar-string 564.2)))))

;(deftest dumb-test
;         (is (empty? (filter even? (range 20)))))
(deftest dumb-utils-test
         (is (= 4 (gutils/testfun 1 3))))

(deftest always-failing-test
         (is (= false true)))

(deftest always-ok-test
         (is (= true true)))



;(t/test-ns 'tests.game-test.core)
(run-tests)
