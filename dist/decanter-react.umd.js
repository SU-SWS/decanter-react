(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('cnbuilder'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'cnbuilder', 'prop-types'], factory) :
  (global = global || self, factory(global.decanterReact = {}, global.react, global.dcnb, global.PropTypes));
}(this, (function (exports, React, cnbuilder, PropTypes) {
  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;

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

  function BellIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    }));
  }

  function InformationCircleIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }

  function MicrophoneIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    }));
  }

  function VideoCameraIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }));
  }

  function XCircleIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }

  function XIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6 18L18 6M6 6l12 12"
    }));
  }

  function ArrowRightIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }));
  }

  function BanIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
      clipRule: "evenodd"
    }));
  }

  function CheckCircleIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
      clipRule: "evenodd"
    }));
  }

  function CheckIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      clipRule: "evenodd"
    }));
  }

  function ChevronDownIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }));
  }

  function ChevronRightIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
      clipRule: "evenodd"
    }));
  }

  function DownloadIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }));
  }

  function ExclamationCircleIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
      clipRule: "evenodd"
    }));
  }

  function InformationCircleIcon$1(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
      clipRule: "evenodd"
    }));
  }

  function LockClosedIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
      clipRule: "evenodd"
    }));
  }

  function MailIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
    }));
  }

  function PlayIcon(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
      clipRule: "evenodd"
    }));
  }

  function XCircleIcon$1(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
      clipRule: "evenodd"
    }));
  }

  function XIcon$1(props) {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, props), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      clipRule: "evenodd"
    }));
  }

  var buttonSizes = ['default', 'big', 'small', 'minimal', 'unset'];

  var getButtonSize = function getButtonSize(size) {
    var classes = '';

    switch (size) {
      case 'big':
        classes = 'su-px-34 su-py-15 su-text-20 md:su-text-24';
        break;

      case 'small':
        classes = 'su-px-19 su-py-9 su-text-16 md:su-text-18';
        break;

      case 'minimal':
        classes = 'su-p-0';
        break;

      case 'default':
        classes = 'su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20';
        break;
    }

    return classes;
  };

  var getIconAnimation = function getIconAnimation(animate) {
    var classes = '';

    if (animate !== 'none') {
      classes = 'su-transition-transform group-hocus:su-transform';
    }

    switch (animate) {
      case 'top-right':
        classes = cnbuilder.dcnb(classes, 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em');
        break;

      case 'down':
        classes = cnbuilder.dcnb(classes, 'group-hocus:su-translate-y-02em');
        break;

      case 'right':
        classes = cnbuilder.dcnb(classes, 'group-hocus:su-translate-x-02em');
        break;
    }

    return classes;
  };

  var getIconClasses = function getIconClasses(icon) {
    var classes = '';

    switch (icon) {
      case 'more':
        classes = 'su-h-09em su-w-09em su-ml-5 su--mt-2';
        break;

      case 'external':
        classes = 'su-w-08em su-ml-02em su--rotate-45 group-hocus:su--rotate-45';
        break;

      case 'lock':
        classes = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'download':
        classes = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'play':
        classes = 'su-w-08em su-ml-7 su--mt-3';
        break;

      case 'podcast':
        classes = 'su-w-08em su-mt-[-0.25em] su-ml-4';
        break;

      case 'video':
        classes = 'su-h-08em su-w-08em su-ml-6 su--mt-3';
        break;

      case 'email':
        classes = 'su-h-08em su-w-08em su-ml-7 su--mt-2';
        break;

      case 'jump':
        classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;

      case 'action':
        classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;

      case 'info':
        classes = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;
    }

    return classes;
  };

  var iconOptions = ['action', 'more', 'external', 'lock', 'download', 'play', 'podcast', 'video', 'jump', 'email', 'info', 'none'];
  var iconAnimations = ['right', 'top-right', 'down', 'none'];

  var SrOnlyText = function SrOnlyText(_ref) {
    var srText = _ref.srText;
    var txt = srText != null ? srText : '(link is external)';
    return /*#__PURE__*/React__default.createElement("span", {
      className: "su-sr-only"
    }, txt);
  };
  SrOnlyText.propTypes = {
    srText: PropTypes.string
  };
  SrOnlyText.defaultProps = {
    srText: '(link is external)'
  };

  var _excluded = ["icon", "srText", "className"];
  var HeroIcon = function HeroIcon(_ref) {
    var icon = _ref.icon,
        srText = _ref.srText,
        className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded);

    var Icon;
    var baseStyle;

    if (icon && iconOptions.includes(icon)) {
      baseStyle = getIconClasses(icon);

      switch (icon) {
        case 'video':
          Icon = VideoCameraIcon;
          break;

        case 'play':
          Icon = PlayIcon;
          break;

        case 'podcast':
          Icon = MicrophoneIcon;
          break;

        case 'external':
          Icon = ArrowRightIcon;
          break;

        case 'arrow-narrow-right':
        case 'more':
          Icon = ArrowRightIcon;
          break;

        case 'download':
          Icon = DownloadIcon;
          break;

        case 'email':
          Icon = MailIcon;
          break;

        case 'chevron-down':
        case 'jump':
          Icon = ChevronDownIcon;
          break;

        case 'chevron-right':
        case 'action':
          Icon = ChevronRightIcon;
          break;

        case 'lock':
          Icon = LockClosedIcon;
          break;

        case 'info':
          Icon = InformationCircleIcon;
          break;
      }
    }

    var heroIconStyle = cnbuilder.dcnb('su-transition', baseStyle);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, Icon && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, _extends({
      "aria-hidden": "true",
      className: cnbuilder.dcnb(heroIconStyle, className)
    }, props)), srText && /*#__PURE__*/React__default.createElement(SrOnlyText, {
      srText: srText
    })));
  };
  HeroIcon.propTypes = {
    icon: PropTypes.oneOf(iconOptions),
    srText: PropTypes.string,
    className: PropTypes.string
  };
  HeroIcon.defaultProps = {};

  var buttonVariants = ['solid', 'outline', 'ghost', 'unset'];
  var buttonTypes = ['button', 'submit', 'reset'];

  var _excluded$1 = ["className", "children", "onClick", "variant", "size", "type", "icon", "iconProps", "animate", "isDisabled"],
      _excluded2 = ["className"];
  var Button = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        children = _ref.children,
        onClick = _ref.onClick,
        variant = _ref.variant,
        size = _ref.size,
        type = _ref.type,
        icon = _ref.icon,
        iconProps = _ref.iconProps,
        animate = _ref.animate,
        isDisabled = _ref.isDisabled,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    var levers = {};

    if (variant && buttonVariants.includes(variant)) {
      switch (variant) {
        case 'solid':
          levers.variant = 'su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-transition-colors';
          break;

        case 'outline':
          levers.variant = 'su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black su-transition-colors';
          break;

        case 'ghost':
          levers.variant = cnbuilder.dcnb('su-bg-transparent hocus:su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid');
          break;

        case 'unset':
          levers.variant = 'su-bg-transparent hocus:su-bg-transparent';
          break;
      }
    }

    if (size && buttonSizes.includes(size)) {
      levers.size = getButtonSize(size);
    }

    var heroicon = '';

    if (icon && iconOptions.includes(icon)) {
      heroicon = icon;
      levers.icon = getIconClasses(icon);
    }

    if (animate && iconAnimations.includes(animate)) {
      levers.animate = getIconAnimation(animate);
    }

    if (isDisabled) {
      levers.disabled = 'su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none';
      levers.variant = cnbuilder.dcnb(levers.variant, {
        'su-bg-digital-red': false,
        'su-bg-white': false,
        'su-text-digital-red': false,
        'su-border-digital-red': false,
        'hover:su-border-black': false,
        'focus:su-border-black': false,
        'su-text-white': false
      });
    }

    var _ref2 = iconProps || {},
        iconClasses = _ref2.className,
        iProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    return /*#__PURE__*/React__default.createElement("button", _extends({
      className: cnbuilder.dcnb('su-button su-group su-leading-display', levers.variant, levers.size, levers.disabled, className),
      onClick: onClick,
      type: type,
      disabled: isDisabled,
      ref: ref
    }, props), children, icon && /*#__PURE__*/React__default.createElement(HeroIcon, _extends({
      icon: heroicon,
      "aria-hidden": true,
      className: cnbuilder.dcnb('su-inline-block', levers.animate, iconClasses)
    }, iProps)));
  });
  Button.propTypes = {
    type: PropTypes.oneOf(buttonTypes),
    variant: PropTypes.oneOf(buttonVariants),
    size: PropTypes.oneOf(buttonSizes),
    icon: PropTypes.oneOf(iconOptions),
    iconProps: PropTypes.objectOf(PropTypes.any),
    animate: PropTypes.oneOf(iconAnimations),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.any
    })])
  };
  Button.defaultProps = {
    onClick: undefined,
    type: 'button',
    variant: 'solid',
    size: 'default',
    isDisabled: false
  };

  var dismissIconColors = ['black', 'white', 'red', 'unset'];
  var dismissIconOptions = ['x-circle', 'x', 'none'];
  var dismissIconTypes = ['solid', 'outline'];

  var _excluded$2 = ["className", "text", "srText", "color", "icon", "iconType", "iconSize", "iconProps", "customIcon", "onClick"];
  var DismissButton = function DismissButton(_ref) {
    var className = _ref.className,
        text = _ref.text,
        srText = _ref.srText,
        color = _ref.color,
        icon = _ref.icon,
        iconType = _ref.iconType,
        iconSize = _ref.iconSize,
        iconProps = _ref.iconProps,
        customIcon = _ref.customIcon,
        onClick = _ref.onClick,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

    var levers = {};
    iconProps = _extends({
      height: iconSize != null ? iconSize : 20,
      width: iconSize != null ? iconSize : 20
    }, iconProps);

    if (color && dismissIconColors.includes(color)) {
      switch (color) {
        case 'black':
          levers.color = 'su-text-black hocus:su-text-black';
          break;

        case 'white':
          levers.color = 'su-text-white hocus:su-text-white';
          break;

        case 'red':
          levers.color = 'su-text-digital-red hocus:su-text-digital-red';
          break;
      }
    }

    var Icon;
    var defaultIcon;

    if (icon && dismissIconOptions.includes(icon)) {
      if (iconType === 'solid') {
        switch (icon) {
          case 'x-circle':
            Icon = XCircleIcon$1;
            break;

          case 'x':
            Icon = XIcon$1;
            break;
        }
      }

      if (iconType === 'outline') {
        switch (icon) {
          case 'x-circle':
            Icon = XCircleIcon;
            break;

          case 'x':
            Icon = XIcon;
            break;
        }
      }
    }

    if (Icon) {
      defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
        "aria-hidden": "true"
      }, iconProps));
    }

    var dismissIcon = customIcon != null ? customIcon : defaultIcon;
    return /*#__PURE__*/React__default.createElement(Button, _extends({
      variant: "unset",
      size: "minimal",
      className: cnbuilder.dcnb('su-flex su-items-center su-w-fit su-sans su-font-semibold su-leading-display', levers.color, className),
      onClick: onClick
    }, props), text, srText && /*#__PURE__*/React__default.createElement(SrOnlyText, {
      srText: " " + srText
    }), dismissIcon);
  };
  DismissButton.propTypes = {
    text: PropTypes.string,
    srText: PropTypes.string,
    color: PropTypes.oneOf(dismissIconColors),
    icon: PropTypes.oneOf(dismissIconOptions),
    iconType: PropTypes.oneOf(dismissIconTypes),
    customIcon: PropTypes.element,
    onClick: PropTypes.func,
    iconProps: PropTypes.objectOf(PropTypes.any),
    iconSize: PropTypes.number,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  DismissButton.defaultProps = {
    color: 'black',
    icon: 'x-circle',
    iconType: 'solid'
  };

  var alertTypes = ['info', 'warning', 'error', 'success', 'errorSummary'];
  var alignment = ['top', 'center', 'bottom'];
  var lightText = 'su-text-white children:children:!su-text-white children:children:hocus:!su-text-white';
  var darkText = 'su-text-black';
  var redText = 'su-text-digital-red';

  var _excluded$3 = ["classes", "children"];
  var Alert = function Alert(_ref) {
    var _props$icon, _props$dismissBtn, _props$label, _props$label2;

    var _ref$classes = _ref.classes,
        classes = _ref$classes === void 0 ? {} : _ref$classes,
        children = _ref.children,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

    var levers = {};
    var iconProps = {
      height: 20,
      width: 20
    };

    var _useState = React.useState(false),
        isDismissed = _useState[0],
        setDismissed = _useState[1];

    levers.wrapper = 'sm:su-items-center su-bg-foggy-light';
    levers.dismiss = 'black';
    levers.container = 'sm:su-items-center';
    levers.dismissWrapper = 'su-rs-ml-1 su-mt-15 sm:su-mt-0 su-w-full sm:su-w-auto';
    levers.headerWrapper = 'su-rs-mr-1 su-w-full md:su-w-max';
    levers.bodyWrapper = 'su-w-full';

    if (props.isLargeIcon) {
      iconProps.height = 60;
      iconProps.width = 60;
    }

    var defaultIcon = /*#__PURE__*/React__default.createElement(BellIcon, _extends({
      "aria-hidden": "true",
      className: classes.icon
    }, iconProps));

    if (props.type && alertTypes.includes(props.type)) {
      switch (props.type) {
        case 'success':
          levers.wrapper = 'su-bg-digital-green su-text-white';
          levers.body = lightText;
          levers.dismiss = 'white';
          levers.dismissText = 'Dismiss';
          defaultIcon = /*#__PURE__*/React__default.createElement(CheckCircleIcon, _extends({
            "aria-hidden": "true",
            className: classes.icon
          }, iconProps));
          break;

        case 'warning':
          levers.wrapper = 'su-bg-illuminating-dark';
          levers.body = darkText;
          levers.dismiss = 'black';
          levers.dismissText = 'Dismiss';
          defaultIcon = /*#__PURE__*/React__default.createElement(ExclamationCircleIcon, _extends({
            "aria-hidden": "true",
            className: classes.icon
          }, iconProps));
          break;

        case 'info':
          levers.wrapper = 'su-bg-digital-blue su-text-white';
          levers.body = lightText;
          levers.dismiss = 'white';
          levers.dismissText = 'Dismiss';
          defaultIcon = /*#__PURE__*/React__default.createElement(InformationCircleIcon$1, _extends({
            "aria-hidden": "true",
            className: classes.icon
          }, iconProps));
          break;

        case 'error':
          levers.wrapper = 'su-bg-digital-red su-text-white';
          levers.body = lightText;
          levers.dismiss = 'white';
          levers.dismissText = 'Dismiss';
          defaultIcon = /*#__PURE__*/React__default.createElement(BanIcon, _extends({
            "aria-hidden": "true",
            className: classes.icon
          }, iconProps));
          break;

        case 'errorSummary':
          levers.wrapper = 'su-bg-digital-red su-bg-opacity-20 su-text-digital-red';
          levers.body = redText;
          levers.dismiss = 'red';
          levers.dismissIcon = 'x';
          levers.container = 'su-flex-row su-flex-nowrap';
          levers.dismissWrapper = 'su-w-auto su-mt-0 su-rs-ml-0';
          levers.headerWrapper = 'su-w-auto su-mt-0 su-mr-01em';
          defaultIcon = /*#__PURE__*/React__default.createElement(ExclamationCircleIcon, _extends({
            type: "solid",
            "aria-hidden": "true",
            className: classes.icon
          }, iconProps));
          break;
      }
    }

    if (props.alignContent && alignment.includes(props.alignContent)) {
      switch (props.alignContent) {
        case 'top':
          levers.container = cnbuilder.dcnb(levers.container, 'sm:su-items-start');
          break;

        case 'center':
          levers.container = cnbuilder.dcnb(levers.container, 'sm:su-items-center');
          break;

        case 'bottom':
          levers.container = cnbuilder.dcnb(levers.container, 'sm:su-items-end');
          break;

        default:
          levers.container = cnbuilder.dcnb(levers.container, 'sm:su-items-center');
          break;
      }
    }

    var icon = (_props$icon = props.icon) != null ? _props$icon : defaultIcon;
    var DefaultDismiss = /*#__PURE__*/React__default.createElement(DismissButton, {
      icon: levers.dismissIcon || 'x-circle',
      text: levers.dismissText,
      srText: "alert",
      onClick: function onClick() {
        setDismissed(true);
      },
      color: levers.dismiss,
      className: "su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest su-mr-0 su-ml-auto",
      iconProps: {
        className: 'su-ml-02em'
      }
    });
    var dismissBtn = (_props$dismissBtn = props.dismissBtn) != null ? _props$dismissBtn : DefaultDismiss;

    if (isDismissed === true) {
      return null;
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-alert', levers.wrapper, classes.wrapper)
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-cc su-flex su-flex-wrap su-rs-py-1', levers.container, classes.container)
    }, props.hasDismiss && /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-order-3 su-flex-shrink su-text-right', levers.dismissWrapper, classes.dismissWrapper)
    }, dismissBtn), (props.hasIcon && !props.isIconTop || props.hasLabel && !props.isLabelTop) && /*#__PURE__*/React__default.createElement("h2", {
      className: cnbuilder.dcnb('su-order-1 su-mb-15 md:su-mb-0 su-flex su-flex-shrink', levers.headerWrapper, classes.headerWrapper)
    }, props.hasIcon && !props.isIconTop && /*#__PURE__*/React__default.createElement("span", {
      className: cnbuilder.dcnb('su-mr-5 su-inline-block', levers.headerIcon, classes.headerIcon)
    }, icon), props.hasLabel && !props.isLabelTop && /*#__PURE__*/React__default.createElement("span", {
      className: cnbuilder.dcnb('su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)
    }, (_props$label = props.label) != null ? _props$label : 'Alert:')), /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-order-2 su-flex-1 su-flex-grow', levers.bodyWrapper, classes.bodyWrapper)
    }, (props.hasIcon && props.isIconTop || props.hasLabel && props.isLabelTop) && /*#__PURE__*/React__default.createElement("h2", {
      className: "su-flex su-rs-mb-0"
    }, props.hasIcon && props.isIconTop && /*#__PURE__*/React__default.createElement("span", {
      className: cnbuilder.dcnb('su-inline-block su-mr-5 su-text-left su-ml-0', levers.headerIcon, classes.headerIcon)
    }, icon), props.hasLabel && props.isLabelTop && /*#__PURE__*/React__default.createElement("span", {
      className: cnbuilder.dcnb('su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)
    }, (_props$label2 = props.label) != null ? _props$label2 : 'Alert:')), props.heading && /*#__PURE__*/React__default.createElement("h2", {
      className: cnbuilder.dcnb('su-type-1 su-rs-mb-neg1', levers.bodyHeading, classes.bodyHeading)
    }, props.heading), /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-text-normal', levers.body, classes.body)
    }, children), props.footer && /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-rs-mt-0', levers.footerWrapper, classes.footerWrapper)
    }, props.footer))));
  };
  Alert.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    dismissBtn: PropTypes.element,
    icon: PropTypes.element,
    label: PropTypes.string,
    heading: PropTypes.string,
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    type: PropTypes.oneOf(alertTypes),
    isLargeIcon: PropTypes.bool,
    isLabelTop: PropTypes.bool,
    isIconTop: PropTypes.bool,
    hasDismiss: PropTypes.bool,
    hasIcon: PropTypes.bool,
    hasLabel: PropTypes.bool,
    classes: PropTypes.shape({
      wrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      container: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      dismissWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      headerWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      headerIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      bodyWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      bodyHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      body: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      footerWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
    })
  };
  Alert.defaultProps = {
    isLargeIcon: false,
    isLabelTop: false,
    isIconTop: false,
    hasDismiss: true,
    hasLabel: true,
    hasIcon: true
  };

  var cardAlignOptions = ['left', 'center', 'right'];
  var cardElements = ['div', 'article', 'li'];
  var superheadWeights = {
    regular: 'su-font-regular',
    semibold: 'su-font-semibold',
    bold: 'su-font-bold'
  };
  var imageAspectRatios = {
    '2x1': 'su-aspect-w-2 su-aspect-h-1',
    '16x9': 'su-aspect-w-16 su-aspect-h-9',
    '1x1': 'su-aspect-w-1 su-aspect-h-1',
    '4x3': 'su-aspect-w-4 su-aspect-h-3'
  };

  var _excluded$4 = ["weight", "className", "children", "isUppercase"];
  var Superhead = function Superhead(_ref) {
    var weight = _ref.weight,
        className = _ref.className,
        children = _ref.children,
        isUppercase = _ref.isUppercase,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$4);

    var superheadWeight = superheadWeights[weight];
    var uppercase = '';

    if (isUppercase) {
      uppercase = 'su-uppercase';
    }

    return /*#__PURE__*/React__default.createElement("span", _extends({
      className: cnbuilder.dcnb('su-type-0 su-mb-0 su-leading-display', superheadWeight, uppercase, className)
    }, props), children);
  };
  Superhead.displayName = 'Card.Superhead';
  Superhead.propTypes = {
    weight: PropTypes.oneOf(Object.keys(superheadWeights)),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    isUppercase: PropTypes.bool
  };
  Superhead.defaultProps = {
    weight: 'bold',
    isUppercase: false
  };

  var headingLevels = [1, 2, 3, 4, 5, 6];
  var headingFonts = {
    sans: 'su-font-sans',
    serif: 'su-font-serif',
    slab: 'su-font-slab'
  };
  var headingWeights = {
    light: 'su-font-light',
    regular: 'su-font-regular',
    semibold: 'su-font-semibold',
    bold: 'su-font-bold'
  };
  var headingSizes = {
    0: 'su-type-0',
    1: 'su-type-1',
    2: 'su-type-2',
    3: 'su-type-3',
    4: 'su-type-4',
    5: 'su-type-5',
    6: 'su-type-6'
  };
  var headingTracking = {
    tighter: 'su-tracking-tighter',
    tight: 'su-tracking-tight',
    normal: 'su-tracking-normal',
    wide: 'su-tracking-wide',
    wider: 'su-tracking-wider',
    widest: 'su-tracking-widest'
  };
  var headingAlign = {
    left: 'su-text-left',
    center: 'su-text-center',
    right: 'su-text-right',
    justify: 'su-text-justify'
  };

  var intKeys = (function (arg) {
    var int = parseInt(arg, 10);

    if (Number.isNaN(int)) {
      return arg;
    }

    return int;
  });

  var _excluded$5 = ["className", "level", "font", "weight", "tracking", "align", "size", "uppercase", "italic", "srOnly", "children"];
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
        props = _objectWithoutPropertiesLoose(_ref, _excluded$5);

    var levers = {};
    var HeadingTag = 'h2';

    if (level && (headingLevels.includes(level) || headingLevels.includes(Number(level)))) {
      HeadingTag = "h" + level;
    }

    if (font && font in headingFonts) {
      levers.font = headingFonts[font];
    }

    if (weight && weight in headingWeights) {
      levers.weight = headingWeights[weight];
    }

    if (tracking && tracking in headingTracking) {
      levers.tracking = headingTracking[tracking];
    }

    if (align && align in headingAlign) {
      levers.align = headingAlign[align];
    }

    if (size && size in headingSizes) {
      levers.size = headingSizes[size];
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
      className: cnbuilder.dcnb('su-leading-display', levers.font, levers.weight, levers.size, levers.tracking, levers.align, levers.uppercase, levers.italic, levers.srOnly, className)
    }, props), children);
  };
  Heading.propTypes = {
    level: PropTypes.oneOf(headingLevels),
    font: PropTypes.oneOf(Object.keys(headingFonts)),
    size: PropTypes.oneOf(Object.keys(headingSizes).map(function (val) {
      return intKeys(val);
    })),
    align: PropTypes.oneOf(Object.keys(headingAlign)),
    weight: PropTypes.oneOf(Object.keys(headingWeights)),
    tracking: PropTypes.oneOf(Object.keys(headingTracking)),
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    srOnly: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
  };
  Heading.defaultProps = {
    font: 'sans',
    weight: 'bold'
  };

  var _excluded$6 = ["children", "level", "size", "weight", "font", "className"];
  var Headline = function Headline(_ref) {
    var children = _ref.children,
        level = _ref.level,
        size = _ref.size,
        weight = _ref.weight,
        font = _ref.font,
        className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$6);

    return /*#__PURE__*/React__default.createElement(Heading, _extends({
      level: level,
      size: size,
      font: font,
      weight: weight
    }, props, {
      className: cnbuilder.dcnb('su-mb-03em', className)
    }), children);
  };
  Headline.displayName = 'Card.Headline';
  Headline.propTypes = {
    level: PropTypes.oneOf(headingLevels),
    size: PropTypes.oneOf(Object.keys(headingSizes).map(function (val) {
      return intKeys(val);
    })),
    font: PropTypes.oneOf(Object.keys(headingFonts)),
    weight: PropTypes.oneOf(Object.keys(headingWeights)),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Headline.defaultProps = {
    level: 3,
    size: 2,
    weight: 'bold',
    font: 'sans'
  };

  var flexElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
  var flexDirection = {
    row: 'su-flex-row',
    'row-reverse': 'su-flex-row-reverse',
    col: 'su-flex-col',
    'col-reverse': 'su-flex-col-reverse'
  };
  var flexWrap = {
    wrap: 'su-flex-wrap',
    'wrap-reverse': 'su-flex-wrap-reverse',
    nowrap: 'su-flex-nowrap'
  };
  var flexGap = [true, false];
  var flexJustifyContent = {
    start: 'su-justify-start',
    end: 'su-justify-end',
    center: 'su-justify-center',
    'space-between': 'su-justify-between',
    'space-around': 'su-justify-around',
    'space-evenly': 'su-justify-evenly'
  };
  var flexJustifyItems = {
    auto: 'su-justify-items-auto',
    start: 'su-justify-items-start',
    end: 'su-justify-items-end',
    center: 'su-justify-items-center',
    stretch: 'su-justify-items-stretch'
  };
  var flexAlignContent = {
    start: 'su-content-start',
    end: 'su-content-end',
    center: 'su-content-center',
    'space-between': 'su-content-between',
    'space-around': 'su-content-around',
    'space-evenly': 'su-content-evenly'
  };
  var flexAlignItems = {
    start: 'su-items-start',
    end: 'su-items-end',
    center: 'su-items-center',
    baseline: 'su-items-baseline',
    stretch: 'su-items-stretch'
  };

  var _excluded$7 = ["element", "direction", "wrap", "gap", "justifyContent", "justifyItems", "alignContent", "alignItems", "className", "children", "ref"];
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
        props = _objectWithoutPropertiesLoose(_ref, _excluded$7);

    var levers = {};
    var Element = 'div';

    if (element && flexElements.includes(element)) {
      Element = element;
    }

    if (direction && direction in flexDirection) {
      levers.direction = flexDirection[direction];
    }

    if (wrap && wrap in flexWrap) {
      levers.wrap = flexWrap[wrap];
    }

    if (gap && flexGap.includes(gap)) {
      levers.gap = 'su-grid-gap';
    }

    if (justifyContent && justifyContent in flexJustifyContent) {
      levers.justifyContent = flexJustifyContent[justifyContent];
    }

    if (justifyItems && justifyItems in flexJustifyItems) {
      levers.justifyItems = flexJustifyItems[justifyItems];
    }

    if (alignContent && alignContent in flexAlignContent) {
      levers.alignContent = flexAlignContent[alignContent];
    }

    if (alignItems && alignItems in flexAlignItems) {
      levers.alignItems = flexAlignItems[alignItems];
    }

    return /*#__PURE__*/React__default.createElement(Element, _extends({
      className: cnbuilder.dcnb('su-flex', levers.direction, levers.wrap, levers.gap, levers.justifyContent, levers.justifyItems, levers.alignContent, levers.alignItems, className),
      ref: ref
    }, props), children);
  };
  FlexBox.propTypes = {
    element: PropTypes.oneOf(flexElements),
    direction: PropTypes.oneOf(Object.keys(flexDirection)),
    wrap: PropTypes.oneOf(Object.keys(flexWrap)),
    gap: PropTypes.bool,
    justifyContent: PropTypes.oneOf(Object.keys(flexJustifyContent)),
    justifyItems: PropTypes.oneOf(Object.keys(flexJustifyItems)),
    alignContent: PropTypes.oneOf(Object.keys(flexAlignContent)),
    alignItems: PropTypes.oneOf(Object.keys(flexAlignItems)),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.any
    })])
  };
  FlexBox.defaultProps = {
    element: 'div',
    direction: 'row',
    gap: false
  };

  var _excluded$8 = ["children", "className", "align"];
  var Content = function Content(_ref) {
    var children = _ref.children,
        className = _ref.className,
        align = _ref.align,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$8);

    var bodyAlign = 'su-items-start';
    var contentClass = '';

    if (align === 'center') {
      contentClass = 'su-text-center';
      bodyAlign = 'su-items-center';
    }

    if (align === 'right') {
      contentClass = 'su-text-right';
      bodyAlign = 'su-items-end';
    }

    return /*#__PURE__*/React__default.createElement(FlexBox, _extends({
      direction: "col",
      className: cnbuilder.dcnb('card-body', bodyAlign, contentClass, className)
    }, props), children);
  };
  Content.displayName = 'Card.Content';
  Content.propTypes = {
    align: PropTypes.oneOf(cardAlignOptions),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Content.defaultProps = {
    align: 'left'
  };

  var Image = function Image(_ref) {
    var image = _ref.image,
        aspectRatio = _ref.aspectRatio,
        className = _ref.className;
    var imageAspectRatio = imageAspectRatios[aspectRatio];

    if (image.alt) {
      delete image.alt;
    }

    if (image.className) {
      delete image.className;
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb(imageAspectRatio, className),
      "aria-hidden": "true"
    }, /*#__PURE__*/React__default.createElement("img", _extends({}, image, {
      alt: "",
      className: "su-object-cover"
    })));
  };
  Image.displayName = 'Card.Image';
  Image.propTypes = {
    aspectRatio: PropTypes.oneOf(Object.keys(imageAspectRatios)),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    image: PropTypes.shape({
      src: PropTypes.string
    })
  };
  Image.defaultProps = {
    aspectRatio: '2x1'
  };

  var _excluded$9 = ["className", "children", "element", "isMinimal"];

  var CardRoot = function CardRoot(_ref) {
    var className = _ref.className,
        children = _ref.children,
        element = _ref.element,
        isMinimal = _ref.isMinimal,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$9);

    var Element = 'div';

    if (element && cardElements.includes(element)) {
      Element = element;
    }

    var wrapperClasses = 'su-bg-white su-text-black su-border su-border-solid su-border-black-10 su-shadow';

    if (isMinimal) {
      wrapperClasses = '';
    }

    return /*#__PURE__*/React__default.createElement(Element, _extends({
      className: cnbuilder.dcnb('card su-block su-max-w-600 su-basefont-23 su-leading-display', wrapperClasses, className)
    }, props), children);
  };

  CardRoot.displayName = 'Card';
  var Card = Object.assign(CardRoot, {
    Superhead: Superhead,
    Headline: Headline,
    Content: Content,
    Image: Image
  });
  CardRoot.propTypes = {
    element: PropTypes.oneOf(cardElements),
    isMinimal: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
  };
  CardRoot.defaultProps = {
    isMinimal: false
  };

  var containerElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
  var containerWidths = ['full', 'screen', 'site'];

  var _excluded$a = ["className", "element", "width", "children", "ref"];
  var Container = function Container(_ref) {
    var className = _ref.className,
        element = _ref.element,
        width = _ref.width,
        children = _ref.children,
        ref = _ref.ref,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$a);

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
      className: cnbuilder.dcnb(levers.width, className),
      ref: ref
    }, props), children);
  };
  Container.propTypes = {
    element: PropTypes.oneOf(containerElements),
    width: PropTypes.oneOf(containerWidths),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.any
    })]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Container.defaultProps = {
    element: 'div',
    width: 'site'
  };

  var ctaButtonVariants = ['solid', 'outline', 'ghost', 'unset'];

  var _excluded$b = ["className", "text", "srText", "variant", "size", "icon", "iconProps", "animate"],
      _excluded2$1 = ["className"];
  var CtaButton = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        text = _ref.text,
        srText = _ref.srText,
        variant = _ref.variant,
        size = _ref.size,
        icon = _ref.icon,
        iconProps = _ref.iconProps,
        animate = _ref.animate,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$b);

    var levers = {};

    if (variant && ctaButtonVariants.includes(variant)) {
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

    if (size && buttonSizes.includes(size)) {
      levers.size = getButtonSize(size);
    }

    var heroicon = '';

    if (icon && iconOptions.includes(icon)) {
      heroicon = icon;
      levers.icon = getIconClasses(icon);
    }

    if (animate && iconAnimations.includes(animate)) {
      levers.animate = getIconAnimation(animate);
    }

    var _ref2 = iconProps || {},
        iconClasses = _ref2.className,
        iProps = _objectWithoutPropertiesLoose(_ref2, _excluded2$1);

    return /*#__PURE__*/React__default.createElement("a", _extends({
      className: cnbuilder.dcnb('su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors', levers.size, levers.variant, className),
      ref: ref
    }, props), text, srText && /*#__PURE__*/React__default.createElement(SrOnlyText, {
      srText: " " + srText
    }), icon && /*#__PURE__*/React__default.createElement(HeroIcon, _extends({
      icon: heroicon,
      type: "solid",
      "aria-hidden": true,
      className: cnbuilder.dcnb('su-inline-block', levers.icon, levers.animate, iconClasses)
    }, iProps)));
  });
  CtaButton.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(ctaButtonVariants),
    size: PropTypes.oneOf(buttonSizes),
    icon: PropTypes.oneOf(iconOptions),
    iconProps: PropTypes.objectOf(PropTypes.any),
    animate: PropTypes.oneOf(iconAnimations),
    href: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    srText: PropTypes.string
  };
  CtaButton.defaultProps = {
    variant: 'solid'
  };

  var ctaLinkColors = ['red', 'blue', 'white', 'unset'];

  var _excluded$c = ["className", "text", "srText", "color", "icon", "iconProps", "animate"],
      _excluded2$2 = ["className"];
  var CtaLink = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        text = _ref.text,
        srText = _ref.srText,
        color = _ref.color,
        icon = _ref.icon,
        iconProps = _ref.iconProps,
        animate = _ref.animate,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$c);

    var levers = {};

    if (color && ctaLinkColors.includes(color)) {
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

    var heroicon = '';

    if (icon && iconOptions.includes(icon)) {
      heroicon = icon;
      levers.icon = getIconClasses(icon);
    }

    if (animate && iconAnimations.includes(animate)) {
      levers.animate = getIconAnimation(animate);
    }

    var _ref2 = iconProps || {},
        iconClasses = _ref2.className,
        iProps = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);

    return /*#__PURE__*/React__default.createElement("a", _extends({
      className: cnbuilder.dcnb('su-cta-link su-text-19 md:su-text-20 su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors', levers.color, levers.size, levers.variant, className),
      ref: ref
    }, props), text, srText && /*#__PURE__*/React__default.createElement(SrOnlyText, {
      srText: " " + srText
    }), icon && /*#__PURE__*/React__default.createElement(HeroIcon, _extends({
      icon: heroicon,
      type: "solid",
      "aria-hidden": true,
      className: cnbuilder.dcnb('su-inline-block', levers.icon, levers.animate, iconClasses)
    }, iProps)));
  });
  CtaLink.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(ctaLinkColors),
    icon: PropTypes.oneOf(iconOptions),
    iconProps: PropTypes.objectOf(PropTypes.any),
    animate: PropTypes.oneOf(iconAnimations),
    href: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    srText: PropTypes.string
  };
  CtaLink.defaultProps = {
    icon: 'action'
  };

  var flexCellBPs = {
    xs: '',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: '2xl'
  };
  var flexCellElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav'];
  var flexCellWidth = {
    xs: {
      auto: 'su-w-auto',
      full: 'su-w-full',
      1: 'su-w-1/12',
      2: 'su-w-2/12',
      3: 'su-w-3/12',
      4: 'su-w-4/12',
      5: 'su-w-5/12',
      6: 'su-w-6/12',
      7: 'su-w-7/12',
      8: 'su-w-8/12',
      9: 'su-w-9/12',
      10: 'su-w-10/12',
      11: 'su-w-11/12'
    },
    sm: {
      auto: 'sm:su-w-auto',
      full: 'sm:su-w-full',
      1: 'sm:su-w-1/12',
      2: 'sm:su-w-2/12',
      3: 'sm:su-w-3/12',
      4: 'sm:su-w-4/12',
      5: 'sm:su-w-5/12',
      6: 'sm:su-w-6/12',
      7: 'sm:su-w-7/12',
      8: 'sm:su-w-8/12',
      9: 'sm:su-w-9/12',
      10: 'sm:su-w-10/12',
      11: 'sm:su-w-11/12'
    },
    md: {
      auto: 'md:su-w-auto',
      full: 'md:su-w-full',
      1: 'md:su-w-1/12',
      2: 'md:su-w-2/12',
      3: 'md:su-w-3/12',
      4: 'md:su-w-4/12',
      5: 'md:su-w-5/12',
      6: 'md:su-w-6/12',
      7: 'md:su-w-7/12',
      8: 'md:su-w-8/12',
      9: 'md:su-w-9/12',
      10: 'md:su-w-10/12',
      11: 'md:su-w-11/12'
    },
    lg: {
      auto: 'lg:su-w-auto',
      full: 'lg:su-w-full',
      1: 'lg:su-w-1/12',
      2: 'lg:su-w-2/12',
      3: 'lg:su-w-3/12',
      4: 'lg:su-w-4/12',
      5: 'lg:su-w-5/12',
      6: 'lg:su-w-6/12',
      7: 'lg:su-w-7/12',
      8: 'lg:su-w-8/12',
      9: 'lg:su-w-9/12',
      10: 'lg:su-w-10/12',
      11: 'lg:su-w-11/12'
    },
    xl: {
      auto: 'xl:su-w-auto',
      full: 'xl:su-w-full',
      1: 'xl:su-w-1/12',
      2: 'xl:su-w-2/12',
      3: 'xl:su-w-3/12',
      4: 'xl:su-w-4/12',
      5: 'xl:su-w-5/12',
      6: 'xl:su-w-6/12',
      7: 'xl:su-w-7/12',
      8: 'xl:su-w-8/12',
      9: 'xl:su-w-9/12',
      10: 'xl:su-w-10/12',
      11: 'xl:su-w-11/12'
    },
    xxl: {
      auto: '2xl:su-w-auto',
      full: '2xl:su-w-full',
      1: '2xl:su-w-1/12',
      2: '2xl:su-w-2/12',
      3: '2xl:su-w-3/12',
      4: '2xl:su-w-4/12',
      5: '2xl:su-w-5/12',
      6: '2xl:su-w-6/12',
      7: '2xl:su-w-7/12',
      8: '2xl:su-w-8/12',
      9: '2xl:su-w-9/12',
      10: '2xl:su-w-10/12',
      11: '2xl:su-w-11/12'
    }
  };
  var flexCellFlex = {
    1: 'su-flex-1',
    auto: 'su-flex-auto',
    initial: 'su-flex-initial',
    none: 'su-flex-none'
  };
  var flexCellGrow = [true, false];
  var flexCellShrink = [true, false];
  var flexCellOrder = {
    1: 'su-order-1',
    2: 'su-order-2',
    3: 'su-order-3',
    4: 'su-order-4',
    5: 'su-order-5',
    6: 'su-order-6',
    7: 'su-order-7',
    8: 'su-order-8',
    9: 'su-order-9',
    10: 'su-order-10',
    11: 'su-order-11',
    12: 'su-order-12',
    first: 'su-order-first',
    last: 'su-order-last',
    none: 'su-order-none'
  };

  var _excluded$d = ["className", "children", "ref", "flex", "grow", "shrink", "order", "element"],
      _excluded2$3 = ["xs", "sm", "md", "lg", "xl", "xxl"];
  var FlexCell = function FlexCell(_ref) {
    var className = _ref.className,
        children = _ref.children,
        ref = _ref.ref,
        flex = _ref.flex,
        grow = _ref.grow,
        shrink = _ref.shrink,
        order = _ref.order,
        element = _ref.element,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$d);

    var levers = {};

    var rest = _objectWithoutPropertiesLoose(props, _excluded2$3);

    var Element = 'div';

    if (element && flexCellElements.includes(element)) {
      Element = element;
    }

    var bps = Object.keys(flexCellBPs);
    bps.forEach(function (bp) {
      if (props[bp] && flexCellWidth && bp in flexCellWidth) {
        if (props[bp] in flexCellWidth[bp]) {
          levers[bp] = flexCellWidth[bp][props[bp]];
        }
      }
    });

    if (flex && flex in flexCellFlex) {
      levers.flex = flexCellFlex[flex];
    }

    if (flexCellGrow.includes(grow)) {
      if (grow) {
        levers.grow = "su-flex-grow";
      } else {
        levers.grow = "su-flex-grow-0";
      }
    }

    if (flexCellShrink.includes(shrink)) {
      if (shrink) {
        levers.shrink = "su-flex-shrink";
      } else {
        levers.shrink = "su-flex-shrink-0";
      }
    }

    if (order && order in flexCellOrder) {
      levers.order = flexCellOrder[order];
    }

    return /*#__PURE__*/React__default.createElement(Element, _extends({
      className: cnbuilder.dcnb(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.flex, levers.grow, levers.shrink, levers.order, className),
      ref: ref
    }, rest), children);
  };
  FlexCell.propTypes = {
    element: PropTypes.oneOf(flexCellElements),
    xs: PropTypes.oneOf(Object.keys(flexCellWidth.xs).map(function (val) {
      return intKeys(val);
    })),
    sm: PropTypes.oneOf(Object.keys(flexCellWidth.sm).map(function (val) {
      return intKeys(val);
    })),
    md: PropTypes.oneOf(Object.keys(flexCellWidth.md).map(function (val) {
      return intKeys(val);
    })),
    lg: PropTypes.oneOf(Object.keys(flexCellWidth.lg).map(function (val) {
      return intKeys(val);
    })),
    xl: PropTypes.oneOf(Object.keys(flexCellWidth.xl).map(function (val) {
      return intKeys(val);
    })),
    xxl: PropTypes.oneOf(Object.keys(flexCellWidth.xxl).map(function (val) {
      return intKeys(val);
    })),
    flex: PropTypes.oneOf(Object.keys(flexCellFlex)),
    grow: PropTypes.bool,
    shrink: PropTypes.bool,
    order: PropTypes.oneOf(Object.keys(flexCellOrder).map(function (val) {
      return intKeys(val);
    })),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  FlexCell.defaultProps = {};

  var globalFooterColors = ['cardinal-red', 'digital-red', 'black'];

  var logoColors = ['cardinal-red', 'black', 'white'];
  var logoTypes = ['short', 'full', 'stacked'];

  var _excluded$e = ["className"];
  var Logo = function Logo(_ref) {
    var className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$e);

    var levers = {};
    var logoText;

    if (props.color && logoColors.includes(props.color)) {
      switch (props.color) {
        case 'black':
          levers.logo = 'su-text-black hocus:su-text-black';
          break;

        case 'white':
          levers.logo = 'su-text-white hocus:su-text-white';
          break;

        case 'cardinal-red':
        default:
          levers.logo = 'su-text-cardinal-red';
          break;
      }
    }

    if (props.type && logoTypes.includes(props.type)) {
      switch (props.type) {
        case 'full':
          logoText = 'Stanford University';
          break;

        case 'stacked':
          logoText = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "Stanford", /*#__PURE__*/React__default.createElement("br", null), "University");
          break;

        case 'short':
        default:
          logoText = 'Stanford';
          break;
      }
    }

    if (props.isLink) {
      return /*#__PURE__*/React__default.createElement("a", {
        className: cnbuilder.dcnb('su-logo', levers.logo, className),
        href: "https://www.stanford.edu"
      }, logoText);
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-logo', levers.logo, className)
    }, logoText);
  };
  Logo.propTypes = {
    color: PropTypes.oneOf(logoColors),
    type: PropTypes.oneOf(logoTypes),
    isLink: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Logo.defaultProps = {
    color: 'cardinal-red',
    type: 'short',
    isLink: true
  };

  var _excluded$f = ["className"];
  var GlobalFooter = function GlobalFooter(_ref) {
    var className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$f);

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
      className: cnbuilder.dcnb('su-global-footer su-basefont-20 su-rs-py-1 su-text-white', levers.wrapper, className),
      width: "site"
    }, /*#__PURE__*/React__default.createElement(FlexBox, {
      direction: "col",
      className: "lg:su-flex-row",
      title: "Common Stanford resources"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "su-text-center su-mt-5 su-mb-9"
    }, /*#__PURE__*/React__default.createElement(Logo, {
      className: "su-type-3",
      type: "stacked",
      color: "white"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-flex-grow"
    }, /*#__PURE__*/React__default.createElement("nav", {
      "aria-label": "global footer menu",
      className: "su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10"
    }, /*#__PURE__*/React__default.createElement("ul", {
      className: "su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row"
    }, /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://www.stanford.edu",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Stanford Home", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://visit.stanford.edu/plan/",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Maps & Directions", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://www.stanford.edu/search/",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Search Stanford", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
      href: "https://emergency.stanford.edu",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Emergency Info", /*#__PURE__*/React__default.createElement(SrOnlyText, null)))), /*#__PURE__*/React__default.createElement("ul", {
      className: "su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular"
    }, /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://www.stanford.edu/site/terms/",
      title: "Terms of use for sites",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Terms of Use", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://www.stanford.edu/site/privacy/",
      title: "Privacy and cookie policy",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Privacy", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://uit.stanford.edu/security/copyright-infringement",
      title: "Report alleged copyright infringement",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Copyright", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
      title: "Ownership and use of Stanford trademarks and images",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Trademarks", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", {
      className: "sm:su-mr-10 md:su-mr-20 lg:su-mr-27"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "https://bulletin.stanford.edu/pages/c7vDgeOuJIfpZe8GKmW3",
      title: "Non-discrimination policy",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Non-Discrimination", /*#__PURE__*/React__default.createElement(SrOnlyText, null))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
      href: "https://www.stanford.edu/site/accessibility",
      title: "Report web accessibility issues",
      className: "su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
    }, "Accessibility", /*#__PURE__*/React__default.createElement(SrOnlyText, null))))), /*#__PURE__*/React__default.createElement("div", {
      className: "su-text-13 sm:su-text-14 su-text-center lg:su-text-left"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "su-whitespace-no-wrap"
    }, "\xA9 Stanford University."), /*#__PURE__*/React__default.createElement("span", {
      className: "su-whitespace-no-wrap"
    }, "\xA0 Stanford, California 94305.")))));
  };
  GlobalFooter.propTypes = {
    color: PropTypes.oneOf(globalFooterColors),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  GlobalFooter.defaultProps = {
    color: 'cardinal-red'
  };

  var gridElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];
  var gridGap = [true, false];
  var gridCols = {
    xs: {
      1: 'su-grid-cols-1',
      2: 'su-grid-cols-2',
      3: 'su-grid-cols-3',
      4: 'su-grid-cols-4',
      5: 'su-grid-cols-5',
      6: 'su-grid-cols-6',
      7: 'su-grid-cols-7',
      8: 'su-grid-cols-8',
      9: 'su-grid-cols-9',
      10: 'su-grid-cols-10',
      11: 'su-grid-cols-11',
      12: 'su-grid-cols-12'
    },
    sm: {
      1: 'sm:su-grid-cols-1',
      2: 'sm:su-grid-cols-2',
      3: 'sm:su-grid-cols-3',
      4: 'sm:su-grid-cols-4',
      5: 'sm:su-grid-cols-5',
      6: 'sm:su-grid-cols-6',
      7: 'sm:su-grid-cols-7',
      8: 'sm:su-grid-cols-8',
      9: 'sm:su-grid-cols-9',
      10: 'sm:su-grid-cols-10',
      11: 'sm:su-grid-cols-11',
      12: 'sm:su-grid-cols-12'
    },
    md: {
      1: 'md:su-grid-cols-1',
      2: 'md:su-grid-cols-2',
      3: 'md:su-grid-cols-3',
      4: 'md:su-grid-cols-4',
      5: 'md:su-grid-cols-5',
      6: 'md:su-grid-cols-6',
      7: 'md:su-grid-cols-7',
      8: 'md:su-grid-cols-8',
      9: 'md:su-grid-cols-9',
      10: 'md:su-grid-cols-10',
      11: 'md:su-grid-cols-11',
      12: 'md:su-grid-cols-12'
    },
    lg: {
      1: 'lg:su-grid-cols-1',
      2: 'lg:su-grid-cols-2',
      3: 'lg:su-grid-cols-3',
      4: 'lg:su-grid-cols-4',
      5: 'lg:su-grid-cols-5',
      6: 'lg:su-grid-cols-6',
      7: 'lg:su-grid-cols-7',
      8: 'lg:su-grid-cols-8',
      9: 'lg:su-grid-cols-9',
      10: 'lg:su-grid-cols-10',
      11: 'lg:su-grid-cols-11',
      12: 'lg:su-grid-cols-12'
    },
    xl: {
      1: 'xl:su-grid-cols-1',
      2: 'xl:su-grid-cols-2',
      3: 'xl:su-grid-cols-3',
      4: 'xl:su-grid-cols-4',
      5: 'xl:su-grid-cols-5',
      6: 'xl:su-grid-cols-6',
      7: 'xl:su-grid-cols-7',
      8: 'xl:su-grid-cols-8',
      9: 'xl:su-grid-cols-9',
      10: 'xl:su-grid-cols-10',
      11: 'xl:su-grid-cols-11',
      12: 'xl:su-grid-cols-12'
    },
    xxl: {
      1: '2xl:su-grid-cols-1',
      2: '2xl:su-grid-cols-2',
      3: '2xl:su-grid-cols-3',
      4: '2xl:su-grid-cols-4',
      5: '2xl:su-grid-cols-5',
      6: '2xl:su-grid-cols-6',
      7: '2xl:su-grid-cols-7',
      8: '2xl:su-grid-cols-8',
      9: '2xl:su-grid-cols-9',
      10: '2xl:su-grid-cols-10',
      11: '2xl:su-grid-cols-11',
      12: '2xl:su-grid-cols-12'
    }
  };

  var _excluded$g = ["element", "gap", "className", "children", "ref"],
      _excluded2$4 = ["xs", "sm", "md", "lg", "xl", "xxl"];
  var Grid = function Grid(_ref) {
    var element = _ref.element,
        gap = _ref.gap,
        className = _ref.className,
        children = _ref.children,
        ref = _ref.ref,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$g);

    var levers = {};

    var rest = _objectWithoutPropertiesLoose(props, _excluded2$4);

    var Element = 'div';

    if (element && gridElements.includes(element)) {
      Element = element;
    }

    if (gap && gridGap.includes(gap)) {
      levers.gap = 'su-grid-gap';
    }

    var bps = Object.keys(gridCols);
    bps.forEach(function (bp) {
      if (props[bp] && gridCols && bp in gridCols) {
        if (props[bp] in gridCols[bp]) {
          levers[bp] = gridCols[bp][props[bp]];
        }
      }
    });
    return /*#__PURE__*/React__default.createElement(Element, _extends({
      className: cnbuilder.dcnb('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className),
      ref: ref
    }, rest), children);
  };
  Grid.propTypes = {
    element: PropTypes.oneOf(gridElements),
    gap: PropTypes.bool,
    xs: PropTypes.oneOf(Object.keys(gridCols.xs).map(function (val) {
      return intKeys(val);
    })),
    sm: PropTypes.oneOf(Object.keys(gridCols.sm).map(function (val) {
      return intKeys(val);
    })),
    md: PropTypes.oneOf(Object.keys(gridCols.md).map(function (val) {
      return intKeys(val);
    })),
    lg: PropTypes.oneOf(Object.keys(gridCols.lg).map(function (val) {
      return intKeys(val);
    })),
    xl: PropTypes.oneOf(Object.keys(gridCols.xl).map(function (val) {
      return intKeys(val);
    })),
    xxl: PropTypes.oneOf(Object.keys(gridCols.xxl).map(function (val) {
      return intKeys(val);
    })),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.any
    })])
  };
  Grid.defaultProps = {
    element: 'div',
    gap: false
  };

  var gridCellElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav'];
  var gridColBPs = {
    xs: '',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: '2xl'
  };
  var gridColSpan = {
    xs: {
      auto: 'su-col-auto',
      full: 'su-col-span-full',
      1: 'su-col-span-1',
      2: 'su-col-span-2',
      3: 'su-col-span-3',
      4: 'su-col-span-4',
      5: 'su-col-span-5',
      6: 'su-col-span-6',
      7: 'su-col-span-7',
      8: 'su-col-span-8',
      9: 'su-col-span-9',
      10: 'su-col-span-10',
      11: 'su-col-span-11',
      12: 'su-col-span-12'
    },
    sm: {
      auto: 'sm:su-col-auto',
      full: 'sm:su-col-span-full',
      1: 'sm:su-col-span-1',
      2: 'sm:su-col-span-2',
      3: 'sm:su-col-span-3',
      4: 'sm:su-col-span-4',
      5: 'sm:su-col-span-5',
      6: 'sm:su-col-span-6',
      7: 'sm:su-col-span-7',
      8: 'sm:su-col-span-8',
      9: 'sm:su-col-span-9',
      10: 'sm:su-col-span-10',
      11: 'sm:su-col-span-11',
      12: 'sm:su-col-span-12'
    },
    md: {
      auto: 'md:su-col-auto',
      full: 'md:su-col-span-full',
      1: 'md:su-col-span-1',
      2: 'md:su-col-span-2',
      3: 'md:su-col-span-3',
      4: 'md:su-col-span-4',
      5: 'md:su-col-span-5',
      6: 'md:su-col-span-6',
      7: 'md:su-col-span-7',
      8: 'md:su-col-span-8',
      9: 'md:su-col-span-9',
      10: 'md:su-col-span-10',
      11: 'md:su-col-span-11',
      12: 'md:su-col-span-12'
    },
    lg: {
      auto: 'lg:su-col-auto',
      full: 'lg:su-col-span-full',
      1: 'lg:su-col-span-1',
      2: 'lg:su-col-span-2',
      3: 'lg:su-col-span-3',
      4: 'lg:su-col-span-4',
      5: 'lg:su-col-span-5',
      6: 'lg:su-col-span-6',
      7: 'lg:su-col-span-7',
      8: 'lg:su-col-span-8',
      9: 'lg:su-col-span-9',
      10: 'lg:su-col-span-10',
      11: 'lg:su-col-span-11',
      12: 'lg:su-col-span-12'
    },
    xl: {
      auto: 'xl:su-col-auto',
      full: 'xl:su-col-span-full',
      1: 'xl:su-col-span-1',
      2: 'xl:su-col-span-2',
      3: 'xl:su-col-span-3',
      4: 'xl:su-col-span-4',
      5: 'xl:su-col-span-5',
      6: 'xl:su-col-span-6',
      7: 'xl:su-col-span-7',
      8: 'xl:su-col-span-8',
      9: 'xl:su-col-span-9',
      10: 'xl:su-col-span-10',
      11: 'xl:su-col-span-11',
      12: 'xl:su-col-span-12'
    },
    xxl: {
      auto: '2xl:su-col-auto',
      full: '2xl:su-col-span-full',
      1: '2xl:su-col-span-1',
      2: '2xl:su-col-span-2',
      3: '2xl:su-col-span-3',
      4: '2xl:su-col-span-4',
      5: '2xl:su-col-span-5',
      6: '2xl:su-col-span-6',
      7: '2xl:su-col-span-7',
      8: '2xl:su-col-span-8',
      9: '2xl:su-col-span-9',
      10: '2xl:su-col-span-10',
      11: '2xl:su-col-span-11',
      12: '2xl:su-col-span-12'
    }
  };
  var gridColLine = {
    1: 'su-col-start-1',
    2: 'su-col-start-2',
    3: 'su-col-start-3',
    4: 'su-col-start-4',
    5: 'su-col-start-5',
    6: 'su-col-start-6',
    7: 'su-col-start-7',
    8: 'su-col-start-8',
    9: 'su-col-start-9',
    10: 'su-col-start-10',
    11: 'su-col-start-11',
    12: 'su-col-start-12',
    auto: 'su-col-start-auto'
  };
  var gridRowSpan = {
    1: 'su-row-span-1',
    2: 'su-row-span-2',
    3: 'su-row-span-3',
    4: 'su-row-span-4',
    5: 'su-row-span-5',
    6: 'su-row-span-6',
    auto: 'su-row-auto',
    full: 'su-row-span-full'
  };
  var gridRowLine = {
    1: 'su-row-start-1',
    2: 'su-row-start-2',
    3: 'su-row-start-3',
    4: 'su-row-start-4',
    5: 'su-row-start-5',
    6: 'su-row-start-6',
    auto: 'su-row-start-auto'
  };

  var _excluded$h = ["className", "children", "ref", "colStart", "rowStart", "row"],
      _excluded2$5 = ["xs", "sm", "md", "lg", "xl", "xxl"];
  var GridCell = function GridCell(_ref) {
    var className = _ref.className,
        children = _ref.children,
        ref = _ref.ref,
        colStart = _ref.colStart,
        rowStart = _ref.rowStart,
        row = _ref.row,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$h);

    var levers = {};

    var rest = _objectWithoutPropertiesLoose(props, _excluded2$5);

    var Element = 'div';

    if (props.element && gridCellElements.includes(props.element)) {
      Element = props.element;
    }

    var bps = Object.keys(gridColBPs);
    bps.forEach(function (bp) {
      if (props[bp] && gridColSpan && bp in gridColSpan) {
        if (props[bp] in gridColSpan[bp]) {
          levers[bp] = gridColSpan[bp][props[bp]];
        }
      }
    });

    if (colStart && colStart in gridColLine) {
      levers.colStart = gridColLine[colStart];
    }

    if (row && row in gridRowSpan) {
      levers.row = gridRowSpan[row];
    }

    if (rowStart && rowStart in gridRowLine) {
      levers.rowStart = gridRowLine[rowStart];
    }

    return /*#__PURE__*/React__default.createElement(Element, _extends({
      className: cnbuilder.dcnb(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.colStart, levers.row, levers.rowStart, className),
      ref: ref
    }, rest), children);
  };
  GridCell.propTypes = {
    element: PropTypes.oneOf(gridCellElements),
    xs: PropTypes.oneOf(Object.keys(gridColSpan.xs).map(function (val) {
      return intKeys(val);
    })),
    sm: PropTypes.oneOf(Object.keys(gridColSpan.sm).map(function (val) {
      return intKeys(val);
    })),
    md: PropTypes.oneOf(Object.keys(gridColSpan.md).map(function (val) {
      return intKeys(val);
    })),
    lg: PropTypes.oneOf(Object.keys(gridColSpan.lg).map(function (val) {
      return intKeys(val);
    })),
    xl: PropTypes.oneOf(Object.keys(gridColSpan.xl).map(function (val) {
      return intKeys(val);
    })),
    xxl: PropTypes.oneOf(Object.keys(gridColSpan.xxl).map(function (val) {
      return intKeys(val);
    })),
    colStart: PropTypes.oneOf(Object.keys(gridColLine).map(function (val) {
      return intKeys(val);
    })),
    row: PropTypes.oneOf(Object.keys(gridRowSpan).map(function (val) {
      return intKeys(val);
    })),
    rowStart: PropTypes.oneOf(Object.keys(gridRowLine).map(function (val) {
      return intKeys(val);
    })),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  GridCell.defaultProps = {};

  var identityBarColors = ['cardinal-red', 'digital-red', 'black', 'white'];

  var _excluded$i = ["className"];
  var IdentityBar = function IdentityBar(_ref) {
    var className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$i);

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
      className: cnbuilder.dcnb('su-identity-bar su-pt-5 su-pb-1', levers.wrapper, className)
    }, /*#__PURE__*/React__default.createElement(Logo, {
      className: "su-text-20 su-leading-none",
      color: levers.logo,
      type: "full"
    }));
  };
  IdentityBar.propTypes = {
    color: PropTypes.oneOf(identityBarColors),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  IdentityBar.defaultProps = {
    color: 'cardinal-red'
  };

  var InlineError = function InlineError(_ref) {
    var className = _ref.className,
        errorText = _ref.errorText,
        icon = _ref.icon;
    var iconProps = {
      height: 20,
      width: 20
    };
    var defaultIcon = /*#__PURE__*/React__default.createElement(XIcon$1, _extends({
      "aria-hidden": "true",
      className: "su-text-digital-red su-inline su-mr-3"
    }, iconProps));

    if (icon) {
      var Icon = icon;
      defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
        "aria-hidden": "true",
        className: "su-text-digital-red su-inline su-mr-3"
      }, iconProps));
    }

    if (errorText) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: cnbuilder.dcnb('su-text-digital-red', className)
      }, /*#__PURE__*/React__default.createElement("p", {
        className: "su-text-16"
      }, defaultIcon, errorText));
    }

    return null;
  };
  InlineError.propTypes = {
    className: PropTypes.string,
    errorText: PropTypes.string,
    icon: PropTypes.string
  };
  InlineError.defaultProps = {};

  var InlineValid = function InlineValid(_ref) {
    var className = _ref.className,
        validText = _ref.validText,
        icon = _ref.icon,
        iconType = _ref.iconType;
    var iconProps = {
      height: 20,
      width: 20
    };
    var defaultIcon = /*#__PURE__*/React__default.createElement(CheckIcon, _extends({
      "aria-hidden": "true",
      className: "su-text-digital-green su-inline su-mr-3"
    }, iconProps));

    if (icon) {
      var Icon = icon;
      defaultIcon = /*#__PURE__*/React__default.createElement(Icon, _extends({
        icon: icon,
        type: iconType,
        "aria-hidden": "true",
        className: "su-text-digital-green su-inline su-mr-3"
      }, iconProps));
    }

    if (validText) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: cnbuilder.dcnb('su-text-digital-green', className)
      }, /*#__PURE__*/React__default.createElement("p", {
        className: "su-text-16"
      }, defaultIcon, validText));
    }

    return null;
  };
  InlineValid.propTypes = {
    className: PropTypes.string,
    validText: PropTypes.string,
    icon: PropTypes.string
  };
  InlineValid.defaultProps = {};

  var labelWeights = {
    light: 'su-font-light',
    regular: 'su-font-regular',
    semibold: 'su-font-semibold',
    bold: 'su-font-bold'
  };

  var Label = function Label(_ref) {
    var className = _ref.className,
        children = _ref.children,
        id = _ref.id,
        labelText = _ref.labelText,
        helpText = _ref.helpText,
        fontWeight = _ref.fontWeight;
    var weight = 'regular';

    if (fontWeight && fontWeight in labelWeights) {
      weight = labelWeights[fontWeight];
    }

    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", {
      className: cnbuilder.dcnb('su-label su-mb-5 su-text-18', weight, className),
      htmlFor: id
    }, labelText), /*#__PURE__*/React__default.createElement("p", {
      className: "su-text-cool-grey su-mb-5 su-text-18 su-sans"
    }, helpText), children);
  };
  Label.propTypes = {
    className: PropTypes.string,
    fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),
    labelText: PropTypes.string,
    helpText: PropTypes.string,
    id: PropTypes.string
  };
  Label.defaultProps = {
    fontWeight: 'regular'
  };

  var lockupColors = ['default', 'white'];

  var _excluded$j = ["classes", "line1"];
  var Lockup = function Lockup(_ref) {
    var _ref$classes = _ref.classes,
        classes = _ref$classes === void 0 ? {} : _ref$classes,
        line1 = _ref.line1,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$j);

    var levers = {};

    if (props.color && lockupColors.includes(props.color)) {
      switch (props.color) {
        case 'white':
          levers.logo = 'white';
          levers.text = 'su-text-white';
          levers.bar = 'su-border-white';
          break;

        case 'default':
        default:
          levers.logo = 'cardinal-red';
          levers.text = 'su-text-black';
          levers.bar = 'su-border-black';
          break;
      }
    }

    var LockupContent = /*#__PURE__*/React__default.createElement(FlexBox, {
      direction: "col",
      className: "md:su-flex-row su-basefont-19"
    }, /*#__PURE__*/React__default.createElement(Logo, {
      color: levers.logo,
      isLink: false,
      className: cnbuilder.dcnb('su-type-4 su-leading-half su-pt-11 su-pr-7 su-mr-7 md:su-border-r su-border-solid', levers.bar)
    }), /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-text-25 md:su-text-m2 su--mt-3 md:su-mt-0 su--ml-2 md:su-ml-0 su-font-regular su-relative su-top-6', levers.text, classes.line1)
    }, line1));

    if (props.isLink) {
      var _props$url;

      return /*#__PURE__*/React__default.createElement("a", {
        className: cnbuilder.dcnb('su-lockup su-no-underline su-inline-block', classes.wrapper),
        href: (_props$url = props.url) != null ? _props$url : '/'
      }, LockupContent);
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-lockup su-no-underline su-inline-block', classes.wrapper)
    }, LockupContent);
  };
  Lockup.propTypes = {
    color: PropTypes.oneOf(lockupColors),
    url: PropTypes.string,
    isLink: PropTypes.bool,
    classes: PropTypes.shape({
      wrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      line1: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
    }),
    line1: PropTypes.string
  };
  Lockup.defaultProps = {
    color: 'default',
    isLink: true
  };

  var localFooterColors = ['light grey', 'white', 'black'];
  var localFooterLinkColors = ['blue', 'red', 'white'];

  var _excluded$k = ["classes", "children"];
  var LocalFooter = function LocalFooter(_ref) {
    var _props$buttonText;

    var _ref$classes = _ref.classes,
        classes = _ref$classes === void 0 ? {} : _ref$classes,
        children = _ref.children,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$k);

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
          levers.link = 'su-link-digital-red';
          break;

        case 'white':
          levers.link = 'su-link-white';
          break;
      }
    }

    return /*#__PURE__*/React__default.createElement(Container, {
      width: "site",
      className: cnbuilder.dcnb('su-local-footer su-rs-pt-4 su-rs-pb-5', levers.wrapper, classes.wrapper)
    }, /*#__PURE__*/React__default.createElement(FlexBox, {
      direction: "col",
      gap: true,
      className: cnbuilder.dcnb('md:su-flex-row su-rs-mb-2', classes.header),
      justifyContent: "space-between"
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
      className: cnbuilder.dcnb('su-inline-block su-bg-digital-red su-text-white su-text-18 hocus:su-text-white hocus:su-bg-archway-dark su-py-9 su-px-20 su-no-underline su-font-regular hover:su-underline focus:su-underline su-rounded-7 su-shadow-md', classes.button)
    }, (_props$buttonText = props.buttonText) != null ? _props$buttonText : 'Web Login', /*#__PURE__*/React__default.createElement(HeroIcon, {
      icon: "lock",
      type: "solid",
      className: cnbuilder.dcnb('su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-2', classes.icon)
    })))), /*#__PURE__*/React__default.createElement(Grid, {
      xs: 1,
      md: 2,
      xl: 4,
      gap: true,
      className: cnbuilder.dcnb('su-text-18 su-link-regular', levers.link, classes.content)
    }, children));
  };
  LocalFooter.propTypes = {
    color: PropTypes.oneOf(localFooterColors),
    link: PropTypes.oneOf(localFooterLinkColors),
    isLogoLink: PropTypes.bool,
    url: PropTypes.string,
    line1: PropTypes.string,
    hasButton: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonUrl: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
    classes: PropTypes.shape({
      wrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      header: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      button: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
    })
  };
  LocalFooter.defaultProps = {
    isLogoLink: true,
    color: 'light grey',
    link: 'blue'
  };

  var layoutOptions = ['left', 'center'];

  var _excluded$l = ["children", "level", "size", "weight", "font", "className"];
  var Headline$1 = function Headline(_ref) {
    var children = _ref.children,
        level = _ref.level,
        size = _ref.size,
        weight = _ref.weight,
        font = _ref.font,
        className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$l);

    return /*#__PURE__*/React__default.createElement(Heading, _extends({
      level: level,
      size: size,
      font: font,
      weight: weight
    }, props, {
      className: cnbuilder.dcnb('su-mb-03em', className)
    }), children);
  };
  Headline$1.displayName = 'Poster.Headline';
  Headline$1.propTypes = {
    level: PropTypes.oneOf(headingLevels),
    size: PropTypes.oneOf(Object.keys(headingSizes).map(function (val) {
      return intKeys(val);
    })),
    font: PropTypes.oneOf(Object.keys(headingFonts)),
    weight: PropTypes.oneOf(Object.keys(headingWeights)),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Headline$1.defaultProps = {
    level: 2,
    size: 3,
    weight: 'bold',
    font: 'serif'
  };

  var _excluded$m = ["children", "className"];
  var Content$1 = function Content(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$m);

    return /*#__PURE__*/React__default.createElement(FlexBox, _extends({
      direction: "col",
      className: cnbuilder.dcnb('poster-body su-max-w-700 last:su-mb-0', className)
    }, props), children);
  };
  Content$1.displayName = 'Poster.Content';
  Content$1.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  };
  Content$1.defaultProps = {};

  var _excluded$n = ["className", "children"];
  var Image$1 = function Image(_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$n);

    return /*#__PURE__*/React__default.createElement("div", _extends({
      className: cnbuilder.dcnb('su-w-140 su-h-140 su-rounded-full su-overflow-hidden su-min-w-min', className),
      "aria-hidden": "true"
    }, props), children);
  };
  Image$1.displayName = 'Poster.Image';
  Image$1.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
  };
  Image$1.defaultProps = {};

  var PosterRoot = function PosterRoot(_ref) {
    var _ref$bgImage = _ref.bgImage;
    _ref$bgImage = _ref$bgImage === void 0 ? {} : _ref$bgImage;
    var src = _ref$bgImage.src,
        bgGradient = _ref.bgGradient,
        bgColor = _ref.bgColor,
        className = _ref.className,
        children = _ref.children,
        isGradient = _ref.isGradient,
        layout = _ref.layout;
    var wrapperClasses;

    if (layout === 'left') {
      wrapperClasses = 'su-flex su-flex-col su-justify-center md:su-flex-row su-min-w-min';
    } else {
      wrapperClasses = 'su-flex su-flex-col su-items-center';
    }

    var gradientOverlay = '';
    var bgImageStyle = {};

    if (src) {
      bgImageStyle = {
        backgroundImage: "url('" + src + "')"
      };
    }

    if (isGradient) {
      gradientOverlay = 'linear-gradient(to bottom, transparent, #181D1C)';

      if (bgGradient) {
        gradientOverlay = bgGradient;
      }

      if (src) {
        bgImageStyle = {
          backgroundImage: gradientOverlay + ", url('" + src + "')"
        };
      }
    }

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('poster su-basefont-23 su-rs-pt-5 su-rs-pb-6 su-bg-cover su-bg-no-repeat', wrapperClasses, bgColor, className),
      style: bgImageStyle
    }, children);
  };

  PosterRoot.displayName = 'Poster';
  var Poster = Object.assign(PosterRoot, {
    Headline: Headline$1,
    Content: Content$1,
    Image: Image$1
  });
  PosterRoot.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),
    layout: PropTypes.oneOf(layoutOptions),
    isGradient: PropTypes.bool,
    bgImage: PropTypes.shape({
      src: PropTypes.string
    }),
    bgGradient: PropTypes.string,
    bgColor: PropTypes.string
  };
  PosterRoot.defaultProps = {
    layout: 'center',
    isGradient: false
  };

  var _excluded$o = ["anchorLink", "className", "children"];
  var Skiplink = function Skiplink(_ref) {
    var anchorLink = _ref.anchorLink,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$o);

    return /*#__PURE__*/React__default.createElement("a", _extends({
      href: anchorLink != null ? anchorLink : '#main-content',
      className: cnbuilder.dcnb('su-skiplink', className)
    }, props), children != null ? children : 'Skip to main content');
  };
  Skiplink.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    anchorLink: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node])
  };
  Skiplink.defaultProps = {};

  var _excluded$p = ["className", "labelText", "fontWeight", "helpText", "id", "errorText", "validText"];
  var TextFieldRoot = function TextFieldRoot(_ref) {
    var className = _ref.className,
        labelText = _ref.labelText,
        fontWeight = _ref.fontWeight,
        helpText = _ref.helpText,
        id = _ref.id,
        errorText = _ref.errorText,
        validText = _ref.validText,
        props = _objectWithoutPropertiesLoose(_ref, _excluded$p);

    return /*#__PURE__*/React__default.createElement("div", {
      className: cnbuilder.dcnb('su-w-400', className)
    }, /*#__PURE__*/React__default.createElement(Label, {
      labelText: labelText,
      helpText: helpText,
      id: id,
      fontWeight: fontWeight
    }, /*#__PURE__*/React__default.createElement("input", _extends({}, props, {
      className: "su-input su-border su-border-black su-border-b-2 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full",
      id: id
    })), /*#__PURE__*/React__default.createElement(InlineError, {
      errorText: errorText
    }), /*#__PURE__*/React__default.createElement(InlineValid, {
      validText: validText
    })));
  };
  TextFieldRoot.displayName = 'Text Field';
  var TextField = Object.assign(TextFieldRoot, {
    Label: Label,
    InlineError: InlineError
  });
  TextFieldRoot.propTypes = {
    fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),
    className: PropTypes.string,
    labelText: PropTypes.string,
    helpText: PropTypes.string,
    id: PropTypes.string,
    errorText: PropTypes.string,
    validText: PropTypes.string
  };
  TextFieldRoot.defaultProps = {};

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Card = Card;
  exports.Container = Container;
  exports.CtaButton = CtaButton;
  exports.CtaLink = CtaLink;
  exports.DismissButton = DismissButton;
  exports.FlexBox = FlexBox;
  exports.FlexCell = FlexCell;
  exports.GlobalFooter = GlobalFooter;
  exports.Grid = Grid;
  exports.GridCell = GridCell;
  exports.Heading = Heading;
  exports.HeroIcon = HeroIcon;
  exports.IdentityBar = IdentityBar;
  exports.InlineError = InlineError;
  exports.InlineValid = InlineValid;
  exports.Label = Label;
  exports.LocalFooter = LocalFooter;
  exports.Lockup = Lockup;
  exports.Logo = Logo;
  exports.Poster = Poster;
  exports.Skiplink = Skiplink;
  exports.SrOnlyText = SrOnlyText;
  exports.TextField = TextField;

})));
