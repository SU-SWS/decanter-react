function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var clsxd = _interopDefault(require('clsx-dedupe'));
var Icon = _interopDefault(require('react-hero-icon'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var alertTypes = ['info', 'warning', 'error', 'success'];
var lightText = 'su-text-white hover:su-link-no-underline';
var darkText = 'su-text-black su-link-black-true hover:su-link-no-underline';

var buttonVariants = ['solid', 'outline', 'none'];
var buttonSizes = ['big', 'small', 'minimal', 'default'];
var buttonTypes = ['button', 'submit', 'reset'];

var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      ref = _ref.ref,
      variant = _ref.variant,
      size = _ref.size,
      type = _ref.type,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "onClick", "ref", "variant", "size", "type", "isDisabled"]);

  var levers = {};

  if (variant && buttonVariants.includes(variant)) {
    switch (variant) {
      case 'solid':
        levers.variant = 'su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'outline':
        levers.variant = 'su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'none':
        levers.variant = 'su-bg-transparent hocus:su-bg-transparent';
        break;
    }
  }

  if (size && buttonSizes.includes(size)) {
    switch (size) {
      case 'big':
        levers.size = 'su-px-34 su-py-15 su-text-20 md:su-text-24';
        break;

      case 'small':
        levers.size = 'su-px-19 su-py-9 su-text-16 md:su-text-18';
        break;

      case 'minimal':
        levers.size = 'su-p-0';
        break;

      case 'default':
        levers.size = 'su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20';
        break;
    }
  }

  if (isDisabled) {
    levers.disabled = 'su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none';
    levers.variant = clsxd(levers.variant, {
      'su-bg-digital-red': false,
      'su-text-digital-red': false,
      'su-border-digital-red': false,
      'hover:su-border-black': false,
      'focus:su-border-black': false,
      'su-text-white': false
    });
  }

  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: clsxd('su-button', levers.variant, levers.size, levers.disabled, className),
    ref: ref,
    onClick: onClick,
    type: type,
    disabled: isDisabled
  }, props), children);
};
Button.propTypes = {
  type: propTypes.oneOf(buttonTypes),
  variant: propTypes.oneOf(buttonVariants),
  size: propTypes.oneOf(buttonSizes),
  isDisabled: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.oneOfType([propTypes.string, propTypes.element, propTypes.node])
};
Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  size: 'default',
  isDisabled: false,
  ref: null
};

