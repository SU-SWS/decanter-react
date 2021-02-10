import React from 'react'
import PropTypes from 'prop-types'
import { alertTypes } from './Alert.levers'
/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = ({ classes = {}, ...rest }) => {
  const classnames = require('classnames')

  // Levers
  // ///////////////////////////////////////////////////////////////////////////
  if (rest?.type && alertTypes.includes(rest.type)) {
    if (rest.type === 'success') {
      classes.wrapper = classnames(classes?.wrapper, 'su-bg-palo-verde')
    }

    if (rest.type === 'warning') {
      classes.wrapper = classnames(classes?.wrapper, 'su-bg-illuminating-dark')
    }

    if (rest.type === 'info') {
      classes.wrapper = classnames(classes?.wrapper, 'su-bg-bright-blue')
    }

    if (rest.type === 'error') {
      classes.wrapper = classnames(classes?.wrapper, 'su-bg-digital-red')
    }
  }

  // Render
  // ///////////////////////////////////////////////////////////////////////////
  return (
    <div className={classnames('su-alert', classes?.wrapper)}>
      <div className={classnames('su-cc', classes?.container)}>
        <div className={classnames('su-type-2', classes?.body)}>
          {rest.children}
        </div>
      </div>
    </div>
  )
}

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // The primary content
  children: PropTypes.node,
  state: PropTypes.oneOf(alertTypes),
  isLargeIcon: PropTypes.bool,
  hasDissmiss: PropTypes.bool,
  classes: PropTypes.object
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isLargeIcon: false,
  hasDissmiss: true
}
