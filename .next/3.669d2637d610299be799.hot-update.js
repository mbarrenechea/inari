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
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                function (formApi) {
                  return _react2.default.createElement(
                    'form',
                    { onSubmit: formApi.submitForm, id: 'form1', className: 'mb-4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      }
                    },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'hello', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        }
                      },
                      'Hello World'
                    ),
                    _react2.default.createElement(_reactForm.Text, { field: 'hello', id: 'hello', validate: validate, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      }
                    }),
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'btn btn-primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
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

/***/ }),

/***/ "./node_modules/react-form/es/components/Field.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = (_temp2 = _class = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Field.__proto__ || Object.getPrototypeOf(Field)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Field, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var defaultValue = this.props.defaultValue;

      this.buildApi(this.props);

      if (typeof defaultValue !== 'undefined' && typeof this.getFieldValues().value === 'undefined') {
        this.fieldApi.setValue(defaultValue);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // If the field name or any validators change, we need to rebuild the api
      if (!_utils2.default.isShallowEqual(this.props, nextProps, ['preValidate', 'validate', 'asyncValidate']) || _utils2.default.makePathArray(this.props.field).join('.') !== _utils2.default.makePathArray(nextProps.field).join('.')) {
        // If the field is changing, we need to deregister it
        if (this.props.field !== nextProps.field) {
          this.context.formApi.deregister(this.node);
        }
        // Rebuild the api, including the field registration
        this.buildApi(nextProps);
      }
    }

    // Optimization to only rerender if nessisary

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Grab needed values
      var field = nextContext.formApi.getFullField(this.props.field);
      var currentFormState = this.context.formState;
      var nextFormState = nextContext.formState;
      var pure = nextProps.pure && nextContext.formProps.pure;

      // When pure, we need to check props and form state to determine if we
      // should update. Otherwise, update all the time.
      if (!pure) {
        return true;
      }
      // check child props for changes so we know to re-render
      var nonChildrenProps = _extends({}, this.props, {
        children: null // do not compare children, that would be an anti-pattern
      });
      var nextNonChildrenProps = _extends({}, nextProps, {
        children: null
      });

      var shouldUpdate = _utils2.default.get(nextFormState.values, field) !== _utils2.default.get(currentFormState.values, field) || _utils2.default.get(nextFormState.touched, field) !== _utils2.default.get(currentFormState.touched, field) || _utils2.default.get(nextFormState.errors, field) !== _utils2.default.get(currentFormState.errors, field) || _utils2.default.get(nextFormState.warnings, field) !== _utils2.default.get(currentFormState.warnings, field) || _utils2.default.get(nextFormState.successes, field) !== _utils2.default.get(currentFormState.successes, field) || _utils2.default.get(nextFormState.validating, field) !== _utils2.default.get(currentFormState.validating, field) || _utils2.default.get(nextFormState.validationFailed, field) !== _utils2.default.get(currentFormState.validationFailed, field) || !_utils2.default.isShallowEqual(nextNonChildrenProps, nonChildrenProps) || nextFormState.submits !== currentFormState.submits;

      return shouldUpdate || false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.formApi.deregister(this.node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          pure = _props.pure,
          render = _props.render,
          component = _props.component,
          children = _props.children,
          preValidate = _props.preValidate,
          validate = _props.validate,
          asyncValidate = _props.asyncValidate,
          validateOnSubmit = _props.validateOnSubmit,
          rest = _objectWithoutProperties(_props, ['field', 'pure', 'render', 'component', 'children', 'preValidate', 'validate', 'asyncValidate', 'validateOnSubmit']);

      var inlineProps = _extends({}, rest, this.fieldApi, this.getFieldValues());

      var componentProps = _extends({}, rest, {
        fieldApi: _extends({}, this.fieldApi, this.getFieldValues())
      });

      if (component) {
        return _react2.default.createElement(component, componentProps, children);
      }
      if (render) {
        return render(inlineProps);
      }
      if (typeof children === 'function') {
        return children(inlineProps);
      }
      return children;
    }
  }]);

  return Field;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.buildApi = function (props) {
    // This binds all of the functions less often, and also won't trigger
    // changes when spreading the fieldApi as shallow props
    var formApi = _this2.context.formApi;
    var field = props.field;

    // Get the full field name

    var fullField = formApi.getFullField(field);

    // Wrap the formApi methods to reflect the new field context
    _this2.fieldApi = {
      setValue: function setValue(value) {
        return formApi.setValue(fullField, value);
      },
      setTouched: function setTouched(touched) {
        return formApi.setTouched(fullField, touched);
      },
      setError: function setError(error) {
        return formApi.setError(fullField, error);
      },
      setWarning: function setWarning(warning) {
        return formApi.setWarning(fullField, warning);
      },
      setSuccess: function setSuccess(success) {
        return formApi.setSuccess(fullField, success);
      },
      addValue: function addValue(subField, value) {
        return formApi.addValue([fullField, subField].filter(Boolean), value);
      },
      removeValue: function removeValue(subField, index) {
        return formApi.addValue([fullField, subField].filter(Boolean), index);
      },
      swapValues: function swapValues(subField) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return formApi.addValue.apply(formApi, [[fullField, subField].filter(Boolean)].concat(args));
      },
      reset: function reset() {
        return formApi.reset(fullField);
      },
      validatingField: function validatingField() {
        return formApi.validatingField(fullField);
      },
      doneValidatingField: function doneValidatingField() {
        return formApi.doneValidatingField(fullField);
      },
      validate: function validate(opts) {
        return formApi.validate(fullField, opts);
      },
      preValidate: function preValidate(opts) {
        return formApi.preValidate(fullField, opts);
      },
      asyncValidate: function asyncValidate(opts) {
        return formApi.asyncValidate(fullField, opts);
      }

      // define function to generate field values
    };_this2.getFieldValues = function () {
      return {
        fieldName: fullField,
        value: formApi.getValue(fullField),
        touched: formApi.getTouched(fullField),
        error: formApi.getError(fullField),
        warning: formApi.getWarning(fullField),
        success: formApi.getSuccess(fullField)
      };
    };

    // Define the leaf node
    _this2.node = {
      field: field,
      fullField: fullField,
      api: _this2.fieldApi,
      getState: _this2.getFieldValues,
      getProps: function getProps() {
        return _this2.props;
      }

      // Register field
    };formApi.register(_this2.node);
  };
}, _temp2);


Field.contextTypes = {
  formApi: _propTypes2.default.object,
  formState: _propTypes2.default.object,
  formProps: _propTypes2.default.object
};

Field.propTypes =  true ? {
  field: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
} : {};

Field.defaultProps = {
  pure: true
};

exports.default = Field;

/***/ }),

/***/ "./node_modules/react-form/es/components/FieldApi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var FieldApi = function (_React$Component) {
  _inherits(FieldApi, _React$Component);

  function FieldApi() {
    _classCallCheck(this, FieldApi);

    return _possibleConstructorReturn(this, (FieldApi.__proto__ || Object.getPrototypeOf(FieldApi)).apply(this, arguments));
  }

  _createClass(FieldApi, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          render = _props.render,
          component = _props.component,
          children = _props.children,
          field = _props.field,
          rest = _objectWithoutProperties(_props, ['render', 'component', 'children', 'field']);

      var formApi = this.context.formApi;

      // Get the full field name

      var fullField = formApi.getFullField(field);

      // Get the node of that field
      var node = formApi.getNodeByField(fullField);

      // Get the field api
      var fieldApi = node ? node.api : {};

      // Get the field values
      var fieldState = node ? {
        fieldName: fullField,
        value: formApi.getValue(fullField),
        touched: formApi.getTouched(fullField),
        error: formApi.getError(fullField),
        warning: formApi.getWarning(fullField),
        success: formApi.getSuccess(fullField)
      } : {};

      var inlineProps = _extends({}, fieldApi, fieldState, rest);

      var componentProps = _extends({
        fieldApi: _extends({}, fieldApi, fieldState)
      }, rest);

      if (component) {
        return _react2.default.createElement(component, componentProps, children);
      }
      if (render) {
        return render(inlineProps);
      }
      // There's no reason for form api to simply return it's children, so only
      // support a child function
      return children(inlineProps);
    }
  }]);

  return FieldApi;
}(_react2.default.Component);

FieldApi.contextTypes = {
  formApi: _propTypes2.default.object
};

exports.default = FieldApi;

/***/ }),

/***/ "./node_modules/react-form/es/components/Form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxThunk = __webpack_require__("./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _BuildReducer = __webpack_require__("./node_modules/react-form/es/redux/BuildReducer.js");

var _BuildReducer2 = _interopRequireDefault(_BuildReducer);

var _actions = __webpack_require__("./node_modules/react-form/es/redux/actions.js");

var actions = _interopRequireWildcard(_actions);

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

var _Tree = __webpack_require__("./node_modules/react-form/es/utils/Tree.js");

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* ---------------------------- Helper Methods ----------------------------- */

/* ----- Recursive Check to see if form is valid  ----- */

var isInvalid = function isInvalid(errors) {
  if (Array.isArray(errors)) {
    return errors.some(function (k) {
      return isInvalid(k);
    });
  } else if (errors !== null && (typeof errors === 'undefined' ? 'undefined' : _typeof(errors)) === 'object') {
    return Object.keys(errors).some(function (k) {
      return isInvalid(errors[k]);
    });
  }
  return errors;
};

