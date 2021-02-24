import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { gridGap, gridColsXs, gridColsSm, gridColsMd, gridColsLg, gridColsXl, gridCols2Xl } from './Grid.levers';

/**
 * CSS Grid component.
 * Options with number of columns for each breakpoint and whether to use responsive grid gaps.
 *
 */
export const Grid = ({ className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.gap
  if (props.gap && gridGap.includes(props.gap)) {

    if (props.gap) {
      levers.gap = 'su-grid-gap';
    }
  }

  // props.xs
  if (props.xs && gridColsXs.includes(props.xs)) {
    levers.xs = `su-grid-cols-${props.xs}`;
  }

  // props.sm
  if (props.sm && gridColsSm.includes(props.sm)) {
    levers.sm = `sm:su-grid-cols-${props.sm}`;
  }

  // props.md
  if (props.md && gridColsMd.includes(props.md)) {
    levers.md = `md:su-grid-cols-${props.md}`;
  }

  // props.lg
  if (props.lg && gridColsLg.includes(props.lg)) {
    levers.lg = `lg:su-grid-cols-${props.lg}`;
  }

  // props.xl
  if (props.xl && gridColsXl.includes(props.xl)) {
    levers.xl = `xl:su-grid-cols-${props.xl}`;
  }

  // props.xxl
  if (props.xxl && gridCols2Xl.includes(props.xxl)) {
    levers.xxl = `2xl:su-grid-cols-${props.xxl}`;
  }

  return (
    <div className={clsxd('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className)} ref={ref}>
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

  /**
   * Number of columns at XS breakpoint
   */
  xs: PropTypes.oneOf(gridColsXs),

  /**
   * Number of columns at SM breakpoint
   */
  sm: PropTypes.oneOf(gridColsSm),

  /**
   * Number of columns at MD breakpoint
   */
  md: PropTypes.oneOf(gridColsMd),

  /**
   * Number of columns at LG breakpoint
   */
  lg: PropTypes.oneOf(gridColsLg),

  /**
   * Number of columns at XL breakpoint
   */
  xl: PropTypes.oneOf(gridColsXl),

  /**
   * Number of columns at 2XL breakpoint
   */
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
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 4
};
