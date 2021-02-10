import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Identity Bar Component.
 *
 * @param {object} props
 */
export const IdentityBar = (props) => {
  // Color Lever
  if (props.color === 'digital-red') {
    props.classes.wrapper = classNames(props.classes.wrapper, 'su-bg-digital-red');
    props.classes.logo = classNames(props.classes.logo,
      'su-text-white hover:su-text-white focus:su-text-white');
  } else if (props.color === 'black') {
    props.classes.wrapper = classNames(props.classes.wrapper, 'su-bg-black');
    props.classes.logo = classNames(props.classes.logo,
      'su-text-white hover:su-text-white focus:su-text-white');
  } else if (props.color === 'black') {
    props.classes.wrapper = classNames(props.classes.wrapper, 'su-bg-white');
    props.classes.logo = classNames(props.classes.logo,
      'su-text-cardinal-red hover:su-text-cardinal-red focus:su-text-cardinal-red');
  } else {
    props.classes.wrapper = classNames(props.classes.wrapper, 'su-bg-cardinal-red');
    props.classes.logo = classNames(props.classes.logo,
      'su-text-white hover:su-text-white focus:su-text-white');
  }

  return (
    <div className={classNames('su-identity-bar su-pt-5 su-pb-1', props?.classes?.wrapper)}>
      <div className='su-cc'>
        <a className={classNames('su-logo su-text-20', props?.classes?.logo)}>Stanford University</a>
      </div>
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
IdentityBar.propTypes = {
  /**
   * Which background color theme?
   */
  color: PropTypes.oneOf(['cardinal-red', 'digital-red', 'black', 'white'])
};

// Default Props.
// -----------------------------------------------------------------------------
IdentityBar.defaultProps = {
  color: 'cardinal-red'
};
