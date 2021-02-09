import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { DismissButton } from './DismissButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { classnames } from 'tailwindcss-classnames'

/**
 * Alert Component.
 *
 * @param {object} props
 */
export const AlertError = (props) => {
  // Removes the alert from display when clicked.
  const [isDismissed, setDismissed] = useState(false)

  // Don't show if dismissed.
  if (isDismissed) {
    return null
  }

  const dismiss = props.dismissBtn ?? <DismissButton callback={setDismissed} />

  // The goods!
  return (
    <div className={classnames('su-alert', props?.classes?.wrapper)}>
      <div className={classnames('su-cc su-flex su-flex-wrap sm:su-items-center', props?.classes?.container)}>
        {props.dismiss && dismiss}
        <div className={classnames('su-order-1 su-rs-m-r-1 su-flex-shrink su-mb-4 xs:su-w-full lg:su-w-max su-text-white', props?.classes?.intro)}>
          {props.icon ?? (
            <span className={props?.classes?.iconWrapper}>
              <FontAwesomeIcon
                icon={faBell}
                className={props?.classes?.icon}
              />
            </span>
          )}
          {props.label && (
            <span className='su-inline-block su-uppercase su-font-semibold su-text-170rem su-h-full'>
              {props.label}
            </span>
          )}
        </div>
        <div className={classnames(props?.classes?.bodyWrapper)}>
          <h3 className={classnames(props?.classes?.heading)}>{props.heading}</h3>
          {props.children && (
            <div className={classnames(props?.classes?.body)}>
              {props.children}
            </div>
          )}
          {props.footer && (
            <div className={classnames(props?.classes?.footerWrapper)}>{props.footer}</div>
          )}
        </div>
      </div>
    </div>
  )
}

// Prop Types.
// -----------------------------------------------------------------------------
AlertError.propTypes = {
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
AlertError.defaultProps = {
  variant: 'info',
  dismiss: true,
  label: 'Information',
  heading: 'Alert Heading'
}
