import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDisplays, ContainerElements, ContainerWidths } from './Container.levers';

/**
 * Container component.
 *
 */
export const Container = ({ className, children, ref, ...props }) => {
  const classnames = require('classnames/dedupe');
  const levers = {};
  const Element = levers.element || 'div';

  // Levers
  // ---------------------------------------------------------------------------

  // props.display
  if (props.display && ContainerDisplays.includes(props.display)) {
    switch (props.display) {
      case 'block':
        levers.display = classnames('su-block');
        break;

      case 'flex':
        levers.display = classnames('su-flex');
        break;

      case 'grid':
        levers.wrapper = classnames('su-grid');
        break;
    }
  }

  // props.element
  if (props.element && ContainerElements.includes(props.element)) {
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
  if (props.width && ContainerWidths.includes(props.width)) {
    switch (props.width) {
      case 'full':
        levers.width = classnames('su-w-full');
        break;

      case 'screen':
        levers.width = classnames('su-w-screen');
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
  element: PropTypes.oneOf(ContainerElement),

  /**
   * What type of CSS display?
   */
  display: PropTypes.oneOf(ContainerDisplay),

  width: PropTypes.oneOf(ContainerWidth),

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
