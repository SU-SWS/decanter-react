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
export const DismissButton = ({ classes = {}, text, srText, color, icon, iconType, customIcon, onClick, ...props }) => {
  // Defaults & Variables
  const levers = {};
  const iconProps = { height: 20, width: 20 };

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
  const defaultIcon = <Icon icon={heroicon} type={heroiconType} aria-hidden='true' className={classes.icon} {...iconProps} />;

  // Use custom icon for the component if it's provided; if not, use the default heroicon
  const dismissIcon = customIcon ?? defaultIcon;

  return (
    <Button
      variant='none'
      size='minimal'
      className={clsxd('su-flex su-items-center su-w-fit su-sans su-font-semibold su-leading-display',
        levers.color,
        classes.wrapper
      )}
      onClick={onClick}
      {...props}
    >
      {text && text}
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
  text: PropTypes.string,
  srText: PropTypes.string,
  color: PropTypes.oneOf(dismissIconColors),
  icon: PropTypes.oneOf(dismissIconOptions),
  iconType: PropTypes.oneOf(dismissIconTypes),
  customIcon: PropTypes.element,
  onClick: PropTypes.func,

  // The CSS Classname property
  classes: PropTypes.shape(
    {
      wrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
    }
  )
};

// Default Props.
// -----------------------------------------------------------------------------
DismissButton.defaultProps = {
  color: 'black',
  icon: 'x-circle',
  iconType: 'solid'
};