/* -------------- Generates a new state ------------- */

// TODO figure out way to make state immutable
var newState = function newState(state) {
  return JSON.parse(JSON.stringify(state));
};

/* ----------------- Form Component ---------------- */

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this2 = this;

    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getFormState = function () {
      return newState(_this.props.formState);
    };

    _this.recurseUpFromNode = function (field, cb, isAsync) {
      // Find the node using the field
      var target = _this.tree.getNodeByField(field, { closest: true });

      // If there is no target at all, stop
      if (!target) {
        return;
      }

      var stopped = false;
      var stop = function stop() {
        stopped = true;
      };

      // Define recur function
      var recurse = isAsync ? function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(node) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return cb(node, stop);

                case 2:
                  // If we have parent recur up
                  if (!stopped && node.parent) {
                    recurse(node.parent);
                  }

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }() : function (node) {
        // Call the cb with the node
        cb(node, stop);
        // If we have parent recur up
        if (!stopped && node.parent) {
          recurse(node.parent);
        }
      };

      // start recursion from the target
      try {
        return recurse(target);
      } catch (err) {
        throw err;
      }
    };

    _this.recurseUpAllNodes = function (cb) {
      // Define recurse function

      var recurse = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node, parentStop) {
          var stopped, stop;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  stopped = false;

                  stop = function stop() {
                    stopped = true;
                  };
                  // If we have children recurse down


                  if (!node.children) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 5;
                  return Promise.all(_utils2.default.mapObject(node.children, function (d) {
                    return recurse(d, stop);
                  }));

                case 5:
                  if (!stopped) {
                    _context2.next = 9;
                    break;
                  }

                  // If stopped, propagate up
                  parentStop();
                  _context2.next = 11;
                  break;

                case 9:
                  _context2.next = 11;
                  return cb(node, parentStop);

                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function recurse(_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();

      // start recursion from the target
      return recurse(_this.node, function () {});
    };

    _this.getFieldProps = function (field) {
      var node = field ? _this.tree.getNodeByField(field) || (0, _Tree.makeNode)() : _this.node;
      return node.getProps();
    };

    _this.getNodeByField = function (field) {
      var node = _this.tree.getNodeByField(field);
      return node;
    };

    _this.setValue = function (field, value) {
      _this.props.dispatch(actions.setValue({ field: field, value: value }));
      // Validate up the tree
      _this.validateUpFromNode(field);
    };

    _this.setTouched = function (field) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.props.dispatch(actions.setTouched({ field: field, value: value }));
      // Validate up the tree
      _this.validateUpFromNode(field);
    };

    _this.setError = function (field, value) {
      _this.props.dispatch(actions.setError({ field: field, value: value }));
    };

    _this.setWarning = function (field, value) {
      _this.props.dispatch(actions.setWarning({ field: field, value: value }));
    };

    _this.setSuccess = function (field, value) {
      _this.props.dispatch(actions.setSuccess({ field: field, value: value }));
    };

    _this.preValidate = function (field) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Get the preValidate prop from the field node
      var _this$getFieldProps = _this.getFieldProps(field),
          preValidate = _this$getFieldProps.preValidate,
          validateOnSubmit = _this$getFieldProps.validateOnSubmit;

      if (preValidate === _utils2.default.noop || !opts.submitting && (_this.props.validateOnSubmit || validateOnSubmit)) {
        return;
      }
      _this.props.dispatch(actions.preValidate({ field: field, validator: preValidate }));
    };

    _this.validate = function (field) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Get the validate prop from the field node
      var _this$getFieldProps2 = _this.getFieldProps(field),
          validate = _this$getFieldProps2.validate,
          validateOnSubmit = _this$getFieldProps2.validateOnSubmit;

      if (validate === _utils2.default.noop || !opts.submitting && (_this.props.validateOnSubmit || validateOnSubmit)) {
        return;
      }
      return _this.props.dispatch(actions.validate({ field: field, validator: validate }));
    };

    _this.asyncValidate = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(field) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _this$getFieldProps3, asyncValidate, validateOnSubmit;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // Get the asyncValidate prop from the field node
                _this$getFieldProps3 = _this.getFieldProps(field), asyncValidate = _this$getFieldProps3.asyncValidate, validateOnSubmit = _this$getFieldProps3.validateOnSubmit;

                if (!(asyncValidate === _utils2.default.noop || !opts.submitting && (_this.props.validateOnSubmit || validateOnSubmit))) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt('return');

              case 3:
                return _context3.abrupt('return', _this.props.dispatch(actions.asyncValidate({
                  field: field,
                  validator: asyncValidate,
                  validationPromiseIDs: _this.validationPromiseIDs
                })));

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.validateUpFromNode = function (field) {
      // comboValidate all fields up from the node
      _this.recurseUpFromNode(field, function (node) {
        return node.api.preValidate();
      });
      _this.recurseUpFromNode(field, function (node, stop) {
        // If a validation causes an error, stop all parent validation
        if (node.api.validate()) {
          stop();
        }
      });
      _this.recurseUpFromNode(field, function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(node, stop) {
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return node.api.asyncValidate();

                case 2:
                  if (!_context4.sent) {
                    _context4.next = 4;
                    break;
                  }

                  stop();

                case 4:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this2);
        }));

        return function (_x9, _x10) {
          return _ref4.apply(this, arguments);
        };
      }(), true);
    };

    _this.setAllValues = function () {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _this.props.dispatch(actions.setAllValues(_extends({}, _this.props.defaultValues, values)));
    };

    _this.setAllTouched = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
      var touched;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              touched = {};
              // Set touched is unique because we dont want to set touched on nested fields
              // We also dont want to call the internal setTouched because that would
              // Execute validation.

              _context5.next = 3;
              return _this.recurseUpAllNodes(function (node) {
                if (node.nested) {
                  return;
                }
                if (node.fullField) {
                  touched = _utils2.default.set(touched, node.fullField, true);
                }
              });

            case 3:
              _this.props.dispatch(actions.setAllTouched(touched));

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this2);
    }));

    _this.preValidateAll = function () {
      _this.recurseUpAllNodes(function (node) {
        if (node.api.preValidate) {
          node.api.preValidate({ submitting: true });
        }
      });
    };

    _this.validateAll = function () {
      return _this.recurseUpAllNodes(function (node, stop) {
        if (node.api.validate) {
          // Stop all parent validation if error is encountered
          if (node.api.validate({ submitting: true })) {
            stop();
          }
        }
      });
    };

    _this.asyncValidateAll = function () {
      return _this.recurseUpAllNodes(function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(node, stop) {
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!node.api.asyncValidate) {
                    _context6.next = 5;
                    break;
                  }

                  _context6.next = 3;
                  return node.api.asyncValidate({ submitting: true });

                case 3:
                  if (!_context6.sent) {
                    _context6.next = 5;
                    break;
                  }

                  stop();

                case 5:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this2);
        }));

        return function (_x12, _x13) {
          return _ref6.apply(this, arguments);
        };
      }());
    };

    _this.setFormState = function (formState) {
      _this.props.dispatch(actions.setFormState(formState));
    };

    _this.getTouched = function (field) {
      return _utils2.default.get(_this.props.formState.touched, field);
    };

    _this.getValue = function (field) {
      return _utils2.default.get(_this.props.formState.values, field);
    };

    _this.getError = function (field) {
      return _utils2.default.get(_this.props.formState.errors, field);
    };

    _this.getWarning = function (field) {
      return _utils2.default.get(_this.props.formState.warnings, field);
    };

    _this.getSuccess = function (field) {
      return _utils2.default.get(_this.props.formState.successes, field);
    };

    _this.getFullField = function (field) {
      return field;
    };

    _this.addValue = function (field, value) {
      _this.props.dispatch(actions.setValue({
        field: field,
        value: [].concat(_toConsumableArray(_utils2.default.get(_this.props.formState.values, field) || []), [value])
      }));
    };

    _this.removeValue = function (field, index) {
      [{ attribute: 'values', action: 'setValue' }, { attribute: 'touched', action: 'setTouched' }, { attribute: 'errors', action: 'setError' }].forEach(function (_ref7) {
        var attribute = _ref7.attribute,
            action = _ref7.action;

        var fieldAttribute = _utils2.default.get(_this.props.formState[attribute], field) || [];
        _this.props.dispatch(actions[action]({
          field: field,
          value: [].concat(_toConsumableArray(fieldAttribute.slice(0, index)), _toConsumableArray(fieldAttribute.slice(index + 1)))
        }));
      });
    };

    _this.swapValues = function (field, index, destIndex) {
      var min = Math.min(index, destIndex);
      var max = Math.max(index, destIndex);

      var fieldValues = _utils2.default.get(_this.props.formState.values, field) || [];

      _this.props.dispatch(actions.setValue({
        field: field,
        value: [].concat(_toConsumableArray(fieldValues.slice(0, min)), [fieldValues[max]], _toConsumableArray(fieldValues.slice(min + 1, max)), [fieldValues[min]], _toConsumableArray(fieldValues.slice(max + 1)))
      }));
    };

    _this.register = function (node) {
      return _this.tree.addNode(node);
    };

    _this.deregister = function (node) {
      _this.tree.removeNode(node);
    };

    _this.reset = function (field) {
      _this.props.dispatch(actions.reset({ field: field }));
    };

    _this.resetAll = function () {
      _this.props.dispatch(actions.resetAll());
    };

    _this.clearAll = function () {
      _this.props.dispatch(actions.clearAll());
    };

    _this.preSubmit = function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(values) {
        var newValues;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                newValues = _utils2.default.clone(values);
                _context7.next = 3;
                return _this.recurseUpAllNodes(function (node) {
                  var _node$getProps = node.getProps(),
                      preSubmit = _node$getProps.preSubmit;

                  if (preSubmit) {
                    _utils2.default.set(newValues, node.fullField, preSubmit(_utils2.default.get(newValues, node.fullField)));
                  }
                });

              case 3:
                return _context7.abrupt('return', newValues);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this2);
      }));

      return function (_x14) {
        return _ref8.apply(this, arguments);
      };
    }();

    _this.submitForm = function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(e) {
        var _this$props$formState, _errors, _asyncErrors, _invalid, _this$props$formState2, errors, asyncErrors, invalid, asyncInvalid, values;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this.props.dispatch(actions.submitting(true));
                _this.props.dispatch(actions.submits());
                _this.setAllTouched();
                _this.preValidateAll();
                _this.validateAll();

                // We prevent default, by default, unless override is passed
                if (e && e.preventDefault && _this.props.preventDefault) {
                  e.preventDefault(e);
                }
                // We need to prevent default if override is passed and form is invalid
                if (!_this.props.preventDefault) {
                  // Pull off errors from form state
                  _this$props$formState = _this.props.formState, _errors = _this$props$formState.errors, _asyncErrors = _this$props$formState.asyncErrors;
                  // Check to see if its invalid

                  _invalid = isInvalid(_errors) || isInvalid(_asyncErrors);
                  // Prevent default becaues form is invalid

                  if (_invalid && e && e.preventDefault) {
                    e.preventDefault(e);
                  }
                }

                // Call asynchronous validators
                _context8.prev = 7;
                _context8.next = 10;
                return _this.asyncValidateAll();

              case 10:
                _context8.next = 16;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8['catch'](7);

                // Let the user know we are done submitting
                _this.props.dispatch(actions.submitting(false));
                throw _context8.t0;

              case 16:
                // Pull off errors from form state
                _this$props$formState2 = _this.props.formState, errors = _this$props$formState2.errors, asyncErrors = _this$props$formState2.asyncErrors;
                // Only submit if we have no errors

                invalid = isInvalid(errors);
                asyncInvalid = isInvalid(asyncErrors);
                // Call on validation fail if we are invalid

                if ((invalid || asyncInvalid) && _this.props.onSubmitFailure) {
                  _this.props.onSubmitFailure(errors, null, _this.getFormApi());
                }
                // Only update submitted if we are not invalid
                // And there are no active asynchronous validations

                if (!(!(invalid || asyncInvalid) && _this.props.formState.asyncValidations === 0)) {
                  _context8.next = 39;
                  break;
                }

                values = JSON.parse(JSON.stringify(_this.props.formState.values));
                // Call pre submit

                _context8.next = 24;
                return _this.preSubmit(values);

              case 24:
                values = _context8.sent;

                // Update submitted
                _this.props.dispatch(actions.submitted());
                // If onSubmit was passed then call it

                if (!_this.props.onSubmit) {
                  _context8.next = 39;
                  break;
                }

                _context8.prev = 27;
                _context8.next = 30;
                return _this.props.onSubmit(values, e, _this.getFormApi());

              case 30:
                _context8.next = 39;
                break;

              case 32:
                _context8.prev = 32;
                _context8.t1 = _context8['catch'](27);

                if (!_this.props.onSubmitFailure) {
                  _context8.next = 38;
                  break;
                }

                _this.props.onSubmitFailure({}, _context8.t1, _this.getFormApi());
                _context8.next = 39;
                break;

              case 38:
                throw _context8.t1;

              case 39:
                // Let the user know we are done submitting
                _this.props.dispatch(actions.submitting(false));

              case 40:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this2, [[7, 12], [27, 32]]);
      }));

      return function (_x15) {
        return _ref9.apply(this, arguments);
      };
    }();

    _this.tree = new _Tree2.default({
      nested: true,
      children: {},
      api: _extends({}, _this.getFormApi(), {
        validate: function validate(opts) {
          return _this.validate(undefined, opts);
        },
        preValidate: function preValidate(opts) {
          return _this.preValidate(undefined, opts);
        },
        asyncValidate: function asyncValidate(opts) {
          return _this.asyncValidate(undefined, opts);
        }
      }),
      getProps: function getProps() {
        return _this.props;
      }
    });
    _this.node = _this.tree.root;
    _this.validationPromiseIDs = new Map();
    return _this;
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        formApi: this.getFormApi(),
        formState: this.getFormState(),
        formProps: this.props
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.getApi) {
        this.props.getApi(this.getFormApi());
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.validateOnMount) {
        this.preValidateAll();
        this.validateAll();
        this.asyncValidateAll();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var didUpdate = !_utils2.default.isDeepEqual(nextProps.formState, this.props.formState);
      if (this.props.onChange && didUpdate) {
        this.props.onChange(newState(nextProps.formState), this.getFormApi());
      }
      if (!_utils2.default.isDeepEqual(nextProps.values, this.props.values)) {
        this.setAllValues(nextProps.values);
      }
    }
  }, {
    key: 'getFormApi',
    value: function getFormApi() {
      return {
        submitForm: this.submitForm,
        setValue: this.setValue,
        getValue: this.getValue,
        setTouched: this.setTouched,
        getTouched: this.getTouched,
        getWarning: this.getWarning,
        getError: this.getError,
        getSuccess: this.getSuccess,
        getFormState: this.getFormState,
        setFormState: this.setFormState,
        setError: this.setError,
        setWarning: this.setWarning,
        setSuccess: this.setSuccess,
        resetAll: this.resetAll,
        reset: this.reset,
        clearAll: this.clearAll,
        addValue: this.addValue,
        removeValue: this.removeValue,
        setAllValues: this.setAllValues,
        setAllTouched: this.setAllTouched,
        swapValues: this.swapValues,
        register: this.register,
        deregister: this.deregister,
        asyncValidate: this.asyncValidate,
        validate: this.validate,
        preValidate: this.preValidate,
        getFullField: this.getFullField,
        getNodeByField: this.getNodeByField
      };
    }

    // Utils

    // Public Api

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          render = _props.render;


      var formApi = this.getFormApi();
      var formState = this.getFormState();

      var inlineProps = _extends({}, formApi, formState);

      var componentProps = {
        formApi: _extends({}, formApi, formState)
      };

      if (component) {
        return _react2.default.createElement(component, componentProps, children);
      }
      if (render) {
        return render(inlineProps);
      }
      if (typeof children === 'function') {
        return children(inlineProps);
      }
      return children;
    }
  }]);

  return Form;
}(_react.Component);

