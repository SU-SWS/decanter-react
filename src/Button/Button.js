import React from 'react'
import PropTypes from 'prop-types'
import { buttonVariants, buttonSizes } from './Button.levers'

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
        levers.variant = classnames('su-bg-digital-red su-text-white')
        break

      case 'secondary':
        levers.variant = classnames('su-bg-transparent su-text-digital-red')
        break

      case 'none':
        levers.variant = classnames('su-bg-transparent su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent')
        break
    }
  }

  // Props.size
  if (props.size && buttonSizes.includes(props.size)) {
    switch (props.size) {
      case 'default':
        levers.size = classnames('su-px-26 su-py-12 su-text-20')
        break

      case 'big':
        levers.size = classnames('su-px-30 su-py-16 su-text-22')
        break

      case 'small':
        levers.size = classnames('su-px-20 su-py-1 su-text-18')
        break

      case 'minimal':
        levers.size = classnames('su-p-0')
        break
    }
  }

  return (
    <button
      className={classnames('su-button su-font-semibold', levers.variant, levers.size, className)}
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
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
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
