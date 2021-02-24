import React from 'react';
import PropTypes from 'prop-types';
import { containerElements, containerWidths } from './Container.levers';

/**
 * Container component with width and HTML element options.
 *
 */
export const Container = ({ className, children, ref, ...props }) => {
  const classnames = require('classnames/dedupe');
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.element
  let Element = "";

  if (props.element && containerElements.includes(props.element)) {
    Element = props.element ?? 'div';
  }

  // props.width
  if (props.width && containerWidths.includes(props.width)) {
    switch (props.width) {
      case 'full':
        levers.width = classnames('su-w-full'); // width: 100%
        break;

      case 'screen':
        levers.width = classnames('su-w-screen'); // width: 100vw
        break;

      case 'centered-container':
        levers.width = classnames('su-cc');
        break;
    }
  }

  return (
    <Element className={classnames(levers.width, className)}>
      {children}
    </Element>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Container.propTypes = {
  /**
   * Which HTML element?
   */
  element: PropTypes.oneOf(containerElements),
  width: PropTypes.oneOf(containerWidths),
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
Container.defaultProps = {
  element: 'div',
  width: 'centered-container'
};
