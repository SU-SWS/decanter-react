import React from 'react';
import PropTypes from 'prop-types';
import { checkboxPosition, checkboxSize } from './Checkbox.levers';

/**
 * Checkbox Component
 *
 * HTML checkbox element
 */
export const Checkbox = React.forwardRef(
  ({ className, onClick, position, size, children, ...props }, ref) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};

    // Levers
    // ---------------------------------------------------------------------------

    // position
    if (position && checkboxPosition.includes(position)) {
      switch (position) {
        case 'left':
          levers.position = 'su-mr-6';
          break;

        case 'right':
          levers.position = 'su-order-1 su-ml-6';
          break;

        default:
        // None.
      }
    }
    // size
    if (size && checkboxSize.includes(size)) {
      switch (size) {
        case 'small':
          levers.containerSizeOptions = 'su-w-[34px] su-h-[34px]';
          levers.boxSizeOptions = 'su-w-[20px] su-h-[20px]';
          levers.textSizeOptions = 'su-text-16';
          break;

        case 'large':
          levers.containerSizeOptions = 'su-w-[38px] su-h-[38px]';
          levers.boxSizeOptions = 'su-w-[23px] su-h-[23px]';
          levers.textSizeOptions = 'su-text-18';
          break;

        default:
        // None.
      }
    }

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        className={`su-label su-flex su-items-center su-cursor-pointer ${className} ${levers.textSizeOptions}`}
      >
        <div
          className={`su-rounded-full
          su-overflow-hidden su-flex su-items-center su-justify-center
          ${levers.containerSizeOptions}
          ${levers.position}`}
        >
          <input
            type="checkbox"
            className={`su-border-black-50 su-rounded su-border-2
            focus-visible:su-ring-offset-0 focus-visible:su-ring-8 focus-visible:su-border-digital-blue
            hocus:su-ring-offset-0 hocus:su-ring-8
            focus-visible:su-ring-digital-blue-light focus-visible:su-ring-opacity-50
            focus-visible:su-bg-digital-blue-light focus-visible:su-bg-opacity-50
            focus-visible:su-border-digital-blue focus-visible:su-border-opacity-50 focus-visible:su-border-[3px]
            focus:su-ring-digital-blue-light focus:su-ring-opacity-50 focus:su-bg-digital-blue-light
            focus:su-bg-opacity-50 focus:su-border-digital-blue focus:su-border-opacity-50 focus:su-border-[3px]
            hover:su-ring-digital-blue-light hover:su-ring-opacity-20 hover:su-bg-digital-blue-light
            hover:su-border-digital-blue hover:su-border-opacity-70 hover:su-bg-opacity-20
            checked:su-ring-2 checked:su-border-digital-blue
             ${levers.boxSizeOptions}`}
            value={props.value}
            name={props.name}
            defaultChecked={props.isDefaultChecked}
            onChange={(e) => onClick(e)}
          />
        </div>
        {props.name}
        {children}
      </label>
    );
  }
);

Checkbox.propTypes = {
  /**
   * Checkbox position
   */
  position: PropTypes.oneOf(checkboxPosition),

  /**
   * Checkbox size
   */
  size: PropTypes.oneOf(checkboxSize),
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

// Default Props.
// -----------------------------------------------------------------------------
Checkbox.defaultProps = {
  position: 'left',
  size: 'small',
};
