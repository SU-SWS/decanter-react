import React from 'react'
import propTypes from 'prop-types'
import { buttonStyles, buttonSizes } from './Button.levers'

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = ({ classes, children, onClick, style, size, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------
  levers.button = classnames(buttonStyles, buttonSizes);

  return (
    <button
      className={classnames('su-button', levers.button, classes)}
      ref={ref}
      onClick={onClick}
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

  // Optional click handler
  onClick: propTypes.func,

  // CSS Classes.
  classes: propTypes.oneOfType([
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
  ref: null
}
