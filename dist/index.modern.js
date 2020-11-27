import React from 'react';

const BrandBar = props => {
  const defaultClasses = {
    wrapper: 'su-brand-bar',
    container: '',
    link: '',
    sr: ''
  };
  const classes = Object.assign(defaultClasses, props.classes);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("a", {
    className: classes.link,
    href: "https://stanford.edu"
  }, "Stanford University")));
};

var styles = {"test":"_styles-module__test__3RkHN"};

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { BrandBar, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
