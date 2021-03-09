import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { gridCellElements, gridColSpan, gridColLine, gridRowSpan, gridRowLine } from './GridCell.levers';

/**
 * CSS Grid Cell component.
 * Options include column/row span and column/row start/end line.
 *
 */
export const GridCell = ({ className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (props.element && gridCellElements.includes(props.element)) {
    Element = props.element;
  }

  // props.xs to props.xxl controls column span of the grid cell

  // Available breakpoints
  const bps = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  // Looping over each breakpoint
  bps.forEach(
    (bp) => {
      if (props[bp] && gridColSpan.includes(props[bp])) {
        if (props[bp] === 'auto') {
          if (bp === 'xs') {
            levers[bp] = `su-col-auto`;
          }
          else if (bp === 'xxl') {
            levers[bp] = `2xl:su-col-auto`;
          }
          else {
            levers[bp] = bp + `:su-col-auto`;
          }
        }
        else if ((typeof props[bp] === 'number') || props[bp] === 'full') {
          if (bp === 'xs') {
            levers[bp] = `su-col-span-${props[bp]}`;
          }
          else if (bp === 'xxl') {
            levers[bp] = `2xl:su-col-span-${props[bp]}`;
          }
          else {
            levers[bp] = bp + `:su-col-span-${props[bp]}`;
          }
        }
      }
    }
  );

  // props.colStart
  if (props.colStart && gridColLine.includes(props.colStart)) {
    levers.colStart = `su-col-start-${props.colStart}`;
  }

  // props.rowSpan
  if (props.row && gridRowSpan.includes(props.row)) {
    levers.row = `su-row-span-${props.row}`;
    if (props.row === 'auto') {
      levers.row = `su-row-auto`;
    }
    else {
      levers.row = `su-row-span-${props.row}`;
    }
  }

  // props.rowStart
  if (props.rowStart && gridRowLine.includes(props.rowStart)) {
    levers.rowStart = `su-row-start-${props.rowStart}`;
  }

  return (
    <Element className={clsxd(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.colStart, levers.row, levers.rowStart, className)} ref={ref}>
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
GridCell.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(gridCellElements),

  /**
   * Number of columns the grid cell spans from device width 0 and up.
   */
  xs: PropTypes.oneOf(gridColSpan),

  /**
   * Number of columns the grid cell spans from SM breakpoint and up.
   */
  sm: PropTypes.oneOf(gridColSpan),

  /**
   * Number of columns the grid cell spans from MD breakpoint and up.
   */
  md: PropTypes.oneOf(gridColSpan),

  /**
   * Number of columns the grid cell spans from LG breakpoint and up.
   */
  lg: PropTypes.oneOf(gridColSpan),

  /**
   * Number of columns the grid cell spans from XL breakpoint and up.
   */
  xl: PropTypes.oneOf(gridColSpan),

  /**
   * Number of columns the grid cell spans from 2XL breakpoint and up.
   */
  xxl: PropTypes.oneOf(gridColSpan),

  /**
   * Start column line of the grid cell.
   */
  colStart: PropTypes.oneOf(gridColLine),

  /**
   * Number of rows the grid cell spans.
   */
  row: PropTypes.oneOf(gridRowSpan),

  /**
   * Start row line of the grid cell.
   */
  rowStart: PropTypes.oneOf(gridRowLine),

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),

  /**
   * Custom CSS classes, e.g., to change background color
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
GridCell.defaultProps = {
};
