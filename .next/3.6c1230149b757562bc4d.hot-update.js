webpackHotUpdate(3,{

/***/ "./components/ui/spinner/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;
var _jsxFileName = '/Users/barrenechea/Projects/inari/components/ui/spinner/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__("./components/ui/spinner/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles


var Spinner = exports.Spinner = function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var _props = this.props,
          className = _props.className,
          style = _props.style;

      var customClass = (0, _classnames3.default)(_defineProperty({}, className, !!className));

      return _react2.default.createElement(
        'div',
        (_React$createElement = { className: 'c-spinner' }, _defineProperty(_React$createElement, 'className', customClass), _defineProperty(_React$createElement, '__source', {
          fileName: _jsxFileName,
          lineNumber: 24
        }), _React$createElement),
        _react2.default.createElement(
          'div',
          { className: 'spinner-box', style: style, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          _react2.default.createElement('div', { className: 'icon', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Spinner;
}(_react.PureComponent);

Spinner.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
Spinner.defaultProps = {
  className: null,
  style: null
};
var _default = Spinner;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, 'Spinner', '/Users/barrenechea/Projects/inari/components/ui/spinner/index.js');
  reactHotLoader.register(_default, 'default', '/Users/barrenechea/Projects/inari/components/ui/spinner/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.6c1230149b757562bc4d.hot-update.js.map