Form.childContextTypes = {
  formApi: _propTypes2.default.object,
  formState: _propTypes2.default.object,
  formProps: _propTypes2.default.object
};

Form.defaultProps = {
  pure: true,
  preventDefault: true,
  defaultValues: {}

  /* ---------- Container ---------- */

};var mapStateToProps = function mapStateToProps(state) {
  return {
    formState: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var FormContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Form);

/* ---------- Exports ---------- */

var ReactForm = function (_Component2) {
  _inherits(ReactForm, _Component2);

  function ReactForm(props) {
    _classCallCheck(this, ReactForm);

    var _this3 = _possibleConstructorReturn(this, (ReactForm.__proto__ || Object.getPrototypeOf(ReactForm)).call(this, props));

    var defaultValues = props.defaultValues,
        values = props.values;


    _this3.store = (0, _redux.createStore)((0, _BuildReducer2.default)({
      defaultValues: defaultValues,
      values: values
    }), (0, _redux.applyMiddleware)(_reduxThunk2.default // lets us dispatch() functions
    // createLogger() // neat middleware that logs actions
    ));
    return _this3;
  }

  _createClass(ReactForm, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['children']);

      return _react2.default.createElement(
        FormContainer,
        _extends({ store: this.store }, rest),
        children
      );
    }
  }]);

  return ReactForm;
}(_react.Component);

exports.default = ReactForm;

/***/ }),

/***/ "./node_modules/react-form/es/components/FormApi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var FormApi = function (_React$Component) {
  _inherits(FormApi, _React$Component);

  function FormApi() {
    _classCallCheck(this, FormApi);

    return _possibleConstructorReturn(this, (FormApi.__proto__ || Object.getPrototypeOf(FormApi)).apply(this, arguments));
  }

  _createClass(FormApi, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          render = _props.render,
          component = _props.component,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['render', 'component', 'children']);

      var inlineProps = _extends({}, this.context.formApi, this.context.formState, rest);

      var componentProps = _extends({
        formApi: _extends({}, this.context.formApi, this.context.formState)
      }, rest);

      if (component) {
        return _react2.default.createElement(component, componentProps, children);
      }
      if (render) {
        return render(inlineProps);
      }
      // There's no reason for form api to simply return it's children, so only
      // support a child function
      return children(inlineProps);
    }
  }]);

  return FormApi;
}(_react2.default.Component);

