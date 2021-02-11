import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IdentityBarColors } from './IdentityBar.levers';

/**
 * Identity Bar Component.
 *
 * @param {object} props
 */
export const IdentityBar = ({ classes = {}, ...props }) => {
  const classnames = require('classnames');

  // Levers
  // ---------------------------------------------------------------------------

  // props.color
  if (props.color && IdentityBarColors.includes(props.color)) {
    switch (props.color) {
      case 'white':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-white');
        classes.logo = classnames(classes.logo,
          'su-text-cardinal-red hover:su-text-cardinal-red focus:su-text-cardinal-red');
        break;

      case 'cardinal-red':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-cardinal-red');
        classes.logo = classNames(classes.logo, 'su-text-white hover:su-text-white focus:su-text-white');
        break;

      case 'digital-red':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-digital-red');
        classes.logo = classNames(classes.logo, 'su-text-white hover:su-text-white focus:su-text-white');
        break;

      case 'black':
        classes.wrapper = classnames(classes.wrapper, 'su-bg-black');
        classes.logo = classNames(classes.logo, 'su-text-white hover:su-text-white focus:su-text-white');
        break;
    }
  }

  return (
    <div className={classNames('su-identity-bar su-pt-5 su-pb-1', classes.wrapper)}>
      <div className='su-cc'>
        <a className={classNames('su-logo su-text-20', classes.logo)}>Stanford University</a>
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
  color: PropTypes.oneOf(['cardinal-red', 'digital-red', 'black', 'white']),

  // The CSS Classname property
  classes: PropTypes.object
};

// Default Props.
// -----------------------------------------------------------------------------
IdentityBar.defaultProps = {
  color: 'cardinal-red'
};
