import React from 'react'

export const GlobalFooter = (props) => {
  // Defaults.
  const defaultClasses = {
    wrapper: 'su-global-footer'
  }

  // Variant Sets.
  const variants = {
    bright: {
      wrapper: 'su-global-footer su-bg-digital-red'
    },
    dark: {
      wrapper: 'su-global-footer su-bg-black'
    }
  }

  // Merge with passed in props.
  let classes = Object.assign(defaultClasses, props.classes)
  classes = Object.assign(classes, variants[props.variant])

  return (
    <div className={classes.wrapper}>
      <div
        className='su-global-footer__container'
        title='Common Stanford resources'
      >
        <div className='su-global-footer__brand'>
          <a className='su-logo' href='https://www.stanford.edu'>
            Stanford
            <br />
            University
          </a>
        </div>
        <div className='su-global-footer__content'>
          <nav aria-label='global footer menu'>
            <ul className='su-global-footer__menu su-global-footer__menu--global'>
              <li>
                <a href='https://www.stanford.edu'>
                  Stanford Home
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a href='https://visit.stanford.edu/plan/'>
                  Maps &amp; Directions
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a href='https://www.stanford.edu/search/'>
                  Search Stanford
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a href='https://emergency.stanford.edu'>
                  Emergency Info
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
            </ul>
            <ul className='su-global-footer__menu su-global-footer__menu--policy'>
              <li>
                <a
                  href='https://www.stanford.edu/site/terms/'
                  title='Terms of use for sites'
                >
                  Terms of Use
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.stanford.edu/site/privacy/'
                  title='Privacy and cookie policy'
                >
                  Privacy
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a
                  href='https://uit.stanford.edu/security/copyright-infringement'
                  title='Report alleged copyright infringement'
                >
                  Copyright
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a
                  href='https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4'
                  title='Ownership and use of Stanford trademarks and images'
                >
                  Trademarks
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a
                  href='http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/'
                  title='Non-discrimination policy'
                >
                  Non-Discrimination
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.stanford.edu/site/accessibility'
                  title='Report web accessibility issues'
                >
                  Accessibility
                  <span className='su-sr-only'>(link is external)</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className='su-global-footer__copyright'>
            <span>&copy; Stanford University.</span>
            <span>&nbsp; Stanford, California 94305.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
