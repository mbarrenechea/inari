module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(11);

var _document2 = _interopRequireDefault(_document);

var _icons = __webpack_require__(12);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Layout components


var stylesURL = '';

var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'html',
        {
          lang: 'en'
        },
        _react2.default.createElement(
          _document.Head,
          null,
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,600' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: stylesURL + '/_next/static/style.css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(_icons2.default, null),
          _react2.default.createElement(_document.Main, null),
          _react2.default.createElement(_document.NextScript, null)
        )
      );
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = function (_React$Component) {
  _inherits(Icons, _React$Component);

  function Icons() {
    _classCallCheck(this, Icons);

    return _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).apply(this, arguments));
  }

  _createClass(Icons, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      // This component doesn't need to re-render because
      // everything is static
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        {
          'aria-hidden': 'true',
          style: { position: 'absolute', width: 0, height: 0, overflow: 'hidden' }
        },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'symbol',
            { id: 'icon-comillas', viewBox: '0 0 45 32' },
            _react2.default.createElement(
              'title',
              null,
              'comillas'
            ),
            _react2.default.createElement('path', { d: 'M7.933 15.588l4.193-0.678c1.964 0 3.721 0.659 5.27 1.977s2.323 3.238 2.323 5.761c0 2.523-0.831 4.65-2.493 6.382s-3.985 2.598-6.97 2.598c-2.984 0-5.44-1.13-7.366-3.389s-2.89-5.177-2.89-8.754c0-3.577 1.379-7.135 4.136-10.674s6.705-6.476 11.843-8.811l0.793 1.92c-7.102 3.916-10.653 7.869-10.653 11.86 0 1.205 0.604 1.807 1.813 1.807zM32.865 15.588l4.193-0.678c1.964 0 3.721 0.659 5.27 1.977s2.323 3.238 2.323 5.761c0 2.523-0.831 4.65-2.493 6.382s-3.985 2.598-6.97 2.598c-2.984 0-5.44-1.13-7.366-3.389s-2.89-5.177-2.89-8.754c0-3.577 1.379-7.135 4.136-10.674s6.705-6.476 11.843-8.811l0.793 1.92c-7.102 3.916-10.653 7.869-10.653 11.86 0 1.205 0.604 1.807 1.813 1.807z' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-arrow-left', viewBox: '0 0 32 32' },
            _react2.default.createElement(
              'title',
              null,
              'arrow-left'
            ),
            _react2.default.createElement('path', { d: 'M4 15.2l10.667 8v-16z' }),
            _react2.default.createElement('path', { strokeWidth: '2.6667', strokeMiterlimit: '4', strokeLinecap: 'square', strokeLinejoin: 'miter', d: 'M9.333 15.2h18.667' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-arrow-right', viewBox: '0 0 32 32' },
            _react2.default.createElement(
              'title',
              null,
              'arrow-right'
            ),
            _react2.default.createElement('path', { d: 'M28 15.2l-10.667 8v-16z' }),
            _react2.default.createElement('path', { strokeWidth: '2.6667', strokeMiterlimit: '4', strokeLinecap: 'square', strokeLinejoin: 'miter', d: 'M22.667 15.2h-18.667' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-facebook', viewBox: '0 0 32 32' },
            _react2.default.createElement(
              'title',
              null,
              'facebook'
            ),
            _react2.default.createElement('path', { d: 'M17.616 13.018h4.384v4.277h-4.384v9.981h-4.384v-9.981h-4.384v-4.277h4.384v-1.789c0-1.695 0.547-3.837 1.634-5.007 1.087-1.173 2.445-1.758 4.072-1.758h3.063v4.277h-3.069c-0.728 0-1.315 0.573-1.315 1.282v2.996z' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-instagram', viewBox: '0 0 32 32' },
            _react2.default.createElement(
              'title',
              null,
              'instagram'
            ),
            _react2.default.createElement('path', { d: 'M16 10c-3.281 0-6 2.672-6 6s2.672 6 6 6c3.328 0 6-2.719 6-6s-2.719-6-6-6zM16 19.844c-2.109 0-3.844-1.734-3.844-3.844s1.734-3.844 3.844-3.844c2.109 0 3.844 1.734 3.844 3.844s-1.734 3.844-3.844 3.844z' }),
            _react2.default.createElement('path', { d: 'M23 9c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z' }),
            _react2.default.createElement('path', { d: 'M26.065 5.984c-1.258-1.306-3.048-1.984-5.081-1.984h-9.968c-4.21 0-7.016 2.806-7.016 7.016v9.919c0 2.081 0.677 3.871 2.032 5.177 1.306 1.258 3.048 1.887 5.032 1.887h9.871c2.081 0 3.823-0.677 5.081-1.887 1.306-1.258 1.984-3.048 1.984-5.129v-9.968c0-2.032-0.677-3.774-1.935-5.032zM25.871 20.984c0 1.5-0.532 2.71-1.403 3.532s-2.081 1.258-3.532 1.258h-9.871c-1.452 0-2.661-0.435-3.532-1.258-0.871-0.871-1.306-2.081-1.306-3.581v-9.919c0-1.452 0.435-2.661 1.306-3.532 0.823-0.823 2.081-1.258 3.532-1.258h9.968c1.452 0 2.661 0.435 3.532 1.306 0.823 0.871 1.306 2.081 1.306 3.484v9.968z' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-twitter', viewBox: '0 0 32 32' },
            _react2.default.createElement(
              'title',
              null,
              'twitter'
            ),
            _react2.default.createElement('path', { d: 'M28.216 8.37c-0.893 0.401-1.847 0.672-2.853 0.797 1.026-0.625 1.817-1.615 2.186-2.792-0.96 0.578-2.022 1-3.156 1.224-0.908-0.984-2.201-1.599-3.628-1.599-2.745 0-4.967 2.26-4.967 5.047 0 0.396 0.041 0.781 0.128 1.151-4.131-0.208-7.795-2.219-10.243-5.276-0.426 0.745-0.672 1.615-0.672 2.536 0 1.75 0.878 3.297 2.212 4.203-0.816-0.021-1.586-0.25-2.253-0.63 0 0.021 0 0.042 0 0.063 0 2.448 1.714 4.484 3.987 4.948-0.416 0.115-0.857 0.177-1.309 0.177-0.318 0-0.631-0.031-0.934-0.094 0.631 2.005 2.468 3.464 4.644 3.505-1.699 1.354-3.844 2.161-6.173 2.161-0.4 0-0.795-0.026-1.185-0.073 2.196 1.448 4.808 2.281 7.61 2.281 9.144 0 14.143-7.693 14.143-14.365 0-0.219-0.005-0.438-0.015-0.651 0.97-0.714 1.811-1.604 2.479-2.615z' })
          ),
          _react2.default.createElement(
            'symbol',
            { id: 'icon-logo', viewBox: '0 0 154 32' },
            _react2.default.createElement(
              'title',
              null,
              'logo'
            ),
            _react2.default.createElement('path', { d: 'M15.317 1.015c-7.897 0.266-14.24 6.773-14.24 14.734 0 3.867 1.52 7.488 4.077 10.176v-10.176c0-5.713 4.515-10.392 10.162-10.655v-4.079zM16.36 26.418v4.080c7.897-0.266 14.239-6.774 14.239-14.736 0-3.866-1.519-7.484-4.075-10.172v10.172c0 5.713-4.515 10.392-10.164 10.656zM15.857 31.514h-0.503v-6.090h0.503c5.327 0 9.661-4.334 9.661-9.661v-11.134c-1.187-1.033-2.549-1.885-4.048-2.502l-0.032 3.464v10.159c0 3.098-2.52 5.617-5.617 5.617h-0.504v-10.199c-2.306 0.252-4.106 2.21-4.106 4.582l-0.017 15.077-0.671-0.24c-6.252-2.231-10.452-8.194-10.452-14.838 0-8.684 7.065-15.749 15.75-15.749h0.504v6.089h-0.504c-5.326 0-9.659 4.334-9.659 9.66v11.139c1.181 1.029 2.536 1.877 4.027 2.493l0.016-13.632c0-3.096 2.519-5.616 5.616-5.616h0.504v10.199c2.306-0.251 4.107-2.211 4.107-4.583v-10.164l0.045-4.901 0.665 0.237c6.26 2.229 10.465 8.193 10.465 14.84 0 8.685-7.064 15.751-15.749 15.751z' }),
            _react2.default.createElement('path', { d: 'M149.661 23.050h2.82v-14.256h-2.82z' }),
            _react2.default.createElement('path', { d: 'M135.283 11.592v-2.815l-1.473 0.025c-3.928 0-7.123 3.195-7.123 7.122v7.143h2.827v-7.143c0-2.37 1.927-4.297 4.296-4.297l1.473-0.035z' }),
            _react2.default.createElement('path', { d: 'M105.089 8.761c3.953 0 7.171 3.216 7.171 7.17v7.159h-2.847v-7.159c0-2.384-1.94-4.324-4.324-4.324s-4.323 1.94-4.323 4.324c0 2.384 1.939 4.324 4.323 4.324h0.196v2.846h-0.196c-3.953 0-7.169-3.217-7.169-7.17s3.217-7.17 7.169-7.17z' }),
            _react2.default.createElement('path', { d: 'M51.892 23.047h2.82v-14.256h-2.82z' }),
            _react2.default.createElement('path', { d: 'M76.334 8.77c3.964 0 7.188 3.225 7.188 7.188v7.132h-2.852v-7.132c0-2.391-1.946-4.337-4.337-4.337s-4.337 1.946-4.337 4.337v7.132h-2.852v-7.132c0-3.963 3.225-7.188 7.189-7.188z' })
          )
        )
      );
    }
  }]);

  return Icons;
}(_react2.default.Component);

exports.default = Icons;

/***/ })
/******/ ]);