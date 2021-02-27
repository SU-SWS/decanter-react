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
export const Lockup = ({ className, line1, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && lockupColors.includes(props.color)) {
    switch (props.color) {
      case 'default':
        levers.logo = 'cardinal-red';
        levers.text = 'su-text-black';
        levers.bar = 'su-bg-black';
        break;

      case 'white':
        levers.logo = 'white';
        levers.text = 'su-text-white';
        levers.bar = 'su-bg-white';
        break;
    }
  }

  return (
    <a className={clsxd('su-lockup su-no-underline', className)}
       href={props.url}
    >
      <FlexBox className='su-flex-col md:su-flex-row'>
        <Logo color={levers.logo} isLink={false} className='su-type-4' />
        <div className={clsxd('su-hidden md:su-block su-h-40 su-w-01em su-bg-black su-mx-6 su--mt-7', levers.bar)} aria-hidden='true' />
        <div className={clsxd('su-type-2 su-font-regular', levers.text)}>{line1}</div>
      </FlexBox>
    </a>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Lockup.propTypes = {
  color: PropTypes.oneOf(lockupColors),
  url: PropTypes.string,

  /**
   * Custom CSS classes, e.g., to change font size
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),

  line1: PropTypes.string
};

// Default Props.
// -----------------------------------------------------------------------------
Lockup.defaultProps = {
  color: 'default',
  line1: 'Department'
};
