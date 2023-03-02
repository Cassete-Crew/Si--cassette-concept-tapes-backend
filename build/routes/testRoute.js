"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const route = _express.default.Router();
route.use(_bodyParser.default.json());
route.get("/who-is-gay", (req, res) => {
  res.status(200).send('joa');
});
var _default = route;
exports.default = _default;