var Alert = function Alert(_ref) {
  var _props$icon, _props$dismissBtn, _props$label, _props$label2;

  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "children", "ref"]);

  var levers = {};
  var iconProps = {
    height: 24,
    width: 24
  };

  var _useState = React.useState(false),
      isDismissed = _useState[0],
      setDismissed = _useState[1];

  levers.wrapper = 'su-bg-foggy-light';
  levers.dismiss = clsxd(darkText, 'hover:su-text-black focus:su-text-black');

  if (props.isLargeIcon) {
    iconProps.height = 60;
    iconProps.width = 60;
  }

  var defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
    icon: "bell",
    type: "outline",
    className: clsxd({
      'su-inline-block': props.isIconTop
    }, classes.icon)
  }, iconProps));

  if (props.isLabelTop) {
    levers.label = clsxd('su-rs-mb-neg1', {
      'su-inline-block': !props.isIconTop
    });
    classes.icon = clsxd(classes.icon, 'su-inline-block');
  }

  if (props.isIconTop && !props.isLabelTop) {
    levers.headerIcon = clsxd(levers.headerIcon, 'su-block su-rs-mb-neg1');
  }

  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        levers.wrapper = 'su-bg-digital-green su-text-white su-link-white';
        levers.body = lightText;
        levers.dismiss = lightText;
        defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
          icon: "check-circle",
          type: "solid",
          className: clsxd(classes.icon)
        }, iconProps));
        break;

      case 'warning':
        levers.wrapper = 'su-bg-illuminating-dark';
        levers.body = darkText;
        levers.dismiss = clsxd(darkText, 'hover:su-text-black');
        defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
          icon: "exclamation-circle",
          type: "solid",
          className: clsxd(classes.icon)
        }, iconProps));
        break;

      case 'info':
        levers.wrapper = 'su-bg-digital-blue su-text-white su-link-white';
        levers.body = lightText;
        levers.dismiss = lightText;
        defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
          icon: "information-circle",
          type: "solid",
          className: clsxd(classes.icon)
        }, iconProps));
        break;

      case 'error':
        levers.wrapper = 'su-bg-digital-red su-text-white su-link-white';
        levers.body = lightText;
        levers.dismiss = lightText;
        defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
          icon: "ban",
          type: "solid",
          className: clsxd(classes.icon)
        }, iconProps));
        break;
    }
  }

  var icon = (_props$icon = props.icon) != null ? _props$icon : defaultIcon;
  var DefaultDismiss = /*#__PURE__*/React__default.createElement(Button, {
    className: clsxd('su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest', levers.dismiss, classes.dismiss),
    "aria-label": "Dismiss Alert",
    onClick: function onClick() {
      setDismissed(true);
    },
    variant: "none",
    size: "minimal"
  }, "Dismiss ", /*#__PURE__*/React__default.createElement(Icon, {
    icon: "x-circle",
    type: "solid",
    className: 'su-inline-block su-h-25 su-w-25'
  }));
  var dismissBtn = (_props$dismissBtn = props.dismissBtn) != null ? _props$dismissBtn : DefaultDismiss;

  if (isDismissed === true) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-alert', levers.wrapper, classes.wrapper),
    ref: ref
  }, /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-cc su-flex su-flex-wrap su-rs-py-1 sm:su-items-center', levers.container, classes.container)
  }, props.hasDismiss && /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-order-3 su-rs-ml-1 su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto', levers.dismissWrapper, classes.dismissWrapper)
  }, dismissBtn), /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-order-1 su-rs-mr-1 su-flex su-flex-shrink su-items-center su-mb-4 su-w-full su-pb-10 md:su-w-max', levers.headerWrapper, classes.headerWrapper)
  }, props.hasIcon && !props.isIconTop && /*#__PURE__*/React__default.createElement("span", {
    className: clsxd('su-mr-5 su-inline-block', levers.headerIcon, classes.headerIcon)
  }, icon), props.hasLabel && !props.isLabelTop && /*#__PURE__*/React__default.createElement("span", {
    className: clsxd('su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)
  }, (_props$label = props.label) != null ? _props$label : 'Information')), /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-order-2 su-flex-1 su-flex-grow', levers.bodyWrapper, classes.bodyWrapper)
  }, props.hasIcon && props.isIconTop && /*#__PURE__*/React__default.createElement("span", {
    className: clsxd('su-mr-5 su-text-left su-ml-0', levers.headerIcon, classes.headerIcon)
  }, icon), props.hasLabel && props.isLabelTop && /*#__PURE__*/React__default.createElement("span", {
    className: clsxd('su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)
  }, (_props$label2 = props.label) != null ? _props$label2 : 'Information'), props.heading && /*#__PURE__*/React__default.createElement("h3", {
    className: clsxd('su-type-2 su-mb-03em', levers.bodyHeading, classes.bodyHeading)
  }, props.heading), /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-text-normal', levers.body, classes.body)
  }, children), props.footer && /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-rs-mt-0', levers.footerWrapper, classes.footerWrapper)
  }, props.footer))));
};
Alert.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  dismissBtn: propTypes.element,
  icon: propTypes.element,
  label: propTypes.string,
  heading: propTypes.string,
  footer: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  type: propTypes.oneOf(alertTypes),
  isLargeIcon: propTypes.bool,
  isLabelTop: propTypes.bool,
  isIconTop: propTypes.bool,
  hasDismiss: propTypes.bool,
  hasIcon: propTypes.bool,
  hasLabel: propTypes.bool,
  classes: propTypes.shape({
    wrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    container: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    dismissWrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    headerWrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    headerIcon: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    label: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    bodyWrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    bodyHeading: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    body: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    footerWrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array])
  })
};
Alert.defaultProps = {
  isLargeIcon: false,
  isLabelTop: false,
  isIconTop: false,
  hasDismiss: true,
  hasLabel: true,
  hasIcon: true,
  ref: null
};

var containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
var containerWidths = ['full', 'screen', 'site'];

var Container = function Container(_ref) {
  var className = _ref.className,
      element = _ref.element,
      width = _ref.width,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "element", "width", "children", "ref"]);

  var levers = {};
  var Element = 'div';

  if (element && containerElements.includes(element)) {
    Element = element;
  }

  if (width && containerWidths.includes(width)) {
    switch (width) {
      case 'full':
        levers.width = 'su-w-full';
        break;

      case 'screen':
        levers.width = 'su-w-screen';
        break;

      case 'site':
        levers.width = 'su-cc';
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement(Element, _extends({
    className: clsxd(levers.width, className),
    ref: ref
  }, props), children);
};
Container.propTypes = {
  element: propTypes.oneOf(containerElements),
  width: propTypes.oneOf(containerWidths),
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  ref: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.any
  })]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
Container.defaultProps = {
  element: 'div',
  width: 'site'
};

var ctaLinkIcons = ['action', 'more', 'external', 'lock', 'download', 'video', 'jump', 'email', 'none'];
var ctaLinkAnimations = ['right', 'top-right', 'down', 'none'];
var ctaLinkColors = ['red', 'blue', 'white', 'none'];
var ctaLinkButtonVariants = ['solid', 'outline', 'ghost'];
var ctaLinkButtonSizes = ['default', 'big', 'small'];

