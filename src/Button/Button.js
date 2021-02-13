import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef(({ classes = {}, label, ...props }, ref) => {

  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  const classnames = require('classnames')
  const levers = {}

  // Levers
  // ---------------------------------------------------------------------------

  return (
    <button
      className={classnames('su-', levers.button, classes.button)}
      ref={ref}
      onClick={props.onClick}
      type={props.type}
      {...props?.attr}
    >
      {label}
    </button>
  )
})

Button.PropTypes = {
  /**
   * HTML Element type
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * HTML Attributes to go on the button.
   */
  attr: PropTypes.object,
  /**
   * Label to use for the button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
