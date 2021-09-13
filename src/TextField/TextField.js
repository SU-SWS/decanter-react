import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { Label } from "../Label/Label";
import { InlineError } from "../InlineError/InlineError";

export const TextFieldRoot = ({
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
        className="su-input su-border su-border-b-2 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full"
        id={id}
        {...props}
      />
      <InlineError errorText={errorText} />
    </Label>
  </div>
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
  className: PropTypes.string,

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
