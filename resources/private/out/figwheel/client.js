// Compiled by ClojureScript 0.0-2311
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__19371,args){var map__19373 = p__19371;var map__19373__$1 = ((cljs.core.seq_QMARK_.call(null,map__19373))?cljs.core.apply.call(null,cljs.core.hash_map,map__19373):map__19373);var debug = cljs.core.get.call(null,map__19373__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__19371,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__19371,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__19374){
var p__19371 = cljs.core.first(arglist__19374);
var args = cljs.core.rest(arglist__19374);
return log__delegate(p__19371,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__19375){var map__19377 = p__19375;var map__19377__$1 = ((cljs.core.seq_QMARK_.call(null,map__19377))?cljs.core.apply.call(null,cljs.core.hash_map,map__19377):map__19377);var websocket_url = cljs.core.get.call(null,map__19377__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__19378,callback){var map__19380 = p__19378;var map__19380__$1 = ((cljs.core.seq_QMARK_.call(null,map__19380))?cljs.core.apply.call(null,cljs.core.hash_map,map__19380):map__19380);var msg = map__19380__$1;var dependency_file = cljs.core.get.call(null,map__19380__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__19380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__19380__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3553__auto__ = dependency_file;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__19380,map__19380__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__19380,map__19380__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__19381,p__19382){var map__19385 = p__19381;var map__19385__$1 = ((cljs.core.seq_QMARK_.call(null,map__19385))?cljs.core.apply.call(null,cljs.core.hash_map,map__19385):map__19385);var opts = map__19385__$1;var url_rewriter = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__19386 = p__19382;var map__19386__$1 = ((cljs.core.seq_QMARK_.call(null,map__19386))?cljs.core.apply.call(null,cljs.core.hash_map,map__19386):map__19386);var d = map__19386__$1;var file = cljs.core.get.call(null,map__19386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__19387,p__19388){var map__19430 = p__19387;var map__19430__$1 = ((cljs.core.seq_QMARK_.call(null,map__19430))?cljs.core.apply.call(null,cljs.core.hash_map,map__19430):map__19430);var opts = map__19430__$1;var on_jsload = cljs.core.get.call(null,map__19430__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__19430__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__19431 = p__19388;var map__19431__$1 = ((cljs.core.seq_QMARK_.call(null,map__19431))?cljs.core.apply.call(null,cljs.core.hash_map,map__19431):map__19431);var files = cljs.core.get.call(null,map__19431__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files){
return (function (state_19454){var state_val_19455 = (state_19454[(1)]);if((state_val_19455 === (6)))
{var inst_19436 = (state_19454[(7)]);var inst_19445 = (state_19454[(2)]);var inst_19446 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19447 = [inst_19436];var inst_19448 = (new cljs.core.PersistentVector(null,1,(5),inst_19446,inst_19447,null));var inst_19449 = cljs.core.apply.call(null,on_jsload,inst_19448);var state_19454__$1 = (function (){var statearr_19456 = state_19454;(statearr_19456[(8)] = inst_19445);
return statearr_19456;
})();var statearr_19457_19471 = state_19454__$1;(statearr_19457_19471[(2)] = inst_19449);
(statearr_19457_19471[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19455 === (5)))
{var inst_19452 = (state_19454[(2)]);var state_19454__$1 = state_19454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19454__$1,inst_19452);
} else
{if((state_val_19455 === (4)))
{var state_19454__$1 = state_19454;var statearr_19458_19472 = state_19454__$1;(statearr_19458_19472[(2)] = null);
(statearr_19458_19472[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19455 === (3)))
{var inst_19436 = (state_19454[(7)]);var inst_19439 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_19440 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19436);var inst_19441 = cljs.core.prn_str.call(null,inst_19440);var inst_19442 = console.log(inst_19441);var inst_19443 = cljs.core.async.timeout.call(null,(10));var state_19454__$1 = (function (){var statearr_19459 = state_19454;(statearr_19459[(9)] = inst_19442);
(statearr_19459[(10)] = inst_19439);
return statearr_19459;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19454__$1,(6),inst_19443);
} else
{if((state_val_19455 === (2)))
{var inst_19436 = (state_19454[(7)]);var inst_19436__$1 = (state_19454[(2)]);var inst_19437 = cljs.core.not_empty.call(null,inst_19436__$1);var state_19454__$1 = (function (){var statearr_19460 = state_19454;(statearr_19460[(7)] = inst_19436__$1);
return statearr_19460;
})();if(cljs.core.truth_(inst_19437))
{var statearr_19461_19473 = state_19454__$1;(statearr_19461_19473[(1)] = (3));
} else
{var statearr_19462_19474 = state_19454__$1;(statearr_19462_19474[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19455 === (1)))
{var inst_19432 = before_jsload.call(null,files);var inst_19433 = figwheel.client.add_request_urls.call(null,opts,files);var inst_19434 = figwheel.client.load_all_js_files.call(null,inst_19433);var state_19454__$1 = (function (){var statearr_19463 = state_19454;(statearr_19463[(11)] = inst_19432);
return statearr_19463;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19454__$1,(2),inst_19434);
} else
{return null;
}
}
}
}
}
}
});})(c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files))
;return ((function (switch__6887__auto__,c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_19467 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19467[(0)] = state_machine__6888__auto__);
(statearr_19467[(1)] = (1));
return statearr_19467;
});
var state_machine__6888__auto____1 = (function (state_19454){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_19454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e19468){if((e19468 instanceof Object))
{var ex__6891__auto__ = e19468;var statearr_19469_19475 = state_19454;(statearr_19469_19475[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19468;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19476 = state_19454;
state_19454 = G__19476;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_19454){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_19454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files))
})();var state__6954__auto__ = (function (){var statearr_19470 = f__6953__auto__.call(null);(statearr_19470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_19470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__,map__19430,map__19430__$1,opts,on_jsload,before_jsload,map__19431,map__19431__$1,files))
);
return c__6952__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__19477,link_href){var map__19479 = p__19477;var map__19479__$1 = ((cljs.core.seq_QMARK_.call(null,map__19479))?cljs.core.apply.call(null,cljs.core.hash_map,map__19479):map__19479);var request_url = cljs.core.get.call(null,map__19479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__,parent){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__,parent){
return (function (state_19500){var state_val_19501 = (state_19500[(1)]);if((state_val_19501 === (2)))
{var inst_19497 = (state_19500[(2)]);var inst_19498 = parent.removeChild(orig_link);var state_19500__$1 = (function (){var statearr_19502 = state_19500;(statearr_19502[(7)] = inst_19497);
return statearr_19502;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19500__$1,inst_19498);
} else
{if((state_val_19501 === (1)))
{var inst_19495 = cljs.core.async.timeout.call(null,(200));var state_19500__$1 = state_19500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19500__$1,(2),inst_19495);
} else
{return null;
}
}
});})(c__6952__auto__,parent))
;return ((function (switch__6887__auto__,c__6952__auto__,parent){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_19506 = [null,null,null,null,null,null,null,null];(statearr_19506[(0)] = state_machine__6888__auto__);
(statearr_19506[(1)] = (1));
return statearr_19506;
});
var state_machine__6888__auto____1 = (function (state_19500){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_19500);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e19507){if((e19507 instanceof Object))
{var ex__6891__auto__ = e19507;var statearr_19508_19510 = state_19500;(statearr_19508_19510[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19511 = state_19500;
state_19500 = G__19511;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_19500){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_19500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__,parent))
})();var state__6954__auto__ = (function (){var statearr_19509 = f__6953__auto__.call(null);(statearr_19509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_19509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__,parent))
);
return c__6952__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__19512){var map__19514 = p__19512;var map__19514__$1 = ((cljs.core.seq_QMARK_.call(null,map__19514))?cljs.core.apply.call(null,cljs.core.hash_map,map__19514):map__19514);var f_data = map__19514__$1;var request_url = cljs.core.get.call(null,map__19514__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__19514__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__19515,files_msg){var map__19537 = p__19515;var map__19537__$1 = ((cljs.core.seq_QMARK_.call(null,map__19537))?cljs.core.apply.call(null,cljs.core.hash_map,map__19537):map__19537);var opts = map__19537__$1;var on_cssload = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__19538_19558 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__19539_19559 = null;var count__19540_19560 = (0);var i__19541_19561 = (0);while(true){
if((i__19541_19561 < count__19540_19560))
{var f_19562 = cljs.core._nth.call(null,chunk__19539_19559,i__19541_19561);figwheel.client.reload_css_file.call(null,f_19562);
{
var G__19563 = seq__19538_19558;
var G__19564 = chunk__19539_19559;
var G__19565 = count__19540_19560;
var G__19566 = (i__19541_19561 + (1));
seq__19538_19558 = G__19563;
chunk__19539_19559 = G__19564;
count__19540_19560 = G__19565;
i__19541_19561 = G__19566;
continue;
}
} else
{var temp__4126__auto___19567 = cljs.core.seq.call(null,seq__19538_19558);if(temp__4126__auto___19567)
{var seq__19538_19568__$1 = temp__4126__auto___19567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19538_19568__$1))
{var c__4309__auto___19569 = cljs.core.chunk_first.call(null,seq__19538_19568__$1);{
var G__19570 = cljs.core.chunk_rest.call(null,seq__19538_19568__$1);
var G__19571 = c__4309__auto___19569;
var G__19572 = cljs.core.count.call(null,c__4309__auto___19569);
var G__19573 = (0);
seq__19538_19558 = G__19570;
chunk__19539_19559 = G__19571;
count__19540_19560 = G__19572;
i__19541_19561 = G__19573;
continue;
}
} else
{var f_19574 = cljs.core.first.call(null,seq__19538_19568__$1);figwheel.client.reload_css_file.call(null,f_19574);
{
var G__19575 = cljs.core.next.call(null,seq__19538_19568__$1);
var G__19576 = null;
var G__19577 = (0);
var G__19578 = (0);
seq__19538_19558 = G__19575;
chunk__19539_19559 = G__19576;
count__19540_19560 = G__19577;
i__19541_19561 = G__19578;
continue;
}
}
} else
{}
}
break;
}
var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload){
return (function (state_19548){var state_val_19549 = (state_19548[(1)]);if((state_val_19549 === (2)))
{var inst_19544 = (state_19548[(2)]);var inst_19545 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_19546 = on_cssload.call(null,inst_19545);var state_19548__$1 = (function (){var statearr_19550 = state_19548;(statearr_19550[(7)] = inst_19544);
return statearr_19550;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19548__$1,inst_19546);
} else
{if((state_val_19549 === (1)))
{var inst_19542 = cljs.core.async.timeout.call(null,(100));var state_19548__$1 = state_19548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19548__$1,(2),inst_19542);
} else
{return null;
}
}
});})(c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload))
;return ((function (switch__6887__auto__,c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_19554 = [null,null,null,null,null,null,null,null];(statearr_19554[(0)] = state_machine__6888__auto__);
(statearr_19554[(1)] = (1));
return statearr_19554;
});
var state_machine__6888__auto____1 = (function (state_19548){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_19548);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e19555){if((e19555 instanceof Object))
{var ex__6891__auto__ = e19555;var statearr_19556_19579 = state_19548;(statearr_19556_19579[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19580 = state_19548;
state_19548 = G__19580;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_19548){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_19548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload))
})();var state__6954__auto__ = (function (){var statearr_19557 = f__6953__auto__.call(null);(statearr_19557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_19557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__,map__19537,map__19537__$1,opts,on_cssload))
);
return c__6952__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__19581){var map__19586 = p__19581;var map__19586__$1 = ((cljs.core.seq_QMARK_.call(null,map__19586))?cljs.core.apply.call(null,cljs.core.hash_map,map__19586):map__19586);var opts = map__19586__$1;var on_compile_fail = cljs.core.get.call(null,map__19586__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__19586__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__19586__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__19586__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__19587 = cljs.core._EQ_;var expr__19588 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__19587.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__19588)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19587.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__19588)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__19587.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19588)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__19586,map__19586__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj19593 = {"detail":url};return obj19593;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__19594){var map__19596 = p__19594;var map__19596__$1 = ((cljs.core.seq_QMARK_.call(null,map__19596))?cljs.core.apply.call(null,cljs.core.hash_map,map__19596):map__19596);var class$ = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__19596__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__19597){var map__19603 = p__19597;var map__19603__$1 = ((cljs.core.seq_QMARK_.call(null,map__19603))?cljs.core.apply.call(null,cljs.core.hash_map,map__19603):map__19603);var ed = map__19603__$1;var exception_data = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__19603__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__19604_19608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__19605_19609 = null;var count__19606_19610 = (0);var i__19607_19611 = (0);while(true){
if((i__19607_19611 < count__19606_19610))
{var msg_19612 = cljs.core._nth.call(null,chunk__19605_19609,i__19607_19611);console.log(msg_19612);
{
var G__19613 = seq__19604_19608;
var G__19614 = chunk__19605_19609;
var G__19615 = count__19606_19610;
var G__19616 = (i__19607_19611 + (1));
seq__19604_19608 = G__19613;
chunk__19605_19609 = G__19614;
count__19606_19610 = G__19615;
i__19607_19611 = G__19616;
continue;
}
} else
{var temp__4126__auto___19617 = cljs.core.seq.call(null,seq__19604_19608);if(temp__4126__auto___19617)
{var seq__19604_19618__$1 = temp__4126__auto___19617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19604_19618__$1))
{var c__4309__auto___19619 = cljs.core.chunk_first.call(null,seq__19604_19618__$1);{
var G__19620 = cljs.core.chunk_rest.call(null,seq__19604_19618__$1);
var G__19621 = c__4309__auto___19619;
var G__19622 = cljs.core.count.call(null,c__4309__auto___19619);
var G__19623 = (0);
seq__19604_19608 = G__19620;
chunk__19605_19609 = G__19621;
count__19606_19610 = G__19622;
i__19607_19611 = G__19623;
continue;
}
} else
{var msg_19624 = cljs.core.first.call(null,seq__19604_19618__$1);console.log(msg_19624);
{
var G__19625 = cljs.core.next.call(null,seq__19604_19618__$1);
var G__19626 = null;
var G__19627 = (0);
var G__19628 = (0);
seq__19604_19608 = G__19625;
chunk__19605_19609 = G__19626;
count__19606_19610 = G__19627;
i__19607_19611 = G__19628;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3553__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__19629){var map__19631 = p__19629;var map__19631__$1 = ((cljs.core.seq_QMARK_.call(null,map__19631))?cljs.core.apply.call(null,cljs.core.hash_map,map__19631):map__19631);var opts = map__19631__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__19629 = null;if (arguments.length > 0) {
  p__19629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__19629);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__19632){
var p__19629 = cljs.core.seq(arglist__19632);
return watch_and_reload__delegate(p__19629);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map