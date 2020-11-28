import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export const DismissButton = (props) => {
  // Default look and feel.
  const wrapper = [
    'su-dismiss-button',
    'su-bg-transparent',
    'hover:su-bg-transparent',
    'focus:su-bg-transparent',
    'su-uppercase',
    'su-font-semibold',
    'su-p-0',
    'su-text-170rem'
  ]
  const defaultClasses = {
    wrapper: wrapper.join(' ')
  }

  // Variants.
  const variants = {
    dark: {
      wrapper:
        defaultClasses.wrapper +
        ' ' +
        'su-text-black hover:su-text-black focus:su-text-black'
    }
  }

  // Merge with passed in props.
  const classes = Object.assign(defaultClasses, variants[props.variant])

  return (
    <button
      aria-label={props.ariaLabel ?? 'Dismiss alert'}
      className={classes.wrapper}
      onClick={() => props.callback(true)}
    >
      {props.dismissText ?? 'Dismiss'}
      {props.icon ?? (
        <FontAwesomeIcon icon={faTimesCircle} className='su-ml-2' />
      )}
    </button>
  )
}
