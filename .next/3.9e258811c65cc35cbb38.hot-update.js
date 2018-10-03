webpackHotUpdate(3,{

/***/ "./layout/home/contact/component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/barrenechea/Projects/inari/layout/home/contact/component.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactForm = __webpack_require__("./node_modules/react-form/es/index.js");

__webpack_require__("./layout/home/contact/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles


var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'c-contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              _react2.default.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                },
                'Contacto'
              ),
              _react2.default.createElement(
                _reactForm.Form,
                { onSubmit: function onSubmit(submittedValues) {
                    return _this2.setState({ submittedValues: submittedValues });
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'form2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      }
                    },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'firstName', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 18
                        }
                      },
                      'Nombre *'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', required: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'lastName', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21
                        }
                      },
                      'Apellidos *'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', required: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'email', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24
                        }
                      },
                      'Apellidos *'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'email', id: 'email', type: 'email', required: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'tel', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        }
                      },
                      'Tel\xE9fono *'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'tel', id: 'tel', type: 'tel', required: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'observations', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30
                        }
                      },
                      'Observaciones'
                    ),
                    _react2.default.createElement(_reactForm.TextArea, { field: 'observations', id: 'observations', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      }
                    }),
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'c-btn -primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        }
                      },
                      'Submit'
                    )
                  );
                }
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(_react2.default.Component);

var _default = Contact;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Contact, 'Contact', '/Users/barrenechea/Projects/inari/layout/home/contact/component.js');
  reactHotLoader.register(_default, 'default', '/Users/barrenechea/Projects/inari/layout/home/contact/component.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.9e258811c65cc35cbb38.hot-update.js.map