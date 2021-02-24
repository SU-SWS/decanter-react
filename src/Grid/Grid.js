import React from 'react';
import PropTypes from 'prop-types';
import { gridGap, gridCols2Xl } from './Grid.levers';

/**
 * CSS Grid component.
 *
 */
export const Grid = ({ className, children, ref, ...props }) => {
  const classnames = require('classnames/dedupe');
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.gap
  if (props.gap && gridGap.includes(props.gap)) {

    if (props.gap) {
      levers.gap = classnames(`su-grid-gap`);
    }
  }

  // props.xxl
  if (props.xxl && gridCols2Xl.includes(props.xxl)) {
    levers.xxl = classnames(`2xl:su-grid-cols-${props.xxl}`);
  }

  return (
    <div className={classnames('su-grid', levers.gap, levers.xxl, className)}>
      {children}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Grid.propTypes = {
  /**
   * Grid gap or not?
   */
  gap: PropTypes.bool,
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
  gap: true,
  xxl: '3'
};
