import React from 'react'
import propTypes from 'prop-types'
import { buttonStyles, buttonSizes } from './Button.levers'

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = ({ className, children, onClick, style, size, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------

  // Props.style
  if (props.style && buttonStyles.includes(props.style)) {
    switch (props.style) {
      case 'primary':
        levers.style = classnames('su-bg-digital-red su-text-white')
        break

      case 'secondary':
        levers.style = classnames('su-bg-transparent su-text-digital-red')
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
    }
  }

  return (
    <button
      className={classnames('su-button su-font-semibold', levers.style, levers.size, className)}
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
  type: propTypes.oneOf(['button', 'reset', 'submit']),
  style: propTypes.oneOf(buttonStyles),
  size: propTypes.oneOf(buttonSizes),
  isDisabled: propTypes.bool,

  // Optional click handler
  onClick: propTypes.func,

  // CSS Classes.
  className: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
    propTypes.object
  ]),

  // Children
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.node
  ])
}

// Default Props.
// -----------------------------------------------------------------------------
Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  style: 'primary',
  size: 'default',
  isDisabled: false,
  ref: null
}