FormApi.contextTypes = {
  formApi: _propTypes2.default.object,
  formState: _propTypes2.default.object
};

exports.default = FormApi;

/***/ }),

/***/ "./node_modules/react-form/es/components/NestedField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

var _Tree = __webpack_require__("./node_modules/react-form/es/utils/Tree.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var NestedField = (_temp2 = _class = function (_React$Component) {
  _inherits(NestedField, _React$Component);

  function NestedField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NestedField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NestedField.__proto__ || Object.getPrototypeOf(NestedField)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NestedField, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        // Any children are now within the context of this nestedField
        formApi: this.formApi,
        formState: this.context.formState
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.node = {};
      var defaultValues = this.props.defaultValues;

      this.buildApi(this.props);

      if (typeof this.fieldApi.getValue() === 'undefined') {
        this.fieldApi.setValue(undefined, defaultValues);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // If the field or validators change, we have to rebuild
      if (!_utils2.default.isShallowEqual(this.props, nextProps, ['preValidate', 'validate', 'asyncValidate']) || _utils2.default.makePathArray(this.props.field).join('.') !== _utils2.default.makePathArray(nextProps.field).join('.')) {
        // If the field is changing, we need to deregister it
        if (this.props.field !== nextProps.field) {
          this.context.formApi.deregister(this.node);
        }
        // Rebuild the api, including the field registration
        this.buildApi(nextProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.formApi.deregister(this.node);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          render = _props.render,
          component = _props.component,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['render', 'component', 'children']);

      var inlineProps = _extends({}, rest, this.fieldApi, this.getFieldValues());

      var componentProps = _extends({}, rest, {
        fieldApi: _extends({}, this.fieldApi, this.getFieldValues())
      });

      if (component) {
        return _react2.default.createElement(component, componentProps, children);
      }
      if (render) {
        return render(inlineProps);
      }
      if (typeof children === 'function') {
        return children(inlineProps);
      }
      return children;
    }
  }]);

  return NestedField;
}(_react2.default.Component), _class.defaultProps = {
  defaultValues: {}
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.buildApi = function (props) {
    var formApi = _this2.context.formApi;
    var field = props.field;


    var fullField = formApi.getFullField(field);

    // Overrides on the form api for child nodes
    _this2.formApi = _extends({}, formApi, {
      // Override the getFullField to reflect the new field context
      getFullField: function getFullField(field) {
        return [fullField, field];
      }
    });

    var proxySubField = function proxySubField(method) {
      return function (subField) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return method.apply(undefined, [[fullField, subField].filter(Boolean)].concat(args));
      };
    };

    // Set up the node's field-level api
    _this2.fieldApi = {
      // Most of these methods should act just like the form api methods,
      // since a nested field operates on multiple fields, not a single
      // field
      getValue: proxySubField(formApi.getValue),
      setValue: proxySubField(formApi.setValue),
      setTouched: proxySubField(formApi.setTouched),
      setError: proxySubField(formApi.setError),
      setWarning: proxySubField(formApi.setWarning),
      setSuccess: proxySubField(formApi.setSuccess),
      addValue: proxySubField(formApi.addValue),
      removeValue: proxySubField(formApi.removeValue),
      swapValues: proxySubField(formApi.swapValues),
      reset: proxySubField(formApi.reset),
      validatingField: function validatingField() {
        return formApi.validatingField(fullField);
      },
      doneValidatingField: function doneValidatingField() {
        return formApi.doneValidatingField(fullField);
      },
      validate: function validate(opts) {
        return formApi.validate(fullField, opts);
      },
      preValidate: function preValidate(opts) {
        return formApi.preValidate(fullField, opts);
      },
      asyncValidate: function asyncValidate(opts) {
        return formApi.asyncValidate(fullField, opts);
      }

      // define function to generate field values
    };_this2.getFieldValues = function () {
      return {
        fieldName: fullField,
        values: formApi.getValue(fullField),
        touched: formApi.getTouched(fullField),
        error: formApi.getError(fullField),
        warning: formApi.getWarning(fullField),
        success: formApi.getSuccess(fullField)
      };
    };

    // Build our node
    _this2.node = (0, _Tree.makeNode)(_extends({}, _this2.node, {
      nested: true,
      field: field,
      fullField: fullField,
      api: _this2.fieldApi,
      getState: _this2.getFieldValues,
      getProps: function getProps() {
        return _this2.props;
      }
    }));

    // We need to register our node after building the API
    formApi.register(_this2.node);
  };
}, _temp2);


NestedField.contextTypes = {
  formApi: _propTypes2.default.object,
  formState: _propTypes2.default.object
};

NestedField.childContextTypes = {
  formApi: _propTypes2.default.object,
  formState: _propTypes2.default.object
};

exports.default = NestedField;

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/Checkbox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var CheckboxWrapper = function (_Component) {
  _inherits(CheckboxWrapper, _Component);

  function CheckboxWrapper() {
    _classCallCheck(this, CheckboxWrapper);

    return _possibleConstructorReturn(this, (CheckboxWrapper.__proto__ || Object.getPrototypeOf(CheckboxWrapper)).apply(this, arguments));
  }

  _createClass(CheckboxWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fieldApi = _props.fieldApi,
          value = _props$fieldApi.value,
          setValue = _props$fieldApi.setValue,
          setTouched = _props$fieldApi.setTouched,
          _onChange = _props.onChange,
          _onBlur = _props.onBlur,
          rest = _objectWithoutProperties(_props, ['fieldApi', 'onChange', 'onBlur']);

      return _react2.default.createElement('input', _extends({}, rest, {
        checked: !!value,
        onChange: function onChange(e) {
          setValue(e.target.checked);
          if (_onChange) {
            _onChange(e.target.checked, e);
          }
        },
        onBlur: function onBlur(e) {
          setTouched();
          if (_onBlur) {
            _onBlur(e);
          }
        },
        type: 'checkbox'
      }));
    }
  }]);

  return CheckboxWrapper;
}(_react.Component);

var Checkbox = (0, _withField2.default)(CheckboxWrapper);

exports.default = Checkbox;

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/Radio.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withRadioGroup = __webpack_require__("./node_modules/react-form/es/components/withRadioGroup.js");

var _withRadioGroup2 = _interopRequireDefault(_withRadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var Radio = (_temp = _class = function (_Component) {
  _inherits(Radio, _Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _onChange = _props.onChange,
          _onBlur = _props.onBlur,
          value = _props.value,
          _props$radioGroup = _props.radioGroup,
          setValue = _props$radioGroup.setValue,
          setTouched = _props$radioGroup.setTouched,
          groupValue = _props$radioGroup.value,
          groupOnChange = _props$radioGroup.onChange,
          groupOnBlur = _props$radioGroup.onBlur,
          rest = _objectWithoutProperties(_props, ['onChange', 'onBlur', 'value', 'radioGroup']);

      return _react2.default.createElement('input', _extends({}, rest, {
        value: value,
        checked: groupValue === value,
        onChange: function onChange(e) {
          if (!e.target.checked) {
            return;
          }
          setValue(value);
          if (_onChange) {
            _onChange(e);
          }
          if (groupOnChange) {
            groupOnChange(e);
          }
        },
        onBlur: function onBlur(e) {
          setTouched();
          if (_onBlur) {
            _onBlur(e);
          }
          if (groupOnBlur) {
            groupOnBlur(e);
          }
        },
        type: 'radio'
      }));
    }
  }]);

  return Radio;
}(_react.Component), _class.contextTypes = {
  reactFormGroup: _propTypes2.default.object
}, _temp);
exports.default = (0, _withRadioGroup2.default)(Radio);

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/RadioGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

//

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroupWrapper = (_temp = _class = function (_Component) {
  _inherits(RadioGroupWrapper, _Component);

  function RadioGroupWrapper() {
    _classCallCheck(this, RadioGroupWrapper);

    return _possibleConstructorReturn(this, (RadioGroupWrapper.__proto__ || Object.getPrototypeOf(RadioGroupWrapper)).apply(this, arguments));
  }

  _createClass(RadioGroupWrapper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        reactFormGroup: _extends({}, this.props.fieldApi, {
          onChange: this.props.onChange,
          onBlur: this.props.onBlur
        })
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return RadioGroupWrapper;
}(_react.Component), _class.childContextTypes = {
  reactFormGroup: _propTypes2.default.object
}, _temp);


var RadioGroup = (0, _withField2.default)(RadioGroupWrapper);

exports.default = RadioGroup;

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/Select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var SelectWrapper = function (_Component) {
  _inherits(SelectWrapper, _Component);

  function SelectWrapper() {
    _classCallCheck(this, SelectWrapper);

    return _possibleConstructorReturn(this, (SelectWrapper.__proto__ || Object.getPrototypeOf(SelectWrapper)).apply(this, arguments));
  }

  _createClass(SelectWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fieldApi = _props.fieldApi,
          value = _props$fieldApi.value,
          setValue = _props$fieldApi.setValue,
          setTouched = _props$fieldApi.setTouched,
          options = _props.options,
          _onChange = _props.onChange,
          _onBlur = _props.onBlur,
          placeholder = _props.placeholder,
          rest = _objectWithoutProperties(_props, ['fieldApi', 'options', 'onChange', 'onBlur', 'placeholder']);

      var resolvedOptions = options.find(function (d) {
        return d.value === '';
      }) || placeholder === false ? options : [{
        label: placeholder || 'Select One...',
        value: '',
        disabled: true
      }].concat(_toConsumableArray(options));

      var nullIndex = resolvedOptions.findIndex(function (d) {
        return d.value === '';
      });
      var selectedIndex = resolvedOptions.findIndex(function (d) {
        return d.value === value;
      });

      return _react2.default.createElement(
        'select',
        _extends({}, rest, {
          value: selectedIndex > -1 ? selectedIndex : nullIndex,
          onChange: function onChange(e) {
            var val = resolvedOptions[e.target.value].value;
            setValue(val);
            if (_onChange) {
              _onChange(val, e);
            }
          },
          onBlur: function onBlur(e) {
            setTouched();
            if (_onBlur) {
              _onBlur(e);
            }
          }
        }),
        resolvedOptions.map(function (option, i) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: i, disabled: option.disabled },
            option.label
          );
        })
      );
    }
  }]);

  return SelectWrapper;
}(_react.Component);

