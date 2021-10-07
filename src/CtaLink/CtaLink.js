import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import getIconAnimation from '../common/icon/getIconAnimation';
import getIconClasses from '../common/icon/getIconClasses';
import getIconPosition from '../common/icon/getIconPosition';
import {
  iconAlignment,
  iconAnimations,
  iconOptions,
} from '../common/icon/icon.levers';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { ctaLinkColors } from './CtaLink.levers';

/**
 * CTA Link Component
 *
 */
export const CtaLink = React.forwardRef(
  (
    {
      className,
      text,
      srText,
      color,
      icon,
      iconProps,
      iconPosition,
      animate,
      ...props
    },
    ref
  ) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};

    // Levers
    // ---------------------------------------------------------------------------

    // color
    if (color && ctaLinkColors.includes(color)) {
      switch (color) {
        case 'red':
          levers.color = 'su-text-digital-red hocus:su-text-black';
          break;

        case 'blue':
          levers.color = 'su-text-digital-blue hocus:su-text-black';
          break;

        case 'white':
          levers.color = 'su-text-white hocus:su-text-white';
          break;

        default:
        // none.
      }
    }

    // icon
    let heroicon = '';

    if (icon && iconOptions.includes(icon)) {
      heroicon = icon;
      levers.icon = getIconClasses(icon);
      levers.iconPositionStyles = getIconPosition(icon, iconPosition);
    }

    // animate
    // Add specific classes for each type of animation
    if (animate && iconAnimations.includes(animate)) {
      levers.animate = getIconAnimation(animate);
    }

    // Icon className.
    const { className: iconClasses, ...iProps } = iconProps || {};

    return (
      <a
        className={dcnb(
          'su-cta-link su-text-19 md:su-text-20 su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors',
          levers.color,
          levers.size,
          levers.variant,
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' ? (
          <HeroIcon
            icon={heroicon}
            aria-hidden
            className={dcnb(
              'su-inline-block',
              levers.animate,
              levers.iconPositionStyles,
              iconClasses
            )}
            {...iProps}
          />
        ) : null}
        {text}
        {srText && <SrOnlyText srText={` ${srText}`} />}
        {icon && iconPosition === 'right' ? (
          <HeroIcon
            icon={heroicon}
            type="solid"
            aria-hidden
            className={dcnb(
              'su-inline-block',
              levers.icon,
              levers.animate,
              levers.iconPositionStyles,
              iconClasses
            )}
            {...iProps}
          />
        ) : null}
      </a>
    );
  }
);

CtaLink.propTypes = {
  /**
   * Css class names
   */
  className: PropTypes.string,

  /**
   * Link color (for non-button link only)
   */
  color: PropTypes.oneOf(ctaLinkColors),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(iconOptions),

  /**
   * Icon Properties
   */
  iconProps: PropTypes.objectOf(PropTypes.any),

  /**
   * Icon Position options
   */
  iconPosition: PropTypes.oneOf(iconAlignment),

  /**
   * Icon animation on hover/focus
   */
  animate: PropTypes.oneOf(iconAnimations),

  /**
   * URL
   */
  href: PropTypes.string,

  /**
   * Link text
   */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  /**
   * Optional text for screen readers
   */
  srText: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
CtaLink.defaultProps = {
  icon: 'action',
  iconPosition: 'right',
};
