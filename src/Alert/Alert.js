import React, { useState } from 'react'
import propTypes from 'prop-types'
import { alertTypes, lightText, darkText } from './Alert.levers'
import { Button } from '../Button/Button'
import Icon from 'react-hero-icon'

/**
 * Alert Component.
 *
 * For displaying a notification that keeps people informed of a status, or for
 * displaying a validation message that alerts someone of an important piece of
 * information.
 *
 */
export const Alert = React.forwardRef(({ classes = {}, ...props }, ref) => {
  // Defaults & Variables
  const classnames = require('classnames')
  const levers = {}
  const iconProps = { height: 24, width: 24 }
  const [isDismissed, setDismissed] = useState(false)

  // Levers
  // ---------------------------------------------------------------------------
  levers.wrapper = classnames('su-bg-foggy-light')
  levers.dismiss = classnames(darkText, 'hover:su-text-black focus:su-text-black')

  // Is large Icon.
  if (props.isLargeIcon) {
    iconProps.height = 48
    iconProps.width = 48
  }

  // Default Icon.
  let defaultIcon = <Icon icon='bell' type='solid' className={classnames('', classes.icon)} {...iconProps} />

  // Props.type
  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        levers.wrapper = classnames('su-bg-digital-green su-text-white su-link-white')
        levers.body = classnames(lightText)
        levers.dismiss = classnames(lightText)
        defaultIcon = <Icon icon='check-circle' type='solid' className={classnames(classes.icon)} {...iconProps} />
        break

      case 'warning':
        levers.wrapper = classnames('su-bg-illuminating-dark')
        levers.body = classnames(darkText)
        levers.dismiss = classnames(darkText, 'hover:su-text-black')
        defaultIcon = <Icon icon='exclamation-circle' type='solid' className={classnames(classes.icon)} {...iconProps} />
        break

      case 'info':
        levers.wrapper = classnames('su-bg-digital-blue su-text-white su-link-white')
        levers.body = classnames(lightText)
        levers.dismiss = classnames(lightText)
        defaultIcon = <Icon icon='information-circle' type='solid' className={classnames(classes.icon)} {...iconProps} />
        break

      case 'error':
        levers.wrapper = classnames('su-bg-digital-red su-text-white su-link-white')
        levers.body = classnames(lightText)
        levers.dismiss = classnames(lightText)
        defaultIcon = <Icon icon='ban' type='solid' className={classnames(classes.icon)} {...iconProps} />
        break
    }
  }

  // Partials
  // ---------------------------------------------------------------------------

  const icon = props.icon ?? defaultIcon
  const DefaultDismiss = (
    <Button
      className={classnames(
        'su-p-0 su-text-20 su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent su-uppercase su-font-semibold su-inline-block',
        levers.dismiss,
        classes.dismiss
      )}
      aria-label='Dismiss Alert'
      onClick={() => { setDismissed(true) }}
    >
      Dismiss <Icon icon='x-circle' type='solid' className={classnames('su-inline-block su--mt-3 su-h-25 su-w-25')} />
    </Button>
  )
  const dismissBtn = props.dismissBtn ?? DefaultDismiss

  // Dismissed State.
  if (isDismissed === true) {
    return null
  }

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
        <div className={classnames('su-order-1 su-rs-mr-1 su-flex su-flex-shrink su-items-center su-mb-4 su-w-full su-pb-10 md:su-w-max', levers.headerWrapper, classes.headerWrapper)}>
          {props.hasIcon && (
            <span className={classnames('su-mr-5 su-inline-block', levers.headerIcon, classes.headerIcon)}>
              {icon}
            </span>
          )}

          {props.hasLabel && (
            <span className={classnames('su-inline-block su-uppercase su-font-semibold su-text-170rem', levers.label, classes.label)}>
              {props.label ?? 'Information'}
            </span>
          )}
        </div>

        {/* Body Container. */}
        <div className={classnames('su-order-2 su-flex-1 su-flex-grow', levers.bodyWrapper, classes.bodyWrapper)}>

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
  children: propTypes.element,
  dismissBtn: propTypes.element,
  icon: propTypes.element,
  label: propTypes.string,
  heading: propTypes.string,
  footer: propTypes.node,

  // State and Levers.
  type: propTypes.oneOf(alertTypes),
  isLargeIcon: propTypes.bool,
  hasDismiss: propTypes.bool,
  hasIcon: propTypes.bool,
  hasLabel: propTypes.bool,

  // The CSS Classname property
  classes: propTypes.shape(
    {
      wrapper: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      container: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      dismissWrapper: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      headerWrapper: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      headerIcon: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      label: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      bodyWrapper: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      bodyHeading: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      body: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ]),
      footerWrapper: propTypes.oneOfType([
        propTypes.string,
        propTypes.object,
        propTypes.array
      ])
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
