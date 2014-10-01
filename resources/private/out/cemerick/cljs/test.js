// Compiled by ClojureScript 0.0-2311
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__22731 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.call(null,G__22731,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));
return G__22731;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k22733,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__22735 = (((k22733 instanceof cljs.core.Keyword))?k22733.fqn:null);switch (G__22735) {
case "test-name":
return self__.test_name;

break;
case "test-env":
return self__.test_env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22733,else__4142__auto__);

}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
var this__4135__auto____$1 = this;if(cljs.core.truth_((function (){var and__3541__auto__ = other__4136__auto__;if(cljs.core.truth_(and__3541__auto__))
{return ((this__4135__auto____$1.constructor === other__4136__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4135__auto____$1,other__4136__auto__));
} else
{return and__3541__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__22732){var self__ = this;
var this__4146__auto____$1 = this;var pred__22736 = cljs.core.keyword_identical_QMARK_;var expr__22737 = k__4147__auto__;if(cljs.core.truth_(pred__22736.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__22737)))
{return (new cemerick.cljs.test.TestContext(G__22732,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__22736.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__22737)))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__22732,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__22732),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__22732){var self__ = this;
var this__4138__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__22732,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__22734){return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__22734),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__22734),null,cljs.core.dissoc.call(null,G__22734,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__22741 = x;if(G__22741)
{var bit__4203__auto__ = (G__22741.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__4203__auto__) || (G__22741.cljs$core$IDeref$))
{return true;
} else
{if((!G__22741.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__22741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__22741);
}
})())
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__22743 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__22743__$1 = ((cljs.core.seq_QMARK_.call(null,map__22743))?cljs.core.apply.call(null,cljs.core.hash_map,map__22743):map__22743);var remaining = cljs.core.get.call(null,map__22743__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));var running = cljs.core.get.call(null,map__22743__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));var async = cljs.core.get.call(null,map__22743__$1,new cljs.core.Keyword(null,"async","async",1050769601));var and__3541__auto__ = cljs.core.empty_QMARK_.call(null,remaining);if(and__3541__auto__)
{var and__3541__auto____$1 = cljs.core.empty_QMARK_.call(null,running);if(and__3541__auto____$1)
{var or__3553__auto__ = (async == null);if(or__3553__auto__)
{return or__3553__auto__;
} else
{return testing_complete_QMARK_.call(null,async);
}
} else
{return and__3541__auto____$1;
}
} else
{return and__3541__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env)))
{setTimeout((function (){return callback.call(null,test_env);
}),(1));
} else
{cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){var vec__22746 = cljs.core.map.call(null,(function (p1__22744_SHARP_){return cljs.core.select_keys.call(null,p1__22744_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.call(null,vec__22746,(0),null);var newv = cljs.core.nth.call(null,vec__22746,(1),null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);if(cljs.core.truth_((function (){var or__3553__auto__ = complete_QMARK_;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.not_EQ_.call(null,oldv,newv);
}
})()))
{callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else
{}
if(cljs.core.truth_(complete_QMARK_))
{return cljs.core.remove_watch.call(null,ref,key);
} else
{return null;
}
}));
}
return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1)))
{return callback.call(null,test_env__$1);
} else
{return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__22747){var map__22749 = p__22747;var map__22749__$1 = ((cljs.core.seq_QMARK_.call(null,map__22749))?cljs.core.apply.call(null,cljs.core.hash_map,map__22749):map__22749);var m = map__22749__$1;var test_name = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var line = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"line","line",212345235));var file = cljs.core.get.call(null,map__22749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,(function (){var or__3553__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));if(or__3553__auto__)
{return or__3553__auto__;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})()))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+")");
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4423__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("report",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4423__auto__,method_table__4419__auto__,prefer_table__4420__auto__,method_cache__4421__auto__,cached_hierarchy__4422__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),error.fileName,new cljs.core.Keyword(null,"line","line",212345235),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return cemerick.cljs.test.report.call(null,(function (){var G__22754 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);switch (G__22754) {
case "error":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),m);

break;
case "fail":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);

