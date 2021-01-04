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
  }, props.children), /*#__PURE__*/React.createElement("div", {
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

const GlobalFooter = props => {
  const defaultClasses = {
    wrapper: 'su-global-footer'
  };
  const variants = {
    bright: {
      wrapper: 'su-global-footer su-bg-digital-red'
    },
    dark: {
      wrapper: 'su-global-footer su-bg-black'
    }
  };
  let classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-global-footer__container",
    title: "Common Stanford resources"
  }, /*#__PURE__*/React.createElement("div", {
    className: "su-global-footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "su-logo",
    href: "https://www.stanford.edu"
  }, "Stanford", /*#__PURE__*/React.createElement("br", null), "University")), /*#__PURE__*/React.createElement("div", {
    className: "su-global-footer__content"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "global footer menu"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "su-global-footer__menu su-global-footer__menu--global"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.stanford.edu"
  }, "Stanford Home", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://visit.stanford.edu/plan/"
  }, "Maps & Directions", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.stanford.edu/search/"
  }, "Search Stanford", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://emergency.stanford.edu"
  }, "Emergency Info", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)")))), /*#__PURE__*/React.createElement("ul", {
    className: "su-global-footer__menu su-global-footer__menu--policy"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.stanford.edu/site/terms/",
    title: "Terms of use for sites"
  }, "Terms of Use", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.stanford.edu/site/privacy/",
    title: "Privacy and cookie policy"
  }, "Privacy", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://uit.stanford.edu/security/copyright-infringement",
    title: "Report alleged copyright infringement"
  }, "Copyright", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
    title: "Ownership and use of Stanford trademarks and images"
  }, "Trademarks", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/",
    title: "Non-discrimination policy"
  }, "Non-Discrimination", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.stanford.edu/site/accessibility",
    title: "Report web accessibility issues"
  }, "Accessibility", /*#__PURE__*/React.createElement("span", {
    className: "su-sr-only"
  }, "(link is external)"))))), /*#__PURE__*/React.createElement("div", {
    className: "su-global-footer__copyright"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Stanford University."), /*#__PURE__*/React.createElement("span", null, "\xA0 Stanford, California 94305.")))));
};

const Hero = props => {
  const defaultClasses = {
    wrapper: 'su-hero',
    mediaWrapper: 'su-hero-media',
    contentWrapper: 'su-hero-content',
    captionWrapper: 'su-hero-caption'
  };
  const variants = {
    dark: {
      wrapper: 'su-hero su-bg-black'
    }
  };
  let classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.mediaWrapper
  }, props.media), props.children ?? /*#__PURE__*/React.createElement("div", {
    className: classes.contentWrapper
  }, props.children), props.caption ?? /*#__PURE__*/React.createElement("div", {
    className: classes.captionWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.captionContainer
  }, props.caption)));
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

export { Alert, BrandBar, GlobalFooter, Hero, StyledLink };
//# sourceMappingURL=index.modern.js.map
