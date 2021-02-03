import React from 'react'

export const BrandBar = (props) => {

  // Defaults.
  const defaultClasses = {
    wrapper: 'su-brand-bar su-bg-cardinal-red',
    container: 'su-cc',
    link: 'su-logo su-text-white hover:su-text-white focus:su-text-white',
  }

  // Variant Sets.
  const variants = {
    bright: {
      wrapper: 'su-brand-bar su-bg-digital-red'
    },
    dark: {
      wrapper: 'su-brand-bar su-bg-black'
    },
    white: {
      wrapper: 'su-brand-bar su-bg-white su-text-black',
      link: 'su-logo su-text-cardinal-red hover:su-text-cardinal-red' +
        ' focus:su-text-cardinal-red'
    }
  }

  // Merge with passed in props.
  let classes = Object.assign(defaultClasses, props.classes);
  classes = Object.assign(classes, variants[props.variant])

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <a className={classes.link} href='https://stanford.edu'>
          Stanford University
        </a>
      </div>
    </div>
  )
}
