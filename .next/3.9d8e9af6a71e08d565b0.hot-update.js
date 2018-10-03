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
      submitted: false
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
          submitted: true
        });
        console.info('Success');
      }).catch(function (error) {
        console.error('request failed', error);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          submitting = _state.submitting,
          submitted = _state.submitted;


      return _react2.default.createElement(
        'div',
        { className: 'c-contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        submitting && _react2.default.createElement(_spinner2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'row center-xs', __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              _react2.default.createElement(
                'h2',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Contacto'
              ),
              _react2.default.createElement(
                _reactForm.Form,
                { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'contact-form', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'firstName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                          }
                        },
                        'Nombre *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'firstName', id: 'firstName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'lastName', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                          }
                        },
                        'Apellidos *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'lastName', id: 'lastName', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 65
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'email', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          }
                        },
                        'Email *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'email', id: 'email', type: 'email', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'tel', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                          }
                        },
                        'Tel\xE9fono *'
                      ),
                      _react2.default.createElement(_reactForm.Text, { field: 'tel', id: 'tel', type: 'tel', pattern: '^[0-9-+s()]*$', required: true, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 72
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'c-field', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'observations', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                          }
                        },
                        'Observaciones'
                      ),
                      _react2.default.createElement(_reactForm.TextArea, { field: 'observations', id: 'observations', rows: '8', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        }
                      })
                    ),
                    !submitted && _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'c-form-btn -primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 81
                        }
                      },
                      'Enviar'
                    ),
                    submitted && _react2.default.createElement(
                      'div',
                      { className: 'contact-success', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        }
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                          }
                        },
                        'Gracias por contactar con nosotros'
                      )
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

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

})
//# sourceMappingURL=3.9d8e9af6a71e08d565b0.hot-update.js.map