import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { tooltipAlignment } from './Tooltip.levers';

export const Tooltip = ({ alignment, className, children, tooltipText }) => {
  let alignmentWrapper = 'su-top-0 su-mt-20';
  let alignmentTooltipArrow = 'su--mb-5';

  switch (alignment) {
    case 'top':
      alignmentWrapper = ' su-bottom-0 su-mb-26';
      alignmentTooltipArrow = 'su-top-0 su--mb-4';
      break;

    case 'bottom':
      alignmentWrapper = 'su-top-0 su-mt-26';
      alignmentTooltipArrow = 'su-top-0 su--mt-4';
      break;

    case 'left':
      alignmentWrapper = 'su-right-0 su-mr-26';
      alignmentTooltipArrow = 'su-top-0 su--mr-16';
      break;

    case 'right':
      alignmentWrapper = 'su-left-0 su-ml-26';
      alignmentTooltipArrow = 'su-top-0 su--ml-16';
      break;

    default:
    // none
  }

  return (
    <div className="su-relative su-flex su-items-center su-group">
      {children}
      <div
        className={dcnb(
          'su-absolute su-hidden group-hover:su-flex group-focus:su-flex su-flex-col su-items-center su-mt-20 su-w-fit',
          alignmentWrapper
        )}
      >
        <span className="su-relative su-z-10 su-text-14 su-rounded su-leading-none su-text-white su-whitespace-no-wrap su-bg-cool-grey su-shadow-lg su-px-18 su-pb-18 su-pt-12 su-w-[50ch]">
          <div
            className={dcnb(
              'su-absolute su-w-06em su-h-06em su-rotate-45 su-bg-cool-grey',
              alignmentTooltipArrow
            )}
          />
          {tooltipText}
        </span>
      </div>
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Tooltip.propTypes = {
  // Tooltip Alignment
  alignment: PropTypes.oneOf(tooltipAlignment),

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
Tooltip.defaultProps = {
  alignment: 'bottom',
};
