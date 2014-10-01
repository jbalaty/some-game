// Compiled by ClojureScript 0.0-2311
goog.provide('game_test.renderer_canvas');
goog.require('cljs.core');
game_test.renderer_canvas.draw_playfield = (function draw_playfield(ctx,canvas_width,canvas_height){(ctx["fillStyle"] = "#AAAAAA");
return ctx.fillRect((0),(0),canvas_width,canvas_height);
});
game_test.renderer_canvas.draw_entity = (function draw_entity(ctx,entity){var x = cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"x","x",2099068185)], null));var y = cljs.core.get_in.call(null,entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"y","y",-1757859776)], null));var size = (4);return ctx.fillRect(x,y,size,size);
});
game_test.renderer_canvas.draw_entities = (function draw_entities(ctx,entities){ctx.font = "30px Arial";
(ctx["fillStyle"] = "#000000");
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__13373_SHARP_){return game_test.renderer_canvas.draw_entity.call(null,ctx,p1__13373_SHARP_);
}),entities));
});

//# sourceMappingURL=renderer_canvas.js.map