var CtaLink = function CtaLink(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      text = _ref.text,
      srText = _ref.srText,
      link = _ref.link,
      color = _ref.color,
      isButton = _ref.isButton,
      variant = _ref.variant,
      size = _ref.size,
      icon = _ref.icon,
      animate = _ref.animate,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "text", "srText", "link", "color", "isButton", "variant", "size", "icon", "animate", "ref"]);

  var levers = {};

  if (color && ctaLinkColors.includes(color) && !isButton) {
    switch (color) {
      case 'red':
        levers.color = 'su-text-digital-red hocus:su-text-black';
        break;

      case 'blue':
        levers.color = 'su-text-digital-blue hocus:su-text-black';
        break;

      case 'white':
        levers.color = 'su-text-white hocus:su-text-white';
        break;
    }
  }

  if (isButton) {
    levers.wrapper = 'su-cta-btn su-font-regular su-leading-none';
  } else {
    levers.wrapper = 'su-cta-link su-text-19 md:su-text-20';
  }

  if (variant && ctaLinkButtonVariants.includes(variant) && isButton) {
    switch (variant) {
      case 'solid':
        levers.variant = 'su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'outline':
        levers.variant = 'su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'ghost':
        levers.variant = 'su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid';
        break;
    }
  }

  if (size && ctaLinkButtonSizes.includes(size) && isButton) {
    switch (size) {
      case 'default':
        levers.size = 'su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20';
        break;

      case 'big':
        levers.size = 'su-px-34 su-py-15 su-text-20 md:su-text-24';
        break;

      case 'small':
        levers.size = 'su-px-19 su-py-9 su-text-16 md:su-text-18';
        break;
    }
  }

  var heroicon = '';

  if (icon && ctaLinkIcons.includes(icon)) {
    switch (icon) {
      case 'action':
        heroicon = 'chevron-right';
        levers.icon = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;

      case 'more':
        heroicon = 'arrow-narrow-right';
        levers.icon = 'su-h-09em su-w-09em su-ml-5 su--mt-2';
        break;

      case 'external':
        heroicon = 'arrow-up';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-2 su-transform su-rotate-45 group-hocus:su-rotate-45';
        break;

      case 'lock':
        heroicon = 'lock-closed';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'download':
        heroicon = 'download';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'video':
        heroicon = 'play';
        levers.icon = 'su-h-08em su-w-08em su-ml-6 su--mt-3';
        break;

      case 'email':
        heroicon = 'mail';
        levers.icon = 'su-h-08em su-w-08em su-ml-7 su--mt-2';
        break;

      case 'jump':
        heroicon = 'chevron-down';
        levers.icon = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;
    }
  }

  if (animate && ctaLinkAnimations.includes(animate) && animate !== 'none') {
    levers.animate = 'su-transition-transform group-hocus:su-transform';
  }

  if (animate && ctaLinkAnimations.includes(animate)) {
    switch (animate) {
      case 'right':
        levers.animate = clsxd(levers.animate, 'group-hocus:su-translate-x-02em');
        break;

      case 'top-right':
        levers.animate = clsxd(levers.animate, 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em');
        break;

      case 'down':
        levers.animate = clsxd(levers.animate, 'group-hocus:su-translate-y-02em');
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement("a", _extends({
    className: clsxd('su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors', levers.wrapper, levers.display, levers.color, levers.size, levers.variant, classes.link),
    href: link,
    ref: ref
  }, props), text, srText && /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, " ", srText), icon && /*#__PURE__*/React__default.createElement(Icon, {
    icon: heroicon,
    type: "solid",
    "aria-hidden": true,
    className: clsxd('su-inline-block', levers.icon, levers.animate, classes.icon)
  }));
};
CtaLink.propTypes = {
  color: propTypes.oneOf(ctaLinkColors),
  variant: propTypes.oneOf(ctaLinkButtonVariants),
  size: propTypes.oneOf(ctaLinkButtonSizes),
  icon: propTypes.oneOf(ctaLinkIcons),
  animate: propTypes.oneOf(ctaLinkAnimations),
  link: propTypes.string,
  text: propTypes.oneOfType([propTypes.string, propTypes.element, propTypes.node]),
  srText: propTypes.string,
  classes: propTypes.shape({
    link: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    icon: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array])
  })
};
CtaLink.defaultProps = {
  isButton: false,
  icon: 'action',
  color: 'none',
  ref: null
};

var flexElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
var flexDirection = ['row', 'row-reverse', 'col', 'col-reverse'];
var flexWrap = ['wrap', 'wrap-reverse', 'nowrap'];
var flexGap = [true, false];
var flexJustifyContent = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'];
var flexJustifyItems = ['auto', 'start', 'end', 'center', 'stretch'];
var flexAlignContent = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'];
var flexAlignItems = ['start', 'end', 'center', 'baseline', 'stretch'];

