import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export const DismissButton = (props) => {
  const callback = () => props.callback(true)

  return (
    <button
      aria-label={props.ariaLabel ?? 'Dismiss alert'}
      className='su-dismiss-button su-bg-transparent hover:su-bg-transparent focus:su-bg-transparent su-uppercase su-font-semibold su-p-0 su-text-170rem su-order-3 su-rs-m-l-1 su-h-full su-items-end su-flex-shrink su-text-right su-w-full sm:su-w-auto'
      onClick={callback}
    >
      {props.dismissText ?? 'Dismiss'}
      {props.icon ?? (
        <FontAwesomeIcon icon={faTimesCircle} className='su-ml-2' />
      )}
    </button>
  )
}
