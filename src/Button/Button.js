import React from 'react';
import PropTypes from 'prop-types';
import { buttonVariants, buttonSizes, buttonTypes } from './Button.levers';
import clsx from 'clsx';

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = ({ className, children, onClick, ref, variant, size, type, isDisabled, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // Props.variant
  if (variant && buttonVariants.includes(variant)) {
    switch (variant) {
      case 'primary':
        levers.variant = clsx('su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black');
        break;

      case 'secondary':
        levers.variant = clsx('su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent su-text-digital-red hover:su-text-black focus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black');
        break;

      case 'none':
        levers.variant = clsx('su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent');
        break;
    }
  }

  // Props.size
  if (size && buttonSizes.includes(size)) {
    switch (size) {
      case 'big':
        levers.size = clsx('su-px-34 su-py-15 su-text-20 md:su-text-24');
        break;

      case 'small':
        levers.size = clsx('su-px-19 su-py-9 su-text-16 md:su-text-18');
        break;

      case 'minimal':
        levers.size = clsx('su-p-0');
        break;

      default:
        levers.size = clsx('su-px-26 su-py-10 su-text-16 md:su-text-20');
    }
  }

  // Is disabled
  if (isDisabled) {
    levers.disabled = clsx('su-bg-black-20 su-text-black su-border-2 su-border-black-20 su-border-solid su-pointer-events-none')
    levers.variant = clsx(levers.variant, {'su-bg-digital-red': false, 'su-text-digital-red': false, 'su-border-digital-red': false, 'hover:su-border-black': false, 'focus:su-border-black': false, 'su-text-white': false})
  }

  return (
    <button
      className={clsx('su-button', levers.variant, levers.size, levers.disabled, className)}
      ref={ref}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // HTML Button type.
  type: PropTypes.oneOf(buttonTypes),
  variant: PropTypes.oneOf(buttonVariants),
  size: PropTypes.oneOf(buttonSizes),
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
Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  isDisabled: false,
  ref: null
};
