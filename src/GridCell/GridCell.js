import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import {
  gridCellElements,
  gridColBPs,
  gridColSpan,
  gridColLine,
  gridRowSpan,
  gridRowLine,
} from './GridCell.levers';
import intKeys from '../common/util/intKeys';

/**
 * CSS Grid Cell component.
 * Options include column/row span and column/row start/end line.
 *
 */
export const GridCell = ({
  className,
  children,
  ref,
  colStart,
  rowStart,
  row,
  ...props
}) => {
  const levers = {};
  // Destructure the props a bit more so we can add the rest to the element.
  const { xs, sm, md, lg, xl, xxl, ...rest } = props; // eslint-disable-line no-unused-vars

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (props.element && gridCellElements.includes(props.element)) {
    Element = props.element;
  }

  // props.xs to props.xxl controls column span of the grid cell

  // Available breakpoints
  const bps = Object.keys(gridColBPs);

  // Looping over each breakpoint to create the `su-col-` classes
  bps.forEach((bp) => {
    if (props[bp] && gridColSpan && bp in gridColSpan) {
      if (props[bp] in gridColSpan[bp]) {
        levers[bp] = gridColSpan[bp][props[bp]];
      }
    }
  });

  // props.colStart
  if (colStart && colStart in gridColLine) {
    levers.colStart = gridColLine[colStart];
  }

  // props.row - controls row span of the cell
  // If row span changes for different breakpoints, pass responsive TW classes through className
  if (row && row in gridRowSpan) {
    levers.row = gridRowSpan[row];
  }

  // props.rowStart
  if (rowStart && rowStart in gridRowLine) {
    levers.rowStart = gridRowLine[rowStart];
  }

  return (
    <Element
      className={dcnb(
        levers.xs,
        levers.sm,
        levers.md,
        levers.lg,
        levers.xl,
        levers.xxl,
        levers.colStart,
        levers.row,
        levers.rowStart,
        className
      )}
      ref={ref}
      {...rest}
    >
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
  xs: PropTypes.oneOf(Object.keys(gridColSpan.xs).map((val) => intKeys(val))),

  /**
   * Number of columns the grid cell spans from SM breakpoint and up.
   */
  sm: PropTypes.oneOf(Object.keys(gridColSpan.sm).map((val) => intKeys(val))),

  /**
   * Number of columns the grid cell spans from MD breakpoint and up.
   */
  md: PropTypes.oneOf(Object.keys(gridColSpan.md).map((val) => intKeys(val))),

  /**
   * Number of columns the grid cell spans from LG breakpoint and up.
   */
  lg: PropTypes.oneOf(Object.keys(gridColSpan.lg).map((val) => intKeys(val))),

  /**
   * Number of columns the grid cell spans from XL breakpoint and up.
   */
  xl: PropTypes.oneOf(Object.keys(gridColSpan.xl).map((val) => intKeys(val))),

  /**
   * Number of columns the grid cell spans from 2XL breakpoint and up.
   */
  xxl: PropTypes.oneOf(Object.keys(gridColSpan.xxl).map((val) => intKeys(val))),

  /**
   * Start column line of the grid cell.
   */
  colStart: PropTypes.oneOf(
    Object.keys(gridColLine).map((val) => intKeys(val))
  ),

  /**
   * Number of rows the grid cell spans.
   */
  row: PropTypes.oneOf(Object.keys(gridRowSpan).map((val) => intKeys(val))),

  /**
   * Start row line of the grid cell.
   */
  rowStart: PropTypes.oneOf(
    Object.keys(gridRowLine).map((val) => intKeys(val))
  ),

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  /**
   * Custom CSS classes, e.g., to change background color
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
GridCell.defaultProps = {};
