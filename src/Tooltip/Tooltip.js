import PropTypes from 'prop-types';
import React from 'react';

export const Tooltip = ({ className, children, tooltipText }) => (
  <div className="su-relative su-flex su-items-center su-group">
    {children}
    <div className="su-absolute su-top-0 su-hidden group-hover:su-flex su-flex-col su-items-center su-mt-20 su-w-fit">
      <div className="su-w-05em su-h-05em su--mb-5 su-rotate-45 su-bg-cool-grey" />
      <span className="su-relative su-z-10 su-text-14 su-rounded su-leading-none su-text-white su-whitespace-no-wrap su-bg-cool-grey su-shadow-lg su-px-18 su-pb-18 su-pt-12 su-w-[50ch]">
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
