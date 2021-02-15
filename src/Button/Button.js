import React from 'react'
import propTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef(({ className = {}, children, onClick, type, ...props }, ref) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------

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
})

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
  ])
}

Button.defaultProps = {
  onClick: undefined
}