var FlexBox = function FlexBox(_ref) {
  var element = _ref.element,
      direction = _ref.direction,
      wrap = _ref.wrap,
      gap = _ref.gap,
      justifyContent = _ref.justifyContent,
      justifyItems = _ref.justifyItems,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      className = _ref.className,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["element", "direction", "wrap", "gap", "justifyContent", "justifyItems", "alignContent", "alignItems", "className", "children", "ref"]);

  var levers = {};
  var Element = 'div';

  if (element && flexElements.includes(element)) {
    Element = element;
  }

  if (direction && flexDirection.includes(direction)) {
    levers.direction = "su-flex-" + direction;
  }

  if (wrap && flexWrap.includes(wrap)) {
    levers.wrap = "su-flex-" + wrap;
  }

  if (gap && flexGap.includes(gap)) {
    levers.gap = 'su-grid-gap';
  }

  if (justifyContent && flexJustifyContent.includes(justifyContent)) {
    switch (justifyContent) {
      case 'start':
        levers.justifyContent = 'su-justify-start';
        break;

      case 'end':
        levers.justifyContent = 'su-justify-end';
        break;

      case 'center':
        levers.justifyContent = 'su-justify-center';
        break;

      case 'space-between':
        levers.justifyContent = 'su-justify-between';
        break;

      case 'space-around':
        levers.justifyContent = 'su-justify-around';
        break;

      case 'space-evenly':
        levers.justifyContent = 'su-justify-evenly';
        break;
    }
  }

  if (justifyItems && flexJustifyItems.includes(justifyItems)) {
    levers.justifyItems = "su-justify-items-" + justifyItems;
  }

  if (alignContent && flexAlignContent.includes(alignContent)) {
    switch (alignContent) {
      case 'start':
        levers.alignContent = 'su-content-start';
        break;

      case 'end':
        levers.alignContent = 'su-content-end';
        break;

      case 'center':
        levers.alignContent = 'su-content-center';
        break;

      case 'space-between':
        levers.alignContent = 'su-content-between';
        break;

      case 'space-around':
        levers.alignContent = 'su-content-around';
        break;

      case 'space-evenly':
        levers.alignContent = 'su-content-evenly';
        break;
    }
  }

  if (alignItems && flexAlignItems.includes(alignItems)) {
    levers.alignItems = "su-items-" + alignItems;
  }

  return /*#__PURE__*/React__default.createElement(Element, _extends({
    className: clsxd('su-flex', levers.direction, levers.wrap, levers.gap, levers.justifyContent, levers.justifyItems, levers.alignContent, levers.alignItems, className),
    ref: ref
  }, props), children);
};
FlexBox.propTypes = {
  element: propTypes.oneOf(flexElements),
  direction: propTypes.oneOf(flexDirection),
  wrap: propTypes.oneOf(flexWrap),
  gap: propTypes.bool,
  justifyContent: propTypes.oneOf(flexJustifyContent),
  justifyItems: propTypes.oneOf(flexJustifyItems),
  alignContent: propTypes.oneOf(flexAlignContent),
  alignItems: propTypes.oneOf(flexAlignItems),
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  ref: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.any
  })])
};
FlexBox.defaultProps = {
  element: 'div',
  direction: 'row',
  gap: false
};

var flexCellElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav'];
var flexCellWidth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'full', 'auto'];
var flexCellFlex = [1, 'auto', 'initial', 'none'];
var flexCellGrow = [true, false];
var flexCellShrink = [true, false];
var flexCellOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'first', 'last', 'none'];

