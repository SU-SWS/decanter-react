import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import React from 'react';
import { superheadWeights } from './Card.levers';

/**
 * Superhead component
 * @param {*} param0
 * @returns
 */

export const Superhead = ({
  weight,
  className,
  children,
  isUppercase,
  ...props
}) => {
  const superheadWeight = superheadWeights[weight];

  let uppercase = '';

  if (isUppercase) {
    uppercase = 'su-uppercase';
  }

  return (
    <span
      className={dcnb(
        'su-type-0 su-mb-0 su-leading-display',
        superheadWeight,
        uppercase,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Superhead.displayName = 'Card.Superhead';

Superhead.propTypes = {
  /**
   * Font weight.
   */
  weight: PropTypes.oneOf(Object.keys(superheadWeights)),
  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * Is the uppercase style disabled?
   */
  isUppercase: PropTypes.bool,
};
// Default Props.
// -----------------------------------------------------------------------------
Superhead.defaultProps = {
  weight: 'bold',
  isUppercase: false,
};
