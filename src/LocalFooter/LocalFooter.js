import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-hero-icon';
import { dcnb } from 'cnbuilder';
import { localFooterColors, localFooterLinkColors } from './LocalFooter.levers';
import { Container } from '../Container/Container';
import { Grid } from '../Grid/Grid';
import { FlexBox } from '../FlexBox/FlexBox';
import { FlexCell } from '../FlexCell/FlexCell';
import { Lockup } from '../Lockup/Lockup';

/**
 * Stanford Local Footer Component.
 * This usually sits above the Global Footer.
 *
 */
export const LocalFooter = ({ classes = {}, children, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && localFooterColors.includes(props.color)) {
    switch (props.color) {
      case 'light grey':
        levers.wrapper = 'su-bg-foggy-light su-text-black';
        levers.lockup = 'default';
        break;

      case 'white':
        levers.wrapper = 'su-bg-white su-text-black';
        levers.lockup = 'default';
        break;

      case 'black':
        levers.wrapper = 'su-bg-black su-text-white';
        levers.lockup = 'white';
        break;

      default:
      // none.
    }
  }

  // props.link
  if (props.link && localFooterLinkColors.includes(props.link)) {
    switch (props.link) {
      case 'blue':
        levers.link = '';
        break;

      case 'red':
        levers.link = 'su-link-digital-red'; // hover black
        break;

      case 'white':
        levers.link = 'su-link-white'; // hover-digital-red-light
        break;

      default:
      // none.
    }
  }

  return (
    <Container
      width="site"
      className={dcnb(
        'su-local-footer su-rs-pt-4 su-rs-pb-5',
        levers.wrapper,
        classes.wrapper
      )}
    >
      <FlexBox
        direction="col"
        gap
        className={dcnb('md:su-flex-row su-rs-mb-2', classes.header)}
        justifyContent="space-between"
      >
        <FlexCell grow>
          <Lockup
            color={levers.lockup}
            line1={props.line1}
            url={props.url}
            isLink={props.isLogoLink}
          />
        </FlexCell>
        {props.hasButton && (
          <FlexCell grow={false}>
            <a
              href={props.buttonUrl}
              className={dcnb(
                'su-inline-block su-bg-digital-red su-text-white su-text-18 hocus:su-text-white hocus:su-bg-archway-dark su-py-9 su-px-20 su-no-underline su-font-regular hover:su-underline focus:su-underline su-rounded-7 su-shadow-md',
                classes.button
              )}
            >
              {props.buttonText ?? 'Web Login'}
              <Icon
                icon="lock-closed"
                type="solid"
                className={dcnb(
                  'su-inline-block su-h-08em su-w-08em su-ml-4 su--mt-2',
                  classes.icon
                )}
              />
            </a>
          </FlexCell>
        )}
      </FlexBox>
      <Grid
        xs={1}
        md={2}
        xl={4}
        gap
        className={dcnb(
          'su-text-18 su-link-regular',
          levers.link,
          classes.content
        )}
      >
        {children}
      </Grid>
    </Container>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
LocalFooter.propTypes = {
  /**
   * Which background color?
   */
  color: PropTypes.oneOf(localFooterColors),

  /**
   * Which link color?
   */
  link: PropTypes.oneOf(localFooterLinkColors),

  /**
   * Is the logo a link?
   */
  isLogoLink: PropTypes.bool,

  /**
   * URL of the department logo.
   */
  url: PropTypes.string,

  /**
   * Line 1 text of the department logo.
   */
  line1: PropTypes.string,

  /**
   * Does it have a login button?
   */
  hasButton: PropTypes.bool,

  /**
   * Login button text
   */
  buttonText: PropTypes.string,

  /**
   * Login button URL
   */
  buttonUrl: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  // Custom CSS classes
  classes: PropTypes.shape({
    wrapper: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    button: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.array,
    ]),
  }),
};

// Default Props.
// -----------------------------------------------------------------------------
LocalFooter.defaultProps = {
  isLogoLink: true,
  color: 'light grey',
  link: 'blue',
};