var Select = (0, _withField2.default)(SelectWrapper);

exports.default = Select;

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/Text.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var TextWrapper = function (_Component) {
  _inherits(TextWrapper, _Component);

  function TextWrapper() {
    _classCallCheck(this, TextWrapper);

    return _possibleConstructorReturn(this, (TextWrapper.__proto__ || Object.getPrototypeOf(TextWrapper)).apply(this, arguments));
  }

  _createClass(TextWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fieldApi = _props.fieldApi,
          value = _props$fieldApi.value,
          setValue = _props$fieldApi.setValue,
          setTouched = _props$fieldApi.setTouched,
          _onChange = _props.onChange,
          _onBlur = _props.onBlur,
          rest = _objectWithoutProperties(_props, ['fieldApi', 'onChange', 'onBlur']);

      return _react2.default.createElement('input', _extends({}, rest, {
        value: !value && value !== 0 ? '' : value,
        onChange: function onChange(e) {
          setValue(e.target.value);
          if (_onChange) {
            _onChange(e.target.value, e);
          }
        },
        onBlur: function onBlur(e) {
          setTouched();
          if (_onBlur) {
            _onBlur(e);
          }
        }
      }));
    }
  }]);

  return TextWrapper;
}(_react.Component);

var Text = (0, _withField2.default)(TextWrapper);

exports.default = Text;

/***/ }),

/***/ "./node_modules/react-form/es/components/form-fields/TextArea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var TextAreaWrapper = function (_Component) {
  _inherits(TextAreaWrapper, _Component);

  function TextAreaWrapper() {
    _classCallCheck(this, TextAreaWrapper);

    return _possibleConstructorReturn(this, (TextAreaWrapper.__proto__ || Object.getPrototypeOf(TextAreaWrapper)).apply(this, arguments));
  }

  _createClass(TextAreaWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fieldApi = _props.fieldApi,
          value = _props$fieldApi.value,
          setValue = _props$fieldApi.setValue,
          setTouched = _props$fieldApi.setTouched,
          _onChange = _props.onChange,
          _onBlur = _props.onBlur,
          rest = _objectWithoutProperties(_props, ['fieldApi', 'onChange', 'onBlur']);

      return _react2.default.createElement('textarea', _extends({}, rest, {
        value: value || '',
        onChange: function onChange(e) {
          setValue(e.target.value);
          if (_onChange) {
            _onChange(e.target.value, e);
          }
        },
        onBlur: function onBlur(e) {
          setTouched();
          if (_onBlur) {
            _onBlur(e);
          }
        }
      }));
    }
  }]);

  return TextAreaWrapper;
}(_react.Component);

var TextArea = (0, _withField2.default)(TextAreaWrapper);

exports.default = TextArea;

/***/ }),

/***/ "./node_modules/react-form/es/components/withField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withField;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Field = __webpack_require__("./node_modules/react-form/es/components/Field.js");

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

function withField(Comp, defaults) {
  return function ConnectedField(props) {
    return _react2.default.createElement(_Field2.default, _extends({ component: Comp }, defaults, props));
  };
}

/***/ }),

/***/ "./node_modules/react-form/es/components/withFieldApi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withFieldApi;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _FieldApi = __webpack_require__("./node_modules/react-form/es/components/FieldApi.js");

var _FieldApi2 = _interopRequireDefault(_FieldApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

function withFieldApi(name) {
  return function (Comp) {
    return function (props) {
      return _react2.default.createElement(_FieldApi2.default, _extends({ component: Comp, field: name }, props));
    };
  };
}

/***/ }),

/***/ "./node_modules/react-form/es/components/withFormApi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withFormApi;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _FormApi = __webpack_require__("./node_modules/react-form/es/components/FormApi.js");

var _FormApi2 = _interopRequireDefault(_FormApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

function withFormApi(Comp, defaults) {
  return function ConnectedFormApi(props) {
    return _react2.default.createElement(_FormApi2.default, _extends({ component: Comp }, defaults, props));
  };
}

/***/ }),

/***/ "./node_modules/react-form/es/components/withNestedField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withNestedField;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _NestedField = __webpack_require__("./node_modules/react-form/es/components/NestedField.js");

var _NestedField2 = _interopRequireDefault(_NestedField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

function withNestedField(Comp, defaults) {
  return function ConnectedNestedField(props) {
    return _react2.default.createElement(_NestedField2.default, _extends({ component: Comp }, defaults, props));
  };
}

/***/ }),

/***/ "./node_modules/react-form/es/components/withRadioGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withRadioGroup;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

function withRadioGroup(Comp) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Comp, _extends({ radioGroup: this.context.reactFormGroup }, this.props));
      }
    }]);

    return _class;
  }(_react.Component), _class.contextTypes = {
    reactFormGroup: _propTypes2.default.object
  }, _temp;
}

/***/ }),

/***/ "./node_modules/react-form/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFieldApi = exports.FieldApi = exports.withRadioGroup = exports.RadioGroup = exports.Checkbox = exports.Select = exports.TextArea = exports.Radio = exports.Text = exports.withNestedField = exports.NestedField = exports.withFormApi = exports.FormApi = exports.withField = exports.Field = exports.Form = undefined;

var _Form = __webpack_require__("./node_modules/react-form/es/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _Field = __webpack_require__("./node_modules/react-form/es/components/Field.js");

var _Field2 = _interopRequireDefault(_Field);

var _withField = __webpack_require__("./node_modules/react-form/es/components/withField.js");

var _withField2 = _interopRequireDefault(_withField);

var _FormApi = __webpack_require__("./node_modules/react-form/es/components/FormApi.js");

var _FormApi2 = _interopRequireDefault(_FormApi);

var _withFormApi = __webpack_require__("./node_modules/react-form/es/components/withFormApi.js");

var _withFormApi2 = _interopRequireDefault(_withFormApi);

var _NestedField = __webpack_require__("./node_modules/react-form/es/components/NestedField.js");

var _NestedField2 = _interopRequireDefault(_NestedField);

var _withNestedField = __webpack_require__("./node_modules/react-form/es/components/withNestedField.js");

var _withNestedField2 = _interopRequireDefault(_withNestedField);

var _FieldApi = __webpack_require__("./node_modules/react-form/es/components/FieldApi.js");

var _FieldApi2 = _interopRequireDefault(_FieldApi);

var _withFieldApi = __webpack_require__("./node_modules/react-form/es/components/withFieldApi.js");

var _withFieldApi2 = _interopRequireDefault(_withFieldApi);

var _Text = __webpack_require__("./node_modules/react-form/es/components/form-fields/Text.js");

var _Text2 = _interopRequireDefault(_Text);

var _Radio = __webpack_require__("./node_modules/react-form/es/components/form-fields/Radio.js");

var _Radio2 = _interopRequireDefault(_Radio);

var _TextArea = __webpack_require__("./node_modules/react-form/es/components/form-fields/TextArea.js");

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__("./node_modules/react-form/es/components/form-fields/Select.js");

var _Select2 = _interopRequireDefault(_Select);

var _Checkbox = __webpack_require__("./node_modules/react-form/es/components/form-fields/Checkbox.js");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _RadioGroup = __webpack_require__("./node_modules/react-form/es/components/form-fields/RadioGroup.js");

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _withRadioGroup = __webpack_require__("./node_modules/react-form/es/components/withRadioGroup.js");

var _withRadioGroup2 = _interopRequireDefault(_withRadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These should move to a react-form-styled package
// import StyledText from './components/styled-form-fields/Text'
// import StyledRadio from './components/styled-form-fields/Radio'
// import StyledTextArea from './components/styled-form-fields/TextArea'
// import StyledSelect from './components/styled-form-fields/Select'
// import StyledCheckbox from './components/styled-form-fields/Checkbox'

exports.Form = _Form2.default;
exports.Field = _Field2.default;
exports.withField = _withField2.default;
exports.FormApi = _FormApi2.default;
exports.withFormApi = _withFormApi2.default;
exports.NestedField = _NestedField2.default;
exports.withNestedField = _withNestedField2.default;
exports.Text = _Text2.default;
exports.Radio = _Radio2.default;
exports.TextArea = _TextArea2.default;
exports.Select = _Select2.default;
exports.Checkbox = _Checkbox2.default;
exports.RadioGroup = _RadioGroup2.default;
exports.withRadioGroup = _withRadioGroup2.default;
exports.FieldApi = _FieldApi2.default;
exports.withFieldApi = _withFieldApi2.default;

/***/ }),

