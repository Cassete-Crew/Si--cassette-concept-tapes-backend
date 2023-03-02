"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _testRoute = _interopRequireDefault(require("./routes/testRoute"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//--- routes to be imported

//----

const environment = process.env.NODE_ENV;
if (environment === 'development') {
  _dotenv.default.config({
    path: process.cwd() + "/.env.development"
  });
} else if (environment === 'production') {
  _dotenv.default.config({
    path: process.cwd() + "/.env.production"
  });
}
const port = process.env.PORT || 80;
const host = process.env.HOST || 'localhost';
const app = (0, _express.default)();
app.use('/api', _testRoute.default);
app.get('/', (req, res) => {
  res.status(200).send('joa is a gay');
});
app.listen(port, () => {
  console.log(`listening on port ${host}:${port}`);
});