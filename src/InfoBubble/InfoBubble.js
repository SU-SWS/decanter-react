import Tooltip from '@mui/material/Tooltip';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { alignOptions } from './InfoBubble.levers';

export const InfoBubble = ({
  alignment,
  className,
  children,
  text,
  ...props
}) => {
  const bubbleStyles = {
    tooltip: dcnb(
      className,
      '!su-text-18 !su-text-black !su-bg-black-10 !su-color-black-10 !su-shadow'
    ),
    tooltipArrow: '!su-bg-black-10 !su-color-black-10',
  };

  return (
    <Tooltip
      {...props}
      title={text}
      placement={alignment}
      classes={bubbleStyles}
    >
      {children}
    </Tooltip>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
InfoBubble.propTypes = {
  // Bubble alignment
  alignment: PropTypes.oneOf(alignOptions),

  // CSS Classes.
  className: PropTypes.string,

  // Children
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),

  // Text
  text: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
InfoBubble.defaultProps = {
  alignment: 'top',
};