break;
default:
return m;

}
})());
});
var do_report__2 = (function (p__22750,m){var map__22753 = p__22750;var map__22753__$1 = ((cljs.core.seq_QMARK_.call(null,map__22753))?cljs.core.apply.call(null,cljs.core.hash_map,map__22753):map__22753);var test_ctx = map__22753__$1;var test_name = cljs.core.get.call(null,map__22753__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__22753__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__22750,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__22750);
case 2:
return do_report__2.call(this,p__22750,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22756){var map__22757 = p__22756;var map__22757__$1 = ((cljs.core.seq_QMARK_.call(null,map__22757))?cljs.core.apply.call(null,cljs.core.hash_map,map__22757):map__22757);var m = map__22757__$1;var test_env = cljs.core.get.call(null,map__22757__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_22758 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22758;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__22759){var map__22760 = p__22759;var map__22760__$1 = ((cljs.core.seq_QMARK_.call(null,map__22760))?cljs.core.apply.call(null,cljs.core.hash_map,map__22760):map__22760);var m = map__22760__$1;var test_env = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_22761 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22761;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__22762){var map__22763 = p__22762;var map__22763__$1 = ((cljs.core.seq_QMARK_.call(null,map__22763))?cljs.core.apply.call(null,cljs.core.hash_map,map__22763):map__22763);var m = map__22763__$1;var test_env = cljs.core.get.call(null,map__22763__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_22764 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1706214930));
cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___22765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___22765))
{var message_22766 = temp__4126__auto___22765;cljs.core.println.call(null,message_22766);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22764;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__22767){var map__22768 = p__22767;var map__22768__$1 = ((cljs.core.seq_QMARK_.call(null,map__22768))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768):map__22768);var m = map__22768__$1;var test_env = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_22769 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto___22770 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto___22770))
{var message_22771 = temp__4126__auto___22770;cljs.core.println.call(null,message_22771);
} else
{}
cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));
cljs.core.print.call(null,"  actual: ");
var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.call(null,actual.stack);
} else
{return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22769;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__22772){var map__22773 = p__22772;var map__22773__$1 = ((cljs.core.seq_QMARK_.call(null,map__22773))?cljs.core.apply.call(null,cljs.core.hash_map,map__22773):map__22773);var m = map__22773__$1;var test_env = cljs.core.get.call(null,map__22773__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var _STAR_print_fn_STAR_22774 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709));
cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));
if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))
{cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4126__auto__))
{var message = temp__4126__auto__;return cljs.core.println.call(null,message);
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22774;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__22775){var map__22776 = p__22775;var map__22776__$1 = ((cljs.core.seq_QMARK_.call(null,map__22776))?cljs.core.apply.call(null,cljs.core.hash_map,map__22776):map__22776);var test_env = map__22776__$1;var error = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var pass = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));var test = cljs.core.get.call(null,map__22776__$1,new cljs.core.Keyword(null,"test","test",577538877));var _STAR_print_fn_STAR_22777 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.call(null,"\nRan",test,"tests containing",((pass + fail) + error),"assertions.");
var temp__4124__auto__ = (function (){var and__3541__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));if(and__3541__auto__)
{return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var pending_count = temp__4124__auto__;return cljs.core.println.call(null,"Waiting on",pending_count,("asynchronous test"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((pending_count > (1)))?"s":null))+" to complete."));
} else
{return cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22777;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__22778){var map__22779 = p__22778;var map__22779__$1 = ((cljs.core.seq_QMARK_.call(null,map__22779))?cljs.core.apply.call(null,cljs.core.hash_map,map__22779):map__22779);var m = map__22779__$1;var async = cljs.core.get.call(null,map__22779__$1,new cljs.core.Keyword(null,"async","async",1050769601));var test_env = cljs.core.get.call(null,map__22779__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));var ns = cljs.core.get.call(null,map__22779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));var _STAR_print_fn_STAR_22780 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3553__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22780;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__22781){var map__22782 = p__22781;var map__22782__$1 = ((cljs.core.seq_QMARK_.call(null,map__22782))?cljs.core.apply.call(null,cljs.core.hash_map,map__22782):map__22782);var m = map__22782__$1;var test_env = cljs.core.get.call(null,map__22782__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__22783){var map__22784 = p__22783;var map__22784__$1 = ((cljs.core.seq_QMARK_.call(null,map__22784))?cljs.core.apply.call(null,cljs.core.hash_map,map__22784):map__22784);var m = map__22784__$1;var test_env = cljs.core.get.call(null,map__22784__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__22785){var map__22786 = p__22785;var map__22786__$1 = ((cljs.core.seq_QMARK_.call(null,map__22786))?cljs.core.apply.call(null,cljs.core.hash_map,map__22786):map__22786);var m = map__22786__$1;var test_env = cljs.core.get.call(null,map__22786__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__22787){
var ns_sym = cljs.core.first(arglist__22787);
arglist__22787 = cljs.core.next(arglist__22787);
var fixture_type = cljs.core.first(arglist__22787);
var fixture_fns = cljs.core.rest(arglist__22787);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return f1.call(null,(function (){return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),test_fn,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name], null));
cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",577538877));
return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name)));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.call(null,(function (){return null;
}));cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){var temp__4124__auto__ = (function (){var and__3541__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));if(and__3541__auto__)
{return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var vec__22789 = temp__4124__auto__;var name = cljs.core.nth.call(null,vec__22789,(0),null);var testfn = cljs.core.nth.call(null,vec__22789,(1),null);cljs.core.reset_BANG_.call(null,next_test,testfn);
var ns_22790 = cljs.core.namespace.call(null,name);if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_22790))
{} else
{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_22790,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));
cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_22790);
}
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.assoc,name,(new Date()));
} else
{return env;
}
});})(next_test))
);
setTimeout(((function (next_test){
return (function (){return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,(1));
return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__22795 = test_env;cljs.core.swap_BANG_.call(null,G__22795,((function (G__22795){
return (function (p1__22791_SHARP_){return cljs.core.reduce.call(null,((function (G__22795){
return (function (env,p__22796){var vec__22797 = p__22796;var k = cljs.core.nth.call(null,vec__22797,(0),null);var v = cljs.core.nth.call(null,vec__22797,(1),null);if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357))))
{return env;
} else
{return cljs.core.assoc.call(null,env,k,v);
}
});})(G__22795))
,cljs.core.PersistentArrayMap.EMPTY,p1__22791_SHARP_);
});})(G__22795))
);
return G__22795;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))))))
{cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1050769601));
} else
{cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}
return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),test_name], null)));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__22799){var map__22803 = p__22799;var map__22803__$1 = ((cljs.core.seq_QMARK_.call(null,map__22803))?cljs.core.apply.call(null,cljs.core.hash_map,map__22803):map__22803);var test_ctx = map__22803__$1;var test_name = cljs.core.get.call(null,map__22803__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var async_test_env = cljs.core.get.call(null,map__22803__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
var first_call_QMARK_ = cljs.core.atom.call(null,false);cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__22803,map__22803__$1,test_ctx,test_name,async_test_env){
return (function (env){cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__22803,map__22803__$1,test_ctx,test_name,async_test_env))
);
if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_)))
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),test_name], null),test_ctx));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env)))
{cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else
{cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else
{cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),new cljs.core.Keyword(null,"message","message",-406056002),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}
return async_test_env;
});
var done_STAR___2 = (function (p__22798,error){var map__22802 = p__22798;var map__22802__$1 = ((cljs.core.seq_QMARK_.call(null,map__22802))?cljs.core.apply.call(null,cljs.core.hash_map,map__22802):map__22802);var test_ctx = map__22802__$1;var test_name = cljs.core.get.call(null,map__22802__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));var test_env = cljs.core.get.call(null,map__22802__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null)))))));
}
cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));
return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__22798,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__22798);
case 2:
return done_STAR___2.call(this,p__22798,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){return test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});
var test_function__2 = (function (test_env,v){var entry_point_QMARK___17887__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_22807 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_.call(null,v))
{} else
{throw (new Error(("Assert failed: test-var must be passed the function to be tested (not a symbol naming it)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))));
}
var map__22808_22810 = cljs.core.meta.call(null,v);var map__22808_22811__$1 = ((cljs.core.seq_QMARK_.call(null,map__22808_22810))?cljs.core.apply.call(null,cljs.core.hash_map,map__22808_22810):map__22808_22810);var t_22812 = cljs.core.get.call(null,map__22808_22811__$1,new cljs.core.Keyword(null,"test","test",577538877));var test_name_22813 = cljs.core.get.call(null,map__22808_22811__$1,new cljs.core.Keyword(null,"name","name",1843675177));var async_QMARK__22814 = cljs.core.get.call(null,map__22808_22811__$1,new cljs.core.Keyword(null,"async","async",1050769601));if(cljs.core.truth_(t_22812))
{if(cljs.core.truth_(async_QMARK__22814))
{cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_22813,t_22812);
} else
{try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__3553__auto__ = test_name_22813;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_22813], null));
cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));
try{t_22812.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_22813)));
}catch (e22809){if((e22809 instanceof Error))
{var e_22815 = e22809;cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_22813,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_22815], null));
} else
{throw e22809;

}
}cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_22813], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___17887__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_22807;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){return test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___17887__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_22824 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_22829__$1 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__){
return (function (p1__22816_SHARP_){return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__22816_SHARP_));
});})(_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_22830 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));var each_fixture_fn_22831 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));once_fixture_fn_22830.call(null,((function (once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__){
return (function (){var seq__22825 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_22829__$1));var chunk__22826 = null;var count__22827 = (0);var i__22828 = (0);while(true){
if((i__22828 < count__22827))
{var v = cljs.core._nth.call(null,chunk__22826,i__22828);each_fixture_fn_22831.call(null,((function (seq__22825,chunk__22826,count__22827,i__22828,v,once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__22825,chunk__22826,count__22827,i__22828,v,once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__))
);
{
var G__22832 = seq__22825;
var G__22833 = chunk__22826;
var G__22834 = count__22827;
var G__22835 = (i__22828 + (1));
seq__22825 = G__22832;
chunk__22826 = G__22833;
count__22827 = G__22834;
i__22828 = G__22835;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22825);if(temp__4126__auto__)
{var seq__22825__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22825__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__22825__$1);{
var G__22836 = cljs.core.chunk_rest.call(null,seq__22825__$1);
var G__22837 = c__4309__auto__;
var G__22838 = cljs.core.count.call(null,c__4309__auto__);
var G__22839 = (0);
seq__22825 = G__22836;
chunk__22826 = G__22837;
count__22827 = G__22838;
i__22828 = G__22839;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__22825__$1);each_fixture_fn_22831.call(null,((function (seq__22825,chunk__22826,count__22827,i__22828,v,seq__22825__$1,temp__4126__auto__,once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__){
return (function (){return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__22825,chunk__22826,count__22827,i__22828,v,seq__22825__$1,temp__4126__auto__,once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__))
);
{
var G__22840 = cljs.core.next.call(null,seq__22825__$1);
var G__22841 = null;
var G__22842 = (0);
var G__22843 = (0);
seq__22825 = G__22840;
chunk__22826 = G__22841;
count__22827 = G__22842;
i__22828 = G__22843;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(once_fixture_fn_22830,each_fixture_fn_22831,tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__))
);
cljs.core.reduce.call(null,((function (tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__){
return (function (p1__22817_SHARP_,p2__22818_SHARP_){return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__22817_SHARP_,p2__22818_SHARP_);
});})(tests_22829__$1,_STAR_entry_point_STAR_22824,entry_point_QMARK___17887__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_22829__$1)));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___17887__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_22824;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){return test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___17887__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_22845 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
var temp__4124__auto___22846 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4124__auto___22846))
{var test_hook_22847 = temp__4124__auto___22846;test_hook_22847.call(null,test_env);
} else
{cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___17887__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_22845;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env__$1,cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env__$1))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__22854 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));var test_env = cljs.core.nth.call(null,vec__22854,(0),null);var namespaces__$1 = cljs.core.nthnext.call(null,vec__22854,(1));var entry_point_QMARK___17887__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_22855 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__22856_22860 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));var chunk__22857_22861 = null;var count__22858_22862 = (0);var i__22859_22863 = (0);while(true){
if((i__22859_22863 < count__22858_22862))
{var ns_22864 = cljs.core._nth.call(null,chunk__22857_22861,i__22859_22863);cemerick.cljs.test.test_ns.call(null,test_env,ns_22864);
{
var G__22865 = seq__22856_22860;
var G__22866 = chunk__22857_22861;
var G__22867 = count__22858_22862;
var G__22868 = (i__22859_22863 + (1));
seq__22856_22860 = G__22865;
chunk__22857_22861 = G__22866;
count__22858_22862 = G__22867;
i__22859_22863 = G__22868;
continue;
}
} else
{var temp__4126__auto___22869 = cljs.core.seq.call(null,seq__22856_22860);if(temp__4126__auto___22869)
{var seq__22856_22870__$1 = temp__4126__auto___22869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22856_22870__$1))
{var c__4309__auto___22871 = cljs.core.chunk_first.call(null,seq__22856_22870__$1);{
var G__22872 = cljs.core.chunk_rest.call(null,seq__22856_22870__$1);
var G__22873 = c__4309__auto___22871;
var G__22874 = cljs.core.count.call(null,c__4309__auto___22871);
var G__22875 = (0);
seq__22856_22860 = G__22872;
chunk__22857_22861 = G__22873;
count__22858_22862 = G__22874;
i__22859_22863 = G__22875;
continue;
}
} else
{var ns_22876 = cljs.core.first.call(null,seq__22856_22870__$1);cemerick.cljs.test.test_ns.call(null,test_env,ns_22876);
{
var G__22877 = cljs.core.next.call(null,seq__22856_22870__$1);
var G__22878 = null;
var G__22879 = (0);
var G__22880 = (0);
seq__22856_22860 = G__22877;
chunk__22857_22861 = G__22878;
count__22858_22862 = G__22879;
i__22859_22863 = G__22880;
continue;
}
}
} else
{}
}
break;
}
cemerick.cljs.test.on_testing_complete.call(null,test_env,cemerick.cljs.test.test_summary);
cemerick.cljs.test.test_summary.call(null,test_env);
return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___17887__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_22855;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__22881){
var namespaces = cljs.core.seq(arglist__22881);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__22882_SHARP_){return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__22882_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__22884 = cemerick.cljs.test.maybe_deref.call(null,test_env);var map__22884__$1 = ((cljs.core.seq_QMARK_.call(null,map__22884))?cljs.core.apply.call(null,cljs.core.hash_map,map__22884):map__22884);var async = cljs.core.get.call(null,map__22884__$1,new cljs.core.Keyword(null,"async","async",1050769601));var error = cljs.core.get.call(null,map__22884__$1,new cljs.core.Keyword(null,"error","error",-978969032));var fail = cljs.core.get.call(null,map__22884__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));var and__3541__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);if(cljs.core.truth_(and__3541__auto__))
{var and__3541__auto____$1 = ((function (){var or__3553__auto__ = fail;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return (0);
}
})() === (0));if(and__3541__auto____$1)
{var and__3541__auto____$2 = ((function (){var or__3553__auto__ = error;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return (0);
}
})() === (0));if(and__3541__auto____$2)
{var or__3553__auto__ = (async == null);if(or__3553__auto__)
{return or__3553__auto__;
} else
{return successful_QMARK_.call(null,async);
}
} else
{return and__3541__auto____$2;
}
} else
{return and__3541__auto____$1;
}
} else
{return and__3541__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);

//# sourceMappingURL=test.js.map