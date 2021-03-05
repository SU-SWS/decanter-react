import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { flexCellElements, flexCellWidth, flexCellFlex, flexCellGrow, flexCellShrink, flexCellOrder } from './FlexCell.levers';

/**
 * Flex Cell component.
 * Options include HTML element, width (n-of-12 columns), flex, grow, shrink and order properties.
 *
 */
export const FlexCell = ({ className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (props.element && flexCellElements.includes(props.element)) {
    Element = props.element;
  }

  // props.xs to props.xxl controls width (n-of-12 columns) of the flex cell
  // props.xs
  if (props.xs && flexCellWidth.includes(props.xs)) {
    if (typeof props.xs === 'string') {
      levers.xs = `su-w-${props.xs}`;
    }
    else {
      levers.xs = `su-w-${props.xs}/12`;
    }
  }

  // props.sm
  if (props.sm && flexCellWidth.includes(props.sm)) {
    if (typeof props.sm === 'string') {
      levers.sm = `sm:su-w-${props.sm}`;
    }
    else {
      levers.sm = `sm:su-w-${props.sm}/12`;
    }
  }

  // props.md
  if (props.md && flexCellWidth.includes(props.md)) {
    if (typeof props.md === 'string') {
      levers.md = `md:su-w-${props.md}`;
    }
    else {
      levers.md = `md:su-w-${props.md}/12`;
    }
  }

  // props.lg
  if (props.lg && flexCellWidth.includes(props.lg)) {
    if (typeof props.lg === 'string') {
      levers.lg = `lg:su-w-${props.lg}`;
    }
    else {
      levers.lg = `lg:su-w-${props.lg}/12`;
    }
  }

  // props.xl
  if (props.xl && flexCellWidth.includes(props.xl)) {
    if (typeof props.xl === 'string') {
      levers.xl = `xl:su-w-${props.xl}`;
    }
    else {
      levers.xl = `xl:su-w-${props.xl}/12`;
    }
  }

  // props.xxl
  if (props.xxl && flexCellWidth.includes(props.xxl)) {
    if (typeof props.xxl === 'string') {
      levers.xxl = `xxl:su-w-${props.xxl}`;
    }
    else {
      levers.xxl = `xxl:su-w-${props.xxl}/12`;
    }
  }

  // props.flex
  if (props.flex && flexCellFlex.includes(props.flex)) {
    levers.flex = `su-flex-${props.flex}`;
  }

  // props.grow
  if (flexCellGrow.includes(props.grow)) {
    if (props.grow) {
      levers.grow = `su-flex-grow`;
    }
    else {
      levers.grow = `su-flex-grow-0`;
    }
  }

  // props.shrink
  if (flexCellShrink.includes(props.shrink)) {
    if (props.shrink) {
      levers.shrink = `su-flex-shrink`;
    }
    else {
      levers.shrink = `su-flex-shrink-0`;
    }
  }

  // props.order
  if (props.order && flexCellOrder.includes(props.order)) {
    levers.order = `su-order-${props.order}`;
  }

  return (
    <Element className={clsxd(levers.xs, levers.sm, levers.md, levers.lg, levers.xl, levers.xxl, levers.flex, levers.grow, levers.shrink, levers.order, className)} ref={ref}>
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
  xs: PropTypes.oneOf(flexCellWidth),

  /**
   * Width of the cell (n-of-12 Columns) from SM breakpoint and up.
   */
  sm: PropTypes.oneOf(flexCellWidth),

  /**
   * Width of the cell (n-of-12 Columns) from MD breakpoint and up.
   */
  md: PropTypes.oneOf(flexCellWidth),

  /**
   * Width of the cell (n-of-12 Columns) from LG breakpoint and up.
   */
  lg: PropTypes.oneOf(flexCellWidth),

  /**
   * Width of the cell (n-of-12 Columns) from XL breakpoint and up.
   */
  xl: PropTypes.oneOf(flexCellWidth),

  /**
   * Width of the cell (n-of-12 Columns) from 2XL breakpoint and up.
   */
  xxl: PropTypes.oneOf(flexCellWidth),

  /**
   * Flex property - for controlling how this cell both grow and shrink.
   */
  flex: PropTypes.oneOf(flexCellFlex),

  /**
   * Flex grow - is this cell allowed to grow to fill any available space?
   */
  grow: PropTypes.bool,

  /**
   * Flex shrink - is this cell allowed to shrink if needed?
   */
  shrink: PropTypes.bool,

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
FlexCell.defaultProps = {
};
