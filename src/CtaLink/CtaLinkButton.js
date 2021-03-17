import React from 'react';
import PropTypes from 'prop-types';
import { ctaLinkDisplay } from './CtaLink.levers';
import { ctaLinkButtonVariants, ctaLinkButtonSizes } from './CtaLinkButton.levers';
import clsxd from 'clsx-dedupe';

/**
 * CTA Link Button Component
 *
 * For links that are styled to look like buttons.
 */
export const CtaLinkButton = ({ className, children= {}, element, display, variant, link, size, icon, ref, ...props }) => {

  const levers = {};
  let Element = 'a';

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
  if (variant && ctaLinkButtonVariants.includes(variant)) {
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

  //
  if (size && ctaLinkButtonSizes.includes(size)) {
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

  return (
    <Element
      className={clsxd('su-cta-btn su-w-fit su-font-regular su-no-underline hover:su-underline focus:su-underline su-leading-none su-transition-colors', levers.display, levers.variant, levers.size, className)}
      ref={ref}
      href={link}
      {...props}
    >
      {children}
    </Element>
  );
};

CtaLinkButton.propTypes = {
  display: PropTypes.oneOf(ctaLinkDisplay),
  variant: PropTypes.oneOf(ctaLinkButtonVariants),
  size: PropTypes.oneOf(ctaLinkButtonSizes),
  link: PropTypes.string,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

// Default Props.
// -----------------------------------------------------------------------------
CtaLinkButton.defaultProps = {
  ref: null,
  display: 'inline-block',
  variant: 'solid',
  size: 'default'
};
