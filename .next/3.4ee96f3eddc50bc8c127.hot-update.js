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
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contact.__proto__ || Object.getPrototypeOf(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (values) {
      console.log(values);
      // fetch(`https://script.google.com/macros/s/AKfycbyZu3JyC44b6fUd3agpwjUiThBQ4baAyY7q3BYGlUP8mN5u_yZb/exec?email=${email}`, {
      //   method: 'GET'
      // })
      //   .then(() => { this.props.onSubmit(); })
      //   .catch(function (error) {
      //     console.log('request failed', error)
      //   });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              _react2.default.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  }
                },
                'Contacto'
              ),
              _react2.default.createElement(
                _reactForm.Form,
                { onSubmit: function onSubmit(values) {
                    return console.log(values);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'contact-form', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 29
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'firstName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                          }
                        },
                        'Nombre *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'lastName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                          }
                        },
                        'Apellidos *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'email', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                          }
                        },
                        'Email *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'email', id: 'email', type: 'email', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 41
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 44
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'tel', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                          }
                        },
                        'Tel\xE9fono *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'tel', id: 'tel', type: 'tel', pattern: '^[0-9-+s()]*$', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 46
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 49
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'observations', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                          }
                        },
                        'Observaciones'
                      ),
                      _react2.default.createElement(_reactForm.TextArea, { field: 'observations', id: 'observations', rows: '8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 51
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'c-form-btn -primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        }
                      },
                      'Enviar'
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
//# sourceMappingURL=3.4ee96f3eddc50bc8c127.hot-update.js.map