function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var fa = require('react-icons/fa');
var reactFontawesome = require('@fortawesome/react-fontawesome');
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
  }, (_props$dismissText = props.dismissText) != null ? _props$dismissText : 'Dismiss', (_props$icon = props.icon) != null ? _props$icon : /*#__PURE__*/React__default.createElement(fa.FaTimesCircle, {
    className: "su-inline-block su-align-bottom su-ml-2"
  }));
};

var styles = {"alertBodyWrapper":"_37-z8","alertBodyWrapperDark":"_39QGx","label":"_3omFw"};

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
  }, props.children), /*#__PURE__*/React__default.createElement("div", {
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

var GlobalFooter = function GlobalFooter(props) {
  var defaultClasses = {
    wrapper: 'su-global-footer'
  };
  var variants = {
    bright: {
      wrapper: 'su-global-footer su-bg-digital-red'
    },
    dark: {
      wrapper: 'su-global-footer su-bg-black'
    }
  };
  var classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "su-global-footer__container",
    title: "Common Stanford resources"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "su-global-footer__brand"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "su-logo",
    href: "https://www.stanford.edu"
  }, "Stanford", /*#__PURE__*/React__default.createElement("br", null), "University")), /*#__PURE__*/React__default.createElement("div", {
    className: "su-global-footer__content"
  }, /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": "global footer menu"
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "su-global-footer__menu su-global-footer__menu--global"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu"
  }, "Stanford Home", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://visit.stanford.edu/plan/"
  }, "Maps & Directions", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/search/"
  }, "Search Stanford", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://emergency.stanford.edu"
  }, "Emergency Info", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)")))), /*#__PURE__*/React__default.createElement("ul", {
    className: "su-global-footer__menu su-global-footer__menu--policy"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/terms/",
    title: "Terms of use for sites"
  }, "Terms of Use", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/privacy/",
    title: "Privacy and cookie policy"
  }, "Privacy", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://uit.stanford.edu/security/copyright-infringement",
    title: "Report alleged copyright infringement"
  }, "Copyright", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
    title: "Ownership and use of Stanford trademarks and images"
  }, "Trademarks", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/",
    title: "Non-discrimination policy"
  }, "Non-Discrimination", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.stanford.edu/site/accessibility",
    title: "Report web accessibility issues"
  }, "Accessibility", /*#__PURE__*/React__default.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))))), /*#__PURE__*/React__default.createElement("div", {
    className: "su-global-footer__copyright"
  }, /*#__PURE__*/React__default.createElement("span", null, "\xA9 Stanford University."), /*#__PURE__*/React__default.createElement("span", null, "\xA0 Stanford, California 94305.")))));
};

var Hero = function Hero(props) {
  var _props$children, _props$caption;

  var defaultClasses = {
    wrapper: 'su-hero',
    mediaWrapper: 'su-hero-media',
    contentWrapper: 'su-hero-content',
    captionWrapper: 'su-hero-caption'
  };
  var variants = {
    dark: {
      wrapper: 'su-hero su-bg-black'
    }
  };
  var classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.mediaWrapper
  }, props.media), (_props$children = props.children) != null ? _props$children : /*#__PURE__*/React__default.createElement("div", {
    className: classes.contentWrapper
  }, props.children), (_props$caption = props.caption) != null ? _props$caption : /*#__PURE__*/React__default.createElement("div", {
    className: classes.captionWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes.captionContainer
  }, props.caption)));
};

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

var styles$1 = {"animatedRight":"_z5xM_","linkIcon":"_179dM","animatedDown":"_27NzJ","animatedUp":"_4tFhT","animatedLeft":"_1lgfX","animatedTopRight":"_2odX1"};

var StyledLink = function StyledLink(props) {
  var defaultClasses = {
    wrapper: 'su-link'
  };
  var variants = {
    action: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faAngleRight,
        className: styles$1.linkIcon
      })
    },
    download: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faDownload,
        className: styles$1.linkIcon
      })
    },
    external: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faArrowRight,
        className: styles$1.linkIcon
      })
    },
    internal: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faLock,
        className: styles$1.linkIcon
      })
    },
    jump: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faAngleDown,
        className: styles$1.linkIcon
      })
    },
    more: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faAngleDoubleRight,
        className: styles$1.linkIcon
      })
    },
    video: {
      icon: /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
        icon: freeSolidSvgIcons.faVideo,
        className: styles$1.linkIcon
      })
    },
    button: {
      wrapper: 'su-button'
    },
    buttonSecondary: {
      wrapper: 'su-button su-button--secondary'
    },
    buttonBig: {
      wrapper: 'su-button su-button--big'
    }
  };
  var classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);

  if (props.animate !== undefined) {
    switch (props.animate) {
      case 'down':
        classes.wrapper += ' ' + styles$1.animatedDown;
        break;

      case 'left':
        classes.wrapper += ' ' + styles$1.animatedLeft;
        break;

      case 'up':
        classes.wrapper += ' ' + styles$1.animatedUp;
        break;

      case 'topRight':
        classes.wrapper += ' ' + styles$1.animatedTopRight;
        break;

      default:
        classes.wrapper += ' ' + styles$1.animatedRight;
    }
  }

  return /*#__PURE__*/React__default.createElement("a", _extends({
    className: classes.wrapper,
    href: props.href
  }, props.attributes), props.children, classes.icon && classes.icon);
};

exports.Alert = Alert;
exports.BrandBar = BrandBar;
exports.GlobalFooter = GlobalFooter;
exports.Hero = Hero;
exports.StyledLink = StyledLink;
//# sourceMappingURL=index.js.map
