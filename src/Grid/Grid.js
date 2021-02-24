import React from 'react';
import PropTypes from 'prop-types';
import { gridCols2Xl } from './Grid.levers';

/**
 * CSS Grid component.
 *
 */
export const Grid = ({ className, children, ref, ...props }) => {
  const classnames = require('classnames/dedupe');
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.xxl
  if (props.xxl && gridCols2Xl.includes(props.xxl)) {
    levers.xxl = classnames(`2xl:su-grid-cols-${props.xxl}`);
  }

  return (
    <div className={classnames('su-grid', levers.xxl, className)}>
      {children}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Grid.propTypes = {
  xxl: PropTypes.oneOf(gridCols2Xl),

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
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Grid.defaultProps = {
  xxl: '3'
};
