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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-plx");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResponsive = exports.setSizes = undefined;

var _mobileDetect = __webpack_require__(22);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _reduxTools = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSizes = exports.setSizes = (0, _reduxTools.createAction)('responsive/setSizes');
var setResponsive = exports.setResponsive = (0, _reduxTools.createThunkAction)('responsive/setResponsive', function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers;

  return function (dispatch) {
    var ua = headers['user-agent'] || headers['User-Agent'];
    var md = new _mobileDetect2.default(ua);
    var sizes = {
      phone: !!md.phone(),
      tablet: !!md.tablet(),
      mobile: !!md.mobile(),
      desktop: !md.mobile()
    };

    dispatch(setSizes(sizes));
  };
});

exports.default = {
  setSizes: setSizes,
  setResponsive: setResponsive
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-tools");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Customize your breakpoints here
var BREAKPOINTS = exports.BREAKPOINTS = {
  small: 768, // 48rem
  medium: 1024, // 64rem
  large: 1280 // 80rem
};

var SIZES = exports.SIZES = {
  phone: BREAKPOINTS.small - 10,
  tablet: BREAKPOINTS.medium - 10,
  desktop: BREAKPOINTS.large - 10
};

exports.default = { BREAKPOINTS: BREAKPOINTS, SIZES: SIZES };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responsive = __webpack_require__(6);

exports.default = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: true,
  fakeWidth: _responsive.SIZES.desktop
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.reducers = exports.actions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(30);

var _actions = __webpack_require__(31);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(32);

var reducers = _interopRequireWildcard(_reducers);

var _initialState = __webpack_require__(33);

var _initialState2 = _interopRequireDefault(_initialState);

var _component = __webpack_require__(34);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Mandatory
exports.actions = actions;
exports.reducers = reducers;
exports.initialState = _initialState2.default;
exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state.header, {
    routes: state.routes,
    responsive: state.responsive
  });
}, actions)(_component2.default);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(19);

var _page2 = _interopRequireDefault(_page);

var _nextReduxWrapper = __webpack_require__(23);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(24);

var _home = __webpack_require__(38);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Redux


var HomePage = function (_Page) {
  _inherits(HomePage, _Page);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_home2.default, null);
    }
  }]);

  return HomePage;
}(_page2.default);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(HomePage);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

__webpack_require__(21);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Global styles


// Global modules


