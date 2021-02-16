import React from 'react'
import propTypes from 'prop-types'
import { buttonStyles, buttonSizes } from './Button.levers'

/**
 * Button Component
 *
 * HTML button element
 */
export const Button = ({ className, children, onClick, type, ref, ...props }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------
  levers.button = classnames(buttonStyles, buttonSizes);

  return (
    <button
      className={classnames('su-button', levers.button, className)}
      ref={ref}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  // HTML Button type.
  type: propTypes.oneOf(['button', 'reset', 'submit']),

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

Button.defaultProps = {
  onClick: undefined,
  type: 'submit'
}
