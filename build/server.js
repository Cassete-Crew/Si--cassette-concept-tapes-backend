"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _accounts = _interopRequireDefault(require("./routes/accounts"));
var _book = _interopRequireDefault(require("./routes/book.js"));
var _default = _interopRequireDefault(require("../config/default.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//--- routes to be imported

//----

var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// let port = 8080;

var app = (0, _express["default"])();
//we load the db location from the JSON files

var environment = process.env.NODE_ENV;

//db options
var options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};
//db connection   
// const dbHost = process.env.DB_HOST;
// dbHost.toString();
var url = "mongodb+srv://Admin:G1w4bV6BwWPUYigT@cluster0.ivy05xp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

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