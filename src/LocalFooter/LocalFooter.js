import React from 'react';
import PropTypes from 'prop-types';
import { localFooterColors, localFooterLinkColors } from './LocalFooter.levers';
import { Container } from '../Container/Container';
import { Grid } from '../Grid/Grid';
import { FlexBox } from "../FlexBox/FlexBox";
import { Lockup } from "../Lockup/Lockup";
import clsxd from 'clsx-dedupe';

/**
 * Stanford Local Footer Component.
 * This usually sits above the Global Footer.
 *
 */
export const LocalFooter = ({ className, children, ...props }) => {
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
    }
  }

  // props.link
  if (props.link && localFooterLinkColors.includes(props.link)) {
    switch (props.link) {
      case 'blue':
        levers.link = '';
        break;

      case 'red':
        levers.link = 'su-link-digital-red hover:su-link-black focus:su-link-black';
        break;

      case 'white':
        levers.link = 'su-link-white hover:su-link-white focus:su-link-white';
        break;
    }
  }

  return (
    <Container width='site' className={clsxd('su-local-footer su-rs-pt-4 su-rs-pb-5', levers.wrapper, className)}>
      <FlexBox direction='col' gap={true} className='md:su-flex-row su-rs-mb-2'>
        <Lockup color={levers.lockup} line1={props.line1} url={props.url} />
      </FlexBox>
      <Grid xs={1} md={2} xl={4} gap={true} className={clsxd('su-card-paragraph su-link-regular', levers.link, className)}>
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
   * URL of the department logo.
   */
  url: PropTypes.string,

  /**
   * Line 1 text of the department logo.
   */
  line1: PropTypes.string,

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ])
};

// Default Props.
// -----------------------------------------------------------------------------
LocalFooter.defaultProps = {
  color: 'light grey',
  link: 'blue'
};
