import React from 'react'
import styles from './index.module.css'

export const StyledLink = (props) => {
  // Defaults.
  const defaultClasses = {
    wrapper: 'su-link'
  }

  // Variant Sets.
  const variants = {
    action: {},
    download: {},
    external: {},
    internal: {},
    jump: {},
    more: {},
    video: {},
    button: {
      wrapper: 'su-button'
    },
    buttonSecondary: {
      wrapper: 'su-button su-button--secondary'
    },
    buttonBig: {
      wrapper: 'su-button su-button--big'
    }
  }

  // Merge with passed in props.
  let classes = Object.assign(defaultClasses, props.classes)
  classes = Object.assign(classes, variants[props.variant])

  // How the CSS animation should be.
  if (props.animate !== undefined) {
    switch (props.animate) {
      case 'down':
        classes.wrapper += ' ' + styles.animatedDown
        break

      case 'left':
        classes.wrapper += ' ' + styles.animatedLeft
        break

      case 'up':
        classes.wrapper += ' ' + styles.animatedUp
        break

      case 'topRight':
        classes.wrapper += ' ' + styles.animatedTopRight
        break

      default:
        classes.wrapper += ' ' + styles.animatedRight
    }
  }

  return (
    <a className={classes.wrapper} href={props.href} {...props.attributes}>
      {props.children}
      {classes.icon && classes.icon}
    </a>
  )
}
