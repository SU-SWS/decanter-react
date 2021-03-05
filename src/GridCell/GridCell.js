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
  // props.xs
  if (props.xs && gridColSpan.includes(props.xs)) {
    if (props.xs === 'auto') {
      levers.xs = `su-col-auto`;
    }
    else {
      levers.xs = `su-col-span-${props.xs}`;
    }
  }


  // props.sm
  if (props.sm && gridColSpan.includes(props.sm)) {
    if (props.sm === 'auto') {
      levers.sm = `sm:su-col-auto`;
    }
    else {
      levers.sm = `sm:su-col-span-${props.sm}`;
    }
  }

  // props.md
  if (props.md && gridColSpan.includes(props.md)) {
    if (props.md === 'auto') {
      levers.md = `md:su-col-auto`;
    }
    else {
      levers.md = `md:su-col-span-${props.md}`;
    }
  }

  // props.lg
  if (props.lg && gridColSpan.includes(props.lg)) {
    if (props.lg === 'auto') {
      levers.lg = `lg:su-col-auto`;
    }
    else {
      levers.lg = `lg:su-col-span-${props.lg}`;
    }
  }

  // props.xl
  if (props.xl && gridColSpan.includes(props.xl)) {
    if (props.xl === 'auto') {
      levers.xl = `xl:su-col-auto`;
    }
    else {
      levers.xl = `xl:su-col-span-${props.xl}`;
    }
  }

  // props.xxl
  if (props.xxl && gridColSpan.includes(props.xxl)) {
    if (props.xxl === 'auto') {
      levers.xxl = `2xl:su-col-auto`;
    }
    else {
      levers.xxl = `2xl:su-col-span-${props.xxl}`;
    }
  }

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
  element: 'div'
};
