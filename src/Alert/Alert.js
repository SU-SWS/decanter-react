import React from 'react'
import PropTypes from 'prop-types'
import { alertTypes } from './Alert.levers'
import { Button } from '../Button/Button'

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = ({ classes = {}, ...props }) => {
  const classnames = require('classnames')

  // Levers
  // ---------------------------------------------------------------------------

  // Props.type
  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-palo-verde')
        classes.header = classnames(classes.header, 'su-color-white')
        classes.body = classnames(classes.body, 'su-color-white')
        break

      case 'warning':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-illuminating-dark')
        break

      case 'info':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-digital-blue')
        break

      case 'error':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-digital-red')
        break
    }
  }

  // Partials
  // const dismiss = props?.dismiss || <Button label='Dismiss' />

  // Render
  // ---------------------------------------------------------------------------
  return (
    <div className={classnames('su-alert', classes.wrapper)}>
      <div className={classnames('su-cc su-flex su-flex-wrap sm:su-items-center', classes.container)}>

        {props.hasDismiss && (
          <div className={classnames('su-order-3 su-rs-ml-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto', classes.dismissWrapper)}>
            <Button label='Dismiss' />
          </div>
        )}

        {/* Header Container. */}
        <div className={classnames('su-order-1 su-rs-mr-1 su-flex-shrink su-mb-4 xs:su-w-full lg:su-w-max', classes.headerWrapper)}>
          {props.hasIcon && (
            <span className={classnames('', classes.headerIcon)}>
              {props.icon}
            </span>
          )}

          {props.hasLabel && (
            <span className={classnames('su-inline-block su-uppercase su-font-semibold su-text-170rem su-h-full', classes.label)}>{props.label ?? 'Information'}</span>
          )}
        </div>

        {/* Body Container. */}
        <div className={classnames('su-order-2 su-flex-1 su-flex-grow ', classes?.bodyWrapper)}>

          {props.heading && (
            <h3 className={classnames('', classes.bodyHeading)}>{props.heading}</h3>
          )}

          <div className={classnames('', classes.body)}>{props.children}</div>

          {props.footer && (
            <div className={classnames('su-rs-mt-0', classes.footerWrapper)}>{props.footer}</div>
          )}
        </div>
      </div>
    </div>
  )
}

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // Nodes and content.
  children: PropTypes.node,
  dismiss: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string,
  heading: PropTypes.string,
  footer: PropTypes.node,

  // State and Levers.
  state: PropTypes.oneOf(alertTypes),
  isLargeIcon: PropTypes.bool,
  hasDismiss: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasLabel: PropTypes.bool,

  // The CSS Classname property
  classes: PropTypes.object
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isLargeIcon: false,
  hasDismiss: true,
  hasLabel: true,
  hasIcon: true
}
