import React from 'react'
import { DismissButton } from './DismissButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

export const Alert = (props) => {
  // Default look and feel
  const defaultClasses = {
    wrapper: 'su-alert',
    dismissButtonWrapper: '',
    dismissButton: '',
    headerWrapper: '',
    label: 'su-inline-block ',
    bodyWrapper: '',
    bodyHeading: '',
    footerWrapper: ''
  }

  // Variant styles.
  const variants = {
    success: {
      wrapper: 'su-alert su-bg-palo-verde',
      bodyWrapper: 'su-text-white',
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white'
    },
    warning: {
      wrapper: 'su-alert su-bg-illuminating-dark'
    },
    error: {
      wrapper: 'su-alert su-bg-digital-red',
      bodyWrapper: 'su-text-white',
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white'
    },
    info: {
      wrapper: 'su-alert su-bg-bright-blue',
      bodyWrapper: 'su-text-white',
      headerWrapper: 'su-text-white',
      footerWrapper: 'su-text-white'
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
      <div className='su-cc'>
        {props.dismiss && dismiss}
        <div className={classes.headerWrapper}>
          <span className={classes.headerIcon}>
            {props.icon ?? <FontAwesomeIcon icon={faBell} />}
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