var Page = function (_PureComponent) {
  _inherits(Page, _PureComponent);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var asPath = _ref.asPath,
            pathname = _ref.pathname,
            query = _ref.query,
            req = _ref.req,
            store = _ref.store,
            isServer = _ref.isServer;
        var url;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Routes
                url = { asPath: asPath, pathname: pathname, query: query };

                // Mobile detection

                if (isServer) {
                  store.dispatch((0, _actions.setResponsive)(req));
                }

                return _context.abrupt('return', { isServer: isServer, url: url });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(_react.PureComponent);

exports.default = Page;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("mobile-detect");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = __webpack_require__(25);

var _reduxDevtoolsExtension = __webpack_require__(26);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxTools = __webpack_require__(5);

var _responsive = __webpack_require__(28);

var responsive = _interopRequireWildcard(_responsive);

var _header = __webpack_require__(8);

var header = _interopRequireWildcard(_header);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages
// import * as home from 'layout/home'

// Modules
var reducer = (0, _redux.combineReducers)({
  // Modules
  responsive: (0, _reduxTools.handleModule)(responsive),

  // Layout
  header: (0, _reduxTools.handleModule)(header)

  // Pages
  // home: handleModule(home)
});

// Layout


// New modules


var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)(reducer, initialState,
  /* Redux dev tool, install chrome extension in
   * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en */
  (0, _reduxDevtoolsExtension.composeWithDevTools)(
  /* The router middleware MUST be before thunk otherwise the URL changes
  * inside a thunk function won't work properly */
  (0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

exports.initStore = initStore;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = exports.initialState = exports.actions = undefined;

var _actions = __webpack_require__(3);

var actions = _interopRequireWildcard(_actions);

var _reducers = __webpack_require__(29);

var reducers = _interopRequireWildcard(_reducers);

var _initialState = __webpack_require__(7);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.actions = actions;
exports.initialState = _initialState2.default;
exports.reducers = reducers;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _responsive = __webpack_require__(6);

var _actions = __webpack_require__(3);

var actions = _interopRequireWildcard(_actions);

var _initialState = __webpack_require__(7);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, actions.setSizes, function (state, _ref) {
  var payload = _ref.payload;

  var _initialState$payload = _extends({}, _initialState2.default, payload),
      mobile = _initialState$payload.mobile,
      tablet = _initialState$payload.tablet,
      phone = _initialState$payload.phone,
      desktop = _initialState$payload.desktop;

  var fakeWidth = void 0;

  if (mobile) {
    if (phone) {
      fakeWidth = _responsive.SIZES.phone;
    } else if (tablet) {
      fakeWidth = _responsive.SIZES.tablet;
    } else {
      // TODO - should we ever get here? default to the lowest value i guess
      fakeWidth = _responsive.SIZES.phone;
    }
  } else if (desktop) {
    fakeWidth = _responsive.SIZES.desktop;
  } else {
    fakeWidth = _responsive.SIZES.desktop;
  }

  return _extends({}, state, { mobile: mobile, tablet: tablet, phone: phone, desktop: desktop, fakeWidth: fakeWidth });
});

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { items: [] };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icon = __webpack_require__(35);

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Styles


var Header = function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'c-header' },
        _react2.default.createElement(
          'h1',
          { className: 'header-logo' },
          _react2.default.createElement(
            'span',
            null,
            'Estudio dental Inari'
          ),
          _react2.default.createElement(
            'svg',
            null,
            _react2.default.createElement('use', { xlinkHref: '#icon-logo' })
          )
        ),
        _react2.default.createElement(
          'nav',
          { className: 'header-nav' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                _react2.default.createElement(_icon2.default, { name: 'icon-facebook', className: '-small' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                _react2.default.createElement(_icon2.default, { name: 'icon-twitter', className: '-small' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                _react2.default.createElement(_icon2.default, { name: 'icon-instagram', className: '-small' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Contacto: ',
              _react2.default.createElement(
                'a',
                { href: 'tel:679242809' },
                '679 242 809'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.PureComponent);

exports.default = Header;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(4);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          className = _props.className;


      var classNames = (0, _classnames3.default)(_defineProperty({}, className, !!className));

      return _react2.default.createElement(
        'svg',
        { className: 'c-icon ' + classNames },
        _react2.default.createElement('use', { xlinkHref: '#' + name })
      );
    }
  }]);

  return Icon;
}(_react2.default.PureComponent);

Icon.defaultProps = {
  name: '',
  className: ''
};
exports.default = Icon;

/***/ }),
/* 36 */
/***/ (function(module, exports) {



/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(39);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(40);

var _layout2 = _interopRequireDefault(_layout);

var _hero = __webpack_require__(50);

var _hero2 = _interopRequireDefault(_hero);

var _services = __webpack_require__(53);

var _services2 = _interopRequireDefault(_services);

var _diferentiation = __webpack_require__(56);

var _diferentiation2 = _interopRequireDefault(_diferentiation);

var _team = __webpack_require__(59);

var _team2 = _interopRequireDefault(_team);

var _testimonials = __webpack_require__(62);

var _testimonials2 = _interopRequireDefault(_testimonials);

var _contact = __webpack_require__(65);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Layout


// Components


var HomeComponent = function (_React$Component) {
  _inherits(HomeComponent, _React$Component);

  function HomeComponent() {
    _classCallCheck(this, HomeComponent);

    return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).apply(this, arguments));
  }

  _createClass(HomeComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _layout2.default,
        {
          title: 'Home',
          description: 'Home description'
        },
        _react2.default.createElement(_hero2.default, null),
        _react2.default.createElement(_services2.default, null),
        _react2.default.createElement(_diferentiation2.default, null),
        _react2.default.createElement(_team2.default, null),
        _react2.default.createElement(_contact2.default, null),
        _react2.default.createElement(_testimonials2.default, null)
      );
    }
  }]);

  return HomeComponent;
}(_react2.default.Component);

