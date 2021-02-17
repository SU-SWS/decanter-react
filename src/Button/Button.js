import React from 'react'
import PropTypes from 'prop-types'
import { buttonVariants, buttonSizes, buttonTypes } from "./Button.levers";

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = ({ className, children, onClick, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------

  // Props.variant
  if (props.variant && buttonVariants.includes(props.variant)) {
    switch (props.variant) {
      case 'primary':
        levers.variant = classnames('su-bg-digital-red su-text-white su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black')
        break

      case 'secondary':
        levers.variant = classnames('su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent su-text-digital-red hover:su-text-black focus:su-text-black su-border-2 su-border-digital-red su-border-solid hover:su-border-black focus:su-border-black')
        break

      case 'none':
        levers.variant = classnames('su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent')
        break
    }
  }

  // Props.size
  if (props.size && buttonSizes.includes(props.size)) {
    switch (props.size) {
      case 'default':
        levers.size = classnames('su-px-26 su-py-10 su-text-20')
        break

      case 'big':
        levers.size = classnames('su-px-34 su-py-15 su-text-22')
        break

      case 'small':
        levers.size = classnames('su-px-19 su-py-9 su-text-18')
        break

      case 'minimal':
        levers.size = classnames('su-p-0')
        break
    }
  }

  return (
    <button
      className={classnames('su-button', levers.variant, levers.size, className)}
      ref={ref}
      onClick={onClick}
      type={props.type}
      {...props}
    >
      {children}
    </button>
  )
}

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
}

// Default Props.
// -----------------------------------------------------------------------------
Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  variant: 'primary',
  size: 'default',
  isDisabled: false,
  ref: null
}
