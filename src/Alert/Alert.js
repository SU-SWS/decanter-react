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

import { AlertError } from './AlertError'
import { AlertInfo } from './AlertInfo'
import { AlertSuccess } from './AlertSuccess'
import { AlertWarning } from './AlertWarning'

import styles from './alert.module.css'

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const Alert = (props) => {

  // Define variants.
  const variants = {
    error: <AlertError {...props} />,
    info: <AlertInfo {...props} />,
    success: <AlertSuccess {...props} />,
    warning: <AlertWarning {...props} />
  }

  // Switch to variant.
  if (props.variant && variants[props.variant] !== 'undefined') {
    return variants[props.variant]
  }

  // Removes the alert from display when clicked.
  const [isDismissed, setDismissed] = useState(false)

  // DismissButtton component.
  const dismiss = (
    <div className='su-order-3 su-rs-ml-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto'>
      <DismissButton variant='dark' callback={setDismissed} />
    </div>
  )

  // Don't show if dismissed.
  if (isDismissed) {
    return null
  }

  // The goods!
  return (
    <div className='su-alert'>
      <div className='su-cc su-flex su-flex-wrap sm:su-items-center'>
        {props.dismiss && dismiss}
        <div className='su-order-1 su-rs-mr-1 su-flex-shrink su-mb-4 xs:su-w-full lg:su-w-max'>
          <span className=''>
            {props.icon ?? (
              <FontAwesomeIcon
                icon={faBell}
                className='su-mr-2 su-inline-block su-max-w-xs'
              />
            )}
          </span>
          <span className={'su-inline-block su-uppercase su-font-semibold su-text-170rem su-h-full ' + styles.label}>{props.label ?? 'Information'}</span>
        </div>
        <div className={styles.alertBodyWrapperDark}>
          <h3>{props.heading}</h3>
          <div>{props.children}</div>
          <div className='su-rs-mt-0'>{props.footer}</div>
        </div>
      </div>
    </div>
  )
}

/**
 * Prop Types Information.
 */

Alert.propTypes = {
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

Alert.defaultProps = {
  variant: 'info',
  dismiss: true,
  label: 'Information',
  heading: 'Alert Heading'
}
