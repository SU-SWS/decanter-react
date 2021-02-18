import React from 'react'

export const Hero = (props) => {
  // Defaults.
  const defaultClasses = {
    wrapper: 'su-hero',
    mediaWrapper: 'su-hero-media',
    contentWrapper: 'su-hero-content',
    captionWrapper: 'su-hero-caption'
  }

  // Variant Sets.
  const variants = {
    dark: {
      wrapper: 'su-hero su-bg-black'
    }
  }

  // Merge with passed in props.
  let classes = Object.assign(defaultClasses, props.classes)
  classes = Object.assign(classes, variants[props.variant])

  return (
    <div className={classes.wrapper}>
      <div className={classes.mediaWrapper}>{props.media}</div>
      {props.children ?? (
        <div className={classes.contentWrapper}>{props.children}</div>
      )}
      {props.caption ?? (
        <div className={classes.captionWrapper}>
          <div className={classes.captionContainer}>{props.caption}</div>
        </div>
      )}
    </div>
  )
}
