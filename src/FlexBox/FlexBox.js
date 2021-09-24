import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import {
  flexElements,
  flexDirection,
  flexWrap,
  flexGap,
  flexJustifyContent,
  flexJustifyItems,
  flexAlignContent,
  flexAlignItems,
} from './FlexBox.levers';

/**
 * FlexBox component.
 * Options for flex direction, wrapping and box alignments.
 *
 */
export const FlexBox = ({
  element,
  direction,
  wrap,
  gap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  className,
  children,
  ref,
  ...props
}) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (element && flexElements.includes(element)) {
    Element = element;
  }

  // props.direction
  if (direction && direction in flexDirection) {
    levers.direction = flexDirection[direction];
  }

  // props.wrap
  if (wrap && wrap in flexWrap) {
    levers.wrap = flexWrap[wrap];
  }

  // props.gap
  if (gap && flexGap.includes(gap)) {
    levers.gap = 'su-grid-gap';
  }

  // props.justifyContent
  if (justifyContent && justifyContent in flexJustifyContent) {
    levers.justifyContent = flexJustifyContent[justifyContent];
  }

  // props.justifyItems
  if (justifyItems && justifyItems in flexJustifyItems) {
    levers.justifyItems = flexJustifyItems[justifyItems];
  }

  // props.alignContent
  if (alignContent && alignContent in flexAlignContent) {
    levers.alignContent = flexAlignContent[alignContent];
  }

  // props.alignItems
  if (alignItems && alignItems in flexAlignItems) {
    levers.alignItems = flexAlignItems[alignItems];
  }

  return (
    <Element
      className={dcnb(
        'su-flex',
        levers.direction,
        levers.wrap,
        levers.gap,
        levers.justifyContent,
        levers.justifyItems,
        levers.alignContent,
        levers.alignItems,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
FlexBox.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(flexElements),
  direction: PropTypes.oneOf(Object.keys(flexDirection)),
  wrap: PropTypes.oneOf(Object.keys(flexWrap)),
  gap: PropTypes.bool,
  justifyContent: PropTypes.oneOf(Object.keys(flexJustifyContent)),
  justifyItems: PropTypes.oneOf(Object.keys(flexJustifyItems)),
  alignContent: PropTypes.oneOf(Object.keys(flexAlignContent)),
  alignItems: PropTypes.oneOf(Object.keys(flexAlignItems)),

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /**
   * React useRef()
   */
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
FlexBox.defaultProps = {
  element: 'div',
  direction: 'row',
  gap: false,
};
