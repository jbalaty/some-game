// Compiled by ClojureScript 0.0-2311
goog.provide('game_test.setup');
goog.require('cljs.core');
game_test.setup.setup_canvas = (function setup_canvas(canvas_width,canvas_height){var canvas = document.createElement("canvas");var body = document.body;body.appendChild(canvas);
(canvas["width"] = canvas_width);
(canvas["height"] = canvas_height);
return canvas.getContext("2d");
});

//# sourceMappingURL=setup.js.map