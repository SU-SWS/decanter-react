import React from "react";
import PropTypes from "prop-types";
import { InlineError as TextFieldInlineError } from "../InlineError/InlineError";

export const InlineError = (props) => <TextFieldInlineError {...props} />;

InlineError.propTypes = {
  // Error Text
  text: PropTypes.string,

  // Icon
  icon: PropTypes.string,

  // Is there an error message?
  isError: PropTypes.bool,
};

// Default Props.
// -----------------------------------------------------------------------------
InlineError.defaultProps = {
  isError: false,
};
