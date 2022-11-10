"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _orderRouter = _interopRequireDefault(require("./routers/orderRouter"));

var _productRouter = _interopRequireDefault(require("./routers/productRouter"));

var _uploadRouter = _interopRequireDefault(require("./routers/uploadRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(_config.default.MONGODB_URL).then(() => {
  console.log('connected to mongodb');
}).catch(error => {// console.log(error.reason);
});

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use('/api/uploads', _uploadRouter.default);
app.use(_bodyParser.default.json());
app.use('/api/users', _userRouter.default);
app.use('/api/products', _productRouter.default);
app.use('/api/orders', _orderRouter.default);
app.get('/api/paypal/clientId', (req, res) => {
  res.send({
    clientId: _config.default.PAYPAL_CLIENT_ID
  });
});
app.use('/uploads', _express.default.static(_path.default.join(__dirname, '/../uploads')));
app.use(_express.default.static(_path.default.join(__dirname, '/../frontend')));
app.get('*', (req, res) => {
  res.sendFile(_path.default.join(__dirname, '/../frontend/index.html'));
});
app.use((err, req, res, next) => {
  const status = err.name && err.name === 'validationError' ? 400 : 500;
  res.status(status).send({
    message: err.message
  });
});
app.listen(5000, () => {
  console.log('Server at http://localhost:5000');
});