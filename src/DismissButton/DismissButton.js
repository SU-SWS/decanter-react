import React from 'react';
import PropTypes from 'prop-types';
import { dismissIconOptions, dismissIconTypes, dismissIconColors } from './DismissButton.levers';
import { Button } from '../Button/Button';
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";
import Icon from 'react-hero-icon';
import clsxd from 'clsx-dedupe';

/**
 * Dismiss Button Component
 *
 * For use with other components such as DismissButtons and modals.
 *
 */
export const DismissButton = ({ className, text, srText, color, icon, iconType, iconProps, customIcon, onClick, ...props }) => {
  // Defaults & Variables
  const levers = {};
  iconProps = Object.assign({ height: 20, width: 20 }, ...iconProps);

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
    }
  }

  // Dismiss Icon and defaults
  // Set heroicon and icon type if not specified

  let heroicon = '';

  if (icon && dismissIconOptions.includes(icon)) {
    heroicon = icon;
  }

  let heroiconType = 'solid';

  if (iconType && dismissIconTypes.includes(iconType)) {
    heroiconType = iconType;
  }

  // Set default heroicon if custom icon element isn't provided
  const defaultIcon = <Icon icon={heroicon} type={heroiconType} aria-hidden='true' {...iconProps} />;

  // Use custom icon for the component if it's provided; if not, use the default heroicon
  const dismissIcon = customIcon ?? defaultIcon;

  return (
    <Button
      variant='none'
      size='minimal'
      className={clsxd('su-flex su-items-center su-w-fit su-sans su-font-semibold su-leading-display', levers.color, className)}
      onClick={onClick}
      {...props}
    >
      {text}
      {srText &&
        <SrOnlyText srText={' ' + srText} />
      }
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
  iconProps: PropTypes.object,

// Default Props.
// -----------------------------------------------------------------------------
DismissButton.defaultProps = {
  color: 'black',
  icon: 'x-circle',
  iconType: 'solid'
};
