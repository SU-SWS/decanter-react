import React from 'react'
import { DismissButton } from './DismissButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faCheckCircle,
  faQuestionCircle,
  faExclamationTriangle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'

export const Alert = (props) => {
  // Default look and feel
  const defaultClasses = {
    wrapper: 'su-alert',
    dismissButtonWrapper: 'su-order-3',
    dismissButton: '',
    headerWrapper: 'su-order-1',
    label: 'su-inline-block ',
    bodyWrapper: styles.alertBodyWrapperDark,
    icon: faBell,
    bodyHeading: '',
    footerWrapper: ''
  }

  // Variant styles.
  const variants = {
    success: {
      wrapper: 'su-alert su-bg-palo-verde',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white',
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
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white',
      icon: faTimesCircle
    },
    info: {
      wrapper: 'su-alert su-bg-bright-blue',
      bodyWrapper: styles.alertBodyWrapper,
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white',
      icon: faQuestionCircle
    }
  }

  // Merge with passed in props.
  const classes = Object.assign(defaultClasses, variants[props.variant])

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

  const dismiss = (
    <div className={classes.dismissButtonWrapper}>
      <DismissButton variant={dismissVariant} />
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <div className='su-cc su-flex su-flex-wrap'>
        {props.dismiss && dismiss}
        <div className={classes.headerWrapper}>
          <span className={classes.headerIcon}>
            {props.icon ?? <FontAwesomeIcon icon={classes.icon} />}
          </span>
          <span className={classes.label}>{props.label ?? 'Information'}</span>
        </div>
        <div className={classes.bodyWrapper}>
          <h3 className={classes.bodyHeading}>{props.heading}</h3>
          <div className={classes.body}>{props.body}</div>
          <div className={classes.footerWrapper}>{props.footer}</div>
        </div>
      </div>
    </div>
  )
}