var FlexCell = function FlexCell(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "ref"]);

  var levers = {};
  var Element = 'div';

  if (props.element && flexCellElements.includes(props.element)) {
    Element = props.element;
  }

  var bps = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  bps.forEach(function (bp) {
    if (props[bp] && flexCellWidth.includes(props[bp])) {
      if (typeof props[bp] === 'string') {
        if (bp === 'xs') {
          levers[bp] = "su-w-" + props[bp];
        } else if (bp === 'xxl') {
          levers[bp] = "2xl:su-w-" + props[bp];
        } else {
          levers[bp] = bp + (":su-w-" + props[bp]);
        }
      } else if (typeof props[bp] === 'number') {
        if (bp === 'xs') {
          levers[bp] = "su-w-" + props[bp] + "/12";
        } else if (bp === 'xxl') {
          levers[bp] = "2xl:su-w-" + props[bp] + "/12";
        } else {
          levers[bp] = bp + (":su-w-" + props[bp] + "/12");
        }
      }
    }
  });

  if (props.flex && flexCellFlex.includes(props.flex)) {
    levers.flex = "su-flex-" + props.flex;
  }

  if (flexCellGrow.includes(props.grow)) {
    if (props.grow) {
      levers.grow = "su-flex-grow";
    } else {
      levers.grow = "su-flex-grow-0";
    }
  }

  if (flexCellShrink.includes(props.shrink)) {
    if (props.shrink) {
      levers.shrink = "su-flex-shrink";
    } else {
      levers.shrink = "su-flex-shrink-0";
    }
  }

  if (props.order && flexCellOrder.includes(props.order)) {
    levers.order = "su-order-" + props.order;
  }

  return /*#__PURE__*/React__default.createElement(Element, {
    className: clsxd(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.flex, levers.grow, levers.shrink, levers.order, className),
    ref: ref
  }, children);
};
FlexCell.propTypes = {
  element: propTypes.oneOf(flexCellElements),
  xs: propTypes.oneOf(flexCellWidth),
  sm: propTypes.oneOf(flexCellWidth),
  md: propTypes.oneOf(flexCellWidth),
  lg: propTypes.oneOf(flexCellWidth),
  xl: propTypes.oneOf(flexCellWidth),
  xxl: propTypes.oneOf(flexCellWidth),
  flex: propTypes.oneOf(flexCellFlex),
  grow: propTypes.bool,
  shrink: propTypes.bool,
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
FlexCell.defaultProps = {};

var headingLevels = [1, 2, 3, 4, 5, 6];
var headingFonts = ['sans', 'serif', 'slab'];
var headingWeights = ['light', 'regular', 'semibold', 'bold'];
var headingSizes = [0, 1, 2, 3, 4, 5, 6];
var headingTracking = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'];
var headingAlign = ['left', 'center', 'right', 'justify'];

var Heading = function Heading(_ref) {
  var className = _ref.className,
      level = _ref.level,
      font = _ref.font,
      weight = _ref.weight,
      tracking = _ref.tracking,
      align = _ref.align,
      size = _ref.size,
      uppercase = _ref.uppercase,
      italic = _ref.italic,
      srOnly = _ref.srOnly,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "level", "font", "weight", "tracking", "align", "size", "uppercase", "italic", "srOnly", "children", "ref"]);

  var levers = {};
  var HeadingTag = 'h2';

  if (level && (headingLevels.includes(level) || headingLevels.includes(Number(level)))) {
    HeadingTag = 'h' + level;
  }

  if (font && headingFonts.includes(font)) {
    levers.font = "su-font-" + font;
  }

  if (weight && headingWeights.includes(weight)) {
    levers.weight = "su-font-" + weight;
  }

  if (tracking && headingTracking.includes(tracking)) {
    levers.tracking = "su-tracking-" + tracking;
  }

  if (align && headingAlign.includes(align)) {
    levers.align = "su-text-" + align;
  }

  if (size !== null && headingSizes.includes(size)) {
    levers.size = "su-type-" + size;
  }

  if (uppercase) {
    levers.uppercase = "su-uppercase";
  }

  if (italic) {
    levers.italic = "su-italic";
  }

  if (srOnly) {
    levers.srOnly = "su-sr-only";
  }

  return /*#__PURE__*/React__default.createElement(HeadingTag, _extends({
    className: clsxd('su-leading-display', levers.font, levers.weight, levers.size, levers.tracking, levers.align, levers.uppercase, levers.italic, levers.srOnly, className),
    ref: ref
  }, props), children);
};
Heading.propTypes = {
  level: propTypes.oneOf(headingLevels),
  font: propTypes.oneOf(headingFonts),
  size: propTypes.oneOf(headingSizes),
  align: propTypes.oneOf(headingAlign),
  weight: propTypes.oneOf(headingWeights),
  tracking: propTypes.oneOf(headingTracking),
  uppercase: propTypes.bool,
  italic: propTypes.bool,
  srOnly: propTypes.bool,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  children: propTypes.oneOfType([propTypes.string, propTypes.element, propTypes.node])
};
Heading.defaultProps = {
  font: 'sans',
  weight: 'bold',
  ref: null
};

var globalFooterColors = ['cardinal-red', 'digital-red', 'black'];

var logoColors = ['cardinal-red', 'black', 'white'];
var logoTypes = ['short', 'full', 'stacked'];

var Logo = function Logo(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var levers = {};
  var logoText;

  if (props.color && logoColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.logo = 'su-text-cardinal-red';
        break;

      case 'black':
        levers.logo = 'su-text-black hocus:su-text-black';
        break;

      case 'white':
        levers.logo = 'su-text-white hocus:su-text-white';
        break;
    }
  }

  if (props.type && logoTypes.includes(props.type)) {
    switch (props.type) {
      case 'short':
        logoText = 'Stanford';
        break;

      case 'full':
        logoText = 'Stanford University';
        break;

      case 'stacked':
        logoText = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "Stanford", /*#__PURE__*/React__default.createElement("br", null), "University");
        break;
    }
  }

  if (props.isLink) {
    return /*#__PURE__*/React__default.createElement("a", {
      className: clsxd('su-logo', levers.logo, className),
      href: "https://www.stanford.edu"
    }, logoText);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-logo', levers.logo, className)
  }, logoText);
};
Logo.propTypes = {
  color: propTypes.oneOf(logoColors),
  type: propTypes.oneOf(logoTypes),
  isLink: propTypes.bool,
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
Logo.defaultProps = {
  color: 'cardinal-red',
  type: 'short',
  isLink: true
};

var SrOnlyText = function SrOnlyText(props) {
  var _props$srText;

  var txt = (_props$srText = props.srText) != null ? _props$srText : '(link is external)';
  return /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, txt);
};
SrOnlyText.propTypes = {
  srText: propTypes.string
};
SrOnlyText.defaultProps = {
  srText: '(link is external)'
};

var GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var levers = {};

  if (props.color && globalFooterColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.wrapper = 'su-bg-cardinal-red';
        break;

      case 'digital-red':
        levers.wrapper = 'su-bg-digital-red';
        break;

      case 'black':
        levers.wrapper = 'su-bg-black';
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement(Container, {
    className: clsxd('su-global-footer su-basefont-20 su-rs-py-1 su-text-white su-link-white hover:su-link-white focus:su-link-white', levers.wrapper, className),
    width: "site"
  }, /*#__PURE__*/React__default.createElement(FlexBox, {
    direction: "col",
    className: "lg:su-flex-row",
    title: "Common Stanford resources"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "su-text-center su-mt-5 su-mb-9"
  }, /*#__PURE__*/React__default.createElement(Logo, {
    className: "su-type-3",
    type: "stacked"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-flex-grow"
  }, /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": "global footer menu",
    className: "su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10 su-link-no-underline hover:su-link-underline focus:su-link-underline"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu"
  }, "Stanford Home", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://visit.stanford.edu/plan/"
  }, "Maps & Directions", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/search/"
  }, "Search Stanford", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://emergency.stanford.edu"
  }, "Emergency Info", /*#__PURE__*/React__default.createElement(SrOnlyText, null)))), /*#__PURE__*/React__default.createElement("ul", {
    className: "su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular"
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/terms/",
    title: "Terms of use for sites"
  }, "Terms of Use", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/privacy/",
    title: "Privacy and cookie policy"
  }, "Privacy", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://uit.stanford.edu/security/copyright-infringement",
    title: "Report alleged copyright infringement"
  }, "Copyright", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
    title: "Ownership and use of Stanford trademarks and images"
  }, "Trademarks", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
    className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/",
    title: "Non-discrimination policy"
  }, "Non-Discrimination", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/accessibility",
    title: "Report web accessibility issues"
  }, "Accessibility", /*#__PURE__*/React__default.createElement(SrOnlyText, null))))), /*#__PURE__*/React__default.createElement("div", {
    className: "su-text-13 sm:su-text-14 su-text-center lg:su-text-left"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "su-whitespace-no-wrap"
  }, "\xA9 Stanford University."), /*#__PURE__*/React__default.createElement("span", {
    className: "su-whitespace-no-wrap"
  }, "\xA0 Stanford, California 94305.")))));
};
GlobalFooter.propTypes = {
  color: propTypes.oneOf(globalFooterColors),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
GlobalFooter.defaultProps = {
  color: 'cardinal-red'
};

var gridElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
var gridGap = [true, false];
var gridNumCols = Array.from({
  length: 12
}, function (_, i) {
  return i + 1;
});

var Grid = function Grid(_ref) {
  var element = _ref.element,
      gap = _ref.gap,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      xxl = _ref.xxl,
      className = _ref.className,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["element", "gap", "xs", "sm", "md", "lg", "xl", "xxl", "className", "children", "ref"]);

  var levers = {};
  var Element = 'div';

  if (element && gridElements.includes(element)) {
    Element = element;
  }

  if (gap && gridGap.includes(gap)) {
    levers.gap = 'su-grid-gap';
  }

  var bps = {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    xxl: xxl
  };
  Object.entries(bps).forEach(function (_ref2) {
    var key = _ref2[0],
        value = _ref2[1];

    if (value && (gridNumCols.includes(value) || gridNumCols.includes(Number(value)))) {
      if (key === 'xs') {
        levers[key] = "su-grid-cols-" + value;
      } else if (key === 'xxl') {
        levers[key] = "2xl:su-grid-cols-" + value;
      } else {
        levers[key] = key + ":su-grid-cols-" + value;
      }
    }
  });
  return /*#__PURE__*/React__default.createElement(Element, _extends({
    className: clsxd('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className),
    ref: ref
  }, props), children);
};
Grid.propTypes = {
  element: propTypes.oneOf(gridElements),
  gap: propTypes.bool,
  xs: propTypes.oneOf(gridNumCols),
  sm: propTypes.oneOf(gridNumCols),
  md: propTypes.oneOf(gridNumCols),
  lg: propTypes.oneOf(gridNumCols),
  xl: propTypes.oneOf(gridNumCols),
  xxl: propTypes.oneOf(gridNumCols),
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  ref: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: propTypes.any
  })])
};
Grid.defaultProps = {
  element: 'div',
  gap: false
};

var gridCellElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav'];
var gridColSpan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto', 'full'];
var gridColLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'];
var gridRowSpan = [1, 2, 3, 4, 5, 6, 'auto', 'full'];
var gridRowLine = [1, 2, 3, 4, 5, 6, 'auto'];

