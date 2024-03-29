import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { Label } from '../Label/Label';
import { InlineError } from '../InlineError/InlineError';
import { labelWeights } from '../Label/Label.levers';
import { InlineValid } from '../InlineValid/InlineValid';

export const TextFieldRoot = ({
  className,
  labelText,
  fontWeight,
  helpText,
  id,
  errorText,
  validText,
  ...props
}) => (
  <div className={dcnb('su-w-400', className)}>
    <Label
      labelText={labelText}
      helpText={helpText}
      id={id}
      fontWeight={fontWeight}
    >
      <input
        {...props}
        className="su-input su-border su-border-black su-border-b-2 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full"
        id={id}
      />
      <InlineError errorText={errorText} />
      <InlineValid validText={validText} />
    </Label>
  </div>
);

TextFieldRoot.displayName = 'Text Field';

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
  /**
   * Font weight.
   */
  fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),

  // CSS Classes.
  className: PropTypes.string,

  // Label text
  labelText: PropTypes.string,

  // Help text
  helpText: PropTypes.string,

  // Label and Input ID
  id: PropTypes.string,

  // Error message
  errorText: PropTypes.string,

  // Valid message
  validText: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
TextFieldRoot.defaultProps = {};
