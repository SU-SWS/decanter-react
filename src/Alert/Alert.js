import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { alertTypes, lightText, darkText } from './Alert.levers'
import { Button } from '../Button/Button'
import Icon from 'react-hero-icon'
import clsx from 'clsx';

/**
 * Alert Component.
 *
 * For displaying a notification that keeps people informed of a status, or for
 * displaying a validation message that alerts someone of an important piece of
 * information.
 *
 */
export const Alert = ({ classes = {}, children, ref, ...props }) => {
  // Defaults & Variables
  const levers = {}
  const iconProps = { height: 24, width: 24 }
  const [isDismissed, setDismissed] = useState(false)

  // Levers
  // ---------------------------------------------------------------------------
  levers.wrapper = clsx('su-bg-foggy-light')
  levers.dismiss = clsx(darkText, 'hover:su-text-black focus:su-text-black')

  // Is large Icon.
  if (props.isLargeIcon) {
    iconProps.height = 60
    iconProps.width = 60
  }

  // Default Icon.
  let defaultIcon = <Icon icon='bell' type='outline' className={clsx({ 'su-inline-block': props.isIconTop }, classes.icon)} {...iconProps} />

  // Is Label Top
  if (props.isLabelTop) {
    levers.label = clsx('su-rs-mb-neg1', { 'su-inline-block': !props.isIconTop })
    classes.icon = clsx(classes.icon, 'su-inline-block')
  }

  // Is Icon Top but no label top.
  if (props.isIconTop && !props.isLabelTop) {
    levers.headerIcon = clsx(levers.headerIcon, 'su-block su-rs-mb-neg1')
  }

  // Props.type
  if (props.type && alertTypes.includes(props.type)) {
    switch (props.type) {
      case 'success':
        levers.wrapper = clsx('su-bg-digital-green su-text-white su-link-white')
        levers.body = clsx(lightText)
        levers.dismiss = clsx(lightText)
        defaultIcon = <Icon icon='check-circle' type='solid' className={clsx(classes.icon)} {...iconProps} />
        break

      case 'warning':
        levers.wrapper = clsx('su-bg-illuminating-dark')
        levers.body = clsx(darkText)
        levers.dismiss = clsx(darkText, 'hover:su-text-black')
        defaultIcon = <Icon icon='exclamation-circle' type='solid' className={clsx(classes.icon)} {...iconProps} />
        break

      case 'info':
        levers.wrapper = clsx('su-bg-digital-blue su-text-white su-link-white')
        levers.body = clsx(lightText)
        levers.dismiss = clsx(lightText)
        defaultIcon = <Icon icon='information-circle' type='solid' className={clsx(classes.icon)} {...iconProps} />
        break

      case 'error':
        levers.wrapper = clsx('su-bg-digital-red su-text-white su-link-white')
        levers.body = clsx(lightText)
        levers.dismiss = clsx(lightText)
        defaultIcon = <Icon icon='ban' type='solid' className={clsx(classes.icon)} {...iconProps} />
        break
    }
  }

  // Partials
  // ---------------------------------------------------------------------------

  const icon = props.icon ?? defaultIcon
  const DefaultDismiss = (
    <Button
      className={clsx(
        'su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest',
        levers.dismiss,
        classes.dismiss
      )}
      aria-label='Dismiss Alert'
      onClick={() => { setDismissed(true) }}
      variant='none'
      size='minimal'
    >
      Dismiss <Icon icon='x-circle' type='solid' className={clsx('su-inline-block su--mt-3 su-h-25 su-w-25')} />
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
    <div className={clsx('su-alert', levers.wrapper, classes.wrapper)} ref={ref}>
      <div className={clsx('su-cc su-flex su-flex-wrap su-rs-pt-1 su-rs-pb-neg1 sm:su-items-center', levers.container, classes.container)}>

        {props.hasDismiss && (
          <div className={clsx('su-order-3 su-rs-ml-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto', levers.dismissWrapper, classes.dismissWrapper)}>
            {dismissBtn}
          </div>
        )}

        {/* Header Container. */}
        <div className={clsx('su-order-1 su-rs-mr-1 su-flex su-flex-shrink su-items-center su-mb-4 su-w-full su-pb-10 md:su-w-max', levers.headerWrapper, classes.headerWrapper)}>
          {(props.hasIcon && !props.isIconTop) && (
            <span className={clsx('su-mr-5 su-inline-block', levers.headerIcon, classes.headerIcon)}>
              {icon}
            </span>
          )}

          {(props.hasLabel && !props.isLabelTop) && (
            <span className={clsx('su-inline-block su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)}>
              {props.label ?? 'Information'}
            </span>
          )}
        </div>

        {/* Body Container. */}
        <div className={clsx('su-order-2 su-flex-1 su-flex-grow', levers.bodyWrapper, classes.bodyWrapper)}>

          {(props.hasIcon && props.isIconTop) && (
            <span className={clsx('su-mr-5 su-text-left su-ml-0', levers.headerIcon, classes.headerIcon)}>
              {icon}
            </span>
          )}

          {(props.hasLabel && props.isLabelTop) && (
            <span className={clsx('su-uppercase su-font-bold su-text-17 su-tracking-widest', levers.label, classes.label)}>
              {props.label ?? 'Information'}
            </span>
          )}

          {props.heading && (
            <h3 className={clsx('su-type-2 su-mb-03em', levers.bodyHeading, classes.bodyHeading)}>
              {props.heading}
            </h3>
          )}

          <div className={clsx('su-text-normal', levers.body, classes.body)}>
            {children}
          </div>

          {props.footer && (
            <div className={clsx('su-rs-mt-0', levers.footerWrapper, classes.footerWrapper)}>
              {props.footer}
            </div>
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  dismissBtn: PropTypes.element,
  icon: PropTypes.element,
  label: PropTypes.string,
  heading: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),

  // State and Levers.
  type: PropTypes.oneOf(alertTypes),
  isLargeIcon: PropTypes.bool,
  isLabelTop: PropTypes.bool,
  isIconTop: PropTypes.bool,
  hasDismiss: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hasLabel: PropTypes.bool,

  // The CSS Classname property
  classes: PropTypes.shape(
    {
      wrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      container: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      dismissWrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      headerWrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      headerIcon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      bodyWrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      bodyHeading: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      body: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      footerWrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ])
    }
  )
}

// Default Props.
// -----------------------------------------------------------------------------
Alert.defaultProps = {
  isLargeIcon: false,
  isLabelTop: false,
  isIconTop: false,
  hasDismiss: true,
  hasLabel: true,
  hasIcon: true,
  ref: null
}
