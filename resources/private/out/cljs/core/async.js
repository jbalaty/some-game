// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19761 = (function (f,fn_handler,meta19762){
this.f = f;
this.fn_handler = fn_handler;
this.meta19762 = meta19762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19761.cljs$lang$type = true;
cljs.core.async.t19761.cljs$lang$ctorStr = "cljs.core.async/t19761";
cljs.core.async.t19761.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19761");
});
cljs.core.async.t19761.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19763){var self__ = this;
var _19763__$1 = this;return self__.meta19762;
});
cljs.core.async.t19761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19763,meta19762__$1){var self__ = this;
var _19763__$1 = this;return (new cljs.core.async.t19761(self__.f,self__.fn_handler,meta19762__$1));
});
cljs.core.async.__GT_t19761 = (function __GT_t19761(f__$1,fn_handler__$1,meta19762){return (new cljs.core.async.t19761(f__$1,fn_handler__$1,meta19762));
});
}
return (new cljs.core.async.t19761(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19765 = buff;if(G__19765)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__19765.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19765.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19765);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19765);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_19766 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19766);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19766,ret){
return (function (){return fn1.call(null,val_19766);
});})(val_19766,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___19767 = n;var x_19768 = (0);while(true){
if((x_19768 < n__4409__auto___19767))
{(a[x_19768] = (0));
{
var G__19769 = (x_19768 + (1));
x_19768 = G__19769;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__19770 = (i + (1));
i = G__19770;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19774 = (function (flag,alt_flag,meta19775){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19775 = meta19775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19774.cljs$lang$type = true;
cljs.core.async.t19774.cljs$lang$ctorStr = "cljs.core.async/t19774";
cljs.core.async.t19774.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19774");
});})(flag))
;
cljs.core.async.t19774.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19776){var self__ = this;
var _19776__$1 = this;return self__.meta19775;
});})(flag))
;
cljs.core.async.t19774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19776,meta19775__$1){var self__ = this;
var _19776__$1 = this;return (new cljs.core.async.t19774(self__.flag,self__.alt_flag,meta19775__$1));
});})(flag))
;
cljs.core.async.__GT_t19774 = ((function (flag){
return (function __GT_t19774(flag__$1,alt_flag__$1,meta19775){return (new cljs.core.async.t19774(flag__$1,alt_flag__$1,meta19775));
});})(flag))
;
}
return (new cljs.core.async.t19774(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19780 = (function (cb,flag,alt_handler,meta19781){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19781 = meta19781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19780.cljs$lang$type = true;
cljs.core.async.t19780.cljs$lang$ctorStr = "cljs.core.async/t19780";
cljs.core.async.t19780.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19780");
});
cljs.core.async.t19780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19782){var self__ = this;
var _19782__$1 = this;return self__.meta19781;
});
cljs.core.async.t19780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19782,meta19781__$1){var self__ = this;
var _19782__$1 = this;return (new cljs.core.async.t19780(self__.cb,self__.flag,self__.alt_handler,meta19781__$1));
});
cljs.core.async.__GT_t19780 = (function __GT_t19780(cb__$1,flag__$1,alt_handler__$1,meta19781){return (new cljs.core.async.t19780(cb__$1,flag__$1,alt_handler__$1,meta19781));
});
}
return (new cljs.core.async.t19780(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19783_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19784_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__19785 = (i + (1));
i = G__19785;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19786){var map__19788 = p__19786;var map__19788__$1 = ((cljs.core.seq_QMARK_.call(null,map__19788))?cljs.core.apply.call(null,cljs.core.hash_map,map__19788):map__19788);var opts = map__19788__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__19786 = null;if (arguments.length > 1) {
  p__19786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19786);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19789){
var ports = cljs.core.first(arglist__19789);
var p__19786 = cljs.core.rest(arglist__19789);
return alts_BANG___delegate(ports,p__19786);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19797 = (function (ch,f,map_LT_,meta19798){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19798 = meta19798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19797.cljs$lang$type = true;
cljs.core.async.t19797.cljs$lang$ctorStr = "cljs.core.async/t19797";
cljs.core.async.t19797.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19797");
});
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19800 = (function (fn1,_,meta19798,ch,f,map_LT_,meta19801){
this.fn1 = fn1;
this._ = _;
this.meta19798 = meta19798;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19801 = meta19801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19800.cljs$lang$type = true;
cljs.core.async.t19800.cljs$lang$ctorStr = "cljs.core.async/t19800";
cljs.core.async.t19800.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19800");
});})(___$1))
;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19790_SHARP_){return f1.call(null,(((p1__19790_SHARP_ == null))?null:self__.f.call(null,p1__19790_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19802){var self__ = this;
var _19802__$1 = this;return self__.meta19801;
});})(___$1))
;
cljs.core.async.t19800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19802,meta19801__$1){var self__ = this;
var _19802__$1 = this;return (new cljs.core.async.t19800(self__.fn1,self__._,self__.meta19798,self__.ch,self__.f,self__.map_LT_,meta19801__$1));
});})(___$1))
;
cljs.core.async.__GT_t19800 = ((function (___$1){
return (function __GT_t19800(fn1__$1,___$2,meta19798__$1,ch__$2,f__$2,map_LT___$2,meta19801){return (new cljs.core.async.t19800(fn1__$1,___$2,meta19798__$1,ch__$2,f__$2,map_LT___$2,meta19801));
});})(___$1))
;
}
return (new cljs.core.async.t19800(fn1,___$1,self__.meta19798,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19799){var self__ = this;
var _19799__$1 = this;return self__.meta19798;
});
cljs.core.async.t19797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19799,meta19798__$1){var self__ = this;
var _19799__$1 = this;return (new cljs.core.async.t19797(self__.ch,self__.f,self__.map_LT_,meta19798__$1));
});
cljs.core.async.__GT_t19797 = (function __GT_t19797(ch__$1,f__$1,map_LT___$1,meta19798){return (new cljs.core.async.t19797(ch__$1,f__$1,map_LT___$1,meta19798));
});
}
return (new cljs.core.async.t19797(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19806 = (function (ch,f,map_GT_,meta19807){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19807 = meta19807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19806.cljs$lang$type = true;
cljs.core.async.t19806.cljs$lang$ctorStr = "cljs.core.async/t19806";
cljs.core.async.t19806.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19806");
});
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19808){var self__ = this;
var _19808__$1 = this;return self__.meta19807;
});
cljs.core.async.t19806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19808,meta19807__$1){var self__ = this;
var _19808__$1 = this;return (new cljs.core.async.t19806(self__.ch,self__.f,self__.map_GT_,meta19807__$1));
});
cljs.core.async.__GT_t19806 = (function __GT_t19806(ch__$1,f__$1,map_GT___$1,meta19807){return (new cljs.core.async.t19806(ch__$1,f__$1,map_GT___$1,meta19807));
});
}
return (new cljs.core.async.t19806(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19812 = (function (ch,p,filter_GT_,meta19813){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19813 = meta19813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19812.cljs$lang$type = true;
cljs.core.async.t19812.cljs$lang$ctorStr = "cljs.core.async/t19812";
cljs.core.async.t19812.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t19812");
});
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19814){var self__ = this;
var _19814__$1 = this;return self__.meta19813;
});
cljs.core.async.t19812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19814,meta19813__$1){var self__ = this;
var _19814__$1 = this;return (new cljs.core.async.t19812(self__.ch,self__.p,self__.filter_GT_,meta19813__$1));
});
cljs.core.async.__GT_t19812 = (function __GT_t19812(ch__$1,p__$1,filter_GT___$1,meta19813){return (new cljs.core.async.t19812(ch__$1,p__$1,filter_GT___$1,meta19813));
});
}
return (new cljs.core.async.t19812(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___19897 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___19897,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___19897,out){
return (function (state_19876){var state_val_19877 = (state_19876[(1)]);if((state_val_19877 === (7)))
{var inst_19872 = (state_19876[(2)]);var state_19876__$1 = state_19876;var statearr_19878_19898 = state_19876__$1;(statearr_19878_19898[(2)] = inst_19872);
(statearr_19878_19898[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (1)))
{var state_19876__$1 = state_19876;var statearr_19879_19899 = state_19876__$1;(statearr_19879_19899[(2)] = null);
(statearr_19879_19899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (4)))
{var inst_19858 = (state_19876[(7)]);var inst_19858__$1 = (state_19876[(2)]);var inst_19859 = (inst_19858__$1 == null);var state_19876__$1 = (function (){var statearr_19880 = state_19876;(statearr_19880[(7)] = inst_19858__$1);
return statearr_19880;
})();if(cljs.core.truth_(inst_19859))
{var statearr_19881_19900 = state_19876__$1;(statearr_19881_19900[(1)] = (5));
} else
{var statearr_19882_19901 = state_19876__$1;(statearr_19882_19901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (6)))
{var inst_19858 = (state_19876[(7)]);var inst_19863 = p.call(null,inst_19858);var state_19876__$1 = state_19876;if(cljs.core.truth_(inst_19863))
{var statearr_19883_19902 = state_19876__$1;(statearr_19883_19902[(1)] = (8));
} else
{var statearr_19884_19903 = state_19876__$1;(statearr_19884_19903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (3)))
{var inst_19874 = (state_19876[(2)]);var state_19876__$1 = state_19876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19876__$1,inst_19874);
} else
{if((state_val_19877 === (2)))
{var state_19876__$1 = state_19876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19876__$1,(4),ch);
} else
{if((state_val_19877 === (11)))
{var inst_19866 = (state_19876[(2)]);var state_19876__$1 = state_19876;var statearr_19885_19904 = state_19876__$1;(statearr_19885_19904[(2)] = inst_19866);
(statearr_19885_19904[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (9)))
{var state_19876__$1 = state_19876;var statearr_19886_19905 = state_19876__$1;(statearr_19886_19905[(2)] = null);
(statearr_19886_19905[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (5)))
{var inst_19861 = cljs.core.async.close_BANG_.call(null,out);var state_19876__$1 = state_19876;var statearr_19887_19906 = state_19876__$1;(statearr_19887_19906[(2)] = inst_19861);
(statearr_19887_19906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (10)))
{var inst_19869 = (state_19876[(2)]);var state_19876__$1 = (function (){var statearr_19888 = state_19876;(statearr_19888[(8)] = inst_19869);
return statearr_19888;
})();var statearr_19889_19907 = state_19876__$1;(statearr_19889_19907[(2)] = null);
(statearr_19889_19907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19877 === (8)))
{var inst_19858 = (state_19876[(7)]);var state_19876__$1 = state_19876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19876__$1,(11),out,inst_19858);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___19897,out))
;return ((function (switch__6887__auto__,c__6952__auto___19897,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_19893 = [null,null,null,null,null,null,null,null,null];(statearr_19893[(0)] = state_machine__6888__auto__);
(statearr_19893[(1)] = (1));
return statearr_19893;
});
var state_machine__6888__auto____1 = (function (state_19876){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_19876);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e19894){if((e19894 instanceof Object))
{var ex__6891__auto__ = e19894;var statearr_19895_19908 = state_19876;(statearr_19895_19908[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19909 = state_19876;
state_19876 = G__19909;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_19876){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_19876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___19897,out))
})();var state__6954__auto__ = (function (){var statearr_19896 = f__6953__auto__.call(null);(statearr_19896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___19897);
return statearr_19896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___19897,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__){
return (function (state_20075){var state_val_20076 = (state_20075[(1)]);if((state_val_20076 === (7)))
{var inst_20071 = (state_20075[(2)]);var state_20075__$1 = state_20075;var statearr_20077_20118 = state_20075__$1;(statearr_20077_20118[(2)] = inst_20071);
(statearr_20077_20118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (20)))
{var inst_20041 = (state_20075[(7)]);var inst_20052 = (state_20075[(2)]);var inst_20053 = cljs.core.next.call(null,inst_20041);var inst_20027 = inst_20053;var inst_20028 = null;var inst_20029 = (0);var inst_20030 = (0);var state_20075__$1 = (function (){var statearr_20078 = state_20075;(statearr_20078[(8)] = inst_20028);
(statearr_20078[(9)] = inst_20029);
(statearr_20078[(10)] = inst_20030);
(statearr_20078[(11)] = inst_20052);
(statearr_20078[(12)] = inst_20027);
return statearr_20078;
})();var statearr_20079_20119 = state_20075__$1;(statearr_20079_20119[(2)] = null);
(statearr_20079_20119[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (1)))
{var state_20075__$1 = state_20075;var statearr_20080_20120 = state_20075__$1;(statearr_20080_20120[(2)] = null);
(statearr_20080_20120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (4)))
{var inst_20016 = (state_20075[(13)]);var inst_20016__$1 = (state_20075[(2)]);var inst_20017 = (inst_20016__$1 == null);var state_20075__$1 = (function (){var statearr_20081 = state_20075;(statearr_20081[(13)] = inst_20016__$1);
return statearr_20081;
})();if(cljs.core.truth_(inst_20017))
{var statearr_20082_20121 = state_20075__$1;(statearr_20082_20121[(1)] = (5));
} else
{var statearr_20083_20122 = state_20075__$1;(statearr_20083_20122[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (15)))
{var state_20075__$1 = state_20075;var statearr_20087_20123 = state_20075__$1;(statearr_20087_20123[(2)] = null);
(statearr_20087_20123[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (21)))
{var state_20075__$1 = state_20075;var statearr_20088_20124 = state_20075__$1;(statearr_20088_20124[(2)] = null);
(statearr_20088_20124[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (13)))
{var inst_20028 = (state_20075[(8)]);var inst_20029 = (state_20075[(9)]);var inst_20030 = (state_20075[(10)]);var inst_20027 = (state_20075[(12)]);var inst_20037 = (state_20075[(2)]);var inst_20038 = (inst_20030 + (1));var tmp20084 = inst_20028;var tmp20085 = inst_20029;var tmp20086 = inst_20027;var inst_20027__$1 = tmp20086;var inst_20028__$1 = tmp20084;var inst_20029__$1 = tmp20085;var inst_20030__$1 = inst_20038;var state_20075__$1 = (function (){var statearr_20089 = state_20075;(statearr_20089[(14)] = inst_20037);
(statearr_20089[(8)] = inst_20028__$1);
(statearr_20089[(9)] = inst_20029__$1);
(statearr_20089[(10)] = inst_20030__$1);
(statearr_20089[(12)] = inst_20027__$1);
return statearr_20089;
})();var statearr_20090_20125 = state_20075__$1;(statearr_20090_20125[(2)] = null);
(statearr_20090_20125[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (22)))
{var state_20075__$1 = state_20075;var statearr_20091_20126 = state_20075__$1;(statearr_20091_20126[(2)] = null);
(statearr_20091_20126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (6)))
{var inst_20016 = (state_20075[(13)]);var inst_20025 = f.call(null,inst_20016);var inst_20026 = cljs.core.seq.call(null,inst_20025);var inst_20027 = inst_20026;var inst_20028 = null;var inst_20029 = (0);var inst_20030 = (0);var state_20075__$1 = (function (){var statearr_20092 = state_20075;(statearr_20092[(8)] = inst_20028);
(statearr_20092[(9)] = inst_20029);
(statearr_20092[(10)] = inst_20030);
(statearr_20092[(12)] = inst_20027);
return statearr_20092;
})();var statearr_20093_20127 = state_20075__$1;(statearr_20093_20127[(2)] = null);
(statearr_20093_20127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (17)))
{var inst_20041 = (state_20075[(7)]);var inst_20045 = cljs.core.chunk_first.call(null,inst_20041);var inst_20046 = cljs.core.chunk_rest.call(null,inst_20041);var inst_20047 = cljs.core.count.call(null,inst_20045);var inst_20027 = inst_20046;var inst_20028 = inst_20045;var inst_20029 = inst_20047;var inst_20030 = (0);var state_20075__$1 = (function (){var statearr_20094 = state_20075;(statearr_20094[(8)] = inst_20028);
(statearr_20094[(9)] = inst_20029);
(statearr_20094[(10)] = inst_20030);
(statearr_20094[(12)] = inst_20027);
return statearr_20094;
})();var statearr_20095_20128 = state_20075__$1;(statearr_20095_20128[(2)] = null);
(statearr_20095_20128[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (3)))
{var inst_20073 = (state_20075[(2)]);var state_20075__$1 = state_20075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20075__$1,inst_20073);
} else
{if((state_val_20076 === (12)))
{var inst_20061 = (state_20075[(2)]);var state_20075__$1 = state_20075;var statearr_20096_20129 = state_20075__$1;(statearr_20096_20129[(2)] = inst_20061);
(statearr_20096_20129[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (2)))
{var state_20075__$1 = state_20075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20075__$1,(4),in$);
} else
{if((state_val_20076 === (23)))
{var inst_20069 = (state_20075[(2)]);var state_20075__$1 = state_20075;var statearr_20097_20130 = state_20075__$1;(statearr_20097_20130[(2)] = inst_20069);
(statearr_20097_20130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (19)))
{var inst_20056 = (state_20075[(2)]);var state_20075__$1 = state_20075;var statearr_20098_20131 = state_20075__$1;(statearr_20098_20131[(2)] = inst_20056);
(statearr_20098_20131[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (11)))
{var inst_20041 = (state_20075[(7)]);var inst_20027 = (state_20075[(12)]);var inst_20041__$1 = cljs.core.seq.call(null,inst_20027);var state_20075__$1 = (function (){var statearr_20099 = state_20075;(statearr_20099[(7)] = inst_20041__$1);
return statearr_20099;
})();if(inst_20041__$1)
{var statearr_20100_20132 = state_20075__$1;(statearr_20100_20132[(1)] = (14));
} else
{var statearr_20101_20133 = state_20075__$1;(statearr_20101_20133[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (9)))
{var inst_20063 = (state_20075[(2)]);var inst_20064 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_20075__$1 = (function (){var statearr_20102 = state_20075;(statearr_20102[(15)] = inst_20063);
return statearr_20102;
})();if(cljs.core.truth_(inst_20064))
{var statearr_20103_20134 = state_20075__$1;(statearr_20103_20134[(1)] = (21));
} else
{var statearr_20104_20135 = state_20075__$1;(statearr_20104_20135[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (5)))
{var inst_20019 = cljs.core.async.close_BANG_.call(null,out);var state_20075__$1 = state_20075;var statearr_20105_20136 = state_20075__$1;(statearr_20105_20136[(2)] = inst_20019);
(statearr_20105_20136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (14)))
{var inst_20041 = (state_20075[(7)]);var inst_20043 = cljs.core.chunked_seq_QMARK_.call(null,inst_20041);var state_20075__$1 = state_20075;if(inst_20043)
{var statearr_20106_20137 = state_20075__$1;(statearr_20106_20137[(1)] = (17));
} else
{var statearr_20107_20138 = state_20075__$1;(statearr_20107_20138[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (16)))
{var inst_20059 = (state_20075[(2)]);var state_20075__$1 = state_20075;var statearr_20108_20139 = state_20075__$1;(statearr_20108_20139[(2)] = inst_20059);
(statearr_20108_20139[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20076 === (10)))
{var inst_20028 = (state_20075[(8)]);var inst_20030 = (state_20075[(10)]);var inst_20035 = cljs.core._nth.call(null,inst_20028,inst_20030);var state_20075__$1 = state_20075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20075__$1,(13),out,inst_20035);
} else
{if((state_val_20076 === (18)))
{var inst_20041 = (state_20075[(7)]);var inst_20050 = cljs.core.first.call(null,inst_20041);var state_20075__$1 = state_20075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20075__$1,(20),out,inst_20050);
} else
{if((state_val_20076 === (8)))
{var inst_20029 = (state_20075[(9)]);var inst_20030 = (state_20075[(10)]);var inst_20032 = (inst_20030 < inst_20029);var inst_20033 = inst_20032;var state_20075__$1 = state_20075;if(cljs.core.truth_(inst_20033))
{var statearr_20109_20140 = state_20075__$1;(statearr_20109_20140[(1)] = (10));
} else
{var statearr_20110_20141 = state_20075__$1;(statearr_20110_20141[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto__))
;return ((function (switch__6887__auto__,c__6952__auto__){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_20114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20114[(0)] = state_machine__6888__auto__);
(statearr_20114[(1)] = (1));
return statearr_20114;
});
var state_machine__6888__auto____1 = (function (state_20075){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20075);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e20115){if((e20115 instanceof Object))
{var ex__6891__auto__ = e20115;var statearr_20116_20142 = state_20075;(statearr_20116_20142[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20143 = state_20075;
state_20075 = G__20143;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20075){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__))
})();var state__6954__auto__ = (function (){var statearr_20117 = f__6953__auto__.call(null);(statearr_20117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_20117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__))
);
return c__6952__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6952__auto___20238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___20238){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___20238){
return (function (state_20214){var state_val_20215 = (state_20214[(1)]);if((state_val_20215 === (7)))
{var inst_20210 = (state_20214[(2)]);var state_20214__$1 = state_20214;var statearr_20216_20239 = state_20214__$1;(statearr_20216_20239[(2)] = inst_20210);
(statearr_20216_20239[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (1)))
{var state_20214__$1 = state_20214;var statearr_20217_20240 = state_20214__$1;(statearr_20217_20240[(2)] = null);
(statearr_20217_20240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (4)))
{var inst_20193 = (state_20214[(7)]);var inst_20193__$1 = (state_20214[(2)]);var inst_20194 = (inst_20193__$1 == null);var state_20214__$1 = (function (){var statearr_20218 = state_20214;(statearr_20218[(7)] = inst_20193__$1);
return statearr_20218;
})();if(cljs.core.truth_(inst_20194))
{var statearr_20219_20241 = state_20214__$1;(statearr_20219_20241[(1)] = (5));
} else
{var statearr_20220_20242 = state_20214__$1;(statearr_20220_20242[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (13)))
{var state_20214__$1 = state_20214;var statearr_20221_20243 = state_20214__$1;(statearr_20221_20243[(2)] = null);
(statearr_20221_20243[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (6)))
{var inst_20193 = (state_20214[(7)]);var state_20214__$1 = state_20214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20214__$1,(11),to,inst_20193);
} else
{if((state_val_20215 === (3)))
{var inst_20212 = (state_20214[(2)]);var state_20214__$1 = state_20214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20214__$1,inst_20212);
} else
{if((state_val_20215 === (12)))
{var state_20214__$1 = state_20214;var statearr_20222_20244 = state_20214__$1;(statearr_20222_20244[(2)] = null);
(statearr_20222_20244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (2)))
{var state_20214__$1 = state_20214;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20214__$1,(4),from);
} else
{if((state_val_20215 === (11)))
{var inst_20203 = (state_20214[(2)]);var state_20214__$1 = state_20214;if(cljs.core.truth_(inst_20203))
{var statearr_20223_20245 = state_20214__$1;(statearr_20223_20245[(1)] = (12));
} else
{var statearr_20224_20246 = state_20214__$1;(statearr_20224_20246[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (9)))
{var state_20214__$1 = state_20214;var statearr_20225_20247 = state_20214__$1;(statearr_20225_20247[(2)] = null);
(statearr_20225_20247[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (5)))
{var state_20214__$1 = state_20214;if(cljs.core.truth_(close_QMARK_))
{var statearr_20226_20248 = state_20214__$1;(statearr_20226_20248[(1)] = (8));
} else
{var statearr_20227_20249 = state_20214__$1;(statearr_20227_20249[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (14)))
{var inst_20208 = (state_20214[(2)]);var state_20214__$1 = state_20214;var statearr_20228_20250 = state_20214__$1;(statearr_20228_20250[(2)] = inst_20208);
(statearr_20228_20250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (10)))
{var inst_20200 = (state_20214[(2)]);var state_20214__$1 = state_20214;var statearr_20229_20251 = state_20214__$1;(statearr_20229_20251[(2)] = inst_20200);
(statearr_20229_20251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20215 === (8)))
{var inst_20197 = cljs.core.async.close_BANG_.call(null,to);var state_20214__$1 = state_20214;var statearr_20230_20252 = state_20214__$1;(statearr_20230_20252[(2)] = inst_20197);
(statearr_20230_20252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___20238))
;return ((function (switch__6887__auto__,c__6952__auto___20238){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_20234 = [null,null,null,null,null,null,null,null];(statearr_20234[(0)] = state_machine__6888__auto__);
(statearr_20234[(1)] = (1));
return statearr_20234;
});
var state_machine__6888__auto____1 = (function (state_20214){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20214);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e20235){if((e20235 instanceof Object))
{var ex__6891__auto__ = e20235;var statearr_20236_20253 = state_20214;(statearr_20236_20253[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20214);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20254 = state_20214;
state_20214 = G__20254;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20214){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___20238))
})();var state__6954__auto__ = (function (){var statearr_20237 = f__6953__auto__.call(null);(statearr_20237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___20238);
return statearr_20237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___20238))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6952__auto___20355 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___20355,tc,fc){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___20355,tc,fc){
return (function (state_20330){var state_val_20331 = (state_20330[(1)]);if((state_val_20331 === (7)))
{var inst_20326 = (state_20330[(2)]);var state_20330__$1 = state_20330;var statearr_20332_20356 = state_20330__$1;(statearr_20332_20356[(2)] = inst_20326);
(statearr_20332_20356[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (1)))
{var state_20330__$1 = state_20330;var statearr_20333_20357 = state_20330__$1;(statearr_20333_20357[(2)] = null);
(statearr_20333_20357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (4)))
{var inst_20307 = (state_20330[(7)]);var inst_20307__$1 = (state_20330[(2)]);var inst_20308 = (inst_20307__$1 == null);var state_20330__$1 = (function (){var statearr_20334 = state_20330;(statearr_20334[(7)] = inst_20307__$1);
return statearr_20334;
})();if(cljs.core.truth_(inst_20308))
{var statearr_20335_20358 = state_20330__$1;(statearr_20335_20358[(1)] = (5));
} else
{var statearr_20336_20359 = state_20330__$1;(statearr_20336_20359[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (13)))
{var state_20330__$1 = state_20330;var statearr_20337_20360 = state_20330__$1;(statearr_20337_20360[(2)] = null);
(statearr_20337_20360[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (6)))
{var inst_20307 = (state_20330[(7)]);var inst_20313 = p.call(null,inst_20307);var state_20330__$1 = state_20330;if(cljs.core.truth_(inst_20313))
{var statearr_20338_20361 = state_20330__$1;(statearr_20338_20361[(1)] = (9));
} else
{var statearr_20339_20362 = state_20330__$1;(statearr_20339_20362[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (3)))
{var inst_20328 = (state_20330[(2)]);var state_20330__$1 = state_20330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20330__$1,inst_20328);
} else
{if((state_val_20331 === (12)))
{var state_20330__$1 = state_20330;var statearr_20340_20363 = state_20330__$1;(statearr_20340_20363[(2)] = null);
(statearr_20340_20363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (2)))
{var state_20330__$1 = state_20330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20330__$1,(4),ch);
} else
{if((state_val_20331 === (11)))
{var inst_20307 = (state_20330[(7)]);var inst_20317 = (state_20330[(2)]);var state_20330__$1 = state_20330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20330__$1,(8),inst_20317,inst_20307);
} else
{if((state_val_20331 === (9)))
{var state_20330__$1 = state_20330;var statearr_20341_20364 = state_20330__$1;(statearr_20341_20364[(2)] = tc);
(statearr_20341_20364[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (5)))
{var inst_20310 = cljs.core.async.close_BANG_.call(null,tc);var inst_20311 = cljs.core.async.close_BANG_.call(null,fc);var state_20330__$1 = (function (){var statearr_20342 = state_20330;(statearr_20342[(8)] = inst_20310);
return statearr_20342;
})();var statearr_20343_20365 = state_20330__$1;(statearr_20343_20365[(2)] = inst_20311);
(statearr_20343_20365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (14)))
{var inst_20324 = (state_20330[(2)]);var state_20330__$1 = state_20330;var statearr_20344_20366 = state_20330__$1;(statearr_20344_20366[(2)] = inst_20324);
(statearr_20344_20366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (10)))
{var state_20330__$1 = state_20330;var statearr_20345_20367 = state_20330__$1;(statearr_20345_20367[(2)] = fc);
(statearr_20345_20367[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20331 === (8)))
{var inst_20319 = (state_20330[(2)]);var state_20330__$1 = state_20330;if(cljs.core.truth_(inst_20319))
{var statearr_20346_20368 = state_20330__$1;(statearr_20346_20368[(1)] = (12));
} else
{var statearr_20347_20369 = state_20330__$1;(statearr_20347_20369[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___20355,tc,fc))
;return ((function (switch__6887__auto__,c__6952__auto___20355,tc,fc){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_20351 = [null,null,null,null,null,null,null,null,null];(statearr_20351[(0)] = state_machine__6888__auto__);
(statearr_20351[(1)] = (1));
return statearr_20351;
});
var state_machine__6888__auto____1 = (function (state_20330){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e20352){if((e20352 instanceof Object))
{var ex__6891__auto__ = e20352;var statearr_20353_20370 = state_20330;(statearr_20353_20370[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20371 = state_20330;
state_20330 = G__20371;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20330){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___20355,tc,fc))
})();var state__6954__auto__ = (function (){var statearr_20354 = f__6953__auto__.call(null);(statearr_20354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___20355);
return statearr_20354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___20355,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__){
return (function (state_20418){var state_val_20419 = (state_20418[(1)]);if((state_val_20419 === (7)))
{var inst_20414 = (state_20418[(2)]);var state_20418__$1 = state_20418;var statearr_20420_20436 = state_20418__$1;(statearr_20420_20436[(2)] = inst_20414);
(statearr_20420_20436[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20419 === (6)))
{var inst_20404 = (state_20418[(7)]);var inst_20407 = (state_20418[(8)]);var inst_20411 = f.call(null,inst_20404,inst_20407);var inst_20404__$1 = inst_20411;var state_20418__$1 = (function (){var statearr_20421 = state_20418;(statearr_20421[(7)] = inst_20404__$1);
return statearr_20421;
})();var statearr_20422_20437 = state_20418__$1;(statearr_20422_20437[(2)] = null);
(statearr_20422_20437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20419 === (5)))
{var inst_20404 = (state_20418[(7)]);var state_20418__$1 = state_20418;var statearr_20423_20438 = state_20418__$1;(statearr_20423_20438[(2)] = inst_20404);
(statearr_20423_20438[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20419 === (4)))
{var inst_20407 = (state_20418[(8)]);var inst_20407__$1 = (state_20418[(2)]);var inst_20408 = (inst_20407__$1 == null);var state_20418__$1 = (function (){var statearr_20424 = state_20418;(statearr_20424[(8)] = inst_20407__$1);
return statearr_20424;
})();if(cljs.core.truth_(inst_20408))
{var statearr_20425_20439 = state_20418__$1;(statearr_20425_20439[(1)] = (5));
} else
{var statearr_20426_20440 = state_20418__$1;(statearr_20426_20440[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20419 === (3)))
{var inst_20416 = (state_20418[(2)]);var state_20418__$1 = state_20418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20418__$1,inst_20416);
} else
{if((state_val_20419 === (2)))
{var state_20418__$1 = state_20418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20418__$1,(4),ch);
} else
{if((state_val_20419 === (1)))
{var inst_20404 = init;var state_20418__$1 = (function (){var statearr_20427 = state_20418;(statearr_20427[(7)] = inst_20404);
return statearr_20427;
})();var statearr_20428_20441 = state_20418__$1;(statearr_20428_20441[(2)] = null);
(statearr_20428_20441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6952__auto__))
;return ((function (switch__6887__auto__,c__6952__auto__){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_20432 = [null,null,null,null,null,null,null,null,null];(statearr_20432[(0)] = state_machine__6888__auto__);
(statearr_20432[(1)] = (1));
return statearr_20432;
});
var state_machine__6888__auto____1 = (function (state_20418){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e20433){if((e20433 instanceof Object))
{var ex__6891__auto__ = e20433;var statearr_20434_20442 = state_20418;(statearr_20434_20442[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20443 = state_20418;
state_20418 = G__20443;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20418){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__))
})();var state__6954__auto__ = (function (){var statearr_20435 = f__6953__auto__.call(null);(statearr_20435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_20435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__))
);
return c__6952__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6952__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto__){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto__){
return (function (state_20517){var state_val_20518 = (state_20517[(1)]);if((state_val_20518 === (7)))
{var inst_20499 = (state_20517[(2)]);var state_20517__$1 = state_20517;var statearr_20519_20542 = state_20517__$1;(statearr_20519_20542[(2)] = inst_20499);
(statearr_20519_20542[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (1)))
{var inst_20493 = cljs.core.seq.call(null,coll);var inst_20494 = inst_20493;var state_20517__$1 = (function (){var statearr_20520 = state_20517;(statearr_20520[(7)] = inst_20494);
return statearr_20520;
})();var statearr_20521_20543 = state_20517__$1;(statearr_20521_20543[(2)] = null);
(statearr_20521_20543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (4)))
{var inst_20494 = (state_20517[(7)]);var inst_20497 = cljs.core.first.call(null,inst_20494);var state_20517__$1 = state_20517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20517__$1,(7),ch,inst_20497);
} else
{if((state_val_20518 === (13)))
{var inst_20511 = (state_20517[(2)]);var state_20517__$1 = state_20517;var statearr_20522_20544 = state_20517__$1;(statearr_20522_20544[(2)] = inst_20511);
(statearr_20522_20544[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (6)))
{var inst_20502 = (state_20517[(2)]);var state_20517__$1 = state_20517;if(cljs.core.truth_(inst_20502))
{var statearr_20523_20545 = state_20517__$1;(statearr_20523_20545[(1)] = (8));
} else
{var statearr_20524_20546 = state_20517__$1;(statearr_20524_20546[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (3)))
{var inst_20515 = (state_20517[(2)]);var state_20517__$1 = state_20517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20517__$1,inst_20515);
} else
{if((state_val_20518 === (12)))
{var state_20517__$1 = state_20517;var statearr_20525_20547 = state_20517__$1;(statearr_20525_20547[(2)] = null);
(statearr_20525_20547[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (2)))
{var inst_20494 = (state_20517[(7)]);var state_20517__$1 = state_20517;if(cljs.core.truth_(inst_20494))
{var statearr_20526_20548 = state_20517__$1;(statearr_20526_20548[(1)] = (4));
} else
{var statearr_20527_20549 = state_20517__$1;(statearr_20527_20549[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (11)))
{var inst_20508 = cljs.core.async.close_BANG_.call(null,ch);var state_20517__$1 = state_20517;var statearr_20528_20550 = state_20517__$1;(statearr_20528_20550[(2)] = inst_20508);
(statearr_20528_20550[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (9)))
{var state_20517__$1 = state_20517;if(cljs.core.truth_(close_QMARK_))
{var statearr_20529_20551 = state_20517__$1;(statearr_20529_20551[(1)] = (11));
} else
{var statearr_20530_20552 = state_20517__$1;(statearr_20530_20552[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (5)))
{var inst_20494 = (state_20517[(7)]);var state_20517__$1 = state_20517;var statearr_20531_20553 = state_20517__$1;(statearr_20531_20553[(2)] = inst_20494);
(statearr_20531_20553[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (10)))
{var inst_20513 = (state_20517[(2)]);var state_20517__$1 = state_20517;var statearr_20532_20554 = state_20517__$1;(statearr_20532_20554[(2)] = inst_20513);
(statearr_20532_20554[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20518 === (8)))
{var inst_20494 = (state_20517[(7)]);var inst_20504 = cljs.core.next.call(null,inst_20494);var inst_20494__$1 = inst_20504;var state_20517__$1 = (function (){var statearr_20533 = state_20517;(statearr_20533[(7)] = inst_20494__$1);
return statearr_20533;
})();var statearr_20534_20555 = state_20517__$1;(statearr_20534_20555[(2)] = null);
(statearr_20534_20555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto__))
;return ((function (switch__6887__auto__,c__6952__auto__){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_20538 = [null,null,null,null,null,null,null,null];(statearr_20538[(0)] = state_machine__6888__auto__);
(statearr_20538[(1)] = (1));
return statearr_20538;
});
var state_machine__6888__auto____1 = (function (state_20517){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e20539){if((e20539 instanceof Object))
{var ex__6891__auto__ = e20539;var statearr_20540_20556 = state_20517;(statearr_20540_20556[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20539;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20557 = state_20517;
state_20517 = G__20557;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20517){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto__))
})();var state__6954__auto__ = (function (){var statearr_20541 = f__6953__auto__.call(null);(statearr_20541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto__);
return statearr_20541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto__))
);
return c__6952__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj20559 = {};return obj20559;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj20561 = {};return obj20561;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20783 = (function (cs,ch,mult,meta20784){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20784 = meta20784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20783.cljs$lang$type = true;
cljs.core.async.t20783.cljs$lang$ctorStr = "cljs.core.async/t20783";
cljs.core.async.t20783.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t20783");
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20785){var self__ = this;
var _20785__$1 = this;return self__.meta20784;
});})(cs))
;
cljs.core.async.t20783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20785,meta20784__$1){var self__ = this;
var _20785__$1 = this;return (new cljs.core.async.t20783(self__.cs,self__.ch,self__.mult,meta20784__$1));
});})(cs))
;
cljs.core.async.__GT_t20783 = ((function (cs){
return (function __GT_t20783(cs__$1,ch__$1,mult__$1,meta20784){return (new cljs.core.async.t20783(cs__$1,ch__$1,mult__$1,meta20784));
});})(cs))
;
}
return (new cljs.core.async.t20783(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6952__auto___21004 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21004,cs,m,dchan,dctr,done){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21004,cs,m,dchan,dctr,done){
return (function (state_20916){var state_val_20917 = (state_20916[(1)]);if((state_val_20917 === (7)))
{var inst_20912 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20918_21005 = state_20916__$1;(statearr_20918_21005[(2)] = inst_20912);
(statearr_20918_21005[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (20)))
{var inst_20817 = (state_20916[(7)]);var inst_20827 = cljs.core.first.call(null,inst_20817);var inst_20828 = cljs.core.nth.call(null,inst_20827,(0),null);var inst_20829 = cljs.core.nth.call(null,inst_20827,(1),null);var state_20916__$1 = (function (){var statearr_20919 = state_20916;(statearr_20919[(8)] = inst_20828);
return statearr_20919;
})();if(cljs.core.truth_(inst_20829))
{var statearr_20920_21006 = state_20916__$1;(statearr_20920_21006[(1)] = (22));
} else
{var statearr_20921_21007 = state_20916__$1;(statearr_20921_21007[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (27)))
{var inst_20859 = (state_20916[(9)]);var inst_20864 = (state_20916[(10)]);var inst_20788 = (state_20916[(11)]);var inst_20857 = (state_20916[(12)]);var inst_20864__$1 = cljs.core._nth.call(null,inst_20857,inst_20859);var inst_20865 = cljs.core.async.put_BANG_.call(null,inst_20864__$1,inst_20788,done);var state_20916__$1 = (function (){var statearr_20922 = state_20916;(statearr_20922[(10)] = inst_20864__$1);
return statearr_20922;
})();if(cljs.core.truth_(inst_20865))
{var statearr_20923_21008 = state_20916__$1;(statearr_20923_21008[(1)] = (30));
} else
{var statearr_20924_21009 = state_20916__$1;(statearr_20924_21009[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (1)))
{var state_20916__$1 = state_20916;var statearr_20925_21010 = state_20916__$1;(statearr_20925_21010[(2)] = null);
(statearr_20925_21010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (24)))
{var inst_20817 = (state_20916[(7)]);var inst_20834 = (state_20916[(2)]);var inst_20835 = cljs.core.next.call(null,inst_20817);var inst_20797 = inst_20835;var inst_20798 = null;var inst_20799 = (0);var inst_20800 = (0);var state_20916__$1 = (function (){var statearr_20926 = state_20916;(statearr_20926[(13)] = inst_20798);
(statearr_20926[(14)] = inst_20800);
(statearr_20926[(15)] = inst_20799);
(statearr_20926[(16)] = inst_20834);
(statearr_20926[(17)] = inst_20797);
return statearr_20926;
})();var statearr_20927_21011 = state_20916__$1;(statearr_20927_21011[(2)] = null);
(statearr_20927_21011[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (39)))
{var state_20916__$1 = state_20916;var statearr_20931_21012 = state_20916__$1;(statearr_20931_21012[(2)] = null);
(statearr_20931_21012[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (4)))
{var inst_20788 = (state_20916[(11)]);var inst_20788__$1 = (state_20916[(2)]);var inst_20789 = (inst_20788__$1 == null);var state_20916__$1 = (function (){var statearr_20932 = state_20916;(statearr_20932[(11)] = inst_20788__$1);
return statearr_20932;
})();if(cljs.core.truth_(inst_20789))
{var statearr_20933_21013 = state_20916__$1;(statearr_20933_21013[(1)] = (5));
} else
{var statearr_20934_21014 = state_20916__$1;(statearr_20934_21014[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (15)))
{var inst_20798 = (state_20916[(13)]);var inst_20800 = (state_20916[(14)]);var inst_20799 = (state_20916[(15)]);var inst_20797 = (state_20916[(17)]);var inst_20813 = (state_20916[(2)]);var inst_20814 = (inst_20800 + (1));var tmp20928 = inst_20798;var tmp20929 = inst_20799;var tmp20930 = inst_20797;var inst_20797__$1 = tmp20930;var inst_20798__$1 = tmp20928;var inst_20799__$1 = tmp20929;var inst_20800__$1 = inst_20814;var state_20916__$1 = (function (){var statearr_20935 = state_20916;(statearr_20935[(13)] = inst_20798__$1);
(statearr_20935[(18)] = inst_20813);
(statearr_20935[(14)] = inst_20800__$1);
(statearr_20935[(15)] = inst_20799__$1);
(statearr_20935[(17)] = inst_20797__$1);
return statearr_20935;
})();var statearr_20936_21015 = state_20916__$1;(statearr_20936_21015[(2)] = null);
(statearr_20936_21015[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (21)))
{var inst_20838 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20940_21016 = state_20916__$1;(statearr_20940_21016[(2)] = inst_20838);
(statearr_20940_21016[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (31)))
{var inst_20864 = (state_20916[(10)]);var inst_20868 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20869 = cljs.core.async.untap_STAR_.call(null,m,inst_20864);var state_20916__$1 = (function (){var statearr_20941 = state_20916;(statearr_20941[(19)] = inst_20868);
return statearr_20941;
})();var statearr_20942_21017 = state_20916__$1;(statearr_20942_21017[(2)] = inst_20869);
(statearr_20942_21017[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (32)))
{var inst_20858 = (state_20916[(20)]);var inst_20859 = (state_20916[(9)]);var inst_20856 = (state_20916[(21)]);var inst_20857 = (state_20916[(12)]);var inst_20871 = (state_20916[(2)]);var inst_20872 = (inst_20859 + (1));var tmp20937 = inst_20858;var tmp20938 = inst_20856;var tmp20939 = inst_20857;var inst_20856__$1 = tmp20938;var inst_20857__$1 = tmp20939;var inst_20858__$1 = tmp20937;var inst_20859__$1 = inst_20872;var state_20916__$1 = (function (){var statearr_20943 = state_20916;(statearr_20943[(20)] = inst_20858__$1);
(statearr_20943[(9)] = inst_20859__$1);
(statearr_20943[(22)] = inst_20871);
(statearr_20943[(21)] = inst_20856__$1);
(statearr_20943[(12)] = inst_20857__$1);
return statearr_20943;
})();var statearr_20944_21018 = state_20916__$1;(statearr_20944_21018[(2)] = null);
(statearr_20944_21018[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (40)))
{var inst_20884 = (state_20916[(23)]);var inst_20888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_20889 = cljs.core.async.untap_STAR_.call(null,m,inst_20884);var state_20916__$1 = (function (){var statearr_20945 = state_20916;(statearr_20945[(24)] = inst_20888);
return statearr_20945;
})();var statearr_20946_21019 = state_20916__$1;(statearr_20946_21019[(2)] = inst_20889);
(statearr_20946_21019[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (33)))
{var inst_20875 = (state_20916[(25)]);var inst_20877 = cljs.core.chunked_seq_QMARK_.call(null,inst_20875);var state_20916__$1 = state_20916;if(inst_20877)
{var statearr_20947_21020 = state_20916__$1;(statearr_20947_21020[(1)] = (36));
} else
{var statearr_20948_21021 = state_20916__$1;(statearr_20948_21021[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (13)))
{var inst_20807 = (state_20916[(26)]);var inst_20810 = cljs.core.async.close_BANG_.call(null,inst_20807);var state_20916__$1 = state_20916;var statearr_20949_21022 = state_20916__$1;(statearr_20949_21022[(2)] = inst_20810);
(statearr_20949_21022[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (22)))
{var inst_20828 = (state_20916[(8)]);var inst_20831 = cljs.core.async.close_BANG_.call(null,inst_20828);var state_20916__$1 = state_20916;var statearr_20950_21023 = state_20916__$1;(statearr_20950_21023[(2)] = inst_20831);
(statearr_20950_21023[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (36)))
{var inst_20875 = (state_20916[(25)]);var inst_20879 = cljs.core.chunk_first.call(null,inst_20875);var inst_20880 = cljs.core.chunk_rest.call(null,inst_20875);var inst_20881 = cljs.core.count.call(null,inst_20879);var inst_20856 = inst_20880;var inst_20857 = inst_20879;var inst_20858 = inst_20881;var inst_20859 = (0);var state_20916__$1 = (function (){var statearr_20951 = state_20916;(statearr_20951[(20)] = inst_20858);
(statearr_20951[(9)] = inst_20859);
(statearr_20951[(21)] = inst_20856);
(statearr_20951[(12)] = inst_20857);
return statearr_20951;
})();var statearr_20952_21024 = state_20916__$1;(statearr_20952_21024[(2)] = null);
(statearr_20952_21024[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (41)))
{var inst_20875 = (state_20916[(25)]);var inst_20891 = (state_20916[(2)]);var inst_20892 = cljs.core.next.call(null,inst_20875);var inst_20856 = inst_20892;var inst_20857 = null;var inst_20858 = (0);var inst_20859 = (0);var state_20916__$1 = (function (){var statearr_20953 = state_20916;(statearr_20953[(20)] = inst_20858);
(statearr_20953[(9)] = inst_20859);
(statearr_20953[(21)] = inst_20856);
(statearr_20953[(27)] = inst_20891);
(statearr_20953[(12)] = inst_20857);
return statearr_20953;
})();var statearr_20954_21025 = state_20916__$1;(statearr_20954_21025[(2)] = null);
(statearr_20954_21025[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (43)))
{var state_20916__$1 = state_20916;var statearr_20955_21026 = state_20916__$1;(statearr_20955_21026[(2)] = null);
(statearr_20955_21026[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (29)))
{var inst_20900 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20956_21027 = state_20916__$1;(statearr_20956_21027[(2)] = inst_20900);
(statearr_20956_21027[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (44)))
{var inst_20909 = (state_20916[(2)]);var state_20916__$1 = (function (){var statearr_20957 = state_20916;(statearr_20957[(28)] = inst_20909);
return statearr_20957;
})();var statearr_20958_21028 = state_20916__$1;(statearr_20958_21028[(2)] = null);
(statearr_20958_21028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (6)))
{var inst_20848 = (state_20916[(29)]);var inst_20847 = cljs.core.deref.call(null,cs);var inst_20848__$1 = cljs.core.keys.call(null,inst_20847);var inst_20849 = cljs.core.count.call(null,inst_20848__$1);var inst_20850 = cljs.core.reset_BANG_.call(null,dctr,inst_20849);var inst_20855 = cljs.core.seq.call(null,inst_20848__$1);var inst_20856 = inst_20855;var inst_20857 = null;var inst_20858 = (0);var inst_20859 = (0);var state_20916__$1 = (function (){var statearr_20959 = state_20916;(statearr_20959[(20)] = inst_20858);
(statearr_20959[(9)] = inst_20859);
(statearr_20959[(29)] = inst_20848__$1);
(statearr_20959[(21)] = inst_20856);
(statearr_20959[(30)] = inst_20850);
(statearr_20959[(12)] = inst_20857);
return statearr_20959;
})();var statearr_20960_21029 = state_20916__$1;(statearr_20960_21029[(2)] = null);
(statearr_20960_21029[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (28)))
{var inst_20875 = (state_20916[(25)]);var inst_20856 = (state_20916[(21)]);var inst_20875__$1 = cljs.core.seq.call(null,inst_20856);var state_20916__$1 = (function (){var statearr_20961 = state_20916;(statearr_20961[(25)] = inst_20875__$1);
return statearr_20961;
})();if(inst_20875__$1)
{var statearr_20962_21030 = state_20916__$1;(statearr_20962_21030[(1)] = (33));
} else
{var statearr_20963_21031 = state_20916__$1;(statearr_20963_21031[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (25)))
{var inst_20858 = (state_20916[(20)]);var inst_20859 = (state_20916[(9)]);var inst_20861 = (inst_20859 < inst_20858);var inst_20862 = inst_20861;var state_20916__$1 = state_20916;if(cljs.core.truth_(inst_20862))
{var statearr_20964_21032 = state_20916__$1;(statearr_20964_21032[(1)] = (27));
} else
{var statearr_20965_21033 = state_20916__$1;(statearr_20965_21033[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (34)))
{var state_20916__$1 = state_20916;var statearr_20966_21034 = state_20916__$1;(statearr_20966_21034[(2)] = null);
(statearr_20966_21034[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (17)))
{var state_20916__$1 = state_20916;var statearr_20967_21035 = state_20916__$1;(statearr_20967_21035[(2)] = null);
(statearr_20967_21035[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (3)))
{var inst_20914 = (state_20916[(2)]);var state_20916__$1 = state_20916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20916__$1,inst_20914);
} else
{if((state_val_20917 === (12)))
{var inst_20843 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20968_21036 = state_20916__$1;(statearr_20968_21036[(2)] = inst_20843);
(statearr_20968_21036[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (2)))
{var state_20916__$1 = state_20916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20916__$1,(4),ch);
} else
{if((state_val_20917 === (23)))
{var state_20916__$1 = state_20916;var statearr_20969_21037 = state_20916__$1;(statearr_20969_21037[(2)] = null);
(statearr_20969_21037[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (35)))
{var inst_20898 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20970_21038 = state_20916__$1;(statearr_20970_21038[(2)] = inst_20898);
(statearr_20970_21038[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (19)))
{var inst_20817 = (state_20916[(7)]);var inst_20821 = cljs.core.chunk_first.call(null,inst_20817);var inst_20822 = cljs.core.chunk_rest.call(null,inst_20817);var inst_20823 = cljs.core.count.call(null,inst_20821);var inst_20797 = inst_20822;var inst_20798 = inst_20821;var inst_20799 = inst_20823;var inst_20800 = (0);var state_20916__$1 = (function (){var statearr_20971 = state_20916;(statearr_20971[(13)] = inst_20798);
(statearr_20971[(14)] = inst_20800);
(statearr_20971[(15)] = inst_20799);
(statearr_20971[(17)] = inst_20797);
return statearr_20971;
})();var statearr_20972_21039 = state_20916__$1;(statearr_20972_21039[(2)] = null);
(statearr_20972_21039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (11)))
{var inst_20817 = (state_20916[(7)]);var inst_20797 = (state_20916[(17)]);var inst_20817__$1 = cljs.core.seq.call(null,inst_20797);var state_20916__$1 = (function (){var statearr_20973 = state_20916;(statearr_20973[(7)] = inst_20817__$1);
return statearr_20973;
})();if(inst_20817__$1)
{var statearr_20974_21040 = state_20916__$1;(statearr_20974_21040[(1)] = (16));
} else
{var statearr_20975_21041 = state_20916__$1;(statearr_20975_21041[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (9)))
{var inst_20845 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20976_21042 = state_20916__$1;(statearr_20976_21042[(2)] = inst_20845);
(statearr_20976_21042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (5)))
{var inst_20795 = cljs.core.deref.call(null,cs);var inst_20796 = cljs.core.seq.call(null,inst_20795);var inst_20797 = inst_20796;var inst_20798 = null;var inst_20799 = (0);var inst_20800 = (0);var state_20916__$1 = (function (){var statearr_20977 = state_20916;(statearr_20977[(13)] = inst_20798);
(statearr_20977[(14)] = inst_20800);
(statearr_20977[(15)] = inst_20799);
(statearr_20977[(17)] = inst_20797);
return statearr_20977;
})();var statearr_20978_21043 = state_20916__$1;(statearr_20978_21043[(2)] = null);
(statearr_20978_21043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (14)))
{var state_20916__$1 = state_20916;var statearr_20979_21044 = state_20916__$1;(statearr_20979_21044[(2)] = null);
(statearr_20979_21044[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (45)))
{var inst_20906 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20980_21045 = state_20916__$1;(statearr_20980_21045[(2)] = inst_20906);
(statearr_20980_21045[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (26)))
{var inst_20848 = (state_20916[(29)]);var inst_20902 = (state_20916[(2)]);var inst_20903 = cljs.core.seq.call(null,inst_20848);var state_20916__$1 = (function (){var statearr_20981 = state_20916;(statearr_20981[(31)] = inst_20902);
return statearr_20981;
})();if(inst_20903)
{var statearr_20982_21046 = state_20916__$1;(statearr_20982_21046[(1)] = (42));
} else
{var statearr_20983_21047 = state_20916__$1;(statearr_20983_21047[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (16)))
{var inst_20817 = (state_20916[(7)]);var inst_20819 = cljs.core.chunked_seq_QMARK_.call(null,inst_20817);var state_20916__$1 = state_20916;if(inst_20819)
{var statearr_20984_21048 = state_20916__$1;(statearr_20984_21048[(1)] = (19));
} else
{var statearr_20985_21049 = state_20916__$1;(statearr_20985_21049[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (38)))
{var inst_20895 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20986_21050 = state_20916__$1;(statearr_20986_21050[(2)] = inst_20895);
(statearr_20986_21050[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (30)))
{var state_20916__$1 = state_20916;var statearr_20987_21051 = state_20916__$1;(statearr_20987_21051[(2)] = null);
(statearr_20987_21051[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (10)))
{var inst_20798 = (state_20916[(13)]);var inst_20800 = (state_20916[(14)]);var inst_20806 = cljs.core._nth.call(null,inst_20798,inst_20800);var inst_20807 = cljs.core.nth.call(null,inst_20806,(0),null);var inst_20808 = cljs.core.nth.call(null,inst_20806,(1),null);var state_20916__$1 = (function (){var statearr_20988 = state_20916;(statearr_20988[(26)] = inst_20807);
return statearr_20988;
})();if(cljs.core.truth_(inst_20808))
{var statearr_20989_21052 = state_20916__$1;(statearr_20989_21052[(1)] = (13));
} else
{var statearr_20990_21053 = state_20916__$1;(statearr_20990_21053[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (18)))
{var inst_20841 = (state_20916[(2)]);var state_20916__$1 = state_20916;var statearr_20991_21054 = state_20916__$1;(statearr_20991_21054[(2)] = inst_20841);
(statearr_20991_21054[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (42)))
{var state_20916__$1 = state_20916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20916__$1,(45),dchan);
} else
{if((state_val_20917 === (37)))
{var inst_20875 = (state_20916[(25)]);var inst_20788 = (state_20916[(11)]);var inst_20884 = (state_20916[(23)]);var inst_20884__$1 = cljs.core.first.call(null,inst_20875);var inst_20885 = cljs.core.async.put_BANG_.call(null,inst_20884__$1,inst_20788,done);var state_20916__$1 = (function (){var statearr_20992 = state_20916;(statearr_20992[(23)] = inst_20884__$1);
return statearr_20992;
})();if(cljs.core.truth_(inst_20885))
{var statearr_20993_21055 = state_20916__$1;(statearr_20993_21055[(1)] = (39));
} else
{var statearr_20994_21056 = state_20916__$1;(statearr_20994_21056[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20917 === (8)))
{var inst_20800 = (state_20916[(14)]);var inst_20799 = (state_20916[(15)]);var inst_20802 = (inst_20800 < inst_20799);var inst_20803 = inst_20802;var state_20916__$1 = state_20916;if(cljs.core.truth_(inst_20803))
{var statearr_20995_21057 = state_20916__$1;(statearr_20995_21057[(1)] = (10));
} else
{var statearr_20996_21058 = state_20916__$1;(statearr_20996_21058[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21004,cs,m,dchan,dctr,done))
;return ((function (switch__6887__auto__,c__6952__auto___21004,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21000[(0)] = state_machine__6888__auto__);
(statearr_21000[(1)] = (1));
return statearr_21000;
});
var state_machine__6888__auto____1 = (function (state_20916){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_20916);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21001){if((e21001 instanceof Object))
{var ex__6891__auto__ = e21001;var statearr_21002_21059 = state_20916;(statearr_21002_21059[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21001;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21060 = state_20916;
state_20916 = G__21060;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_20916){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_20916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21004,cs,m,dchan,dctr,done))
})();var state__6954__auto__ = (function (){var statearr_21003 = f__6953__auto__.call(null);(statearr_21003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21004);
return statearr_21003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21004,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj21062 = {};return obj21062;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t21182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21182 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21183){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21183 = meta21183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21182.cljs$lang$type = true;
cljs.core.async.t21182.cljs$lang$ctorStr = "cljs.core.async/t21182";
cljs.core.async.t21182.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t21182");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21184){var self__ = this;
var _21184__$1 = this;return self__.meta21183;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21184,meta21183__$1){var self__ = this;
var _21184__$1 = this;return (new cljs.core.async.t21182(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21183__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21182 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21183){return (new cljs.core.async.t21182(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21183));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21182(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6952__auto___21301 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21254){var state_val_21255 = (state_21254[(1)]);if((state_val_21255 === (7)))
{var inst_21198 = (state_21254[(7)]);var inst_21203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21198);var state_21254__$1 = state_21254;var statearr_21256_21302 = state_21254__$1;(statearr_21256_21302[(2)] = inst_21203);
(statearr_21256_21302[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (20)))
{var inst_21213 = (state_21254[(8)]);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21254__$1,(23),out,inst_21213);
} else
{if((state_val_21255 === (1)))
{var inst_21188 = (state_21254[(9)]);var inst_21188__$1 = calc_state.call(null);var inst_21189 = cljs.core.seq_QMARK_.call(null,inst_21188__$1);var state_21254__$1 = (function (){var statearr_21257 = state_21254;(statearr_21257[(9)] = inst_21188__$1);
return statearr_21257;
})();if(inst_21189)
{var statearr_21258_21303 = state_21254__$1;(statearr_21258_21303[(1)] = (2));
} else
{var statearr_21259_21304 = state_21254__$1;(statearr_21259_21304[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (24)))
{var inst_21206 = (state_21254[(10)]);var inst_21198 = inst_21206;var state_21254__$1 = (function (){var statearr_21260 = state_21254;(statearr_21260[(7)] = inst_21198);
return statearr_21260;
})();var statearr_21261_21305 = state_21254__$1;(statearr_21261_21305[(2)] = null);
(statearr_21261_21305[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (4)))
{var inst_21188 = (state_21254[(9)]);var inst_21194 = (state_21254[(2)]);var inst_21195 = cljs.core.get.call(null,inst_21194,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21196 = cljs.core.get.call(null,inst_21194,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21197 = cljs.core.get.call(null,inst_21194,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_21198 = inst_21188;var state_21254__$1 = (function (){var statearr_21262 = state_21254;(statearr_21262[(11)] = inst_21196);
(statearr_21262[(12)] = inst_21195);
(statearr_21262[(7)] = inst_21198);
(statearr_21262[(13)] = inst_21197);
return statearr_21262;
})();var statearr_21263_21306 = state_21254__$1;(statearr_21263_21306[(2)] = null);
(statearr_21263_21306[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (15)))
{var state_21254__$1 = state_21254;var statearr_21264_21307 = state_21254__$1;(statearr_21264_21307[(2)] = null);
(statearr_21264_21307[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (21)))
{var inst_21206 = (state_21254[(10)]);var inst_21198 = inst_21206;var state_21254__$1 = (function (){var statearr_21265 = state_21254;(statearr_21265[(7)] = inst_21198);
return statearr_21265;
})();var statearr_21266_21308 = state_21254__$1;(statearr_21266_21308[(2)] = null);
(statearr_21266_21308[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (13)))
{var inst_21250 = (state_21254[(2)]);var state_21254__$1 = state_21254;var statearr_21267_21309 = state_21254__$1;(statearr_21267_21309[(2)] = inst_21250);
(statearr_21267_21309[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (22)))
{var inst_21248 = (state_21254[(2)]);var state_21254__$1 = state_21254;var statearr_21268_21310 = state_21254__$1;(statearr_21268_21310[(2)] = inst_21248);
(statearr_21268_21310[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (6)))
{var inst_21252 = (state_21254[(2)]);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21254__$1,inst_21252);
} else
{if((state_val_21255 === (25)))
{var state_21254__$1 = state_21254;var statearr_21269_21311 = state_21254__$1;(statearr_21269_21311[(2)] = null);
(statearr_21269_21311[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (17)))
{var inst_21228 = (state_21254[(14)]);var state_21254__$1 = state_21254;var statearr_21270_21312 = state_21254__$1;(statearr_21270_21312[(2)] = inst_21228);
(statearr_21270_21312[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (3)))
{var inst_21188 = (state_21254[(9)]);var state_21254__$1 = state_21254;var statearr_21271_21313 = state_21254__$1;(statearr_21271_21313[(2)] = inst_21188);
(statearr_21271_21313[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (12)))
{var inst_21214 = (state_21254[(15)]);var inst_21209 = (state_21254[(16)]);var inst_21228 = (state_21254[(14)]);var inst_21228__$1 = inst_21209.call(null,inst_21214);var state_21254__$1 = (function (){var statearr_21272 = state_21254;(statearr_21272[(14)] = inst_21228__$1);
return statearr_21272;
})();if(cljs.core.truth_(inst_21228__$1))
{var statearr_21273_21314 = state_21254__$1;(statearr_21273_21314[(1)] = (17));
} else
{var statearr_21274_21315 = state_21254__$1;(statearr_21274_21315[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (2)))
{var inst_21188 = (state_21254[(9)]);var inst_21191 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21188);var state_21254__$1 = state_21254;var statearr_21275_21316 = state_21254__$1;(statearr_21275_21316[(2)] = inst_21191);
(statearr_21275_21316[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (23)))
{var inst_21239 = (state_21254[(2)]);var state_21254__$1 = state_21254;if(cljs.core.truth_(inst_21239))
{var statearr_21276_21317 = state_21254__$1;(statearr_21276_21317[(1)] = (24));
} else
{var statearr_21277_21318 = state_21254__$1;(statearr_21277_21318[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (19)))
{var inst_21236 = (state_21254[(2)]);var state_21254__$1 = state_21254;if(cljs.core.truth_(inst_21236))
{var statearr_21278_21319 = state_21254__$1;(statearr_21278_21319[(1)] = (20));
} else
{var statearr_21279_21320 = state_21254__$1;(statearr_21279_21320[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (11)))
{var inst_21213 = (state_21254[(8)]);var inst_21219 = (inst_21213 == null);var state_21254__$1 = state_21254;if(cljs.core.truth_(inst_21219))
{var statearr_21280_21321 = state_21254__$1;(statearr_21280_21321[(1)] = (14));
} else
{var statearr_21281_21322 = state_21254__$1;(statearr_21281_21322[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (9)))
{var inst_21206 = (state_21254[(10)]);var inst_21206__$1 = (state_21254[(2)]);var inst_21207 = cljs.core.get.call(null,inst_21206__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21208 = cljs.core.get.call(null,inst_21206__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21209 = cljs.core.get.call(null,inst_21206__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_21254__$1 = (function (){var statearr_21282 = state_21254;(statearr_21282[(17)] = inst_21208);
(statearr_21282[(10)] = inst_21206__$1);
(statearr_21282[(16)] = inst_21209);
return statearr_21282;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21254__$1,(10),inst_21207);
} else
{if((state_val_21255 === (5)))
{var inst_21198 = (state_21254[(7)]);var inst_21201 = cljs.core.seq_QMARK_.call(null,inst_21198);var state_21254__$1 = state_21254;if(inst_21201)
{var statearr_21283_21323 = state_21254__$1;(statearr_21283_21323[(1)] = (7));
} else
{var statearr_21284_21324 = state_21254__$1;(statearr_21284_21324[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (14)))
{var inst_21214 = (state_21254[(15)]);var inst_21221 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21214);var state_21254__$1 = state_21254;var statearr_21285_21325 = state_21254__$1;(statearr_21285_21325[(2)] = inst_21221);
(statearr_21285_21325[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (26)))
{var inst_21244 = (state_21254[(2)]);var state_21254__$1 = state_21254;var statearr_21286_21326 = state_21254__$1;(statearr_21286_21326[(2)] = inst_21244);
(statearr_21286_21326[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (16)))
{var inst_21224 = (state_21254[(2)]);var inst_21225 = calc_state.call(null);var inst_21198 = inst_21225;var state_21254__$1 = (function (){var statearr_21287 = state_21254;(statearr_21287[(7)] = inst_21198);
(statearr_21287[(18)] = inst_21224);
return statearr_21287;
})();var statearr_21288_21327 = state_21254__$1;(statearr_21288_21327[(2)] = null);
(statearr_21288_21327[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (10)))
{var inst_21213 = (state_21254[(8)]);var inst_21214 = (state_21254[(15)]);var inst_21212 = (state_21254[(2)]);var inst_21213__$1 = cljs.core.nth.call(null,inst_21212,(0),null);var inst_21214__$1 = cljs.core.nth.call(null,inst_21212,(1),null);var inst_21215 = (inst_21213__$1 == null);var inst_21216 = cljs.core._EQ_.call(null,inst_21214__$1,change);var inst_21217 = (inst_21215) || (inst_21216);var state_21254__$1 = (function (){var statearr_21289 = state_21254;(statearr_21289[(8)] = inst_21213__$1);
(statearr_21289[(15)] = inst_21214__$1);
return statearr_21289;
})();if(cljs.core.truth_(inst_21217))
{var statearr_21290_21328 = state_21254__$1;(statearr_21290_21328[(1)] = (11));
} else
{var statearr_21291_21329 = state_21254__$1;(statearr_21291_21329[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (18)))
{var inst_21214 = (state_21254[(15)]);var inst_21208 = (state_21254[(17)]);var inst_21209 = (state_21254[(16)]);var inst_21231 = cljs.core.empty_QMARK_.call(null,inst_21209);var inst_21232 = inst_21208.call(null,inst_21214);var inst_21233 = cljs.core.not.call(null,inst_21232);var inst_21234 = (inst_21231) && (inst_21233);var state_21254__$1 = state_21254;var statearr_21292_21330 = state_21254__$1;(statearr_21292_21330[(2)] = inst_21234);
(statearr_21292_21330[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21255 === (8)))
{var inst_21198 = (state_21254[(7)]);var state_21254__$1 = state_21254;var statearr_21293_21331 = state_21254__$1;(statearr_21293_21331[(2)] = inst_21198);
(statearr_21293_21331[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6887__auto__,c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21297[(0)] = state_machine__6888__auto__);
(statearr_21297[(1)] = (1));
return statearr_21297;
});
var state_machine__6888__auto____1 = (function (state_21254){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_21254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21298){if((e21298 instanceof Object))
{var ex__6891__auto__ = e21298;var statearr_21299_21332 = state_21254;(statearr_21299_21332[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21298;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21333 = state_21254;
state_21254 = G__21333;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_21254){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_21254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6954__auto__ = (function (){var statearr_21300 = f__6953__auto__.call(null);(statearr_21300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21301);
return statearr_21300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21301,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj21335 = {};return obj21335;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__21336_SHARP_){if(cljs.core.truth_(p1__21336_SHARP_.call(null,topic)))
{return p1__21336_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21336_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21451 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21452){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21452 = meta21452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21451.cljs$lang$type = true;
cljs.core.async.t21451.cljs$lang$ctorStr = "cljs.core.async/t21451";
cljs.core.async.t21451.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t21451");
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21451.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21453){var self__ = this;
var _21453__$1 = this;return self__.meta21452;
});})(mults,ensure_mult))
;
cljs.core.async.t21451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21453,meta21452__$1){var self__ = this;
var _21453__$1 = this;return (new cljs.core.async.t21451(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21452__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21451 = ((function (mults,ensure_mult){
return (function __GT_t21451(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21452){return (new cljs.core.async.t21451(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21452));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21451(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6952__auto___21565 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21565,mults,ensure_mult,p){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21565,mults,ensure_mult,p){
return (function (state_21521){var state_val_21522 = (state_21521[(1)]);if((state_val_21522 === (7)))
{var inst_21517 = (state_21521[(2)]);var state_21521__$1 = state_21521;var statearr_21523_21566 = state_21521__$1;(statearr_21523_21566[(2)] = inst_21517);
(statearr_21523_21566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (20)))
{var state_21521__$1 = state_21521;var statearr_21524_21567 = state_21521__$1;(statearr_21524_21567[(2)] = null);
(statearr_21524_21567[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (1)))
{var state_21521__$1 = state_21521;var statearr_21525_21568 = state_21521__$1;(statearr_21525_21568[(2)] = null);
(statearr_21525_21568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (4)))
{var inst_21456 = (state_21521[(7)]);var inst_21456__$1 = (state_21521[(2)]);var inst_21457 = (inst_21456__$1 == null);var state_21521__$1 = (function (){var statearr_21526 = state_21521;(statearr_21526[(7)] = inst_21456__$1);
return statearr_21526;
})();if(cljs.core.truth_(inst_21457))
{var statearr_21527_21569 = state_21521__$1;(statearr_21527_21569[(1)] = (5));
} else
{var statearr_21528_21570 = state_21521__$1;(statearr_21528_21570[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (15)))
{var inst_21498 = (state_21521[(2)]);var state_21521__$1 = state_21521;var statearr_21529_21571 = state_21521__$1;(statearr_21529_21571[(2)] = inst_21498);
(statearr_21529_21571[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (21)))
{var inst_21504 = (state_21521[(8)]);var inst_21512 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21504);var state_21521__$1 = state_21521;var statearr_21530_21572 = state_21521__$1;(statearr_21530_21572[(2)] = inst_21512);
(statearr_21530_21572[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (13)))
{var inst_21480 = (state_21521[(9)]);var inst_21482 = cljs.core.chunked_seq_QMARK_.call(null,inst_21480);var state_21521__$1 = state_21521;if(inst_21482)
{var statearr_21531_21573 = state_21521__$1;(statearr_21531_21573[(1)] = (16));
} else
{var statearr_21532_21574 = state_21521__$1;(statearr_21532_21574[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (22)))
{var inst_21514 = (state_21521[(2)]);var state_21521__$1 = (function (){var statearr_21533 = state_21521;(statearr_21533[(10)] = inst_21514);
return statearr_21533;
})();var statearr_21534_21575 = state_21521__$1;(statearr_21534_21575[(2)] = null);
(statearr_21534_21575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (6)))
{var inst_21456 = (state_21521[(7)]);var inst_21504 = (state_21521[(8)]);var inst_21504__$1 = topic_fn.call(null,inst_21456);var inst_21505 = cljs.core.deref.call(null,mults);var inst_21506 = cljs.core.get.call(null,inst_21505,inst_21504__$1);var inst_21507 = cljs.core.async.muxch_STAR_.call(null,inst_21506);var state_21521__$1 = (function (){var statearr_21535 = state_21521;(statearr_21535[(8)] = inst_21504__$1);
return statearr_21535;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21521__$1,(19),inst_21507,inst_21456);
} else
{if((state_val_21522 === (17)))
{var inst_21480 = (state_21521[(9)]);var inst_21489 = cljs.core.first.call(null,inst_21480);var inst_21490 = cljs.core.async.muxch_STAR_.call(null,inst_21489);var inst_21491 = cljs.core.async.close_BANG_.call(null,inst_21490);var inst_21492 = cljs.core.next.call(null,inst_21480);var inst_21466 = inst_21492;var inst_21467 = null;var inst_21468 = (0);var inst_21469 = (0);var state_21521__$1 = (function (){var statearr_21536 = state_21521;(statearr_21536[(11)] = inst_21469);
(statearr_21536[(12)] = inst_21491);
(statearr_21536[(13)] = inst_21468);
(statearr_21536[(14)] = inst_21467);
(statearr_21536[(15)] = inst_21466);
return statearr_21536;
})();var statearr_21537_21576 = state_21521__$1;(statearr_21537_21576[(2)] = null);
(statearr_21537_21576[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (3)))
{var inst_21519 = (state_21521[(2)]);var state_21521__$1 = state_21521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21521__$1,inst_21519);
} else
{if((state_val_21522 === (12)))
{var inst_21500 = (state_21521[(2)]);var state_21521__$1 = state_21521;var statearr_21538_21577 = state_21521__$1;(statearr_21538_21577[(2)] = inst_21500);
(statearr_21538_21577[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (2)))
{var state_21521__$1 = state_21521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21521__$1,(4),ch);
} else
{if((state_val_21522 === (19)))
{var inst_21509 = (state_21521[(2)]);var state_21521__$1 = state_21521;if(cljs.core.truth_(inst_21509))
{var statearr_21539_21578 = state_21521__$1;(statearr_21539_21578[(1)] = (20));
} else
{var statearr_21540_21579 = state_21521__$1;(statearr_21540_21579[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (11)))
{var inst_21480 = (state_21521[(9)]);var inst_21466 = (state_21521[(15)]);var inst_21480__$1 = cljs.core.seq.call(null,inst_21466);var state_21521__$1 = (function (){var statearr_21541 = state_21521;(statearr_21541[(9)] = inst_21480__$1);
return statearr_21541;
})();if(inst_21480__$1)
{var statearr_21542_21580 = state_21521__$1;(statearr_21542_21580[(1)] = (13));
} else
{var statearr_21543_21581 = state_21521__$1;(statearr_21543_21581[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (9)))
{var inst_21502 = (state_21521[(2)]);var state_21521__$1 = state_21521;var statearr_21544_21582 = state_21521__$1;(statearr_21544_21582[(2)] = inst_21502);
(statearr_21544_21582[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (5)))
{var inst_21463 = cljs.core.deref.call(null,mults);var inst_21464 = cljs.core.vals.call(null,inst_21463);var inst_21465 = cljs.core.seq.call(null,inst_21464);var inst_21466 = inst_21465;var inst_21467 = null;var inst_21468 = (0);var inst_21469 = (0);var state_21521__$1 = (function (){var statearr_21545 = state_21521;(statearr_21545[(11)] = inst_21469);
(statearr_21545[(13)] = inst_21468);
(statearr_21545[(14)] = inst_21467);
(statearr_21545[(15)] = inst_21466);
return statearr_21545;
})();var statearr_21546_21583 = state_21521__$1;(statearr_21546_21583[(2)] = null);
(statearr_21546_21583[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (14)))
{var state_21521__$1 = state_21521;var statearr_21550_21584 = state_21521__$1;(statearr_21550_21584[(2)] = null);
(statearr_21550_21584[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (16)))
{var inst_21480 = (state_21521[(9)]);var inst_21484 = cljs.core.chunk_first.call(null,inst_21480);var inst_21485 = cljs.core.chunk_rest.call(null,inst_21480);var inst_21486 = cljs.core.count.call(null,inst_21484);var inst_21466 = inst_21485;var inst_21467 = inst_21484;var inst_21468 = inst_21486;var inst_21469 = (0);var state_21521__$1 = (function (){var statearr_21551 = state_21521;(statearr_21551[(11)] = inst_21469);
(statearr_21551[(13)] = inst_21468);
(statearr_21551[(14)] = inst_21467);
(statearr_21551[(15)] = inst_21466);
return statearr_21551;
})();var statearr_21552_21585 = state_21521__$1;(statearr_21552_21585[(2)] = null);
(statearr_21552_21585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (10)))
{var inst_21469 = (state_21521[(11)]);var inst_21468 = (state_21521[(13)]);var inst_21467 = (state_21521[(14)]);var inst_21466 = (state_21521[(15)]);var inst_21474 = cljs.core._nth.call(null,inst_21467,inst_21469);var inst_21475 = cljs.core.async.muxch_STAR_.call(null,inst_21474);var inst_21476 = cljs.core.async.close_BANG_.call(null,inst_21475);var inst_21477 = (inst_21469 + (1));var tmp21547 = inst_21468;var tmp21548 = inst_21467;var tmp21549 = inst_21466;var inst_21466__$1 = tmp21549;var inst_21467__$1 = tmp21548;var inst_21468__$1 = tmp21547;var inst_21469__$1 = inst_21477;var state_21521__$1 = (function (){var statearr_21553 = state_21521;(statearr_21553[(16)] = inst_21476);
(statearr_21553[(11)] = inst_21469__$1);
(statearr_21553[(13)] = inst_21468__$1);
(statearr_21553[(14)] = inst_21467__$1);
(statearr_21553[(15)] = inst_21466__$1);
return statearr_21553;
})();var statearr_21554_21586 = state_21521__$1;(statearr_21554_21586[(2)] = null);
(statearr_21554_21586[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (18)))
{var inst_21495 = (state_21521[(2)]);var state_21521__$1 = state_21521;var statearr_21555_21587 = state_21521__$1;(statearr_21555_21587[(2)] = inst_21495);
(statearr_21555_21587[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21522 === (8)))
{var inst_21469 = (state_21521[(11)]);var inst_21468 = (state_21521[(13)]);var inst_21471 = (inst_21469 < inst_21468);var inst_21472 = inst_21471;var state_21521__$1 = state_21521;if(cljs.core.truth_(inst_21472))
{var statearr_21556_21588 = state_21521__$1;(statearr_21556_21588[(1)] = (10));
} else
{var statearr_21557_21589 = state_21521__$1;(statearr_21557_21589[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21565,mults,ensure_mult,p))
;return ((function (switch__6887__auto__,c__6952__auto___21565,mults,ensure_mult,p){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21561[(0)] = state_machine__6888__auto__);
(statearr_21561[(1)] = (1));
return statearr_21561;
});
var state_machine__6888__auto____1 = (function (state_21521){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_21521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21562){if((e21562 instanceof Object))
{var ex__6891__auto__ = e21562;var statearr_21563_21590 = state_21521;(statearr_21563_21590[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21562;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21591 = state_21521;
state_21521 = G__21591;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_21521){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_21521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21565,mults,ensure_mult,p))
})();var state__6954__auto__ = (function (){var statearr_21564 = f__6953__auto__.call(null);(statearr_21564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21565);
return statearr_21564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21565,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6952__auto___21728 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21698){var state_val_21699 = (state_21698[(1)]);if((state_val_21699 === (7)))
{var state_21698__$1 = state_21698;var statearr_21700_21729 = state_21698__$1;(statearr_21700_21729[(2)] = null);
(statearr_21700_21729[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (1)))
{var state_21698__$1 = state_21698;var statearr_21701_21730 = state_21698__$1;(statearr_21701_21730[(2)] = null);
(statearr_21701_21730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (4)))
{var inst_21662 = (state_21698[(7)]);var inst_21664 = (inst_21662 < cnt);var state_21698__$1 = state_21698;if(cljs.core.truth_(inst_21664))
{var statearr_21702_21731 = state_21698__$1;(statearr_21702_21731[(1)] = (6));
} else
{var statearr_21703_21732 = state_21698__$1;(statearr_21703_21732[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (15)))
{var inst_21694 = (state_21698[(2)]);var state_21698__$1 = state_21698;var statearr_21704_21733 = state_21698__$1;(statearr_21704_21733[(2)] = inst_21694);
(statearr_21704_21733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (13)))
{var inst_21687 = cljs.core.async.close_BANG_.call(null,out);var state_21698__$1 = state_21698;var statearr_21705_21734 = state_21698__$1;(statearr_21705_21734[(2)] = inst_21687);
(statearr_21705_21734[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (6)))
{var state_21698__$1 = state_21698;var statearr_21706_21735 = state_21698__$1;(statearr_21706_21735[(2)] = null);
(statearr_21706_21735[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (3)))
{var inst_21696 = (state_21698[(2)]);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21698__$1,inst_21696);
} else
{if((state_val_21699 === (12)))
{var inst_21684 = (state_21698[(8)]);var inst_21684__$1 = (state_21698[(2)]);var inst_21685 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21684__$1);var state_21698__$1 = (function (){var statearr_21707 = state_21698;(statearr_21707[(8)] = inst_21684__$1);
return statearr_21707;
})();if(cljs.core.truth_(inst_21685))
{var statearr_21708_21736 = state_21698__$1;(statearr_21708_21736[(1)] = (13));
} else
{var statearr_21709_21737 = state_21698__$1;(statearr_21709_21737[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (2)))
{var inst_21661 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21662 = (0);var state_21698__$1 = (function (){var statearr_21710 = state_21698;(statearr_21710[(7)] = inst_21662);
(statearr_21710[(9)] = inst_21661);
return statearr_21710;
})();var statearr_21711_21738 = state_21698__$1;(statearr_21711_21738[(2)] = null);
(statearr_21711_21738[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (11)))
{var inst_21662 = (state_21698[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21698,(10),Object,null,(9));var inst_21671 = chs__$1.call(null,inst_21662);var inst_21672 = done.call(null,inst_21662);var inst_21673 = cljs.core.async.take_BANG_.call(null,inst_21671,inst_21672);var state_21698__$1 = state_21698;var statearr_21712_21739 = state_21698__$1;(statearr_21712_21739[(2)] = inst_21673);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (9)))
{var inst_21662 = (state_21698[(7)]);var inst_21675 = (state_21698[(2)]);var inst_21676 = (inst_21662 + (1));var inst_21662__$1 = inst_21676;var state_21698__$1 = (function (){var statearr_21713 = state_21698;(statearr_21713[(10)] = inst_21675);
(statearr_21713[(7)] = inst_21662__$1);
return statearr_21713;
})();var statearr_21714_21740 = state_21698__$1;(statearr_21714_21740[(2)] = null);
(statearr_21714_21740[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (5)))
{var inst_21682 = (state_21698[(2)]);var state_21698__$1 = (function (){var statearr_21715 = state_21698;(statearr_21715[(11)] = inst_21682);
return statearr_21715;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21698__$1,(12),dchan);
} else
{if((state_val_21699 === (14)))
{var inst_21684 = (state_21698[(8)]);var inst_21689 = cljs.core.apply.call(null,f,inst_21684);var state_21698__$1 = state_21698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21698__$1,(16),out,inst_21689);
} else
{if((state_val_21699 === (16)))
{var inst_21691 = (state_21698[(2)]);var state_21698__$1 = (function (){var statearr_21716 = state_21698;(statearr_21716[(12)] = inst_21691);
return statearr_21716;
})();var statearr_21717_21741 = state_21698__$1;(statearr_21717_21741[(2)] = null);
(statearr_21717_21741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (10)))
{var inst_21666 = (state_21698[(2)]);var inst_21667 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21698__$1 = (function (){var statearr_21718 = state_21698;(statearr_21718[(13)] = inst_21666);
return statearr_21718;
})();var statearr_21719_21742 = state_21698__$1;(statearr_21719_21742[(2)] = inst_21667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21699 === (8)))
{var inst_21680 = (state_21698[(2)]);var state_21698__$1 = state_21698;var statearr_21720_21743 = state_21698__$1;(statearr_21720_21743[(2)] = inst_21680);
(statearr_21720_21743[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6887__auto__,c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21724[(0)] = state_machine__6888__auto__);
(statearr_21724[(1)] = (1));
return statearr_21724;
});
var state_machine__6888__auto____1 = (function (state_21698){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_21698);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21725){if((e21725 instanceof Object))
{var ex__6891__auto__ = e21725;var statearr_21726_21744 = state_21698;(statearr_21726_21744[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21725;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21745 = state_21698;
state_21698 = G__21745;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_21698){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_21698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6954__auto__ = (function (){var statearr_21727 = f__6953__auto__.call(null);(statearr_21727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21728);
return statearr_21727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21728,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___21853 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21853,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21853,out){
return (function (state_21829){var state_val_21830 = (state_21829[(1)]);if((state_val_21830 === (7)))
{var inst_21808 = (state_21829[(7)]);var inst_21809 = (state_21829[(8)]);var inst_21808__$1 = (state_21829[(2)]);var inst_21809__$1 = cljs.core.nth.call(null,inst_21808__$1,(0),null);var inst_21810 = cljs.core.nth.call(null,inst_21808__$1,(1),null);var inst_21811 = (inst_21809__$1 == null);var state_21829__$1 = (function (){var statearr_21831 = state_21829;(statearr_21831[(7)] = inst_21808__$1);
(statearr_21831[(8)] = inst_21809__$1);
(statearr_21831[(9)] = inst_21810);
return statearr_21831;
})();if(cljs.core.truth_(inst_21811))
{var statearr_21832_21854 = state_21829__$1;(statearr_21832_21854[(1)] = (8));
} else
{var statearr_21833_21855 = state_21829__$1;(statearr_21833_21855[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (1)))
{var inst_21800 = cljs.core.vec.call(null,chs);var inst_21801 = inst_21800;var state_21829__$1 = (function (){var statearr_21834 = state_21829;(statearr_21834[(10)] = inst_21801);
return statearr_21834;
})();var statearr_21835_21856 = state_21829__$1;(statearr_21835_21856[(2)] = null);
(statearr_21835_21856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (4)))
{var inst_21801 = (state_21829[(10)]);var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21829__$1,(7),inst_21801);
} else
{if((state_val_21830 === (6)))
{var inst_21825 = (state_21829[(2)]);var state_21829__$1 = state_21829;var statearr_21836_21857 = state_21829__$1;(statearr_21836_21857[(2)] = inst_21825);
(statearr_21836_21857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (3)))
{var inst_21827 = (state_21829[(2)]);var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21829__$1,inst_21827);
} else
{if((state_val_21830 === (2)))
{var inst_21801 = (state_21829[(10)]);var inst_21803 = cljs.core.count.call(null,inst_21801);var inst_21804 = (inst_21803 > (0));var state_21829__$1 = state_21829;if(cljs.core.truth_(inst_21804))
{var statearr_21838_21858 = state_21829__$1;(statearr_21838_21858[(1)] = (4));
} else
{var statearr_21839_21859 = state_21829__$1;(statearr_21839_21859[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (11)))
{var inst_21801 = (state_21829[(10)]);var inst_21818 = (state_21829[(2)]);var tmp21837 = inst_21801;var inst_21801__$1 = tmp21837;var state_21829__$1 = (function (){var statearr_21840 = state_21829;(statearr_21840[(11)] = inst_21818);
(statearr_21840[(10)] = inst_21801__$1);
return statearr_21840;
})();var statearr_21841_21860 = state_21829__$1;(statearr_21841_21860[(2)] = null);
(statearr_21841_21860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (9)))
{var inst_21809 = (state_21829[(8)]);var state_21829__$1 = state_21829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21829__$1,(11),out,inst_21809);
} else
{if((state_val_21830 === (5)))
{var inst_21823 = cljs.core.async.close_BANG_.call(null,out);var state_21829__$1 = state_21829;var statearr_21842_21861 = state_21829__$1;(statearr_21842_21861[(2)] = inst_21823);
(statearr_21842_21861[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (10)))
{var inst_21821 = (state_21829[(2)]);var state_21829__$1 = state_21829;var statearr_21843_21862 = state_21829__$1;(statearr_21843_21862[(2)] = inst_21821);
(statearr_21843_21862[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21830 === (8)))
{var inst_21808 = (state_21829[(7)]);var inst_21809 = (state_21829[(8)]);var inst_21810 = (state_21829[(9)]);var inst_21801 = (state_21829[(10)]);var inst_21813 = (function (){var c = inst_21810;var v = inst_21809;var vec__21806 = inst_21808;var cs = inst_21801;return ((function (c,v,vec__21806,cs,inst_21808,inst_21809,inst_21810,inst_21801,state_val_21830,c__6952__auto___21853,out){
return (function (p1__21746_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21746_SHARP_);
});
;})(c,v,vec__21806,cs,inst_21808,inst_21809,inst_21810,inst_21801,state_val_21830,c__6952__auto___21853,out))
})();var inst_21814 = cljs.core.filterv.call(null,inst_21813,inst_21801);var inst_21801__$1 = inst_21814;var state_21829__$1 = (function (){var statearr_21844 = state_21829;(statearr_21844[(10)] = inst_21801__$1);
return statearr_21844;
})();var statearr_21845_21863 = state_21829__$1;(statearr_21845_21863[(2)] = null);
(statearr_21845_21863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21853,out))
;return ((function (switch__6887__auto__,c__6952__auto___21853,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21849 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21849[(0)] = state_machine__6888__auto__);
(statearr_21849[(1)] = (1));
return statearr_21849;
});
var state_machine__6888__auto____1 = (function (state_21829){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_21829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21850){if((e21850 instanceof Object))
{var ex__6891__auto__ = e21850;var statearr_21851_21864 = state_21829;(statearr_21851_21864[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21850;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21865 = state_21829;
state_21829 = G__21865;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_21829){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_21829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21853,out))
})();var state__6954__auto__ = (function (){var statearr_21852 = f__6953__auto__.call(null);(statearr_21852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21853);
return statearr_21852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21853,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___21958 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___21958,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___21958,out){
return (function (state_21935){var state_val_21936 = (state_21935[(1)]);if((state_val_21936 === (7)))
{var inst_21917 = (state_21935[(7)]);var inst_21917__$1 = (state_21935[(2)]);var inst_21918 = (inst_21917__$1 == null);var inst_21919 = cljs.core.not.call(null,inst_21918);var state_21935__$1 = (function (){var statearr_21937 = state_21935;(statearr_21937[(7)] = inst_21917__$1);
return statearr_21937;
})();if(inst_21919)
{var statearr_21938_21959 = state_21935__$1;(statearr_21938_21959[(1)] = (8));
} else
{var statearr_21939_21960 = state_21935__$1;(statearr_21939_21960[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (1)))
{var inst_21912 = (0);var state_21935__$1 = (function (){var statearr_21940 = state_21935;(statearr_21940[(8)] = inst_21912);
return statearr_21940;
})();var statearr_21941_21961 = state_21935__$1;(statearr_21941_21961[(2)] = null);
(statearr_21941_21961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (4)))
{var state_21935__$1 = state_21935;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21935__$1,(7),ch);
} else
{if((state_val_21936 === (6)))
{var inst_21930 = (state_21935[(2)]);var state_21935__$1 = state_21935;var statearr_21942_21962 = state_21935__$1;(statearr_21942_21962[(2)] = inst_21930);
(statearr_21942_21962[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (3)))
{var inst_21932 = (state_21935[(2)]);var inst_21933 = cljs.core.async.close_BANG_.call(null,out);var state_21935__$1 = (function (){var statearr_21943 = state_21935;(statearr_21943[(9)] = inst_21932);
return statearr_21943;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21935__$1,inst_21933);
} else
{if((state_val_21936 === (2)))
{var inst_21912 = (state_21935[(8)]);var inst_21914 = (inst_21912 < n);var state_21935__$1 = state_21935;if(cljs.core.truth_(inst_21914))
{var statearr_21944_21963 = state_21935__$1;(statearr_21944_21963[(1)] = (4));
} else
{var statearr_21945_21964 = state_21935__$1;(statearr_21945_21964[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (11)))
{var inst_21912 = (state_21935[(8)]);var inst_21922 = (state_21935[(2)]);var inst_21923 = (inst_21912 + (1));var inst_21912__$1 = inst_21923;var state_21935__$1 = (function (){var statearr_21946 = state_21935;(statearr_21946[(8)] = inst_21912__$1);
(statearr_21946[(10)] = inst_21922);
return statearr_21946;
})();var statearr_21947_21965 = state_21935__$1;(statearr_21947_21965[(2)] = null);
(statearr_21947_21965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (9)))
{var state_21935__$1 = state_21935;var statearr_21948_21966 = state_21935__$1;(statearr_21948_21966[(2)] = null);
(statearr_21948_21966[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (5)))
{var state_21935__$1 = state_21935;var statearr_21949_21967 = state_21935__$1;(statearr_21949_21967[(2)] = null);
(statearr_21949_21967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (10)))
{var inst_21927 = (state_21935[(2)]);var state_21935__$1 = state_21935;var statearr_21950_21968 = state_21935__$1;(statearr_21950_21968[(2)] = inst_21927);
(statearr_21950_21968[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21936 === (8)))
{var inst_21917 = (state_21935[(7)]);var state_21935__$1 = state_21935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21935__$1,(11),out,inst_21917);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___21958,out))
;return ((function (switch__6887__auto__,c__6952__auto___21958,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_21954 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21954[(0)] = state_machine__6888__auto__);
(statearr_21954[(1)] = (1));
return statearr_21954;
});
var state_machine__6888__auto____1 = (function (state_21935){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_21935);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e21955){if((e21955 instanceof Object))
{var ex__6891__auto__ = e21955;var statearr_21956_21969 = state_21935;(statearr_21956_21969[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21935);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21970 = state_21935;
state_21935 = G__21970;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_21935){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_21935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___21958,out))
})();var state__6954__auto__ = (function (){var statearr_21957 = f__6953__auto__.call(null);(statearr_21957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___21958);
return statearr_21957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___21958,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___22067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___22067,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___22067,out){
return (function (state_22042){var state_val_22043 = (state_22042[(1)]);if((state_val_22043 === (7)))
{var inst_22037 = (state_22042[(2)]);var state_22042__$1 = state_22042;var statearr_22044_22068 = state_22042__$1;(statearr_22044_22068[(2)] = inst_22037);
(statearr_22044_22068[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (1)))
{var inst_22019 = null;var state_22042__$1 = (function (){var statearr_22045 = state_22042;(statearr_22045[(7)] = inst_22019);
return statearr_22045;
})();var statearr_22046_22069 = state_22042__$1;(statearr_22046_22069[(2)] = null);
(statearr_22046_22069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (4)))
{var inst_22022 = (state_22042[(8)]);var inst_22022__$1 = (state_22042[(2)]);var inst_22023 = (inst_22022__$1 == null);var inst_22024 = cljs.core.not.call(null,inst_22023);var state_22042__$1 = (function (){var statearr_22047 = state_22042;(statearr_22047[(8)] = inst_22022__$1);
return statearr_22047;
})();if(inst_22024)
{var statearr_22048_22070 = state_22042__$1;(statearr_22048_22070[(1)] = (5));
} else
{var statearr_22049_22071 = state_22042__$1;(statearr_22049_22071[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (6)))
{var state_22042__$1 = state_22042;var statearr_22050_22072 = state_22042__$1;(statearr_22050_22072[(2)] = null);
(statearr_22050_22072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (3)))
{var inst_22039 = (state_22042[(2)]);var inst_22040 = cljs.core.async.close_BANG_.call(null,out);var state_22042__$1 = (function (){var statearr_22051 = state_22042;(statearr_22051[(9)] = inst_22039);
return statearr_22051;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22042__$1,inst_22040);
} else
{if((state_val_22043 === (2)))
{var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22042__$1,(4),ch);
} else
{if((state_val_22043 === (11)))
{var inst_22022 = (state_22042[(8)]);var inst_22031 = (state_22042[(2)]);var inst_22019 = inst_22022;var state_22042__$1 = (function (){var statearr_22052 = state_22042;(statearr_22052[(7)] = inst_22019);
(statearr_22052[(10)] = inst_22031);
return statearr_22052;
})();var statearr_22053_22073 = state_22042__$1;(statearr_22053_22073[(2)] = null);
(statearr_22053_22073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (9)))
{var inst_22022 = (state_22042[(8)]);var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22042__$1,(11),out,inst_22022);
} else
{if((state_val_22043 === (5)))
{var inst_22019 = (state_22042[(7)]);var inst_22022 = (state_22042[(8)]);var inst_22026 = cljs.core._EQ_.call(null,inst_22022,inst_22019);var state_22042__$1 = state_22042;if(inst_22026)
{var statearr_22055_22074 = state_22042__$1;(statearr_22055_22074[(1)] = (8));
} else
{var statearr_22056_22075 = state_22042__$1;(statearr_22056_22075[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (10)))
{var inst_22034 = (state_22042[(2)]);var state_22042__$1 = state_22042;var statearr_22057_22076 = state_22042__$1;(statearr_22057_22076[(2)] = inst_22034);
(statearr_22057_22076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22043 === (8)))
{var inst_22019 = (state_22042[(7)]);var tmp22054 = inst_22019;var inst_22019__$1 = tmp22054;var state_22042__$1 = (function (){var statearr_22058 = state_22042;(statearr_22058[(7)] = inst_22019__$1);
return statearr_22058;
})();var statearr_22059_22077 = state_22042__$1;(statearr_22059_22077[(2)] = null);
(statearr_22059_22077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___22067,out))
;return ((function (switch__6887__auto__,c__6952__auto___22067,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_22063 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22063[(0)] = state_machine__6888__auto__);
(statearr_22063[(1)] = (1));
return statearr_22063;
});
var state_machine__6888__auto____1 = (function (state_22042){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_22042);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e22064){if((e22064 instanceof Object))
{var ex__6891__auto__ = e22064;var statearr_22065_22078 = state_22042;(statearr_22065_22078[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22064;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22079 = state_22042;
state_22042 = G__22079;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_22042){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_22042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___22067,out))
})();var state__6954__auto__ = (function (){var statearr_22066 = f__6953__auto__.call(null);(statearr_22066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___22067);
return statearr_22066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___22067,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___22214 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___22214,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___22214,out){
return (function (state_22184){var state_val_22185 = (state_22184[(1)]);if((state_val_22185 === (7)))
{var inst_22180 = (state_22184[(2)]);var state_22184__$1 = state_22184;var statearr_22186_22215 = state_22184__$1;(statearr_22186_22215[(2)] = inst_22180);
(statearr_22186_22215[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (1)))
{var inst_22147 = (new Array(n));var inst_22148 = inst_22147;var inst_22149 = (0);var state_22184__$1 = (function (){var statearr_22187 = state_22184;(statearr_22187[(7)] = inst_22148);
(statearr_22187[(8)] = inst_22149);
return statearr_22187;
})();var statearr_22188_22216 = state_22184__$1;(statearr_22188_22216[(2)] = null);
(statearr_22188_22216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (4)))
{var inst_22152 = (state_22184[(9)]);var inst_22152__$1 = (state_22184[(2)]);var inst_22153 = (inst_22152__$1 == null);var inst_22154 = cljs.core.not.call(null,inst_22153);var state_22184__$1 = (function (){var statearr_22189 = state_22184;(statearr_22189[(9)] = inst_22152__$1);
return statearr_22189;
})();if(inst_22154)
{var statearr_22190_22217 = state_22184__$1;(statearr_22190_22217[(1)] = (5));
} else
{var statearr_22191_22218 = state_22184__$1;(statearr_22191_22218[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (15)))
{var inst_22174 = (state_22184[(2)]);var state_22184__$1 = state_22184;var statearr_22192_22219 = state_22184__$1;(statearr_22192_22219[(2)] = inst_22174);
(statearr_22192_22219[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (13)))
{var state_22184__$1 = state_22184;var statearr_22193_22220 = state_22184__$1;(statearr_22193_22220[(2)] = null);
(statearr_22193_22220[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (6)))
{var inst_22149 = (state_22184[(8)]);var inst_22170 = (inst_22149 > (0));var state_22184__$1 = state_22184;if(cljs.core.truth_(inst_22170))
{var statearr_22194_22221 = state_22184__$1;(statearr_22194_22221[(1)] = (12));
} else
{var statearr_22195_22222 = state_22184__$1;(statearr_22195_22222[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (3)))
{var inst_22182 = (state_22184[(2)]);var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22184__$1,inst_22182);
} else
{if((state_val_22185 === (12)))
{var inst_22148 = (state_22184[(7)]);var inst_22172 = cljs.core.vec.call(null,inst_22148);var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22184__$1,(15),out,inst_22172);
} else
{if((state_val_22185 === (2)))
{var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22184__$1,(4),ch);
} else
{if((state_val_22185 === (11)))
{var inst_22164 = (state_22184[(2)]);var inst_22165 = (new Array(n));var inst_22148 = inst_22165;var inst_22149 = (0);var state_22184__$1 = (function (){var statearr_22196 = state_22184;(statearr_22196[(10)] = inst_22164);
(statearr_22196[(7)] = inst_22148);
(statearr_22196[(8)] = inst_22149);
return statearr_22196;
})();var statearr_22197_22223 = state_22184__$1;(statearr_22197_22223[(2)] = null);
(statearr_22197_22223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (9)))
{var inst_22148 = (state_22184[(7)]);var inst_22162 = cljs.core.vec.call(null,inst_22148);var state_22184__$1 = state_22184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22184__$1,(11),out,inst_22162);
} else
{if((state_val_22185 === (5)))
{var inst_22148 = (state_22184[(7)]);var inst_22152 = (state_22184[(9)]);var inst_22149 = (state_22184[(8)]);var inst_22157 = (state_22184[(11)]);var inst_22156 = (inst_22148[inst_22149] = inst_22152);var inst_22157__$1 = (inst_22149 + (1));var inst_22158 = (inst_22157__$1 < n);var state_22184__$1 = (function (){var statearr_22198 = state_22184;(statearr_22198[(12)] = inst_22156);
(statearr_22198[(11)] = inst_22157__$1);
return statearr_22198;
})();if(cljs.core.truth_(inst_22158))
{var statearr_22199_22224 = state_22184__$1;(statearr_22199_22224[(1)] = (8));
} else
{var statearr_22200_22225 = state_22184__$1;(statearr_22200_22225[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (14)))
{var inst_22177 = (state_22184[(2)]);var inst_22178 = cljs.core.async.close_BANG_.call(null,out);var state_22184__$1 = (function (){var statearr_22202 = state_22184;(statearr_22202[(13)] = inst_22177);
return statearr_22202;
})();var statearr_22203_22226 = state_22184__$1;(statearr_22203_22226[(2)] = inst_22178);
(statearr_22203_22226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (10)))
{var inst_22168 = (state_22184[(2)]);var state_22184__$1 = state_22184;var statearr_22204_22227 = state_22184__$1;(statearr_22204_22227[(2)] = inst_22168);
(statearr_22204_22227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22185 === (8)))
{var inst_22148 = (state_22184[(7)]);var inst_22157 = (state_22184[(11)]);var tmp22201 = inst_22148;var inst_22148__$1 = tmp22201;var inst_22149 = inst_22157;var state_22184__$1 = (function (){var statearr_22205 = state_22184;(statearr_22205[(7)] = inst_22148__$1);
(statearr_22205[(8)] = inst_22149);
return statearr_22205;
})();var statearr_22206_22228 = state_22184__$1;(statearr_22206_22228[(2)] = null);
(statearr_22206_22228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___22214,out))
;return ((function (switch__6887__auto__,c__6952__auto___22214,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_22210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22210[(0)] = state_machine__6888__auto__);
(statearr_22210[(1)] = (1));
return statearr_22210;
});
var state_machine__6888__auto____1 = (function (state_22184){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_22184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e22211){if((e22211 instanceof Object))
{var ex__6891__auto__ = e22211;var statearr_22212_22229 = state_22184;(statearr_22212_22229[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22211;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22230 = state_22184;
state_22184 = G__22230;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_22184){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_22184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___22214,out))
})();var state__6954__auto__ = (function (){var statearr_22213 = f__6953__auto__.call(null);(statearr_22213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___22214);
return statearr_22213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___22214,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6952__auto___22373 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6952__auto___22373,out){
return (function (){var f__6953__auto__ = (function (){var switch__6887__auto__ = ((function (c__6952__auto___22373,out){
return (function (state_22343){var state_val_22344 = (state_22343[(1)]);if((state_val_22344 === (7)))
{var inst_22339 = (state_22343[(2)]);var state_22343__$1 = state_22343;var statearr_22345_22374 = state_22343__$1;(statearr_22345_22374[(2)] = inst_22339);
(statearr_22345_22374[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (1)))
{var inst_22302 = [];var inst_22303 = inst_22302;var inst_22304 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_22343__$1 = (function (){var statearr_22346 = state_22343;(statearr_22346[(7)] = inst_22303);
(statearr_22346[(8)] = inst_22304);
return statearr_22346;
})();var statearr_22347_22375 = state_22343__$1;(statearr_22347_22375[(2)] = null);
(statearr_22347_22375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (4)))
{var inst_22307 = (state_22343[(9)]);var inst_22307__$1 = (state_22343[(2)]);var inst_22308 = (inst_22307__$1 == null);var inst_22309 = cljs.core.not.call(null,inst_22308);var state_22343__$1 = (function (){var statearr_22348 = state_22343;(statearr_22348[(9)] = inst_22307__$1);
return statearr_22348;
})();if(inst_22309)
{var statearr_22349_22376 = state_22343__$1;(statearr_22349_22376[(1)] = (5));
} else
{var statearr_22350_22377 = state_22343__$1;(statearr_22350_22377[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (15)))
{var inst_22333 = (state_22343[(2)]);var state_22343__$1 = state_22343;var statearr_22351_22378 = state_22343__$1;(statearr_22351_22378[(2)] = inst_22333);
(statearr_22351_22378[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (13)))
{var state_22343__$1 = state_22343;var statearr_22352_22379 = state_22343__$1;(statearr_22352_22379[(2)] = null);
(statearr_22352_22379[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (6)))
{var inst_22303 = (state_22343[(7)]);var inst_22328 = inst_22303.length;var inst_22329 = (inst_22328 > (0));var state_22343__$1 = state_22343;if(cljs.core.truth_(inst_22329))
{var statearr_22353_22380 = state_22343__$1;(statearr_22353_22380[(1)] = (12));
} else
{var statearr_22354_22381 = state_22343__$1;(statearr_22354_22381[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (3)))
{var inst_22341 = (state_22343[(2)]);var state_22343__$1 = state_22343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22343__$1,inst_22341);
} else
{if((state_val_22344 === (12)))
{var inst_22303 = (state_22343[(7)]);var inst_22331 = cljs.core.vec.call(null,inst_22303);var state_22343__$1 = state_22343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22343__$1,(15),out,inst_22331);
} else
{if((state_val_22344 === (2)))
{var state_22343__$1 = state_22343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22343__$1,(4),ch);
} else
{if((state_val_22344 === (11)))
{var inst_22311 = (state_22343[(10)]);var inst_22307 = (state_22343[(9)]);var inst_22321 = (state_22343[(2)]);var inst_22322 = [];var inst_22323 = inst_22322.push(inst_22307);var inst_22303 = inst_22322;var inst_22304 = inst_22311;var state_22343__$1 = (function (){var statearr_22355 = state_22343;(statearr_22355[(7)] = inst_22303);
(statearr_22355[(11)] = inst_22321);
(statearr_22355[(12)] = inst_22323);
(statearr_22355[(8)] = inst_22304);
return statearr_22355;
})();var statearr_22356_22382 = state_22343__$1;(statearr_22356_22382[(2)] = null);
(statearr_22356_22382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (9)))
{var inst_22303 = (state_22343[(7)]);var inst_22319 = cljs.core.vec.call(null,inst_22303);var state_22343__$1 = state_22343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22343__$1,(11),out,inst_22319);
} else
{if((state_val_22344 === (5)))
{var inst_22311 = (state_22343[(10)]);var inst_22307 = (state_22343[(9)]);var inst_22304 = (state_22343[(8)]);var inst_22311__$1 = f.call(null,inst_22307);var inst_22312 = cljs.core._EQ_.call(null,inst_22311__$1,inst_22304);var inst_22313 = cljs.core.keyword_identical_QMARK_.call(null,inst_22304,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_22314 = (inst_22312) || (inst_22313);var state_22343__$1 = (function (){var statearr_22357 = state_22343;(statearr_22357[(10)] = inst_22311__$1);
return statearr_22357;
})();if(cljs.core.truth_(inst_22314))
{var statearr_22358_22383 = state_22343__$1;(statearr_22358_22383[(1)] = (8));
} else
{var statearr_22359_22384 = state_22343__$1;(statearr_22359_22384[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (14)))
{var inst_22336 = (state_22343[(2)]);var inst_22337 = cljs.core.async.close_BANG_.call(null,out);var state_22343__$1 = (function (){var statearr_22361 = state_22343;(statearr_22361[(13)] = inst_22336);
return statearr_22361;
})();var statearr_22362_22385 = state_22343__$1;(statearr_22362_22385[(2)] = inst_22337);
(statearr_22362_22385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (10)))
{var inst_22326 = (state_22343[(2)]);var state_22343__$1 = state_22343;var statearr_22363_22386 = state_22343__$1;(statearr_22363_22386[(2)] = inst_22326);
(statearr_22363_22386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22344 === (8)))
{var inst_22303 = (state_22343[(7)]);var inst_22311 = (state_22343[(10)]);var inst_22307 = (state_22343[(9)]);var inst_22316 = inst_22303.push(inst_22307);var tmp22360 = inst_22303;var inst_22303__$1 = tmp22360;var inst_22304 = inst_22311;var state_22343__$1 = (function (){var statearr_22364 = state_22343;(statearr_22364[(7)] = inst_22303__$1);
(statearr_22364[(14)] = inst_22316);
(statearr_22364[(8)] = inst_22304);
return statearr_22364;
})();var statearr_22365_22387 = state_22343__$1;(statearr_22365_22387[(2)] = null);
(statearr_22365_22387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6952__auto___22373,out))
;return ((function (switch__6887__auto__,c__6952__auto___22373,out){
return (function() {
var state_machine__6888__auto__ = null;
var state_machine__6888__auto____0 = (function (){var statearr_22369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22369[(0)] = state_machine__6888__auto__);
(statearr_22369[(1)] = (1));
return statearr_22369;
});
var state_machine__6888__auto____1 = (function (state_22343){while(true){
var ret_value__6889__auto__ = (function (){try{while(true){
var result__6890__auto__ = switch__6887__auto__.call(null,state_22343);if(cljs.core.keyword_identical_QMARK_.call(null,result__6890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6890__auto__;
}
break;
}
}catch (e22370){if((e22370 instanceof Object))
{var ex__6891__auto__ = e22370;var statearr_22371_22388 = state_22343;(statearr_22371_22388[(5)] = ex__6891__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22370;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22389 = state_22343;
state_22343 = G__22389;
continue;
}
} else
{return ret_value__6889__auto__;
}
break;
}
});
state_machine__6888__auto__ = function(state_22343){
switch(arguments.length){
case 0:
return state_machine__6888__auto____0.call(this);
case 1:
return state_machine__6888__auto____1.call(this,state_22343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6888__auto____0;
state_machine__6888__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6888__auto____1;
return state_machine__6888__auto__;
})()
;})(switch__6887__auto__,c__6952__auto___22373,out))
})();var state__6954__auto__ = (function (){var statearr_22372 = f__6953__auto__.call(null);(statearr_22372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6952__auto___22373);
return statearr_22372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6954__auto__);
});})(c__6952__auto___22373,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map