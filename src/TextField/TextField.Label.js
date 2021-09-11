import React from "react";
import PropTypes from "prop-types";
import { Label as TextFieldLabel } from "../Label/Label";

export const Label = ({ ...props }) => <TextFieldLabel {...props} />;

Label.propTypes = {
  // Label Text
  text: PropTypes.string,

  // Help Text
  helpText: PropTypes.string,

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Label.defaultProps = {
  text: "Label",
  helpText: "Help text lorem ipsum cras varius. Sed hendrerit.",
};
