// Compiled by ClojureScript 0.0-2311
goog.provide('tests.game_test.core');
goog.require('cljs.core');
goog.require('game_test.utils');
goog.require('game_test.utils');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
tests.game_test.core.dumb_utils_test = (function dumb_utils_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),tests.game_test.core.dumb_utils_test);
});
tests.game_test.core.dumb_utils_test = cljs.core.with_meta.call(null,tests.game_test.core.dumb_utils_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),23,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("tests.game-test.core","dumb-utils-test","tests.game-test.core/dumb-utils-test",311666840,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),23,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function dumb_utils_test_test(test_ctx__13143__auto__){var _test_ctx = test_ctx__13143__auto__;var async_QMARK___13058__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13309 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto__)?null:_test_ctx);
try{var _test_ctx__$1 = _test_ctx;var async_QMARK___13058__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13311 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto____$1)?null:_test_ctx__$1);
try{try{var values__13078__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,game_test.utils.testfun.call(null,(1),(3))),(4));var result__13079__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13078__auto__);if((result__13079__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13079__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("gutils","testfun","gutils/testfun",100735046,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13078__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("gutils","testfun","gutils/testfun",100735046,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13078__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13079__auto__;
}catch (e13313){if((e13313 instanceof Error))
{var t__13115__auto__ = e13313;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol("gutils","testfun","gutils/testfun",100735046,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__13115__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13313;

}
}}catch (e13312){if((e13312 instanceof Error))
{var e__13059__auto__ = e13312;if(cljs.core.truth_(async_QMARK___13058__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13312;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13311;
}}catch (e13310){if((e13310 instanceof Error))
{var e__13059__auto__ = e13310;if(cljs.core.truth_(async_QMARK___13058__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13310;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13309;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"tests.game-test.core","tests.game-test.core",-569861416,null),new cljs.core.Symbol("tests.game-test.core","dumb-utils-test","tests.game-test.core/dumb-utils-test",311666840,null),tests.game_test.core.dumb_utils_test);
tests.game_test.core.always_failing_test = (function always_failing_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),tests.game_test.core.always_failing_test);
});
tests.game_test.core.always_failing_test = cljs.core.with_meta.call(null,tests.game_test.core.always_failing_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),26,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("tests.game-test.core","always-failing-test","tests.game-test.core/always-failing-test",1488416555,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),26,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function always_failing_test_test(test_ctx__13143__auto__){var _test_ctx = test_ctx__13143__auto__;var async_QMARK___13058__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13319 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto__)?null:_test_ctx);
try{var _test_ctx__$1 = _test_ctx;var async_QMARK___13058__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13321 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto____$1)?null:_test_ctx__$1);
try{try{var values__13078__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),false);var result__13079__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13078__auto__);if((result__13079__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13079__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13078__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13078__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13079__auto__;
}catch (e13323){if((e13323 instanceof Error))
{var t__13115__auto__ = e13323;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),false,true),new cljs.core.Keyword(null,"actual","actual",107306363),t__13115__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13323;

}
}}catch (e13322){if((e13322 instanceof Error))
{var e__13059__auto__ = e13322;if(cljs.core.truth_(async_QMARK___13058__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13322;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13321;
}}catch (e13320){if((e13320 instanceof Error))
{var e__13059__auto__ = e13320;if(cljs.core.truth_(async_QMARK___13058__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13320;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13319;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"tests.game-test.core","tests.game-test.core",-569861416,null),new cljs.core.Symbol("tests.game-test.core","always-failing-test","tests.game-test.core/always-failing-test",1488416555,null),tests.game_test.core.always_failing_test);
tests.game_test.core.always_ok_test = (function always_ok_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),tests.game_test.core.always_ok_test);
});
tests.game_test.core.always_ok_test = cljs.core.with_meta.call(null,tests.game_test.core.always_ok_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("tests.game-test.core","always-ok-test","tests.game-test.core/always-ok-test",1316384687,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"C:\\Projects-git\\tmp\\game-test\\tests\\cljs\\game_test\\core.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function always_ok_test_test(test_ctx__13143__auto__){var _test_ctx = test_ctx__13143__auto__;var async_QMARK___13058__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_13329 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto__)?null:_test_ctx);
try{var _test_ctx__$1 = _test_ctx;var async_QMARK___13058__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_13331 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___13058__auto____$1)?null:_test_ctx__$1);
try{try{var values__13078__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),true);var result__13079__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__13078__auto__);if((result__13079__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__13079__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__13078__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__13078__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
return result__13079__auto__;
}catch (e13333){if((e13333 instanceof Error))
{var t__13115__auto__ = e13333;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,true),new cljs.core.Keyword(null,"actual","actual",107306363),t__13115__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else
{throw e13333;

}
}}catch (e13332){if((e13332 instanceof Error))
{var e__13059__auto__ = e13332;if(cljs.core.truth_(async_QMARK___13058__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13332;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13331;
}}catch (e13330){if((e13330 instanceof Error))
{var e__13059__auto__ = e13330;if(cljs.core.truth_(async_QMARK___13058__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__13059__auto__);
} else
{throw e__13059__auto__;
}
} else
{throw e13330;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_13329;
}})], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"tests.game-test.core","tests.game-test.core",-569861416,null),new cljs.core.Symbol("tests.game-test.core","always-ok-test","tests.game-test.core/always-ok-test",1316384687,null),tests.game_test.core.always_ok_test);
cemerick.cljs.test.run_tests_STAR_.call(null,new cljs.core.Symbol(null,"tests.game-test.core","tests.game-test.core",-569861416,null));

//# sourceMappingURL=core.js.map