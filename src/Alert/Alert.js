import React from 'react'
import PropTypes from 'prop-types'

import { AlertDefault } from './AlertDefault'
import { AlertError } from './AlertError'
import { AlertInfo } from './AlertInfo'
import { AlertSuccess } from './AlertSuccess'
import { AlertWarning } from './AlertWarning'

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = (props) => {

  // Define variants.
  const variants = {
    error: <AlertError {...props} />,
    info: <AlertInfo {...props} />,
    success: <AlertSuccess {...props} />,
    warning: <AlertWarning {...props} />
  }

  // Switch to variant.
  if (props.variant && variants[props.variant] !== 'undefined') {
    return variants[props.variant]
  }

  // Default
  return <AlertDefault {...props} />
}

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // The primary content
  children: PropTypes.node,
  // FA Icon name.
  icon: PropTypes.element,
  // One of the default variant sets.
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  // Show the dismiss button or not.
  dismiss: PropTypes.bool,
  // Add a label.
  label: PropTypes.string,
  // Add a heading.
  heading: PropTypes.string,
  // Add content to the footer region.
  footer: PropTypes.node
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  variant: 'info',
  dismiss: true,
  label: 'Information',
  heading: 'Alert Heading'
}
