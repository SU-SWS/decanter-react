function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var BrandBar = function BrandBar(props) {
  var defaultClasses = {
    wrapper: 'su-brand-bar',
    container: '',
    link: '',
    sr: ''
  };
  var classes = Object.assign(defaultClasses, props.classes);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("a", {
    className: classes.link,
    href: "https://stanford.edu"
  }, "Stanford University")));
};

var styles = {"test":"_3RkHN"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.BrandBar = BrandBar;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
