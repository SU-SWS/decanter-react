import Tooltip from '@mui/material/Tooltip';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../Button/Button';
import { alignOptions } from './ToolTip.levers';

export const ToolTip = ({ alignment, className, children, text, ...props }) => {
  const toolTipStyles = {
    tooltip: dcnb(
      className,
      '!su-px-9 !su-py-6 !su-sans !su-text-14 !su-text-white !su-bg-cool-grey !su-color-cool-grey !su-shadow !su-max-w-[50ch]'
    ),
    tooltipArrow: '!su-bg-cool-grey !su-color-cool-grey',
  };

  return (
    <Tooltip
      {...props}
      title={text}
      placement={alignment}
      classes={toolTipStyles}
    >
      <Button
        variant="unset"
        size="unset"
        className="su-leading-trim su-shadow-none hocus:su-shadow-none su-rounded-full su-p-0 children:su-m-0 children:su-text-black hocus:children:su-text-digital-blue active:children:su-text-digital-blue"
        icon="info"
      />
    </Tooltip>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
ToolTip.propTypes = {
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
ToolTip.defaultProps = {
  alignment: 'bottom',
};
