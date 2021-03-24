import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { flexElements, flexDirection, flexWrap, flexGap, flexJustifyContent, flexJustifyItems, flexAlignContent, flexAlignItems } from './FlexBox.levers';

/**
 * FlexBox component.
 * Options for flex direction, wrapping and box alignments.
 *
 */
export const FlexBox = ({ element, direction, wrap, gap, justifyContent, justifyItems, alignContent, alignItems, className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = 'div';

  if (element && flexElements.includes(element)) {
    Element = element;
  }

  // props.direction
  if (direction && flexDirection.includes(direction)) {
    levers.direction = `su-flex-${direction}`;
  }

  // props.wrap
  if (wrap && flexWrap.includes(wrap)) {
    levers.wrap = `su-flex-${wrap}`;
  }

  // props.gap
  if (gap && flexGap.includes(gap)) {
    levers.gap = 'su-grid-gap';
  }

  // props.justifyContent
  if (justifyContent && flexJustifyContent.includes(justifyContent)) {
    switch (justifyContent) {
      case 'start':
        levers.justifyContent = 'su-justify-start';
        break;

      case 'end':
        levers.justifyContent = 'su-justify-end';
        break;

      case 'center':
        levers.justifyContent = 'su-justify-center';
        break;

      case 'space-between':
        levers.justifyContent = 'su-justify-between';
        break;

      case 'space-around':
        levers.justifyContent = 'su-justify-around';
        break;

      case 'space-evenly':
        levers.justifyContent = 'su-justify-evenly';
        break;
    }
  }

  // props.justifyItems
  if (justifyItems && flexJustifyItems.includes(justifyItems)) {
    levers.justifyItems = `su-justify-items-${justifyItems}`;
  }

  // props.alignContent
  if (alignContent && flexAlignContent.includes(alignContent)) {
    switch (alignContent) {
      case 'start':
        levers.alignContent = 'su-content-start';
        break;

      case 'end':
        levers.alignContent = 'su-content-end';
        break;

      case 'center':
        levers.alignContent = 'su-content-center';
        break;

      case 'space-between':
        levers.alignContent = 'su-content-between';
        break;

      case 'space-around':
        levers.alignContent = 'su-content-around';
        break;

      case 'space-evenly':
        levers.alignContent = 'su-content-evenly';
        break;
    }
  }

  // props.alignItems
  if (alignItems && flexAlignItems.includes(alignItems)) {
    levers.alignItems = `su-items-${alignItems}`;
  }

  return (
    <Element className={dcnb('su-flex', levers.direction, levers.wrap, levers.gap, levers.justifyContent, levers.justifyItems, levers.alignContent, levers.alignItems, className)} ref={ref} {...props}>
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
  direction: PropTypes.oneOf(flexDirection),
  wrap: PropTypes.oneOf(flexWrap),
  gap: PropTypes.bool,
  justifyContent: PropTypes.oneOf(flexJustifyContent),
  justifyItems: PropTypes.oneOf(flexJustifyItems),
  alignContent: PropTypes.oneOf(flexAlignContent),
  alignItems: PropTypes.oneOf(flexAlignItems),

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
FlexBox.defaultProps = {
  element: 'div',
  direction: 'row',
  gap: false,
};
