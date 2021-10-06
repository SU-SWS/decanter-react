import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { InlineError } from '../InlineError/InlineError';
import { InlineValid } from '../InlineValid/InlineValid';
import { Label } from '../Label/Label';
import { labelWeights } from '../Label/Label.levers';

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
        className="su-input su-border su-border-black-20 su-border-b-2 su-border-b-black-70 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full focus-visible:su-border-2 focus-visible:su-border-b-digital-blue focus-visible:su-border-opacity-40"
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
