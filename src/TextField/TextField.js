import React from "react";
import PropTypes from "prop-types";
import { Label } from "./TextField.Label";
import { InlineError } from "./TextField.InlineError";

export const TextField = ({
  className,
  errorText,
  labelText,
  helpText,
  id,
  ...props
}) => (
  <div className={className}>
    <Label text={labelText} helpText={helpText} id={id}>
      <input className="su-input" id={id} {...props} />
      <InlineError text={errorText} />
    </Label>
  </div>
);

// Prop Types.
// -----------------------------------------------------------------------------
TextField.propTypes = {
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
TextField.defaultProps = {};