exports.default = HomeComponent;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(41);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _analytics = __webpack_require__(42);

var _head = __webpack_require__(44);

var _head2 = _interopRequireDefault(_head);

var _header = __webpack_require__(8);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(47);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utils


// Components


var LayoutApp = function (_React$Component) {
  _inherits(LayoutApp, _React$Component);

  function LayoutApp() {
    _classCallCheck(this, LayoutApp);

    return _possibleConstructorReturn(this, (LayoutApp.__proto__ || Object.getPrototypeOf(LayoutApp)).apply(this, arguments));
  }

  _createClass(LayoutApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Google Analytics
      if (!window.GA_INITIALIZED) {
        (0, _analytics.initGA)();
        window.GA_INITIALIZED = true;
      }
      (0, _analytics.logPageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description;


      return _react2.default.createElement(
        'div',
        { id: '#main', className: 'l-page' },
        _react2.default.createElement(_head2.default, {
          title: title,
          description: description
        }),
        _react2.default.createElement(_header2.default, null),
        this.props.children,
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return LayoutApp;
}(_react2.default.Component);

exports.default = LayoutApp;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logEvent = exports.logPageView = exports.initGA = undefined;

var _reactGa = __webpack_require__(43);

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = exports.initGA = function initGA() {
  if (true) {
    _reactGa2.default.initialize(undefined);
  } else {
    console.info('[GA] Init');
  }
};

var logPageView = exports.logPageView = function logPageView() {
  if (true) {
    _reactGa2.default.set({ page: window.location.pathname });
    _reactGa2.default.pageview(window.location.pathname);
  } else {
    console.info('[GA] Page view: ' + window.location.pathname);
  }
};

var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (true) {
    if (category && action) {
      _reactGa2.default.event(Object.assign({ category: category, action: action }, label ? { label: label } : {}));
    }
  } else {
    console.info('[GA] Event: ' + category + ', ' + action + ', ' + label);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(45);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = __webpack_require__(46);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stylesURL = '';

var Head = function (_React$PureComponent) {
  _inherits(Head, _React$PureComponent);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description;


      return _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          title + ' | Inari'
        ),
        _react2.default.createElement('meta', { name: 'description', content: description }),
        _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        _react2.default.createElement('meta', { name: 'author', content: 'Vizzuality' }),
        _react2.default.createElement('link', { rel: 'icon', href: stylesURL + '/static/favicon.ico' }),
        _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' })
      );
    }
  }]);

  return Head;
}(_react2.default.PureComponent);