var GridCell = function GridCell(_ref) {
  var className = _ref.className,
      children = _ref.children,
      ref = _ref.ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "children", "ref"]);

  var levers = {};
  var Element = 'div';

  if (props.element && gridCellElements.includes(props.element)) {
    Element = props.element;
  }

  var bps = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  bps.forEach(function (bp) {
    if (props[bp] && gridColSpan.includes(props[bp])) {
      if (props[bp] === 'auto') {
        if (bp === 'xs') {
          levers[bp] = "su-col-auto";
        } else if (bp === 'xxl') {
          levers[bp] = "2xl:su-col-auto";
        } else {
          levers[bp] = bp + ":su-col-auto";
        }
      } else if (typeof props[bp] === 'number' || props[bp] === 'full') {
        if (bp === 'xs') {
          levers[bp] = "su-col-span-" + props[bp];
        } else if (bp === 'xxl') {
          levers[bp] = "2xl:su-col-span-" + props[bp];
        } else {
          levers[bp] = bp + (":su-col-span-" + props[bp]);
        }
      }
    }
  });

  if (props.colStart && gridColLine.includes(props.colStart)) {
    levers.colStart = "su-col-start-" + props.colStart;
  }

  if (props.row && gridRowSpan.includes(props.row)) {
    levers.row = "su-row-span-" + props.row;

    if (props.row === 'auto') {
      levers.row = "su-row-auto";
    } else {
      levers.row = "su-row-span-" + props.row;
    }
  }

  if (props.rowStart && gridRowLine.includes(props.rowStart)) {
    levers.rowStart = "su-row-start-" + props.rowStart;
  }

  return /*#__PURE__*/React__default.createElement(Element, {
    className: clsxd(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.colStart, levers.row, levers.rowStart, className),
    ref: ref
  }, children);
};
GridCell.propTypes = {
  element: propTypes.oneOf(gridCellElements),
  xs: propTypes.oneOf(gridColSpan),
  sm: propTypes.oneOf(gridColSpan),
  md: propTypes.oneOf(gridColSpan),
  lg: propTypes.oneOf(gridColSpan),
  xl: propTypes.oneOf(gridColSpan),
  xxl: propTypes.oneOf(gridColSpan),
  colStart: propTypes.oneOf(gridColLine),
  row: propTypes.oneOf(gridRowSpan),
  rowStart: propTypes.oneOf(gridRowLine),
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
GridCell.defaultProps = {};

var identityBarColors = ['cardinal-red', 'digital-red', 'black', 'white'];

var IdentityBar = function IdentityBar(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var levers = {};

  if (props.color && identityBarColors.includes(props.color)) {
    switch (props.color) {
      case 'white':
        levers.wrapper = 'su-bg-white';
        levers.logo = 'cardinal-red';
        break;

      case 'cardinal-red':
        levers.wrapper = 'su-bg-cardinal-red';
        levers.logo = 'white';
        break;

      case 'digital-red':
        levers.wrapper = 'su-bg-digital-red';
        levers.logo = 'white';
        break;

      case 'black':
        levers.wrapper = 'su-bg-black';
        levers.logo = 'white';
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement(Container, {
    width: "site",
    className: clsxd('su-identity-bar su-pt-5 su-pb-1', levers.wrapper, className)
  }, /*#__PURE__*/React__default.createElement(Logo, {
    className: "su-text-20 su-leading-none",
    color: levers.logo,
    type: "full"
  }));
};
IdentityBar.propTypes = {
  color: propTypes.oneOf(identityBarColors),
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object])
};
IdentityBar.defaultProps = {
  color: 'cardinal-red'
};

var localFooterColors = ['light grey', 'white', 'black'];
var localFooterLinkColors = ['blue', 'red', 'white'];

var lockupColors = ['default', 'white'];

var Lockup = function Lockup(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      line1 = _ref.line1,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "line1"]);

  var levers = {};

  if (props.color && lockupColors.includes(props.color)) {
    switch (props.color) {
      case 'default':
        levers.logo = 'cardinal-red';
        levers.text = 'su-text-black';
        levers.bar = 'su-border-black';
        break;

      case 'white':
        levers.logo = 'white';
        levers.text = 'su-text-white';
        levers.bar = 'su-border-white';
        break;
    }
  }

  var LockupContent = /*#__PURE__*/React__default.createElement(FlexBox, {
    direction: "col",
    className: "md:su-flex-row su-basefont-19"
  }, /*#__PURE__*/React__default.createElement(Logo, {
    color: levers.logo,
    isLink: false,
    className: clsxd('su-type-4 su-leading-half su-pt-11 su-pr-7 su-mr-7 md:su-border-r su-border-solid', levers.bar)
  }), /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-text-25 md:su-text-m2 su--mt-3 md:su-mt-0 su--ml-2 md:su-ml-0 su-font-regular su-relative su-top-6', levers.text, classes.line1)
  }, line1));

  if (props.isLink) {
    var _props$url;

    return /*#__PURE__*/React__default.createElement("a", {
      className: clsxd('su-lockup su-no-underline su-inline-block', classes.wrapper),
      href: (_props$url = props.url) != null ? _props$url : '/'
    }, LockupContent);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: clsxd('su-lockup su-no-underline su-inline-block', classes.wrapper)
  }, LockupContent);
};
Lockup.propTypes = {
  color: propTypes.oneOf(lockupColors),
  url: propTypes.string,
  isLink: propTypes.bool,
  classes: propTypes.shape({
    wrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    line1: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array])
  }),
  line1: propTypes.string
};
Lockup.defaultProps = {
  color: 'default',
  isLink: true
};

