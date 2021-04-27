import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { gridGap, gridCols, gridElements } from './Grid.levers';

/**
 * CSS Grid component.
 * Options with number of columns for each breakpoint and whether to use responsive grid gaps.
 *
 */
export const Grid = ({ element, gap, className, children, ref, ...props }) => {
  const levers = {};
  // Destructure the props a bit more so we can add the rest to the element.
  const { xs, sm, md, lg, xl, xxl, ...rest } = props;

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

  // Available breakpoints
  const bps = Object.keys(gridCols);

  // Looping over each breakpoint
  bps.forEach(
    (bp) => {
      if (props[bp] && gridCols && bp in gridCols) {
        if (props[bp] in gridCols[bp]) {
          levers[bp] = gridCols[bp][props[bp]];
        }
      }
    }
  );

  return (
    <Element className={dcnb('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className)} ref={ref} {...rest}>
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
  xs: PropTypes.oneOf(Object.keys(gridCols.xs)),

  /**
   * Number of columns at SM breakpoint and up
   */
  sm: PropTypes.oneOf(Object.keys(gridCols.sm)),

  /**
   * Number of columns at MD breakpoint
   */
  md: PropTypes.oneOf(Object.keys(gridCols.md)),

  /**
   * Number of columns at LG breakpoint
   */
  lg: PropTypes.oneOf(Object.keys(gridCols.lg)),

  /**
   * Number of columns at XL breakpoint
   */
  xl: PropTypes.oneOf(Object.keys(gridCols.xl)),

  /**
   * Number of columns at 2XL breakpoint
   */
  xxl: PropTypes.oneOf(Object.keys(gridCols.xxl)),

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
