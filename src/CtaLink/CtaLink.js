import React from 'react';
import PropTypes from 'prop-types';
import { ctaLinkIcons, ctaLinkDisplay, ctaLinkColors, ctaLinkAnimations } from './CtaLink.levers';
import { ctaLinkButtonSizes, ctaLinkButtonVariants } from "./CtaLinkButton.levers";
import Icon from 'react-hero-icon';
import clsxd from 'clsx-dedupe';

/**
 * CTA Link Component
 *
 */
export const CtaLink = ({ classes = {}, text, srText, element, display, link, color, isButton, variant, size, icon, animate, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // display
  if (display && ctaLinkDisplay.includes(display)) {
    switch (display) {
      case 'inline-block':
        levers.display = 'su-inline-block';
        break;

      case 'block':
        levers.display = 'su-block';
        break;

      case 'flex':
        levers.display = 'su-flex';
        break;
    }
  }

  // color
  if (color && ctaLinkColors.includes(color) && !isButton) {
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

  // isButton
  if (isButton) {
    levers.isButton = 'su-cta-btn su-font-regular su-leading-none';
  }
  else {
    levers.isButton = 'su-cta-link su-text-19 md:su-text-20';
  }

  // variant
  if (variant && ctaLinkButtonVariants.includes(variant) && isButton) {
    switch (variant) {
      case 'solid':
        levers.variant = 'su-bg-digital-red hocus:su-bg-archway-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'outline':
        levers.variant = 'su-bg-transparent hocus:su-bg-transparent su-text-digital-red hocus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black';
        break;

      case 'ghost':
        levers.variant = 'su-bg-transparent su-text-white hocus:su-text-white su-border-2 su-border-white su-border-solid';
        break;
    }
  }

  // size
  if (size && ctaLinkButtonSizes.includes(size) && isButton) {
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

  if (icon && ctaLinkIcons.includes(icon)) {
    switch (icon) {
      case 'action':
        heroicon = 'chevron-right';
        levers.icon = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;

      case 'more':
        heroicon = 'arrow-narrow-right';
        levers.icon = 'su-h-09em su-w-09em su-ml-5 su--mt-2';
        break;

      case 'external':
        heroicon = 'arrow-up';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-2 su-transform su-rotate-45 group-hocus:su-rotate-45';
        break;

      case 'lock':
        heroicon = 'lock-closed';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'download':
        heroicon = 'download';
        levers.icon = 'su-h-08em su-w-08em su-ml-4 su--mt-3';
        break;

      case 'video':
        heroicon = 'play';
        levers.icon = 'su-h-08em su-w-08em su-ml-6 su--mt-3';
        break;

      case 'email':
        heroicon = 'mail';
        levers.icon = 'su-h-08em su-w-08em su-ml-7 su--mt-2';
        break;

      case 'jump':
        heroicon = 'chevron-down';
        levers.icon = 'su-h-1em su-w-1em su-ml-4 su--mt-2';
        break;

      case 'none':
        break;
    }
  }

  // animate

  // Common classes if animation is needed
  if ((animate && ctaLinkAnimations.includes(animate)) && animate !== 'none') {
    levers.animate = 'su-transition-transform group-hocus:su-transform ';
  }

  // Add specific classes for each type of animation
  if (animate && ctaLinkAnimations.includes(animate)) {
    switch(animate) {
      case 'right':
        levers.animate += 'group-hocus:su-translate-x-02em';
        break;

      case 'top-right':
        levers.animate += 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em';
        break;

      case 'down':
        levers.animate += 'group-hocus:su-translate-y-02em';
        break;

      case 'none':
        break;
    }
  }

  return (
    <a
      className={clsxd(levers.isButton, 'su-w-fit su-no-underline hover:su-underline focus:su-underline su-group su-transition-colors',
        levers.display, levers.color, levers.size, levers.variant, classes.link)}
      href={link}
      ref={ref}
      {...props}
    >
      {text}
      {srText &&
        <span className='su-sr-only'> {srText}</span>
      }
      {icon &&
        <Icon icon={heroicon} type='solid' aria-hidden={true} className={clsxd('su-inline-block', levers.icon, levers.animate, classes.icon)}/>
      }
    </a>
  );
};

CtaLink.propTypes = {
  /**
   * Display type
   */
  display: PropTypes.oneOf(ctaLinkDisplay),

  /**
   * Link color (for non-button link only)
   */
  color: PropTypes.oneOf(ctaLinkColors),

  /**
   * Variant/button style (for button option only)
   */
  variant: PropTypes.oneOf(ctaLinkButtonVariants),

  /**
   * Button size (for button option only)
   */
  size: PropTypes.oneOf(ctaLinkButtonSizes),

  /**
   * Icon options
   */
  icon: PropTypes.oneOf(ctaLinkIcons),

  /**
   * Icon animation on hover/focus
   */
  animate: PropTypes.oneOf(ctaLinkAnimations),

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
  isButton: false,
  display: 'block',
  icon: 'action',
  color: 'none',
  ref: null
};
