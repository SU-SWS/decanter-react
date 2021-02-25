import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';
import { flexDirection, flexWrap, flexGap, flexJustifyContent, flexJustifyItems, flexAlignContent, flexAlignItems } from './FlexBox.levers';

/**
 * FlexBox component.
 * Options for flex direction, wrapping and box alignments.
 *
 */
export const FlexBox = ({ className, children, ref, ...props }) => {
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.direction
  if (props.direction && flexDirection.includes(props.direction)) {
    levers.direction = `su-flex-${props.direction}`;
  }

  // props.wrap
  if (props.wrap && flexWrap.includes(props.wrap)) {
    levers.wrap = `su-flex-${props.wrap}`;
  }

  // props.gap
  if (props.gap && flexGap.includes(props.gap)) {
    levers.gap = 'su-grid-gap';
  }

  // props.justifyContent
  if (props.justifyContent && flexJustifyContent.includes(props.justifyContent)) {
    switch (props.justifyContent) {
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
  if (props.justifyItems && flexJustifyItems.includes(props.justifyItems)) {
    levers.justifyItems = `su-justify-items-${props.justifyItems}`;
  }

  // props.alignContent
  if (props.alignContent && flexAlignContent.includes(props.alignContent)) {
    switch (props.alignContent) {
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
  if (props.alignItems && flexAlignItems.includes(props.alignItems)) {
    levers.alignItems = `su-items-${props.alignItems}`;
  }

  return (
    <div className={clsxd('su-flex', levers.direction, levers.wrap, levers.gap, levers.justifyContent, levers.justifyItems, levers.alignContent, levers.alignItems, className)} ref={ref}>
      {children}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
FlexBox.propTypes = {
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
};

// Default Props.
// -----------------------------------------------------------------------------
FlexBox.defaultProps = {
  direction: 'row',
  gap: false,
};
