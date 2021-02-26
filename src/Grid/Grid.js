import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { gridGap, gridNumCols, gridElements } from './Grid.levers';
import { containerElements } from "../Container/Container.levers";

/**
 * CSS Grid component.
 * Options with number of columns for each breakpoint and whether to use responsive grid gaps.
 *
 */
export const Grid = ({ className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (props.element && gridElements.includes(props.element)) {
    Element = props.element;
  }

  // props.gap
  if (props.gap && gridGap.includes(props.gap)) {
    levers.gap = 'su-grid-gap';
  }

  // props.xs
  if (props.xs && gridNumCols.includes(props.xs)) {
    levers.xs = `su-grid-cols-${props.xs}`;
  }

  // props.sm
  if (props.sm && gridNumCols.includes(props.sm)) {
    levers.sm = `sm:su-grid-cols-${props.sm}`;
  }

  // props.md
  if (props.md && gridNumCols.includes(props.md)) {
    levers.md = `md:su-grid-cols-${props.md}`;
  }

  // props.lg
  if (props.lg && gridNumCols.includes(props.lg)) {
    levers.lg = `lg:su-grid-cols-${props.lg}`;
  }

  // props.xl
  if (props.xl && gridNumCols.includes(props.xl)) {
    levers.xl = `xl:su-grid-cols-${props.xl}`;
  }

  // props.xxl
  if (props.xxl && gridNumCols.includes(props.xxl)) {
    levers.xxl = `2xl:su-grid-cols-${props.xxl}`;
  }

  return (
    <Element className={clsxd('su-grid', levers.gap, levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, className)} ref={ref}>
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
};

// Default Props.
// -----------------------------------------------------------------------------
Grid.defaultProps = {
  element: 'div',
  gap: false
};
