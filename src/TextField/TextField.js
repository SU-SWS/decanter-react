import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { InlineError } from '../InlineError/InlineError';
import { InlineValid } from '../InlineValid/InlineValid';
import { Label } from '../Label/Label';
import { labelWeights } from '../Label/Label.levers';
import { iconAlignment } from './TextField.levers';

export const TextFieldRoot = ({
  className,
  labelText,
  fontWeight,
  helpText,
  id,
  icon,
  iconPosition,
  isIcon,
  errorText,
  validText,
  ...props
}) => {
  let iconPositionStyle =
    'su-absolute su-bottom-0 su-left-0 su-ml-19 su-mt-19 su-mb-20';
  let iconInputStyle = '';

  // Default Icon — Mail Envelope
  const defaultIcon = (
    <HeroIcon icon="email" className="su-w-30 su-h-30 !su-m-0" />
  );

  if (isIcon) {
    if (iconAlignment[iconPosition] === 'left') {
      iconInputStyle = 'su-pl-58 su-pr-19';
    }

    if (iconAlignment[iconPosition] === 'right') {
      iconPositionStyle =
        'su-absolute su-bottom-0 su-right-0 su-mr-19 su-mt-19 su-mb-20';
      iconInputStyle = 'su-pr-58';
    }
  }

  const inputIcon = icon ?? defaultIcon;

  return (
    <div className={dcnb('su-w-400', className)}>
      <Label
        labelText={labelText}
        helpText={helpText}
        id={id}
        fontWeight={fontWeight}
      >
        <div className="su-relative su-w-400">
          {isIcon ? (
            <span className={iconPositionStyle}>{inputIcon}</span>
          ) : null}
          <input
            {...props}
            className={dcnb(
              'su-input su-border su-border-black-20 su-border-b-2 su-border-b-black-70 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full focus-visible:su-border-2 focus-visible:su-border-b-digital-blue focus-visible:su-border-opacity-40',
              iconInputStyle
            )}
            id={id}
          />
        </div>
        <InlineError errorText={errorText} />
        <InlineValid validText={validText} />
      </Label>
    </div>
  );
};

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

  /**
   * Is there an icon?
   */
  isIcon: PropTypes.bool,

  // Icon
  icon: PropTypes.string,

  /**
   * Icon Positioning
   */
  iconPosition: PropTypes.oneOf(iconAlignment),

  // Error message
  errorText: PropTypes.string,

  // Valid message
  validText: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
TextFieldRoot.defaultProps = {
  iconPosition: 'left',
  isIcon: false,
};
