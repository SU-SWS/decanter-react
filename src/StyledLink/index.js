import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faArrowRight,
  faAngleDown,
  faDownload,
  faLock,
  faAngleDoubleRight, // Needs a double replacement.
  faVideo
} from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'

export const StyledLink = (props) => {
  // Defaults.
  const defaultClasses = {
    wrapper: 'su-link'
  }

  // Variant Sets.
  const variants = {
    action: {
      icon: <FontAwesomeIcon icon={faAngleRight} className={styles.linkIcon} />
    },
    download: {
      icon: <FontAwesomeIcon icon={faDownload} className={styles.linkIcon} />
    },
    external: {
      icon: <FontAwesomeIcon icon={faArrowRight} className={styles.linkIcon} />
    },
    internal: {
      icon: <FontAwesomeIcon icon={faLock} className={styles.linkIcon} />
    },
    jump: {
      icon: <FontAwesomeIcon icon={faAngleDown} className={styles.linkIcon} />
    },
    more: {
      icon: (
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          className={styles.linkIcon}
        />
      )
    },
    video: {
      icon: <FontAwesomeIcon icon={faVideo} className={styles.linkIcon} />
    },
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
