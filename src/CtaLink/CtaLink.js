import React from 'react';
import PropTypes from 'prop-types';
import { CtaLinkVariants, CtaLinkDisplay, CtaLinkColors } from './CtaLink.levers';
import clsxd from 'clsx-dedupe';

/**
 * CtaLink Component
 *
 * HTML CtaLink element
 */
export const CtaLink = ({ className, element, display, link, color, icon, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // color
  if (variant && CtaLinkVariants.includes(variant)) {
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

  //
  if (size && CtaLinkSizes.includes(size)) {
    switch (size) {
      case 'big':
        levers.size = 'su-px-34 su-py-15 su-text-20 md:su-text-24';
        break;

      case 'small':
        levers.size = 'su-px-19 su-py-9 su-text-16 md:su-text-18';
        break;

      case 'minimal':
        levers.size = 'su-p-0';
        break;

      default:
        levers.size = 'su-px-26 su-py-10 su-text-16 md:su-text-20';
    }
  }

  // Is disabled
  if (isDisabled) {
    levers.disabled = 'su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none';
    levers.variant = clsxd(levers.variant, {'su-bg-digital-red': false, 'su-text-digital-red': false, 'su-border-digital-red': false, 'hover:su-border-black': false, 'focus:su-border-black': false, 'su-text-white': false});
  }

  return (
    <CtaLink
      className={clsxd('su-CtaLink', levers.variant, levers.size, levers.disabled, className)}
      ref={ref}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </CtaLink>
  );
};

CtaLink.propTypes = {
  // HTML CtaLink type.
  type: PropTypes.oneOf(CtaLinkTypes),
  variant: PropTypes.oneOf(CtaLinkVariants),
  size: PropTypes.oneOf(CtaLinkSizes),
  isDisabled: PropTypes.bool,

  // Optional click handler
  onClick: PropTypes.func,

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
CtaLink.defaultProps = {
  onClick: undefined,
  type: 'CtaLink',
  isDisabled: false,
  ref: null
};
