/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
// import Icon from "react-hero-icon";
import {
  XCircleIcon as XCircleIconSolid,
  XIcon as XIconSolid,
} from '@heroicons/react/solid';
import {
  XCircleIcon as XCircleIconOutline,
  XIcon as XIconOutline,
} from '@heroicons/react/outline';
import { dcnb } from 'cnbuilder';
import {
  dismissIconOptions,
  dismissIconTypes,
  dismissIconColors,
} from './DismissButton.levers';
import { Button } from '../Button/Button';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';

/**
 * Dismiss Button Component
 *
 * For use with other components such as DismissButtons and modals.
 *
 */
export const DismissButton = ({
  className,
  text,
  srText,
  color,
  icon,
  iconType,
  iconSize,
  iconProps,
  customIcon,
  onClick,
  ...props
}) => {
  // Defaults & Variables
  const levers = {};
  iconProps = { height: iconSize ?? 20, width: iconSize ?? 20, ...iconProps }; // eslint-disable-line no-param-reassign

  // Levers
  // ---------------------------------------------------------------------------

  // color
  if (color && dismissIconColors.includes(color)) {
    switch (color) {
      case 'black':
        levers.color = 'su-text-black hocus:su-text-black';
        break;

      case 'white':
        levers.color = 'su-text-white hocus:su-text-white';
        break;

      default:
      // none.
    }
  }

  // Dismiss Icon and defaults
  // Set heroicon and icon type if not specified
  // Set default heroicon if custom icon element isn't provided
  let defaultIcon = <XCircleIconSolid aria-hidden="true" {...iconProps} />;

  if (icon && dismissIconOptions.includes(icon) && iconType === 'solid') {
    switch (icon) {
      case 'x-circle':
        defaultIcon = <XCircleIconSolid aria-hidden="true" {...iconProps} />;
        break;
      case 'x':
        defaultIcon = <XIconSolid aria-hidden="true" {...iconProps} />;
        break;
      case 'none':
        defaultIcon = '';
        break;

      default:
    }
  }

  if (icon && dismissIconOptions.includes(icon) && iconType === 'outline') {
    switch (icon) {
      case 'x-circle':
        defaultIcon = <XCircleIconOutline aria-hidden="true" {...iconProps} />;
        break;
      case 'x':
        defaultIcon = <XIconOutline aria-hidden="true" {...iconProps} />;
        break;
      case 'none':
        defaultIcon = '';
        break;

      default:
    }
  }

  // if (iconType && dismissIconTypes.includes(iconType)) {
  // }

  // Use custom icon for the component if it's provided; if not, use the default heroicon
  const dismissIcon = customIcon ?? defaultIcon;

  return (
    <Button
      variant="unset"
      size="minimal"
      className={dcnb(
        'su-flex su-items-center su-w-fit su-sans su-font-semibold su-leading-display',
        levers.color,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {text}
      {srText && <SrOnlyText srText={` ${srText}`} />}
      {dismissIcon}
    </Button>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------

DismissButton.propTypes = {
  /**
   * Button text
   */
  text: PropTypes.string,

  /**
   * Screen reader only text (required for icon buttons)
   */
  srText: PropTypes.string,

  /**
   * Color of the text and icon
   */
  color: PropTypes.oneOf(dismissIconColors),

  /**
   * Heroicon option
   */
  icon: PropTypes.oneOf(dismissIconOptions),

  /**
   * Heroicon type
   */
  iconType: PropTypes.oneOf(dismissIconTypes),

  /**
   * If you want to provide your own custom icon element
   */
  customIcon: PropTypes.element,

  /**
   * onClick function
   */
  onClick: PropTypes.func,

  /**
   * Props for the Icon Element.
   */
  iconProps: PropTypes.objectOf(PropTypes.any),

  /**
   * Size (same for height and width) of the icon in pixels.
   */
  iconSize: PropTypes.number,

  /**
   * Custom CSS classes, e.g., to change color
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
DismissButton.defaultProps = {
  color: 'black',
  icon: 'x-circle',
  iconType: 'solid',
};
