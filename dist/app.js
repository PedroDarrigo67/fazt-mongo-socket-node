"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var app = (0, _express["default"])();
app.use(_express["default"]["static"](__dirname + "/public"));
var _default = app;
exports["default"] = _default;