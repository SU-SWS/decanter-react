import React from 'react';
import PropTypes from 'prop-types';
import clsxd from 'clsx-dedupe';

/**
 * Skiplink component for accessibility.
 *
 */
export const Skiplink = ({ anchorLink, className, children, ...props }) => {
  return (
    <a href={anchorLink ?? '#main-content'} className={clsxd('su-skiplink', className)} {...props}>
      {children ?? 'Skip to main content'}
    </a>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Skiplink.propTypes = {

  /**
   * Custom CSS classes, e.g., to control position
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),



  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

// Default Props.
// -----------------------------------------------------------------------------
Skiplink.defaultProps = {
};
