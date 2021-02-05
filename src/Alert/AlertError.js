import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DismissButton } from './DismissButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCheckCircle,
  faQuestionCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import styles from './alert.module.css'

// Default look and feel
// /////////////////////////////////////////////////////////////////////////////
const defaultClasses = {
  wrapper: 'su-alert',
  dismissButtonWrapper: [
    'su-order-3',
    'su-rs-m-l-1',
    'su-h-full',
    'su-items-end',
    'su-flex-shrink',
    'su-text-right',
    'su-w-full',
    'sm:su-w-auto'
  ].join(' '),
  dismissButton: '',
  headerWrapper: [
    'su-order-1',
    'su-rs-m-r-1',
    'su-flex-shrink',
    'su-mb-4',
    'xs:su-w-full',
    'lg:su-w-max'
  ].join(' '),
  label: [
    'su-inline-block',
    'su-uppercase',
    'su-font-semibold',
    'su-text-170rem',
    'su-h-full',
    styles.label
  ].join(' '),
  bodyWrapper: styles.alertBodyWrapperDark,
  icon: faBell,
  iconClass: 'su-mr-2 su-inline-block su-max-w-xs',
  bodyHeading: '',
  footerWrapper: 'su-rs-m-t-0'
}

// Variant styles.
// /////////////////////////////////////////////////////////////////////////////
const variants = {
  success: {
    wrapper: 'su-alert su-bg-palo-verde',
    bodyWrapper: styles.alertBodyWrapper,
    headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
    footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
    icon: faCheckCircle
  },
  warning: {
    wrapper: 'su-alert su-bg-illuminating-dark',
    bodyWrapper: styles.alertBodyWrapperDark,
    icon: faExclamationTriangle
  },
  error: {
    wrapper: 'su-alert su-bg-digital-red',
    bodyWrapper: styles.alertBodyWrapper,
    headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
    footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
    icon: faTimesCircle
  },
  info: {
    wrapper: 'su-alert su-bg-bright-blue',
    bodyWrapper: styles.alertBodyWrapper,
    headerWrapper: defaultClasses.headerWrapper + ' su-text-white',
    footerWrapper: defaultClasses.footerWrapper + ' su-text-white',
    icon: faQuestionCircle
  }
}

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const AlertError = (props) => {
  // Removes the alert from display when clicked.
  const [isDismissed, setDismissed] = useState(false)

  // Merge with passed in props.
  let classes = Object.assign(defaultClasses, props.classes)
  // Merge with variant setting from props.
  classes = Object.assign(classes, variants[props.variant])

  // The dismiss button component.
  // Toggle to dark based on variant.
  const dismissDarkVariant = ['warning']
  let dismissVariant = 'light'
  if (
    props.variant === undefined ||
    dismissDarkVariant.includes(props.variant)
  ) {
    dismissVariant = 'dark'
  }

  // DismissButtton component.
  const dismiss = (
    <div className={classes.dismissButtonWrapper}>
      <DismissButton variant={dismissVariant} callback={setDismissed} />
    </div>
  )

  // Don't show if dismissed.
  if (isDismissed) {
    return null
  }

  // The goods!
  return (
    <div className={classes.wrapper}>
      <div className='su-cc su-flex su-flex-wrap sm:su-items-center'>
        {props.dismiss && dismiss}
        <div className={classes.headerWrapper}>
          <span className={classes.headerIcon}>
            {props.icon ?? (
              <FontAwesomeIcon
                icon={classes.icon}
                className={classes.iconClass}
              />
            )}
          </span>
          <span className={classes.label}>{props.label ?? 'Information'}</span>
        </div>
        <div className={classes.bodyWrapper}>
          <h3 className={classes.bodyHeading}>{props.heading}</h3>
          <div className={classes.body}>{props.children}</div>
          <div className={classes.footerWrapper}>{props.footer}</div>
        </div>
      </div>
    </div>
  )
}

/**
 * Prop Types Information.
 */

AlertError.propTypes = {
  // An array of classes to merge with the classes array.
  classes: PropTypes.object,
  // The primary content
  children: PropTypes.node,
  // FA Icon name.
  icon: PropTypes.element,
  // One of the default variant sets.
  variant: PropTypes.oneOf(Object.keys(variants)),
  // Show the dismiss button or not.
  dismiss: PropTypes.bool,
  // Add a label.
  label: PropTypes.string,
  // Add a heading.
  heading: PropTypes.string,
  // Add content to the footer region.
  footer: PropTypes.node
}

AlertError.defaultProps = {
  variant: 'info',
  dismiss: true,
  label: 'Information',
  heading: 'Alert Heading'
}
