// Compiled by ClojureScript 0.0-2311
goog.provide('game_test.core');
goog.require('cljs.core');
goog.require('game_test.setup');
goog.require('game_test.game_logic');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('figwheel.client');
goog.require('om.dom');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('game_test.setup');
goog.require('om.core');
goog.require('game_test.renderer_canvas');
goog.require('game_test.game_logic');
goog.require('game_test.renderer_canvas');
game_test.core.localhost_QMARK_ = (window.location.host.indexOf("localhost") >= (0));
if(cljs.core.truth_(game_test.core.localhost_QMARK_))
{cljs.core.enable_console_print_BANG_.call(null);
} else
{}
if(typeof game_test.core.app_state !== 'undefined')
{} else
{game_test.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"*@*#*#"], null));
}
om.core.root.call(null,(function (app,owner){if(typeof game_test.core.t13395 !== 'undefined')
{} else
{
/**
* @constructor
*/
game_test.core.t13395 = (function (owner,app,meta13396){
this.owner = owner;
this.app = app;
this.meta13396 = meta13396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
game_test.core.t13395.cljs$lang$type = true;
game_test.core.t13395.cljs$lang$ctorStr = "game-test.core/t13395";
game_test.core.t13395.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"game-test.core/t13395");
});
game_test.core.t13395.prototype.om$core$IRender$ = true;
game_test.core.t13395.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});
game_test.core.t13395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13397){var self__ = this;
var _13397__$1 = this;return self__.meta13396;
});
game_test.core.t13395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13397,meta13396__$1){var self__ = this;
var _13397__$1 = this;return (new game_test.core.t13395(self__.owner,self__.app,meta13396__$1));
});
game_test.core.__GT_t13395 = (function __GT_t13395(owner__$1,app__$1,meta13396){return (new game_test.core.t13395(owner__$1,app__$1,meta13396));
});
}
return (new game_test.core.t13395(owner,app,null));
}),game_test.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
game_test.core.canvas_width = (400);
game_test.core.canvas_height = (400);
game_test.core.ctx = game_test.setup.setup_canvas.call(null,game_test.core.canvas_width,game_test.core.canvas_height);
game_test.core.entities = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(123),new cljs.core.Keyword(null,"y","y",-1757859776),(147)], null)], null)], null));
game_test.core.render = (function render(){game_test.renderer_canvas.draw_playfield.call(null,game_test.core.ctx,game_test.core.canvas_width,game_test.core.canvas_height);
return game_test.renderer_canvas.draw_entities.call(null,game_test.core.ctx,cljs.core.deref.call(null,game_test.core.entities));
});
game_test.core.render.call(null);

//# sourceMappingURL=core.js.map