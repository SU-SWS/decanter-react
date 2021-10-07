import PropTypes from 'prop-types';
import React from 'react';

export const Tooltip = ({ className, children, tooltipText }) => (
  <div className="su-relative su-flex su-items-center su-group">
    {children}
    <div className="su-absolute su-top-0 su-hidden su-group-hover:su-flex su-flex-col su-items-center su-mt-26">
      <div className="su-w-08em su-h-08em su--mb-2 su-rotate-45 su-bg-black" />
      <span className="su-relative su-z-10 su-p-2 su-text-18 su-leading-none su-text-white su-whitespace-no-wrap su-bg-black su-shadow-lg">
        {tooltipText}
      </span>
    </div>
  </div>
);

// Prop Types.
// -----------------------------------------------------------------------------
Tooltip.propTypes = {
  // CSS Classes.
  className: PropTypes.string,

  // Tool tip message
  tooltipText: PropTypes.string,

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Tooltip.defaultProps = {};
