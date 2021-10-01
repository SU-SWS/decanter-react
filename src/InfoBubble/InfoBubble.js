import { ClickAwayListener } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { alignOptions } from './InfoBubble.levers';

export const InfoBubble = ({
  alignment,
  className,
  children,
  text,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const bubbleStyles = {
    tooltip: dcnb(
      className,
      '!su-px-18 !su-pb-18 !su-pt-12 !su-sans !su-text-14 !su-text-black !su-bg-black-10 !su-color-black-10 !su-shadow !su-max-w-[25ch]'
    ),
    tooltipArrow: '!su-bg-black-10 !su-color-black-10',
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        {...props}
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={text}
        placement={alignment}
        classes={bubbleStyles}
      >
        <Button
          variant="unset"
          size="unset"
          className="su-leading-trim su-shadow-none hocus:su-shadow-none su-rounded-full su-p-0 children:su-m-0 children:su-text-black hocus:children:su-text-digital-blue active:children:su-text-digital-blue"
          icon="info"
          onClick={handleTooltipOpen}
        />
      </Tooltip>
    </ClickAwayListener>
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
