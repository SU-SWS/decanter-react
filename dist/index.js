function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var DismissButton = function DismissButton(props) {
  var _props$ariaLabel, _props$dismissText, _props$icon;

  var wrapper = ['su-dismiss-button', 'su-bg-transparent', 'hover:su-bg-transparent', 'focus:su-bg-transparent', 'su-uppercase', 'su-font-semibold', 'su-p-0', 'su-text-170rem'];
  var defaultClasses = {
    wrapper: wrapper.join(' ')
  };
  var variants = {
    dark: {
      wrapper: defaultClasses.wrapper + ' ' + 'su-text-black hover:su-text-black focus:su-text-black'
    }
  };
  var classes = Object.assign(defaultClasses, variants[props.variant]);
  return /*#__PURE__*/React__default.createElement("button", {
    "aria-label": (_props$ariaLabel = props.ariaLabel) != null ? _props$ariaLabel : 'Dismiss alert',
    className: classes.wrapper,
    onClick: function onClick() {
      return props.callback(true);
    }
  }, (_props$dismissText = props.dismissText) != null ? _props$dismissText : 'Dismiss', (_props$icon = props.icon) != null ? _props$icon : /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeRegularSvgIcons.faTimesCircle,
    className: "su-ml-2"
  }));
};

var styles = {"alertBodyWrapper":"_index-module__alertBodyWrapper__37-z8","alertBodyWrapperDark":"_index-module__alertBodyWrapperDark__39QGx","label":"_index-module__label__3omFw"};

var Alert = function Alert(props) {
  var _props$icon, _props$label;

  var _useState = React.useState(false),
      isDismissed = _useState[0],
      setDismissed = _useState[1];

  var defaultClasses = {
    wrapper: 'su-alert',
    dismissButtonWrapper: ['su-order-3', 'su-rs-m-l-1', 'su-h-full', 'su-items-end', 'su-flex-shrink', 'su-text-right', 'su-w-full', 'sm:su-w-auto'].join(' '),
    dismissButton: '',
    headerWrapper: ['su-order-1', 'su-rs-m-r-1', 'su-flex-shrink', 'su-mb-4', 'xs:su-w-full', 'lg:su-w-max'].join(' '),
    label: ['su-inline-block', 'su-uppercase', 'su-font-semibold', 'su-text-170rem', 'su-h-full', styles.label].join(' '),
    bodyWrapper: styles.alertBodyWrapperDark,
    icon: freeSolidSvgIcons.faBell,
    iconClass: 'su-mr-2 su-inline-block su-max-w-xs',
    bodyHeading: '',
    footerWrapper: 'su-rs-m-t-0'
  };
  var variants = {
    success: {
      wrapper: 'su-alert su-bg-palo-verde',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: freeSolidSvgIcons.faCheckCircle
    },
    warning: {
      wrapper: 'su-alert su-bg-illuminating-dark',
      bodyWrapper: styles.alertBodyWrapperDark,
      icon: freeSolidSvgIcons.faExclamationTriangle
    },
    error: {
      wrapper: 'su-alert su-bg-digital-red',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: freeSolidSvgIcons.faTimesCircle
    },
    info: {
      wrapper: 'su-alert su-bg-bright-blue',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: freeSolidSvgIcons.faQuestionCircle
    }
  };
  var classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  var dismissDarkVariant = ['warning'];
  var dismissVariant = 'light';

  if (props.variant === undefined || dismissDarkVariant.includes(props.variant)) {
    dismissVariant = 'dark';
  }

  var dismiss = /*#__PURE__*/React__default.createElement("div", {
    className: classes.dismissButtonWrapper
  }, /*#__PURE__*/React__default.createElement(DismissButton, {
    variant: dismissVariant,
    callback: setDismissed
  }));

  if (isDismissed) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "su-cc su-flex su-flex-wrap sm:su-items-center"
  }, props.dismiss && dismiss, /*#__PURE__*/React__default.createElement("div", {
    className: classes.headerWrapper
  }, /*#__PURE__*/React__default.createElement("span", {
    className: classes.headerIcon
  }, (_props$icon = props.icon) != null ? _props$icon : /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: classes.icon,
    className: classes.iconClass
  })), /*#__PURE__*/React__default.createElement("span", {
    className: classes.label
  }, (_props$label = props.label) != null ? _props$label : 'Information')), /*#__PURE__*/React__default.createElement("div", {
    className: classes.bodyWrapper
  }, /*#__PURE__*/React__default.createElement("h3", {
    className: classes.bodyHeading
  }, props.heading), /*#__PURE__*/React__default.createElement("div", {
    className: classes.body
  }, props.body), /*#__PURE__*/React__default.createElement("div", {
    className: classes.footerWrapper
  }, props.footer))));
};

var BrandBar = function BrandBar(props) {
  var defaultClasses = {
    wrapper: 'su-brand-bar su-bg-cardinal-red',
    container: 'su-cc',
    link: 'su-logo su-text-white hover:su-text-white focus:su-text-white'
  };
  var variants = {
    bright: {
      wrapper: 'su-brand-bar su-bg-digital-red'
    },
    dark: {
      wrapper: 'su-brand-bar su-bg-black'
    },
    white: {
      wrapper: 'su-brand-bar su-bg-white su-text-black',
      link: 'su-logo su-text-black hover:su-text-black focus:su-text-black'
    }
  };
  var classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React__default.createElement("a", {
    className: classes.link,
    href: "https://stanford.edu"
  }, "Stanford University")));
};

exports.Alert = Alert;
exports.BrandBar = BrandBar;
//# sourceMappingURL=index.js.map