/***/ "./node_modules/react-form/es/redux/BuildReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BuildReducer;

var _actions = __webpack_require__("./node_modules/react-form/es/redux/actions.js");

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  values: {},
  touched: {},
  errors: undefined,
  warnings: undefined,
  successes: undefined,
  asyncErrors: undefined,
  asyncWarnings: undefined,
  asyncSuccesses: undefined,
  validating: undefined,
  validationFailed: undefined,
  validationFailures: 0,
  asyncValidations: 0,
  submitted: false,
  submits: 0,
  submitting: false
};

var setFormState = function setFormState(state, _ref) {
  var payload = _ref.payload;
  return _extends({}, INITIAL_STATE, payload);
};

var setValue = function setValue(state, _ref2) {
  var _ref2$payload = _ref2.payload,
      field = _ref2$payload.field,
      value = _ref2$payload.value;

  var newValues = _utils2.default.set(_utils2.default.clone(state.values), field, value);
  return _extends({}, state, {
    values: newValues
  });
};

// This should REPLACE all values. if that's not intended, we should
// add a `setValues` method
var setAllValues = function setAllValues(state, _ref3) {
  var values = _ref3.payload;
  return _extends({}, state, {
    values: values
  });
};

var setTouched = function setTouched(state, _ref4) {
  var _ref4$payload = _ref4.payload,
      field = _ref4$payload.field,
      value = _ref4$payload.value;

  var newTouched = _utils2.default.set(_utils2.default.clone(state.touched), field, value, true);
  return _extends({}, state, {
    touched: newTouched
  });
};

var setAllTouched = function setAllTouched(state, _ref5) {
  var touched = _ref5.payload;
  return _extends({}, state, {
    touched: touched
  });
};

var setError = function setError(state, _ref6) {
  var _ref6$payload = _ref6.payload,
      _ref6$payload$field = _ref6$payload.field,
      field = _ref6$payload$field === undefined ? '__root' : _ref6$payload$field,
      value = _ref6$payload.value;

  var newErrors = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.errors), field, value, true));
  return _extends({}, state, {
    errors: newErrors
  });
};

var setWarning = function setWarning(state, _ref7) {
  var _ref7$payload = _ref7.payload,
      _ref7$payload$field = _ref7$payload.field,
      field = _ref7$payload$field === undefined ? '__root' : _ref7$payload$field,
      value = _ref7$payload.value;

  var newWarnings = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.warnings), field, value, true));
  return _extends({}, state, {
    warnings: newWarnings
  });
};

var setSuccess = function setSuccess(state, _ref8) {
  var _ref8$payload = _ref8.payload,
      _ref8$payload$field = _ref8$payload.field,
      field = _ref8$payload$field === undefined ? '__root' : _ref8$payload$field,
      value = _ref8$payload.value;

  var newSuccesses = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.successes), field, value, true));
  return _extends({}, state, {
    successes: newSuccesses
  });
};

var setAsyncWarning = function setAsyncWarning(state, _ref9) {
  var _ref9$payload = _ref9.payload,
      _ref9$payload$field = _ref9$payload.field,
      field = _ref9$payload$field === undefined ? '__root' : _ref9$payload$field,
      value = _ref9$payload.value;

  var newWarnings = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.asyncWarnings), field, value, true));
  return _extends({}, state, {
    asyncWarnings: newWarnings
  });
};

var setAsyncError = function setAsyncError(state, _ref10) {
  var _ref10$payload = _ref10.payload,
      _ref10$payload$field = _ref10$payload.field,
      field = _ref10$payload$field === undefined ? '__root' : _ref10$payload$field,
      value = _ref10$payload.value;

  var newErrors = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.asyncErrors), field, value, true));
  return _extends({}, state, {
    asyncErrors: newErrors
  });
};

var setAsyncSuccess = function setAsyncSuccess(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      _ref11$payload$field = _ref11$payload.field,
      field = _ref11$payload$field === undefined ? '__root' : _ref11$payload$field,
      value = _ref11$payload.value;

  var newSuccesses = _utils2.default.cleanError(_utils2.default.set(_utils2.default.clone(state.asyncSuccesses), field, value, true));

  return _extends({}, state, {
    asyncSuccesses: newSuccesses
  });
};

var validatingField = function validatingField(state, _ref12) {
  var _ref12$payload = _ref12.payload,
      field = _ref12$payload === undefined ? '__root' : _ref12$payload;

  var validating = _utils2.default.clone(state.validating);
  var asyncValidations = state.asyncValidations;

  // Only incriment validations if this field is going from falsey to true
  asyncValidations = !_utils2.default.get(validating, field) ? asyncValidations + 1 : asyncValidations;

  validating = _utils2.default.cleanError(_utils2.default.set(validating, field, true));

  return _extends({}, state, {
    asyncValidations: asyncValidations,
    validating: validating
  });
};

var doneValidatingField = function doneValidatingField(state, _ref13) {
  var _ref13$payload = _ref13.payload,
      field = _ref13$payload === undefined ? '__root' : _ref13$payload;

  var validating = _utils2.default.clone(state.validating);
  var asyncValidations = state.asyncValidations;

  // Only incriment validations if this field is going from falsey to true
  asyncValidations = _utils2.default.get(validating, field) ? asyncValidations - 1 : asyncValidations;

  validating = _utils2.default.cleanError(_utils2.default.set(validating, field, false));

  return _extends({}, state, {
    asyncValidations: asyncValidations,
    validating: validating
  });
};

var validationFailure = function validationFailure(state, _ref14) {
  var _ref14$payload = _ref14.payload,
      _ref14$payload$field = _ref14$payload.field,
      field = _ref14$payload$field === undefined ? '__root' : _ref14$payload$field,
      value = _ref14$payload.value;

  var validationFailed = _utils2.default.clone(state.validationFailed);
  var validationFailures = state.validationFailures;

  // Only incriment validations if this field is going from falsey to true
  validationFailures = !_utils2.default.get(validationFailed, field) ? validationFailures + 1 : validationFailures;

  validationFailed = _utils2.default.cleanError(_utils2.default.set(validationFailed, field, value));

  return _extends({}, state, {
    validationFailures: validationFailures,
    validationFailed: validationFailed
  });
};

var validationSuccess = function validationSuccess(state, _ref15) {
  var _ref15$payload = _ref15.payload,
      field = _ref15$payload === undefined ? '__root' : _ref15$payload;

  var validationFailed = _utils2.default.clone(state.validationFailed);
  var validationFailures = state.validationFailures;

  // Only devcriment faulures if this field is going from true to false
  validationFailures = _utils2.default.get(validationFailed, field) ? validationFailures - 1 : validationFailures;

  validationFailed = _utils2.default.cleanError(_utils2.default.set(validationFailed, field, false));

  return _extends({}, state, {
    validationFailures: validationFailures,
    validationFailed: validationFailed
  });
};

var submits = function submits(state) {
  return _extends({}, state, {
    submits: state.submits + 1
  });
};

var submitted = function submitted(state) {
  return _extends({}, state, {
    submitted: true
  });
};

var submitting = function submitting(state, _ref16) {
  var submitting = _ref16.payload;
  return _extends({}, state, {
    submitting: submitting
  });
};

var reset = function reset(state, _ref17) {
  var _ref17$payload$field = _ref17.payload.field,
      field = _ref17$payload$field === undefined ? '__root' : _ref17$payload$field;

  var newState = _utils2.default.clone(state);

  _utils2.default.set(newState.values, field, undefined);
  _utils2.default.set(newState.touched, field, undefined);
  _utils2.default.set(newState.errors, field, undefined);
  _utils2.default.set(newState.warnings, field, undefined);
  _utils2.default.set(newState.successes, field, undefined);
  _utils2.default.set(newState.asyncErrors, field, undefined);
  _utils2.default.set(newState.asyncWarnings, field, undefined);
  _utils2.default.set(newState.asyncSuccesses, field, undefined);

  return _extends({}, state, newState);
};

//

