"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _accounts = _interopRequireDefault(require("./routes/accounts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//--- routes to be imported

//----

var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// let port = 8080;

var app = (0, _express["default"])();
var environment = process.env.NODE_ENV;
if (environment === 'development') {
  _dotenv["default"].config({
    path: process.cwd() + "/.env.development"
  });
} else if (environment === 'production') {
  _dotenv["default"].config({
    path: process.cwd() + "/.env.production"
  });
}
var port = process.env.PORT || 80;
var host = process.env.HOST || 'localhost';
app.use('/api', _accounts["default"]);
app.get('/', function (req, res) {
  res.status(200).send('homepage');
});
app.listen(port, function () {
  console.log("listening on port ".concat(host, ":").concat(port));
});
//# sourceMappingURL=server.js.map