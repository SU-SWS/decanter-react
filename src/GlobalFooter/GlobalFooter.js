import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { globalFooterColors } from './GlobalFooter.levers';
import { Logo } from '../Logo/Logo';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { Container } from '../Container/Container';
import { FlexBox } from '../FlexBox/FlexBox';

/**
 * Stanford Global Footer Component.
 *
 */
export const GlobalFooter = ({ className, ...props }) => {
  // Defaults & Variables
  const levers = {};

  // props.color
  if (props.color && globalFooterColors.includes(props.color)) {
    switch (props.color) {
      case 'cardinal-red':
        levers.wrapper = 'su-bg-cardinal-red';
        break;

      case 'digital-red':
        levers.wrapper = 'su-bg-digital-red';
        break;

      case 'black':
        levers.wrapper = 'su-bg-black';
        break;

      default:
      // none.
    }
  }

  return (
    <Container
      className={dcnb(
        'su-global-footer su-basefont-20 su-rs-py-1 su-text-white',
        levers.wrapper,
        className
      )}
      width="site"
    >
      <FlexBox
        direction="col"
        className="lg:su-flex-row"
        title="Common Stanford resources"
      >
        <div className="su-text-center su-mt-5 su-mb-9">
          <Logo className="su-type-3" type="stacked" color="white" />
        </div>
        <div className="lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-flex-grow">
          <nav
            aria-label="global footer menu"
            className="su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10"
          >
            <ul className="su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row">
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://www.stanford.edu"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Stanford Home
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://visit.stanford.edu/plan/"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Maps &amp; Directions
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://www.stanford.edu/search/"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Search Stanford
                  <SrOnlyText />
                </a>
              </li>
              <li>
                <a
                  href="https://emergency.stanford.edu"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Emergency Info
                  <SrOnlyText />
                </a>
              </li>
            </ul>
            <ul className="su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular">
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://www.stanford.edu/site/terms/"
                  title="Terms of use for sites"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Terms of Use
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://www.stanford.edu/site/privacy/"
                  title="Privacy and cookie policy"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Privacy
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://uit.stanford.edu/security/copyright-infringement"
                  title="Report alleged copyright infringement"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Copyright
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4"
                  title="Ownership and use of Stanford trademarks and images"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Trademarks
                  <SrOnlyText />
                </a>
              </li>
              <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                <a
                  href="https://bulletin.stanford.edu/pages/c7vDgeOuJIfpZe8GKmW3"
                  title="Non-discrimination policy"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Non-Discrimination
                  <SrOnlyText />
                </a>
              </li>
              <li>
                <a
                  href="https://www.stanford.edu/site/accessibility"
                  title="Report web accessibility issues"
                  className="su-text-white su-no-underline hocus:su-underline hocus:su-text-white"
                >
                  Accessibility
                  <SrOnlyText />
                </a>
              </li>
            </ul>
          </nav>
          <div className="su-text-13 sm:su-text-14 su-text-center lg:su-text-left">
            <span className="su-whitespace-no-wrap">
              &copy; Stanford University.
            </span>
            <span className="su-whitespace-no-wrap">
              &nbsp; Stanford, California 94305.
            </span>
          </div>
        </div>
      </FlexBox>
    </Container>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
GlobalFooter.propTypes = {
  /**
   * Which background color theme?
   */
  color: PropTypes.oneOf(globalFooterColors),

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
GlobalFooter.defaultProps = {
  color: 'cardinal-red',
};