function BuildReducer() {
  var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref18$defaultValues = _ref18.defaultValues,
      defaultValues = _ref18$defaultValues === undefined ? {} : _ref18$defaultValues,
      _ref18$values = _ref18.values,
      values = _ref18$values === undefined ? {} : _ref18$values;

  var COMBINED_INITIAL_STATE = _extends({}, INITIAL_STATE, {
    values: _extends({}, defaultValues, values)
  });

  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : COMBINED_INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
      case _actions.SET_FORM_STATE:
        return setFormState(state, action);
      case _actions.SET_VALUE:
        return setValue(state, action);
      case _actions.SET_ALL_VALUES:
        return setAllValues(state, action);
      case _actions.SET_ERROR:
        return setError(state, action);
      case _actions.SET_WARNING:
        return setWarning(state, action);
      case _actions.SET_SUCCESS:
        return setSuccess(state, action);
      case _actions.SET_ASYNC_ERROR:
        return setAsyncError(state, action);
      case _actions.SET_ASYNC_WARNING:
        return setAsyncWarning(state, action);
      case _actions.SET_ASYNC_SUCCESS:
        return setAsyncSuccess(state, action);
      case _actions.SET_TOUCHED:
        return setTouched(state, action);
      case _actions.SET_ALL_TOUCHED:
        return setAllTouched(state, action);
      case _actions.SUBMITTED:
        return submitted(state, action);
      case _actions.SUBMITS:
        return submits(state, action);
      case _actions.SUBMITTING:
        return submitting(state, action);
      case _actions.RESET:
        return reset(state, action);
      case _actions.RESET_ALL:
        return COMBINED_INITIAL_STATE;
      case _actions.CLEAR_ALL:
        return INITIAL_STATE;
      case _actions.VALIDATION_FAILURE:
        return validationFailure(state, action);
      case _actions.VALIDATION_SUCCESS:
        return validationSuccess(state, action);
      case _actions.DONE_VALIDATING_FIELD:
        return doneValidatingField(state, action);
      case _actions.VALIDATING_FIELD:
        return validatingField(state, action);
      default:
        return state;
    }
  };

  return reducer;
}

/***/ }),

/***/ "./node_modules/react-form/es/redux/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationSuccess = exports.validationFailure = exports.doneValidatingField = exports.validatingField = exports.submitting = exports.submits = exports.submitted = exports.submit = exports.clearAll = exports.resetAll = exports.reset = exports.setAllTouched = exports.setTouched = exports.setAsyncSuccess = exports.setAsyncWarning = exports.setAsyncError = exports.setSuccess = exports.setWarning = exports.setError = exports.format = exports.setAllValues = exports.setValue = exports.setFormState = exports.VALIDATION_SUCCESS = exports.VALIDATION_FAILURE = exports.DONE_VALIDATING_FIELD = exports.VALIDATING_FIELD = exports.SUBMITTING = exports.SUBMITS = exports.SUBMITTED = exports.SUBMIT = exports.CLEAR_ALL = exports.RESET_ALL = exports.RESET = exports.SET_ALL_TOUCHED = exports.SET_TOUCHED = exports.SET_ASYNC_SUCCESS = exports.SET_ASYNC_WARNING = exports.SET_ASYNC_ERROR = exports.SET_SUCCESS = exports.SET_WARNING = exports.SET_ERROR = exports.FORMAT = exports.SET_ALL_VALUES = exports.SET_VALUE = exports.SET_FORM_STATE = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.preValidate = preValidate;
exports.validate = validate;
exports.asyncValidate = asyncValidate;

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var makeAction = function makeAction(type) {
  return function (payload) {
    return { type: type, payload: payload };
  };
};

var SET_FORM_STATE = exports.SET_FORM_STATE = 'SET_FORM_STATE';
var SET_VALUE = exports.SET_VALUE = 'SET_VALUE';
var SET_ALL_VALUES = exports.SET_ALL_VALUES = 'SET_ALL_VALUES';
var FORMAT = exports.FORMAT = 'FORMAT';
var SET_ERROR = exports.SET_ERROR = 'SET_ERROR';
var SET_WARNING = exports.SET_WARNING = 'SET_WARNING';
var SET_SUCCESS = exports.SET_SUCCESS = 'SET_SUCCESS';
var SET_ASYNC_ERROR = exports.SET_ASYNC_ERROR = 'SET_ASYNC_ERROR';
var SET_ASYNC_WARNING = exports.SET_ASYNC_WARNING = 'SET_ASYNC_WARNING';
var SET_ASYNC_SUCCESS = exports.SET_ASYNC_SUCCESS = 'SET_ASYNC_SUCCESS';
var SET_TOUCHED = exports.SET_TOUCHED = 'SET_TOUCHED';
var SET_ALL_TOUCHED = exports.SET_ALL_TOUCHED = 'SET_ALL_TOUCHED';
var RESET = exports.RESET = 'RESET';
var RESET_ALL = exports.RESET_ALL = 'RESET_ALL';
var CLEAR_ALL = exports.CLEAR_ALL = 'CLEAR_ALL';
var SUBMIT = exports.SUBMIT = 'SUBMIT';
var SUBMITTED = exports.SUBMITTED = 'SUBMITTED';
var SUBMITS = exports.SUBMITS = 'SUBMITS';
var SUBMITTING = exports.SUBMITTING = 'SUBMITTING';
var VALIDATING_FIELD = exports.VALIDATING_FIELD = 'VALIDATING_FIELD';
var DONE_VALIDATING_FIELD = exports.DONE_VALIDATING_FIELD = 'DONE_VALIDATING_FIELD';
var VALIDATION_FAILURE = exports.VALIDATION_FAILURE = 'VALIDATION_FAILURE';
var VALIDATION_SUCCESS = exports.VALIDATION_SUCCESS = 'VALIDATION_SUCCESS';

var setFormState = exports.setFormState = makeAction(SET_FORM_STATE);
var setValue = exports.setValue = makeAction(SET_VALUE);
var setAllValues = exports.setAllValues = makeAction(SET_ALL_VALUES);
var format = exports.format = makeAction(FORMAT);
var setError = exports.setError = makeAction(SET_ERROR);
var setWarning = exports.setWarning = makeAction(SET_WARNING);
var setSuccess = exports.setSuccess = makeAction(SET_SUCCESS);
var setAsyncError = exports.setAsyncError = makeAction(SET_ASYNC_ERROR);
var setAsyncWarning = exports.setAsyncWarning = makeAction(SET_ASYNC_WARNING);
var setAsyncSuccess = exports.setAsyncSuccess = makeAction(SET_ASYNC_SUCCESS);
var setTouched = exports.setTouched = makeAction(SET_TOUCHED);
var setAllTouched = exports.setAllTouched = makeAction(SET_ALL_TOUCHED);
var reset = exports.reset = makeAction(RESET);
var resetAll = exports.resetAll = makeAction(RESET_ALL);
var clearAll = exports.clearAll = makeAction(CLEAR_ALL);
var submit = exports.submit = makeAction(SUBMIT);
var submitted = exports.submitted = makeAction(SUBMITTED);
var submits = exports.submits = makeAction(SUBMITS);
var submitting = exports.submitting = makeAction(SUBMITTING);
var validatingField = exports.validatingField = makeAction(VALIDATING_FIELD);
var doneValidatingField = exports.doneValidatingField = makeAction(DONE_VALIDATING_FIELD);
var validationFailure = exports.validationFailure = makeAction(VALIDATION_FAILURE);
var validationSuccess = exports.validationSuccess = makeAction(VALIDATION_SUCCESS);

function preValidate(_ref) {
  var field = _ref.field,
      validator = _ref.validator;

  return function (dispatch, getState) {
    if (validator && validator !== _utils2.default.noop) {
      // Call the validation function
      var result = validator(_utils2.default.get(getState().values, field));
      if (typeof result === 'undefined') {
        console.info('You have returned undefined from preValidate for the field: ' + field.toString() + '. If this was intentional, disregard this message.');
      }
      dispatch(setValue({ field: field, value: result }));
    }
  };
}

function validate(_ref2) {
  var field = _ref2.field,
      validator = _ref2.validator;

  return function (dispatch, getState) {
    if (!validator || validator === _utils2.default.noop) {
      return;
    }
    // Call the validation function and clean the result
    var result = validator(_utils2.default.get(getState().values, field));

    var recurse = function recurse(current, path) {
      // Normalize fieldPath
      path = _utils2.default.makePathArray(path);

      // If it's a non object/array, treat it as an error
      if (!_utils2.default.isObject(current) && !_utils2.default.isArray(current)) {
        // Nested errors aren't allowed if using string errors, so return
        return dispatch(setError({ field: path, value: current }));
      }

      // If it's an error object, set a clean slate
      if (current.error || current.warning || current.success) {
        dispatch(setError({ field: path, value: false }));
        dispatch(setWarning({ field: path, value: false }));
        dispatch(setSuccess({ field: path, value: false }));

        // Now handle accordingly
        if (current.error) {
          dispatch(setError({ field: path, value: current.error }));
        }
        if (current.warning) {
          dispatch(setWarning({ field: path, value: current.warning }));
        }
        if (current.success) {
          dispatch(setSuccess({ field: path, value: current.success }));
        }
        return;
      }

      // If result is an array, recurse into each item
      if (_utils2.default.isArray(current)) {
        return current.map(function (subResult, i) {
          return recurse(subResult, [path, i]);
        });
      }

      // It must be a normal object, recurse on each key to set nested errors!
      _utils2.default.mapObject(current, function (subResult, key) {
        return recurse(subResult, [path, key]);
      });
    };

    // Recurse to set all errors
    recurse(result, field);

    return _utils2.default.cleanError(result, { removeSuccess: true });
  };
}