exports.default = Head;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(48);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var FooterComponent = function (_React$Component) {
  _inherits(FooterComponent, _React$Component);

  function FooterComponent() {
    _classCallCheck(this, FooterComponent);

    return _possibleConstructorReturn(this, (FooterComponent.__proto__ || Object.getPrototypeOf(FooterComponent)).apply(this, arguments));
  }

  _createClass(FooterComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-footer' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'footer-content' },
            _react2.default.createElement(
              'h1',
              { className: 'footer-logo' },
              _react2.default.createElement(
                'span',
                null,
                'Estudio dental Inari'
              ),
              _react2.default.createElement(
                'svg',
                null,
                _react2.default.createElement('use', { xlinkHref: '#icon-logo' })
              )
            ),
            _react2.default.createElement(
              'nav',
              { className: 'footer-nav' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Tel\xE9fono: ',
                  _react2.default.createElement(
                    'a',
                    { href: 'tel:679242809' },
                    '679 242 809'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Whatsapp: ',
                  _react2.default.createElement(
                    'a',
                    { href: 'tel:679242809' },
                    '679 242 809'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Email: ',
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:info@inari.com' },
                    'info@inari.com'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Avenida Legan\xE9s 6, Local 2B, 28921, Alcorc\xF3n'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FooterComponent;
}(_react2.default.Component);

exports.default = FooterComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports) {



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(51);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlx = __webpack_require__(2);

var _reactPlx2 = _interopRequireDefault(_reactPlx);

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var HeroComponent = function (_React$Component) {
  _inherits(HeroComponent, _React$Component);

  function HeroComponent() {
    _classCallCheck(this, HeroComponent);

    return _possibleConstructorReturn(this, (HeroComponent.__proto__ || Object.getPrototypeOf(HeroComponent)).apply(this, arguments));
  }

  _createClass(HeroComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-hero' },
        _react2.default.createElement(
          'div',
          { className: 'hero-content' },
          _react2.default.createElement(
            _reactPlx2.default,
            {
              parallaxData: [{
                start: '.c-hero',
                duration: '100vh',
                properties: [{
                  startValue: 0,
                  endValue: 150,
                  property: 'translateY',
                  easing: 'easeOutSine'
                }, {
                  startValue: 1,
                  endValue: 0,
                  property: 'opacity'
                }]
              }]
            },
            _react2.default.createElement(
              'h4',
              null,
              'Estudio dental'
            ),
            _react2.default.createElement(
              'h1',
              null,
              'Odontolog\xEDa avanzada y est\xE9tica dental'
            )
          )
        )
      );
    }
  }]);

  return HeroComponent;
}(_react2.default.Component);

exports.default = HeroComponent;

/***/ }),
/* 52 */
/***/ (function(module, exports) {



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(54);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlx = __webpack_require__(2);

var _reactPlx2 = _interopRequireDefault(_reactPlx);

__webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var ServicesComponent = function (_React$Component) {
  _inherits(ServicesComponent, _React$Component);

  function ServicesComponent() {
    _classCallCheck(this, ServicesComponent);

    return _possibleConstructorReturn(this, (ServicesComponent.__proto__ || Object.getPrototypeOf(ServicesComponent)).apply(this, arguments));
  }

  _createClass(ServicesComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-services' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              _react2.default.createElement(
                'h2',
                null,
                'Nuestros servicios'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'services-list' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Odontolog\xEDa general'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Est\xE9tica dental'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Implantolog\xEDa digital'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Ortodoncia'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Cirug\xEDa oral'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Odontopediatr\xEDa'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'TAC dental (3D)'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-8' },
              _react2.default.createElement(
                _reactPlx2.default,
                {
                  parallaxData: [{
                    start: '.c-services',
                    end: 'self',
                    endOffset: '60vh',
                    properties: [{
                      startValue: 0.9,
                      endValue: 1,
                      property: 'scale',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 100,
                      endValue: 0,
                      property: 'translateY',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.75,
                      endValue: 1,
                      property: 'opacity'
                    }]
                  }]
                },
                _react2.default.createElement('div', { className: 'services-img' })
              )
            )
          )
        )
      );
    }
  }]);

  return ServicesComponent;
}(_react2.default.Component);

exports.default = ServicesComponent;

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(57);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlx = __webpack_require__(2);

