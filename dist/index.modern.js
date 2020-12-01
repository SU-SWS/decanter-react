import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faBell, faCheckCircle, faExclamationTriangle, faTimesCircle as faTimesCircle$1, faQuestionCircle, faAngleRight, faDownload, faArrowRight, faLock, faAngleDown, faAngleDoubleRight, faVideo } from '@fortawesome/free-solid-svg-icons';

const DismissButton = props => {
  const wrapper = ['su-dismiss-button', 'su-bg-transparent', 'hover:su-bg-transparent', 'focus:su-bg-transparent', 'su-uppercase', 'su-font-semibold', 'su-p-0', 'su-text-170rem'];
  const defaultClasses = {
    wrapper: wrapper.join(' ')
  };
  const variants = {
    dark: {
      wrapper: defaultClasses.wrapper + ' ' + 'su-text-black hover:su-text-black focus:su-text-black'
    }
  };
  const classes = Object.assign(defaultClasses, variants[props.variant]);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": props.ariaLabel ?? 'Dismiss alert',
    className: classes.wrapper,
    onClick: () => props.callback(true)
  }, props.dismissText ?? 'Dismiss', props.icon ?? /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTimesCircle,
    className: "su-ml-2"
  }));
};

var styles = {"alertBodyWrapper":"_index-module__alertBodyWrapper__37-z8","alertBodyWrapperDark":"_index-module__alertBodyWrapperDark__39QGx","label":"_index-module__label__3omFw"};

const Alert = props => {
  const [isDismissed, setDismissed] = useState(false);
  const defaultClasses = {
    wrapper: 'su-alert',
    dismissButtonWrapper: ['su-order-3', 'su-rs-m-l-1', 'su-h-full', 'su-items-end', 'su-flex-shrink', 'su-text-right', 'su-w-full', 'sm:su-w-auto'].join(' '),
    dismissButton: '',
    headerWrapper: ['su-order-1', 'su-rs-m-r-1', 'su-flex-shrink', 'su-mb-4', 'xs:su-w-full', 'lg:su-w-max'].join(' '),
    label: ['su-inline-block', 'su-uppercase', 'su-font-semibold', 'su-text-170rem', 'su-h-full', styles.label].join(' '),
    bodyWrapper: styles.alertBodyWrapperDark,
    icon: faBell,
    iconClass: 'su-mr-2 su-inline-block su-max-w-xs',
    bodyHeading: '',
    footerWrapper: 'su-rs-m-t-0'
  };
  const variants = {
    success: {
      wrapper: 'su-alert su-bg-palo-verde',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: faCheckCircle
    },
    warning: {
      wrapper: 'su-alert su-bg-illuminating-dark',
      bodyWrapper: styles.alertBodyWrapperDark,
      icon: faExclamationTriangle
    },
    error: {
      wrapper: 'su-alert su-bg-digital-red',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: faTimesCircle$1
    },
    info: {
      wrapper: 'su-alert su-bg-bright-blue',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
      footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
      icon: faQuestionCircle
    }
  };
  let classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  const dismissDarkVariant = ['warning'];
  let dismissVariant = 'light';

  if (props.variant === undefined || dismissDarkVariant.includes(props.variant)) {
    dismissVariant = 'dark';
  }

  const dismiss = /*#__PURE__*/React.createElement("div", {
    className: classes.dismissButtonWrapper
  }, /*#__PURE__*/React.createElement(DismissButton, {
    variant: dismissVariant,
    callback: setDismissed
  }));

  if (isDismissed) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-cc su-flex su-flex-wrap sm:su-items-center"
  }, props.dismiss && dismiss, /*#__PURE__*/React.createElement("div", {
    className: classes.headerWrapper
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.headerIcon
  }, props.icon ?? /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: classes.icon,
    className: classes.iconClass
  })), /*#__PURE__*/React.createElement("span", {
    className: classes.label
  }, props.label ?? 'Information')), /*#__PURE__*/React.createElement("div", {
    className: classes.bodyWrapper
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.bodyHeading
  }, props.heading), /*#__PURE__*/React.createElement("div", {
    className: classes.body
  }, props.body), /*#__PURE__*/React.createElement("div", {
    className: classes.footerWrapper
  }, props.footer))));
};

const BrandBar = props => {
  const defaultClasses = {
    wrapper: 'su-brand-bar su-bg-cardinal-red',
    container: 'su-cc',
    link: 'su-logo su-text-white hover:su-text-white focus:su-text-white'
  };
  const variants = {
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
  let classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("a", {
    className: classes.link,
    href: "https://stanford.edu"
  }, "Stanford University")));
};

var styles$1 = {"animatedRight":"_index-module__animatedRight__z5xM_","linkIcon":"_index-module__linkIcon__179dM","animatedDown":"_index-module__animatedDown__27NzJ","animatedUp":"_index-module__animatedUp__4tFhT","animatedLeft":"_index-module__animatedLeft__1lgfX","animatedTopRight":"_index-module__animatedTopRight__2odX1"};

const StyledLink = props => {
  const defaultClasses = {
    wrapper: 'su-link'
  };
  const variants = {
    action: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faAngleRight,
        className: styles$1.linkIcon
      })
    },
    download: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faDownload,
        className: styles$1.linkIcon
      })
    },
    external: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faArrowRight,
        className: styles$1.linkIcon
      })
    },
    internal: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faLock,
        className: styles$1.linkIcon
      })
    },
    jump: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faAngleDown,
        className: styles$1.linkIcon
      })
    },
    more: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faAngleDoubleRight,
        className: styles$1.linkIcon
      })
    },
    video: {
      icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faVideo,
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
  let classes = Object.assign(defaultClasses, props.classes);
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

  return /*#__PURE__*/React.createElement("a", Object.assign({
    className: classes.wrapper,
    href: props.href
  }, props.attributes), props.children, classes.icon && classes.icon);
};

export { Alert, BrandBar, StyledLink };
//# sourceMappingURL=index.modern.js.map
