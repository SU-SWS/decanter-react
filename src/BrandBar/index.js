import React from 'react'

export const BrandBar = (props) => {
  // Defaults
  const defaultClasses = {
    wrapper: 'su-brand-bar',
    container: '',
    link: '',
    sr: ''
  }

  // Merge with passed in props.
  const classes = Object.assign(defaultClasses, props.classes);

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