var _reactPlx2 = _interopRequireDefault(_reactPlx);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var DiferentiationComponent = function (_React$Component) {
  _inherits(DiferentiationComponent, _React$Component);

  function DiferentiationComponent() {
    _classCallCheck(this, DiferentiationComponent);

    return _possibleConstructorReturn(this, (DiferentiationComponent.__proto__ || Object.getPrototypeOf(DiferentiationComponent)).apply(this, arguments));
  }

  _createClass(DiferentiationComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-diferentiation' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              _react2.default.createElement(
                _reactPlx2.default,
                {
                  parallaxData: [{
                    start: '.c-diferentiation',
                    end: 'self',
                    endOffset: '60vh',
                    properties: [{
                      startValue: -90,
                      endValue: 0,
                      property: 'translateX',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.95,
                      endValue: 1,
                      property: 'scale',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.75,
                      endValue: 1,
                      property: 'opacity'
                    }]
                  }]
                },
                _react2.default.createElement('div', { className: 'diferentiation-img' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-8' },
              _react2.default.createElement(
                _reactPlx2.default,
                {
                  parallaxData: [{
                    start: '.c-diferentiation',
                    end: 'self',
                    endOffset: '30vh',
                    properties: [{
                      startValue: 40,
                      endValue: 0,
                      property: 'translateX',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.75,
                      endValue: 1,
                      property: 'opacity'
                    }]
                  }]
                },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Por qu\xE9 somos diferentes'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'diferentiation-content' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Inari Estudio Dental nace en noviembre de 2017 en Alcorc\xF3n con la idea de crear un concepto diferente de salud y est\xE9tica dental, en el que la excelencia de los tratamientos se combina con un trato cercano, \xE9tico y exquisito.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Inari Estudio Dental busca convertirse en la cl\xEDnica de referencia de Alcorc\xF3n en tratamientos de odontolog\xEDa avanzada y, en particular, de est\xE9tica dental.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Sus tres valores principales son Innovaci\xF3n, Armon\xEDa e Ilusi\xF3n.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DiferentiationComponent;
}(_react2.default.Component);

exports.default = DiferentiationComponent;

/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(60);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactPlx = __webpack_require__(2);

var _reactPlx2 = _interopRequireDefault(_reactPlx);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var TeamComponent = function (_React$Component) {
  _inherits(TeamComponent, _React$Component);

  function TeamComponent() {
    _classCallCheck(this, TeamComponent);

    return _possibleConstructorReturn(this, (TeamComponent.__proto__ || Object.getPrototypeOf(TeamComponent)).apply(this, arguments));
  }

  _createClass(TeamComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-team' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-8' },
              _react2.default.createElement(
                _reactPlx2.default,
                {
                  parallaxData: [{
                    start: '.c-team',
                    end: 'self',
                    endOffset: '20vh',
                    properties: [{
                      startValue: -40,
                      endValue: 0,
                      property: 'translateX',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.75,
                      endValue: 1,
                      property: 'opacity'
                    }]
                  }]
                },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Nuestro equipo'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-content' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Somos un equipo joven, motivado y din\xE1mico constituido por profesionales con gran experiencia. Liderados por la odont\xF3loga Gemma Rubio, formamos un equipo con muchas ganas de ofrecer lo mejor a cada paciente y evolucionamos para dar el m\xE1s exclusivo servicio de odontolog\xEDa avanzada y est\xE9tica dental. Por eso cada paciente es un nuevo reto, un camino que iniciamos juntos.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-md-4' },
              _react2.default.createElement(
                _reactPlx2.default,
                {
                  parallaxData: [{
                    start: '.c-team',
                    end: 'self',
                    endOffset: '40vh',
                    properties: [{
                      startValue: 90,
                      endValue: 0,
                      property: 'translateX',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.95,
                      endValue: 1,
                      property: 'scale',
                      easing: 'easeOutSine'
                    }, {
                      startValue: 0.75,
                      endValue: 1,
                      property: 'opacity'
                    }]
                  }]
                },
                _react2.default.createElement('div', { className: 'team-img' })
              )
            )
          )
        )
      );
    }
  }]);

  return TeamComponent;
}(_react2.default.Component);

exports.default = TeamComponent;

