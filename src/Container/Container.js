import React from 'react';
import PropTypes from 'prop-types';
import { containerDisplays, containerElements, containerWidths } from './Container.levers';

/**
 * Container component.
 *
 */
export const Container = ({ className, children, ref, ...props }) => {
  const classnames = require('classnames/dedupe');
  const levers = {};

  // Levers
  // ---------------------------------------------------------------------------

  // props.display
  if (props.display && containerDisplays.includes(props.display)) {
    switch (props.display) {
      case 'block':
        levers.display = classnames('su-block');
        break;

      case 'flex':
        levers.display = classnames('su-flex');
        break;

      case 'grid':
        levers.display = classnames('su-grid');
        break;
    }
  }

  // props.element
  const Element = props.element ?? 'div';

  if (props.element && containerElements.includes(props.element)) {
    switch (props.element) {
      case 'div':
        levers.element = 'div';
        break;

      case 'section':
        levers.element = 'section';
        break;

      case 'article':
        levers.element = 'article';
        break;

      case 'main':
        levers.element = 'main';
        break;

      case 'footer':
        levers.element = 'footer';
        break;

      case 'header':
        levers.element = 'header';
        break;

      case 'aside':
        levers.element = 'aside';
        break;
    }
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
    <Element className={classnames(levers.display, levers.width, className)}>
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

  /**
   * What type of CSS display?
   */
  display: PropTypes.oneOf(containerDisplays),

  width: PropTypes.oneOf(containerWidths),

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
  display: 'block',
  width: 'centered-container'
};
