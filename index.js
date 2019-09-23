'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondWidgets = exports.FirstWidgets = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FirstWidgets() {
  return _react2.default.createElement(
    'div',
    null,
    'Hi Team'
  );
}
function SecondWidgets() {
  return _react2.default.createElement(
    'div',
    null,
    'This is our multiple widgets implemantion'
  );
}

exports.FirstWidgets = FirstWidgets;
exports.SecondWidgets = SecondWidgets;