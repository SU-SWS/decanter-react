import React from 'react';
import PropTypes from 'prop-types';
import { ctaLinkColors } from './CtaLink.levers';
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";
import getIconOptions from "../common/icon/getIconOptions";
import getIconClasses from "../common/icon/getIconClasses";
import getIconAnimation from "../common/icon/getIconAnimation";
import Icon from 'react-hero-icon';
import clsxd from 'clsx-dedupe';
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";

/**
 * CTA Link Component
 *
 */
export const CtaLink = ({ classes = {}, text, srText, link, color, icon, animate, ...props }) => {
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
      className={clsxd('su-cta-link su-text-19 md:su-text-20 su-block su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors',
        levers.color, levers.size, levers.variant, classes.link)}
      href={link}
      {...props}
    >
      {text}
      {srText &&
        <SrOnlyText srText={' ' + srText} />
      }
      {icon &&
        <Icon icon={heroicon} type='solid' aria-hidden={true} className={clsxd('su-inline-block', levers.icon, levers.animate, classes.icon)}/>
      }
    </a>
  );
};

CtaLink.propTypes = {
  /**
   * Link color (for non-button link only)
   */
  color: PropTypes.oneOf(ctaLinkColors),

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
CtaLink.defaultProps = {
  icon: 'action',
  color: 'none',
};
