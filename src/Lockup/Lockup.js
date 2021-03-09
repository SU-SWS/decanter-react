import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { FlexBox } from '../FlexBox/FlexBox';
import { lockupColors } from './Lockup.levers';
import clsxd from 'clsx-dedupe';

/**
 * Stanford Department Branding Component.
 *
 */
export const Lockup = ({ classes = {}, line1, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && lockupColors.includes(props.color)) {
    switch (props.color) {
      case 'default':
        levers.logo = 'cardinal-red';
        levers.text = 'su-text-black';
        levers.bar = 'su-border-black';
        break;

      case 'white':
        levers.logo = 'white';
        levers.text = 'su-text-white';
        levers.bar = 'su-border-white';
        break;
    }
  }

  // Partials
  const LockupContent = (
    <FlexBox direction='col' className='md:su-flex-row su-basefont-19'>
      <Logo color={levers.logo} isLink={false} className={clsxd('su-type-4 su-leading-half su-pt-11 su-pr-7 su-mr-7 md:su-border-r su-border-solid', levers.bar)} />
      <div className={clsxd('su-text-25 md:su-text-m2 su--mt-3 md:su-mt-0 su--ml-2 md:su-ml-0 su-font-regular su-relative su-top-6', levers.text, classes.line1)}>{line1}</div>
    </FlexBox>
  );

  // props.isLink
  // Render logo as link or simple div
  if (props.isLink) {
    return (
      <a className={clsxd('su-lockup su-no-underline su-inline-block', classes.wrapper)}
         href={props.url ?? '/'}
      >
        {LockupContent}
      </a>
    );
  }

  return (
    <div className={clsxd('su-lockup su-no-underline su-inline-block', classes.wrapper)}>
      {LockupContent}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Lockup.propTypes = {
  color: PropTypes.oneOf(lockupColors),
  url: PropTypes.string,

  /**
   * Make the logo link a link?
   */
  isLink: PropTypes.bool,

  // Custom CSS classes
  classes: PropTypes.shape(
    {
      wrapper: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
      line1: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array
      ]),
    }
  ),

  line1: PropTypes.string
};

// Default Props.
// -----------------------------------------------------------------------------
Lockup.defaultProps = {
  color: 'default',
  isLink: true
};