function asyncValidate(_ref3) {
  var _this = this;

  var field = _ref3.field,
      validator = _ref3.validator,
      validationPromiseIDs = _ref3.validationPromiseIDs;

  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var fieldPathArray, uid, result, recurse;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!validator || validator === _utils2.default.noop)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              // We are validating the specified field
              dispatch(validatingField(field));

              fieldPathArray = _utils2.default.makePathArray(field).join('.');

              // Set up an autoincrementing promise UID for this field on the form

              uid = (validationPromiseIDs.get(fieldPathArray) || 0) + 1;

              validationPromiseIDs.set(fieldPathArray, uid);

              result = void 0;
              _context.prev = 7;
              _context.next = 10;
              return validator(_utils2.default.get(getState().values, field));

            case 10:
              result = _context.sent;

              if (!(validationPromiseIDs.get(fieldPathArray) !== uid)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return');

            case 13:

              // Set up the error recursion
              recurse = function recurse(current, path) {
                // Normalize fieldPath
                path = _utils2.default.makePathArray(path);

                // If it's a non object/array, treat it as an error
                if (!_utils2.default.isObject(current) && !_utils2.default.isArray(current)) {
                  // Nested errors aren't allowed if using string errors, so return
                  return dispatch(setAsyncError({ field: path, value: current }));
                }

                // If it's an error object, respond accordingly
                if (current.error || current.warning || current.success) {
                  dispatch(setAsyncError({ field: path, value: false }));
                  dispatch(setAsyncWarning({ field: path, value: false }));
                  dispatch(setAsyncSuccess({ field: path, value: false }));
                  if (current.error) {
                    dispatch(setAsyncError({ field: path, value: current.error }));
                  }
                  if (current.warning) {
                    dispatch(setAsyncWarning({ field: path, value: current.warning }));
                  }
                  if (current.success) {
                    dispatch(setAsyncSuccess({ field: path, value: current.success }));
                  }
                  return;
                }

                // If result is an array, recurse into each item
                if (_utils2.default.isArray(current)) {
                  return current.map(function (subResult, i) {
                    return recurse(subResult, [path, i]);
                  });
                }

                // It must be a normal object, recurse on each key to set nested errors!
                _utils2.default.mapObject(current, function (subResult, key) {
                  return recurse(subResult, [path, key]);
                });
              };

              // Handle the error


              recurse(result, field);

              // We successfully validated so dispatch
              dispatch(validationSuccess(field));
              _context.next = 22;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context['catch'](7);

              // An validation error happened!
              // Set the error result to true to stop further validation up the chain
              result = true;
              dispatch(validationFailure({ field: field, value: _context.t0 }));

            case 22:

              // Mark the field as done validating
              dispatch(doneValidatingField(field));

              return _context.abrupt('return', _utils2.default.cleanError(result, { removeSuccess: true }));

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[7, 18]]);
    }));

    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();
}

/***/ }),

/***/ "./node_modules/react-form/es/utils/Tree.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.makeNode = makeNode;

var _utils = __webpack_require__("./node_modules/react-form/es/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultNode = function defaultNode() {
  return {
    api: {
      preValidate: _utils2.default.noop,
      validate: _utils2.default.noop,
      asyncValidate: _utils2.default.noop
    },
    children: {},
    getProps: function getProps() {
      return {};
    }
  };
};

function makeNode() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _extends({}, defaultNode(), node);
}

var Tree = function () {
  function Tree(rootNode) {
    _classCallCheck(this, Tree);

    this.root = makeNode(rootNode);
  }

  _createClass(Tree, [{
    key: 'addNode',
    value: function addNode(node) {
      var parent = this.root;
      // Step 1: Break the nodes field into parts
      var path = _utils2.default.makePathArray(node.fullField);
      // Step 2: Go down the tree
      while (path.length > 1) {
        // Ensure a linkage node is preset
        if (!parent.children[path[0]]) {
          parent.children[path[0]] = makeNode({
            nested: true,
            field: path[0],
            fullField: _utils2.default.makePathArray([parent.fullField, path[0]]),
            parent: parent
          });
        }

        // Child grows up, becomes the new parent
        parent = parent.children[path[0]];
        path.shift();
      }

      // Create the last node in the chain
      var newNode = makeNode(_extends({}, node, {
        field: path[0],
        parent: parent
      }));
      parent.children[path[0]] = newNode;
    }
  }, {
    key: 'removeNode',
    value: function removeNode(node) {
      var parent = this.root;
      // Step 1: Break the nodes field into parts
      var path = _utils2.default.makePathArray(node.fullField);
      // Step 2: Go down the tree
      while (path.length > 1) {
        // Bail out if the child field doesn't exist
        if (!parent.children[path[0]]) {
          return;
        }
        // Child grows up, becomes the new parent
        parent = parent.children[path[0]];
        path.shift();
      }

      // Create the last node in the chain
      delete parent.children[path[0]];
    }
  }, {
    key: 'getNodeByField',
    value: function getNodeByField(field) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          closest = _ref.closest;

      // Initialize the parent to the target
      var parent = this.root;
      // Step 1: Break the nodes field into parts
      var path = _utils2.default.makePathArray(field);
      // Step 2: Go down the tree
      while (path.length) {
        if (parent.children && parent.children[path[0]]) {
          parent = parent.children[path[0]];
        } else {
          return closest ? parent : null;
        }
        path.shift();
      }
      return parent;
    }
  }]);

  return Tree;
}();

exports.default = Tree;

/***/ }),

/***/ "./node_modules/react-form/es/utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  clone: clone,
  get: get,
  set: set,
  isObject: isObject,
  isArray: isArray,
  isShallowEqual: isShallowEqual,
  isDeepEqual: isDeepEqual,
  noop: noop,
  makePathArray: makePathArray,
  mapObject: mapObject,
  cleanError: cleanError
};


function isArray(a) {
  return Array.isArray(a);
}

function isObject(a) {
  return !Array.isArray(a) && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a !== null;
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function makePathArray(obj) {
  var path = [];
  var flat = flattenDeep(obj);
  flat.forEach(function (part) {
    if (typeof part === 'string') {
      path = path.concat(part.replace(/\[(\d*)\]/gm, '.__int__$1').replace('[', '.').replace(']', '').split('.').map(function (d) {
        if (d.indexOf('__int__') === 0) {
          return parseInt(d.substring(7), 10);
        }
        return d;
      }));
    } else {
      path.push(part);
    }
  });
  return path.filter(function (d) {
    return typeof d !== 'undefined';
  });
}

function clone(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (err) {
    return obj;
  }
}

// TODO figure out way to make state immutable
function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];
  var deleteWhenFalsey = arguments[3];

  if (!path) {
    return value;
  }
  var keys = makePathArray(path);

  var cursor = obj;

  while (keys.length > 1) {
    var key = keys[0];
    var nextKey = keys[1];
    if (typeof nextKey === 'number' && !isArray(cursor[key])) {
      cursor[key] = [];
    }
    if (typeof nextKey !== 'number' && !isObject(cursor[key])) {
      cursor[key] = {};
    }
    cursor = cursor[key];
    keys.shift();
  }

  if (!value && deleteWhenFalsey) {
    delete cursor[keys[0]];
  } else {
    cursor[keys[0]] = value;
  }

  return obj;
}

function get(obj, path, def) {
  if (!path) {
    return obj;
  }
  var pathArray = makePathArray(path);
  var pathObj = pathArray;
  var val = pathObj.reduce(function (current, pathPart) {
    if (typeof current !== 'undefined' && current !== null) {
      return current[pathPart];
    }
    return undefined;
  }, obj);
  return typeof val !== 'undefined' ? val : def;
}

function isShallowEqual(obj1, obj2, keys) {
  if (!keys && Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  var isEqual = Object.keys(obj1).every(function (prop) {
    if (keys) {
      if (keys.includes(prop)) {
        return obj1[prop] === obj2[prop];
      }
      return true;
    }
    return obj1[prop] === obj2[prop];
  });
  if (!isEqual) {
    return false;
  }
  return true;
}

function isDeepEqual(a, b) {
  if (a === b) return true;

  var arrA = Array.isArray(a);
  var arrB = Array.isArray(b);
  var i = void 0;

  if (arrA && arrB) {
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (!isDeepEqual(a[i], b[i])) return false;
    }return true;
  }

  if (arrA !== arrB) return false;

  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date;
    var dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() === b.getTime();
    if (dateA !== dateB) return false;

    var regexpA = a instanceof RegExp;
    var regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() === b.toString();
    if (regexpA !== regexpB) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!isDeepEqual(a[keys[i]], b[keys[i]])) return false;
    }return true;
  }

  return false;
}

function noop() {}

function mapObject(obj, cb) {
  return Object.keys(obj).map(function (key) {
    return cb(obj[key], key);
  });
}

function cleanError(obj) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      removeSuccess = _ref.removeSuccess;

  if (!obj) {
    return undefined;
  }
  if (isObject(obj)) {
    mapObject(obj, function (val, key) {
      obj[key] = cleanError(obj[key]); // clean nested objects
      if (removeSuccess && key === 'success') {
        delete obj[key];
      }
      if (!obj[key]) {
        delete obj[key]; // remove falsey keys
      }
    });
    if (!Object.keys(obj).length) {
      return undefined;
    }
  }
  if (isArray(obj)) {
    obj = obj.map(cleanError); // clean nested falsey arrays
    if (!obj.length || obj.every(function (d) {
      return !d;
    })) {
      return undefined;
    }
  }
  return obj;
}

/***/ })

})
//# sourceMappingURL=3.669d2637d610299be799.hot-update.js.map