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

  // props.colSpan
  if (props.colSpan && gridColSpan.includes(props.colSpan)) {
    if (props.colSpan === 'auto') {
      levers.colSpan = `su-col-auto`;
    }
    else {
      levers.colSpan = `su-col-span-${props.colSpan}`;
    }
  }

  // props.colStart
  if (props.colStart && gridColLine.includes(props.colStart)) {
    levers.colStart = `su-col-start-${props.colStart}`;
  }

  // props.rowSpan
  if (props.rowSpan && gridRowSpan.includes(props.rowSpan)) {
    levers.rowSpan = `su-row-span-${props.rowSpan}`;
    if (props.rowSpan === 'auto') {
      levers.rowSpan = `su-row-auto`;
    }
    else {
      levers.rowSpan = `su-row-span-${props.rowSpan}`;
    }
  }

  // props.rowStart
  if (props.rowStart && gridRowLine.includes(props.rowStart)) {
    levers.rowStart = `su-row-start-${props.rowStart}`;
  }

  return (
    <Element className={clsxd(levers.colSpan, levers.colStart, levers.rowSpan, levers.rowStart, className)} ref={ref}>
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
   * Number of columns the grid cell spans.
   */
  colSpan: PropTypes.oneOf(gridColSpan),

  /**
   * Start column line of the grid cell.
   */
  colStart: PropTypes.oneOf(gridColLine),

  /**
   * Number of rows the grid cell spans.
   */
  rowSpan: PropTypes.oneOf(gridRowSpan),

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
