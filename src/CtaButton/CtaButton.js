import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { buttonSizes } from '../common/button/button.levers';
import getButtonSize from '../common/button/getButtonSize';
import getIconAnimation from '../common/icon/getIconAnimation';
import getIconClasses from '../common/icon/getIconClasses';
import { iconAnimations, iconOptions } from '../common/icon/icon.levers';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { ctaButtonVariants } from './CtaButton.levers';

/**
 * CTA Link Button Component
 *
 */
export const CtaButton = React.forwardRef(
  (
    {
      className,
      text,
      srText,
      variant,
      size,
      icon,
      iconProps,
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

    // variant
    if (variant && ctaButtonVariants.includes(variant)) {
      switch (variant) {
        case 'solid':
          levers.variant =
            'su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
          break;

        case 'primary':
          levers.variant =
            'su-bg-digital-blue hocus:su-bg-digital-blue-dark su-text-white hocus:su-text-white su-border hocus:su-border su-rounded su-border-digital-blue-light su-border-solid hocus:su-border-digital-blue active:su-border-digital-blue hover:su-shadow-xl active:su-ring focus:su-ring active:su-ring-digital-blue-light focus:su-ring-digital-blue-light hocus:su-no-underline active:su-no-underline';
          break;

        case 'primary-lagunita':
          levers.variant =
            'su-bg-lagunita hocus:su-bg-lagunita-dark active:su-bg-lagunita su-text-white hocus:su-text-white su-border su-rounded su-border-lagunita-light su-border-solid hocus:su-border-lagunita active:su-border-lagunita hover:su-shadow-xl active:su-ring focus:su-ring active:su-ring-lagunita-light focus:su-ring-lagunita-light hocus:su-no-underline active:su-no-underline';
          break;

        case 'secondary':
          levers.variant =
            'su-bg-white hocus:su-bg-white su-text-digital-blue hocus:su-text-digital-blue-dark su-border hocus:su-border su-rounded su-border-digital-blue-light su-border-solid hocus:su-border-digital-blue-dark hover:su-shadow-xl focus:su-ring active:su-ring focus:su-ring-digital-blue-light active:su-ring-digital-blue-light active:su-no-underline';
          break;

        case 'secondary-lagunita':
          levers.variant =
            'su-bg-white hocus:su-bg-white su-text-lagunita hocus:su-text-lagunita-dark su-border hocus:su-border su-border-solid su-rounded su-border-lagunita-light hocus:su-border-lagunita-dark hover:su-shadow-xl focus:su-ring active:su-ring focus:su-ring-lagunita-light active:su-ring-lagunita-light active:su-no-underline';
          break;

        case 'outline':
          levers.variant =
            'su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
          break;

        case 'ghost':
          levers.variant =
            'su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid';
          break;

        default:
        // none.
      }
    }

    // size
    if (size && buttonSizes.includes(size)) {
      levers.size = getButtonSize(size);
    }

    // icon
    let heroicon = '';

    if (icon && iconOptions.includes(icon)) {
      heroicon = icon;
      levers.icon = getIconClasses(icon);
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
          'su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors',
          levers.size,
          levers.variant,
          className
        )}
        ref={ref}
        {...props}
      >
        {text}
        {srText && <SrOnlyText srText={` ${srText}`} />}
        {icon && (
          <HeroIcon
            icon={heroicon}
            type="solid"
            aria-hidden
            className={dcnb(
              'su-inline-block',
              levers.icon,
              levers.animate,
              iconClasses
            )}
            {...iProps}
          />
        )}
      </a>
    );
  }
);

CtaButton.propTypes = {
  /**
   * Css class names.
   */
  className: PropTypes.string,

  /**
   * Variant/button style
   */
  variant: PropTypes.oneOf(ctaButtonVariants),

  /**
   * Button size
   */
  size: PropTypes.oneOf(buttonSizes),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(iconOptions),

  /**
   * Icon options
   */
  iconProps: PropTypes.objectOf(PropTypes.any),

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
CtaButton.defaultProps = {
  variant: 'solid',
};
