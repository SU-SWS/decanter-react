import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { Label } from "./TextField.Label";
import { InlineError } from "./TextField.InlineError";

export const TextFieldRoot = ({ className, children }) => (
  <div className={dcnb("su-w-400", className)}>{children}</div>
);

TextFieldRoot.displayName = "Text Field";

/**
 * Exports
 */
export const TextField = Object.assign(TextFieldRoot, {
  Label,
  InlineError,
});

// Prop Types.
// -----------------------------------------------------------------------------
TextFieldRoot.propTypes = {
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Error message
  errorText: PropTypes.string,

  // Label text
  labelText: PropTypes.string,

  // Help text
  helpText: PropTypes.string,

  // Label and Input ID
  id: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
TextFieldRoot.defaultProps = {};
