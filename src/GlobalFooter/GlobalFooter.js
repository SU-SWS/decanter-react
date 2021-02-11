import React from 'react';
import PropTypes from 'prop-types';
import { GlobalFooterColors } from './GlobalFooter.levers';
import { SrOnlyLabel } from '../SrOnlyLabel/SrOnlyLabel';

/** s
 * Stanford Global Footer Component.
 *
 * @param {object} props
 */
export const GlobalFooter = ({ classes = {}, ...props }) => {
  // Defaults & Variables
  const classnames = require('classnames');
  const levers = {};

  // props.color
  if (props.color && GlobalFooterColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.wrapper = classnames('su-bg-cardinal-red');
        break;

      case 'digital-red':
        levers.wrapper = classnames('su-bg-digital-red');
        break;

      case 'black':
        levers.wrapper = classnames('su-bg-black');
        break;
    }
  }

  return (
    <div className={classnames('su-global-footer su-rs-py-1 su-link-white hover:su-link-white focus:su-link-white', levers.wrapper)}>
      <div
        className='su-cc'
        title='Common Stanford resources'
      >
        <div className='su-flex su-flex-col lg:sm-flex-row'>
          <a className='su-logo su-type-3' href='https://www.stanford.edu'>
            Stanford
            <br />
            University
          </a>
        </div>
        <div className='su-global-footer__content su-text-left sm:su-text-center lg:su-text-left su-flex-grow'>
          <nav aria-label='global footer menu' className='su-flex su-mb-10'>
            <ul className='su-global-footer__menu su-global-footer__menu--global'>
              <li>
                <a href='https://www.stanford.edu'>
                  Stanford Home
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a href='https://visit.stanford.edu/plan/'>
                  Maps &amp; Directions
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a href='https://www.stanford.edu/search/'>
                  Search Stanford
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a href='https://emergency.stanford.edu'>
                  Emergency Info
                  {SrOnlyLabel}
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
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a
                  href='https://www.stanford.edu/site/privacy/'
                  title='Privacy and cookie policy'
                >
                  Privacy
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a
                  href='https://uit.stanford.edu/security/copyright-infringement'
                  title='Report alleged copyright infringement'
                >
                  Copyright
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a
                  href='https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4'
                  title='Ownership and use of Stanford trademarks and images'
                >
                  Trademarks
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a
                  href='http://exploredegrees.stanford.edu/nonacademicregulations/nondiscrimination/'
                  title='Non-discrimination policy'
                >
                  Non-Discrimination
                  {SrOnlyLabel}
                </a>
              </li>
              <li>
                <a
                  href='https://www.stanford.edu/site/accessibility'
                  title='Report web accessibility issues'
                >
                  Accessibility
                  {SrOnlyLabel}
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
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
GlobalFooter.propTypes = {
  /**
   * Which background color theme?
   */
  color: PropTypes.oneOf(GlobalFooterColors),

  // The CSS Classname property
  classes: PropTypes.object
};

// Default Props.
// -----------------------------------------------------------------------------
GlobalFooter.defaultProps = {
  color: 'cardinal-red'
};
