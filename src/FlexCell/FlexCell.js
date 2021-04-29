import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { flexCellBPs, flexCellElements, flexCellWidth, flexCellFlex, flexCellGrow, flexCellShrink, flexCellOrder } from './FlexCell.levers';

/**
 * Flex Cell component.
 * Options include HTML element, width (n-of-12 columns), flex, grow, shrink and order properties.
 *
 */
export const FlexCell = ({ className, children, ref, flex, grow, shrink, order, element, ...props }) => {
  const levers = {};
  // Destructure the props a bit more so we can add the rest to the element.
  const { xs, sm, md, lg, xl, xxl, ...rest } = props;

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (element && flexCellElements.includes(element)) {
    Element = element;
  }

  // props.xs to props.xxl controls width (n-of-12 columns) of the flex cell

  // Available breakpoints
  const bps = Object.keys(flexCellBPs);

  // Looping over each breakpoint
  bps.forEach(
    (bp) => {
      if (props[bp] && flexCellWidth && bp in flexCellWidth) {
        if (props[bp] in flexCellWidth[bp]) {
          levers[bp] = flexCellWidth[bp][props[bp]];
        }
      }
    }
  );

  // props.flex
  if (flex && flex in flexCellFlex) {
    levers.flex = flexCellFlex[flex];
  }

  // props.grow
  if (flexCellGrow.includes(grow)) {
    if (grow) {
      levers.grow = `su-flex-grow`;
    }
    else {
      levers.grow = `su-flex-grow-0`;
    }
  }

  // props.shrink
  if (flexCellShrink.includes(shrink)) {
    if (shrink) {
      levers.shrink = `su-flex-shrink`;
    }
    else {
      levers.shrink = `su-flex-shrink-0`;
    }
  }

  // props.order
  if (order && order in flexCellOrder) {
    levers.order = flexCellOrder[order];
  }

  return (
    <Element className={dcnb(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.flex, levers.grow, levers.shrink, levers.order, className)} ref={ref} {...rest}>
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
FlexCell.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(flexCellElements),

  /**
   * Width of the cell (n-of-12 Columns) from device width 0 and up.
   */
  xs: PropTypes.oneOf(Object.keys(flexCellWidth.xs)),

  /**
   * Width of the cell (n-of-12 Columns) from SM breakpoint and up.
   */
  sm: PropTypes.oneOf(Object.keys(flexCellWidth.sm)),

  /**
   * Width of the cell (n-of-12 Columns) from MD breakpoint and up.
   */
  md: PropTypes.oneOf(Object.keys(flexCellWidth.md)),

  /**
   * Width of the cell (n-of-12 Columns) from LG breakpoint and up.
   */
  lg: PropTypes.oneOf(Object.keys(flexCellWidth.lg)),

  /**
   * Width of the cell (n-of-12 Columns) from XL breakpoint and up.
   */
  xl: PropTypes.oneOf(Object.keys(flexCellWidth.xl)),

  /**
   * Width of the cell (n-of-12 Columns) from 2XL breakpoint and up.
   */
  xxl: PropTypes.oneOf(Object.keys(flexCellWidth.xxl)),

  /**
   * Flex property - for controlling how this cell both grow and shrink.
   */
  flex: PropTypes.oneOf(Object.keys(flexCellFlex)),

  /**
   * Flex grow - is this cell allowed to grow to fill any available space?
   */
  grow: PropTypes.bool,

  /**
   * Flex shrink - is this cell allowed to shrink if needed?
   */
  shrink: PropTypes.bool,

  /**
   * Flex order - for controlling which order the item should appear in.
   */
  order: PropTypes.oneOf(Object.keys(flexCellOrder)),

  /**
   * Children types.
   */
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
FlexCell.defaultProps = {};
