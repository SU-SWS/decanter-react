import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { gridGap, gridNumCols, gridElements } from './Grid.levers';

/**
 * CSS Grid component.
 * Options with number of columns for each breakpoint and whether to use responsive grid gaps.
 *
 */
export const Grid = ({ element, gap, xs, sm, md, lg, xl, xxl, className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (element && gridElements.includes(element)) {
    Element = element;
  }

  // props.gap
  if (gap && gridGap.includes(gap)) {
    levers.gap = 'su-grid-gap';
  }

  let bps = {xs: xs, sm: sm, md: md, lg: lg, xl: xl, xxl: xxl};

  Object.entries(bps).forEach(([key, value]) => {
    if (value && gridNumCols.includes(value)) {
      if (key === 'xs') {
        levers[key] = `su-grid-cols-${value}`;
      }
      else if (key === 'xxl') {
        levers[key] = `2xl:su-grid-cols-${value}`;
      }
      else {
        levers[key] = `${key}:su-grid-cols-${value}`;
      }
    }
  });

  return (
    <Element className={clsxd('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className)} ref={ref} {...props}>
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Grid.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(gridElements),

  /**
   * Grid gap or not?
   */
  gap: PropTypes.bool,

  /**
   * Number of columns at XS breakpoint
   */
  xs: PropTypes.oneOf(gridNumCols),

  /**
   * Number of columns at SM breakpoint and up
   */
  sm: PropTypes.oneOf(gridNumCols),

  /**
   * Number of columns at MD breakpoint
   */
  md: PropTypes.oneOf(gridNumCols),

  /**
   * Number of columns at LG breakpoint
   */
  lg: PropTypes.oneOf(gridNumCols),

  /**
   * Number of columns at XL breakpoint
   */
  xl: PropTypes.oneOf(gridNumCols),

  /**
   * Number of columns at 2XL breakpoint
   */
  xxl: PropTypes.oneOf(gridNumCols),

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
  /**
   * React useRef()
   */
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Grid.defaultProps = {
  element: 'div',
  gap: false
};