/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(63);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var TestimonialsComponent = function (_React$Component) {
  _inherits(TestimonialsComponent, _React$Component);

  function TestimonialsComponent() {
    _classCallCheck(this, TestimonialsComponent);

    return _possibleConstructorReturn(this, (TestimonialsComponent.__proto__ || Object.getPrototypeOf(TestimonialsComponent)).apply(this, arguments));
  }

  _createClass(TestimonialsComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-testimonials' },
        _react2.default.createElement(
          'div',
          { className: 'testimonials-content' },
          _react2.default.createElement(
            'h4',
            null,
            'Nuestras sonrisas'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'La mejor experiencia dental y con un resultado excelente'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Mar\xEDa L\xF3pez: ortodoncia'
          )
        )
      );
    }
  }]);

  return TestimonialsComponent;
}(_react2.default.Component);

exports.default = TestimonialsComponent;

/***/ }),
/* 64 */
/***/ (function(module, exports) {



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(66);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactForm = __webpack_require__(67);

__webpack_require__(68);

var _spinner = __webpack_require__(69);

var _spinner2 = _interopRequireDefault(_spinner);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


// Styles


var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      submitting: false,
      submitted: false,
      submittedError: false
    }, _this.onSubmit = function (values) {
      _this.setState({ submitting: true });
      var firstName = values.firstName,
          lastName = values.lastName,
          email = values.email,
          tel = values.tel,
          observations = values.observations;


      fetch('https://script.google.com/macros/s/AKfycbxSOt5Wzx8traptkU0elMVQSFiJC-rQcgwuezw9cN-Lpo6zSog/exec?firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&tel=' + tel + '&observations=' + observations, { method: 'GET' }).then(function () {
        _this.setState({
          submitting: false,
          submitted: true,
          submittedError: false
        });
        console.info('Success');
      }).catch(function (error) {
        _this.setState({
          submitting: false,
          submitted: false,
          submittedError: true
        });

        console.error('request failed', error);
      }).finally(function () {
        setTimeout(function () {
          _this.setState({
            submitting: false,
            submitted: false,
            submittedError: false
          });
        }, 5000);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          submitting = _state.submitting,
          submitted = _state.submitted,
          submittedError = _state.submittedError;


      return _react2.default.createElement(
        'div',
        { className: 'c-contact' },
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              _react2.default.createElement(
                'h2',
                null,
                'Contacto'
              ),
              _react2.default.createElement(
                _reactForm.Form,
                { onSubmit: this.onSubmit },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'contact-form' },
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'firstName' },
                        'Nombre *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', required: true })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'lastName' },
                        'Apellidos *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', required: true })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'email' },
                        'Email *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'email', id: 'email', type: 'email', required: true })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'tel' },
                        'Tel\xE9fono *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'tel', id: 'tel', type: 'tel', pattern: '^[0-9-+s()]*$', required: true })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field' },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'observations' },
                        'Observaciones'
                      ),
                      _react2.default.createElement(_reactForm.TextArea, { field: 'observations', id: 'observations', rows: '8' })
                    ),
                    _react2.default.createElement(
                      'button',
                      {
                        type: 'submit',
                        disabled: submitting || submitted || submittedError,
                        className: (0, _classnames2.default)({
                          'c-form-btn': true,
                          '-success': submitted,
                          '-error': submittedError
                        })
                      },
                      submitting && _react2.default.createElement(_spinner2.default, { className: '-tiny' }),
                      submitted && 'Gracias por contactar con nosotros.',
                      submittedError && 'Parece que ha habido un error. Inténtelo de nuevo.',
                      !submitted && !submittedError && 'Enviar'
                    )
                  );
                }
              )
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-form");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(4);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles


var Spinner = function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      var customClass = (0, _classnames3.default)(_defineProperty({
        'c-spinner': true
      }, className, !!className));

      return _react2.default.createElement(
        'div',
        { className: customClass },
        _react2.default.createElement(
          'div',
          { className: 'spinner-box', style: style },
          _react2.default.createElement('div', { className: 'icon' })
        )
      );
    }
  }]);

  return Spinner;
}(_react.PureComponent);

Spinner.defaultProps = {
  className: null,
  style: null
};
exports.default = Spinner;

/***/ }),
/* 70 */
/***/ (function(module, exports) {



/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);