import React from 'react'
import PropTypes from 'prop-types'
import { alertTypes, lightText, darkText } from './Alert.levers'
import { Button } from '../Button/Button'
import Icon from 'react-hero-icon'

/**
 * Alert Component.
 *
 * @param {object} props
 * @param {object} ref
 *
 */
export const Alert = React.forwardRef(({ classes = {}, ...props }, ref) => {
  // Defaults & Variables
  const classnames = require('classnames')
  const levers = {}
  const iconProps = { height: 24, width: 24 }

  // Levers
  // ---------------------------------------------------------------------------
  levers.wrapper = classnames('su-bg-white')

  // Props.type
  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        levers.wrapper = classnames('su-bg-palo-verde su-text-white su-link-white')
        levers.body = classnames(lightText)
        break

      case 'warning':
        levers.wrapper = classnames('su-bg-illuminating-dark')
        break

      case 'info':
        levers.wrapper = classnames('su-bg-digital-blue su-text-white su-link-white')
        levers.body = classnames(lightText)
        break

      case 'error':
        levers.wrapper = classnames('su-bg-digital-red su-text-white su-link-white')
        levers.body = classnames(lightText)
        break
    }
  }

  // Is large Icon.
  if (props.isLargeIcon) {
    iconProps.height = 48
    iconProps.width = 48
  }

  // Partials
  // ---------------------------------------------------------------------------

  const icon = props.icon ?? (<Icon icon='bell' type='outline' className={classnames(levers.icon, classes.icon)} {...iconProps} />)
  const dismissBtn = props.dismissBtn ?? (<Button label='Dismiss' className={classnames(levers.dismiss, classes.dismiss)} />)

  // Render
  // ---------------------------------------------------------------------------
  return (
    <div className={classnames('su-alert', levers.wrapper, classes.wrapper)} ref={ref}>
      <div className={classnames('su-cc su-flex su-flex-wrap su-py-10 sm:su-items-center', levers.container, classes.container)}>

        {props.hasDismiss && (
          <div className={classnames('su-order-3 su-rs-ml-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto', levers.dismissWrapper, classes.dismissWrapper)}>
            {dismissBtn}
          </div>
        )}

        {/* Header Container. */}
        <div className={classnames('su-order-1 su-rs-mr-1 su-flex-shrink su-mb-4 xs:su-w-full lg:su-w-max', levers.headerWrapper, classes.headerWrapper)}>
          {props.hasIcon && (
            <span className={classnames('su-mr-5 su-inline-block su-mw-2', levers.headerIcon, classes.headerIcon)}>
              {icon}
            </span>
          )}

          {props.hasLabel && (
            <span className={classnames('su-inline-block su-uppercase su-font-semibold su-text-170rem su-h-full', levers.label, classes.label)}>
              {props.label ?? 'Information'}
            </span>
          )}
        </div>

        {/* Body Container. */}
        <div className={classnames('su-order-2 su-flex-1 su-flex-grow ', levers.bodyWrapper, classes.bodyWrapper)}>

          {props.heading && (
            <h3 className={classnames('su-type-3', levers.bodyHeading, classes.bodyHeading)}>
              {props.heading}
            </h3>
          )}

          <div className={classnames('su-text-normal', levers.body, classes.body)}>
            {props.children}
          </div>

          {props.footer && (
            <div className={classnames('su-rs-mt-0', levers.footerWrapper, classes.footerWrapper)}>
              {props.footer}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

// Prop Types.
// -----------------------------------------------------------------------------
Alert.propTypes = {
  // Nodes and content.
  children: PropTypes.element,
  dismissBtn: PropTypes.element,
  icon: PropTypes.element,
  label: PropTypes.string,
  heading: PropTypes.string,
  footer: PropTypes.node,

  // State and Levers.
  type: PropTypes.oneOf(alertTypes),
  isLargeIcon: PropTypes.bool,
  hasDismiss: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasLabel: PropTypes.bool,

  // The CSS Classname property
  classes: PropTypes.shape(
    {
      wrapper: PropTypes.string,
      container: PropTypes.string,
      dismissWrapper: PropTypes.string,
      headerWrapper: PropTypes.string,
      headerIcon: PropTypes.string,
      label: PropTypes.string,
      bodyWrapper: PropTypes.string,
      bodyHeading: PropTypes.string,
      body: PropTypes.string,
      footerWrapper: PropTypes.string
    }
  )
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isLargeIcon: false,
  hasDismiss: true,
  hasLabel: true,
  hasIcon: true
}
