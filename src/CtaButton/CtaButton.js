import React from 'react';
import PropTypes from 'prop-types';
import { ctaButtonSizes, ctaButtonVariants } from './CtaButton.levers';
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";
import getIconOptions from "../common/icon/getIconOptions";
import getIconClasses from "../common/icon/getIconClasses";
import getIconAnimation from "../common/icon/getIconAnimation";
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";
import Icon from 'react-hero-icon';
import clsxd from 'clsx-dedupe';

/**
 * CTA Link Button Component
 *
 */
export const CtaButton = ({ classes = {}, text, srText, link, variant, size, icon, animate, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // variant
  if (variant && ctaButtonVariants.includes(variant)) {
    switch (variant) {
      case 'solid':
        levers.variant = 'su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'outline':
        levers.variant = 'su-bg-white hocus:su-bg-white su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'ghost':
        levers.variant = 'su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid';
        break;
    }
  }

  // size
  if (size && ctaButtonSizes.includes(size)) {
    switch (size) {
      case 'default':
        levers.size = 'su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20';
        break;

      case 'big':
        levers.size = 'su-px-34 su-py-15 su-text-20 md:su-text-24';
        break;

      case 'small':
        levers.size = 'su-px-19 su-py-9 su-text-16 md:su-text-18';
        break;
    }
  }

  // icon
  let heroicon = '';

  if (icon && iconOptions.includes(icon)) {
    heroicon = getIconOptions(icon);
    levers.icon = getIconClasses(icon);
  }

  // animate
  // Add specific classes for each type of animation
  if (animate && iconAnimations.includes(animate)) {
    levers.animate = getIconAnimation(animate);
  }

  return (
    <a
      className={clsxd('su-cta-button su-font-regular su-leading-display su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors',
        levers.size, levers.variant, classes.link)}
      href={link}
      {...props}
    >
      {text}
      {srText &&
      <SrOnlyText srText={' ' + srText} />
      }
      {icon &&
      <Icon icon={heroicon}
            type='solid'
            aria-hidden={true}
            className={clsxd('su-inline-block', levers.icon, levers.animate, classes.icon)}
      />
      }
    </a>
  );
};

CtaButton.propTypes = {
  /**
   * Variant/button style
   */
  variant: PropTypes.oneOf(ctaButtonVariants),

  /**
   * Button size
   */
  size: PropTypes.oneOf(ctaButtonSizes),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(iconOptions),

  /**
   * Icon animation on hover/focus
   */
  animate: PropTypes.oneOf(iconAnimations),

  /**
   * URL
   */
  link: PropTypes.string,

  /**
   * Link text
   */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ]),

  /**
   * Optional text for screen readers
   */
  srText: PropTypes.string,

  /**
   * Additional CSS classes
   */
  classes: PropTypes.shape(
    {
      link: PropTypes.oneOfType([
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
  ),
};

// Default Props.
// -----------------------------------------------------------------------------
CtaButton.defaultProps = {
  variant: 'solid'
};
