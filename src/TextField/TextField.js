import React from "react";
import PropTypes from "prop-types";
import { Label } from "./TextField.Label";
import { InlineError } from "./TextField.InlineError";
import { dcnb } from "cnbuilder";

export const TextField = ({
  className,
  errorText,
  labelText,
  helpText,
  id,
  ...props
}) => (
  <div className={dcnb("su-w-400", className)}>
    <Label text={labelText} helpText={helpText} id={id}>
      <input
        className="su-input su-border-b-2 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full"
        id={id}
        {...props}
      />
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
