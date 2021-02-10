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
  // ---------------------------------------------------------------------------

  // Props.type
  if (rest?.type && alertTypes.includes(rest.type)) {

    switch (rest.type) {
      case 'success':
        classes.wrapper = classnames(classes?.wrapper, 'su-bg-palo-verde')
        break

      case 'warning':
        classes.wrapper = classnames(classes?.wrapper, 'su-bg-illuminating-dark')
        break

      case 'info':
        classes.wrapper = classnames(classes?.wrapper, 'su-bg-bright-blue')
        break

      case 'error':
        classes.wrapper = classnames(classes?.wrapper, 'su-bg-digital-red')
        break
    }
  }

  // Render
  // ---------------------------------------------------------------------------
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