var LocalFooter = function LocalFooter(_ref) {
  var _props$buttonText;

  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "children"]);

  var levers = {};

  if (props.color && localFooterColors.includes(props.color)) {
    switch (props.color) {
      case 'light grey':
        levers.wrapper = 'su-bg-foggy-light su-text-black';
        levers.lockup = 'default';
        break;

      case 'white':
        levers.wrapper = 'su-bg-white su-text-black';
        levers.lockup = 'default';
        break;

      case 'black':
        levers.wrapper = 'su-bg-black su-text-white';
        levers.lockup = 'white';
        break;
    }
  }

  if (props.link && localFooterLinkColors.includes(props.link)) {
    switch (props.link) {
      case 'blue':
        levers.link = '';
        break;

      case 'red':
        levers.link = 'su-link-digital-red hover:su-link-black focus:su-link-black';
        break;

      case 'white':
        levers.link = 'su-link-white hover:su-link-digital-red-light focus:su-link-digital-red-light';
        break;
    }
  }

  return /*#__PURE__*/React__default.createElement(Container, {
    width: "site",
    className: clsxd('su-local-footer su-rs-pt-4 su-rs-pb-5', levers.wrapper, classes.wrapper)
  }, /*#__PURE__*/React__default.createElement(FlexBox, {
    direction: "col",
    gap: true,
    className: clsxd('md:su-flex-row su-rs-mb-2', classes.header),
    justifyContent: 'space-between'
  }, /*#__PURE__*/React__default.createElement(FlexCell, {
    grow: true
  }, /*#__PURE__*/React__default.createElement(Lockup, {
    color: levers.lockup,
    line1: props.line1,
    url: props.url,
    isLink: props.isLogoLink
  })), props.hasButton && /*#__PURE__*/React__default.createElement(FlexCell, {
    grow: false
  }, /*#__PURE__*/React__default.createElement("a", {
    href: props.buttonUrl,
    className: clsxd('su-inline-block su-bg-digital-red su-text-white su-text-18 hocus:su-text-white hocus:su-bg-archway-dark su-py-9 su-px-20 su-no-underline su-font-regular hover:su-underline focus:su-underline su-rounded-7 su-shadow-md', classes.button)
  }, (_props$buttonText = props.buttonText) != null ? _props$buttonText : 'Web Login', /*#__PURE__*/React__default.createElement(Icon, {
    icon: "lock-closed",
    type: "solid",
    className: clsxd('su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-2', classes.icon)
  })))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 1,
    md: 2,
    xl: 4,
    gap: true,
    className: clsxd('su-text-18 su-link-regular', levers.link, classes.content)
  }, children));
};
LocalFooter.propTypes = {
  color: propTypes.oneOf(localFooterColors),
  link: propTypes.oneOf(localFooterLinkColors),
  isLogoLink: propTypes.bool,
  url: propTypes.string,
  line1: propTypes.string,
  hasButton: propTypes.bool,
  buttonText: propTypes.string,
  buttonUrl: propTypes.string,
  children: propTypes.oneOfType([propTypes.node, propTypes.element, propTypes.string]),
  classes: propTypes.shape({
    wrapper: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    header: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    button: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    icon: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
    content: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array])
  })
};
LocalFooter.defaultProps = {
  isLogoLink: true,
  color: 'light grey',
  link: 'blue'
};

var Skiplink = function Skiplink(_ref) {
  var anchorLink = _ref.anchorLink,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["anchorLink", "className", "children"]);

  return /*#__PURE__*/React__default.createElement("a", _extends({
    href: anchorLink != null ? anchorLink : '#main-content',
    className: clsxd('su-skiplink', className)
  }, props), children != null ? children : 'Skip to main content');
};
Skiplink.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
  anchorLink: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.element, propTypes.node])
};
Skiplink.defaultProps = {};

exports.Alert = Alert;
exports.Button = Button;
exports.Container = Container;
exports.CtaLink = CtaLink;
exports.FlexBox = FlexBox;
exports.FlexCell = FlexCell;
exports.GlobalFooter = GlobalFooter;
exports.Grid = Grid;
exports.GridCell = GridCell;
exports.Heading = Heading;
exports.IdentityBar = IdentityBar;
exports.LocalFooter = LocalFooter;
exports.Lockup = Lockup;
exports.Logo = Logo;
exports.Skiplink = Skiplink;
exports.SrOnlyText = SrOnlyText;
