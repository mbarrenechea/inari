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

var validate = function validate(value) {
  return {
    error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
    warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
    success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
  };
};

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
            lineNumber: 16
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              _react2.default.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
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
                    lineNumber: 21
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'form2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      }
                    },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'firstName', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24
                        }
                      },
                      'First name'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'lastName', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 26
                        }
                      },
                      'Last name'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      }
                    }),
                    _react2.default.createElement(
                      RadioGroup,
                      { field: 'gender', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'male', className: 'mr-2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          }
                        },
                        'Male'
                      ),
                      _react2.default.createElement(Radio, { value: 'male', id: 'male', className: 'mr-3 d-inline-block', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30
                        }
                      }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'female', className: 'mr-2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                          }
                        },
                        'Female'
                      ),
                      _react2.default.createElement(Radio, { value: 'female', id: 'female', className: 'd-inline-block', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 32
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'bio', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        }
                      },
                      'Bio'
                    ),
                    _react2.default.createElement(TextArea, { field: 'bio', id: 'bio', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'authorize', className: 'mr-2', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        }
                      },
                      'Authorize'
                    ),
                    _react2.default.createElement(Checkbox, { field: 'authorize', id: 'authorize', className: 'd-inline-block', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'status', className: 'd-block', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      },
                      'Relationship status'
                    ),
                    _react2.default.createElement(Select, { field: 'status', id: 'status', options: statusOptions, className: 'mb-4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                      }
                    }),
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'mb-4 btn btn-primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 40
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

  reactHotLoader.register(validate, 'validate', '/Users/barrenechea/Projects/inari/layout/home/contact/component.js');
  reactHotLoader.register(Contact, 'Contact', '/Users/barrenechea/Projects/inari/layout/home/contact/component.js');
  reactHotLoader.register(_default, 'default', '/Users/barrenechea/Projects/inari/layout/home/contact/component.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.0670f2c066195683972c.hot-update.js.map