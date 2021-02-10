import React from 'react'
import PropTypes from 'prop-types'

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = (props) => {
  return (<p>Hi</p>)
}

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // The primary content
  children: PropTypes.node,
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {}
