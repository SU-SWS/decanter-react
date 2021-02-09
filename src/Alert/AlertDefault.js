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

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const AlertDefault = (props) => {
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

// Prop Types.
// -----------------------------------------------------------------------------
AlertDefault.propTypes = {
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
AlertDefault.defaultProps = {
  variant: 'info',
  dismiss: true,
  label: 'Information',
  heading: 'Alert Heading'
}
