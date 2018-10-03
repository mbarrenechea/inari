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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactForm = __webpack_require__("./node_modules/react-form/es/index.js");

__webpack_require__("./node_modules/whatwg-fetch/fetch.js");

var _spinner = __webpack_require__("./components/ui/spinner/index.js");

var _spinner2 = _interopRequireDefault(_spinner);

__webpack_require__("./layout/home/contact/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
        }, 2000);
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
        { className: 'c-contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs', __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              _react2.default.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                'Contacto'
              ),
              _react2.default.createElement(
                _reactForm.Form,
                { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'contact-form', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'firstName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 73
                          }
                        },
                        'Nombre *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'lastName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                          }
                        },
                        'Apellidos *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 82
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'email', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                          }
                        },
                        'Email *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'email', id: 'email', type: 'email', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 84
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'tel', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                          }
                        },
                        'Tel\xE9fono *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'tel', id: 'tel', type: 'tel', pattern: '^[0-9-+s()]*$', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 92
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'observations', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 93
                          }
                        },
                        'Observaciones'
                      ),
                      _react2.default.createElement(_reactForm.TextArea, { field: 'observations', id: 'observations', rows: '8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 94
                        }
                      })
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
                        }),
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97
                        }
                      },
                      submitting && _react2.default.createElement(_spinner2.default, { className: '-tiny', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 106
                        }
                      }),
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
//# sourceMappingURL=3.3aca01c3df3e3ac6f2c0.hot-update.js.map