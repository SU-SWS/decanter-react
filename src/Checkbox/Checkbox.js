import React from "react";
import PropTypes from "prop-types";
import { checkboxPosition, checkboxSize } from "./Checkbox.levers";

/**
 * Checkbox Component
 *
 * HTML checkbox element
 */
export const Checkbox = React.forwardRef(
  ({ className, onClick, position, size, ...props }) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};

    // Levers
    // ---------------------------------------------------------------------------

    // position
    if (position && checkboxPosition.includes(position)) {
      switch (position) {
        case "left":
          levers.position = "su-mr-6";
          break;

        case "right":
          levers.position = "su-order-1 su-ml-6";
          break;

        default:
        // None.
      }
    }
    // size
    if (size && checkboxSize.includes(size)) {
      switch (size) {
        case "small":
          levers.boxSizeOptions = "su-w-[20px] su-h-[20px]";
          levers.textSizeOptions = "su-text-16";
          break;

        case "large":
          levers.boxSizeOptions = "su-w-[24px] su-h-[24px]";
          levers.textSizeOptions = "su-text-18";
          break;

        default:
        // None.
      }
    }

    return (
      <div>
        <label
          className={`su-label su-flex su-items-center su-cursor-pointer ${className}`}
        >
          <div
            className={`su-w-[34px] su-h-[34px] su-rounded-full
          su-overflow-hidden su-flex su-items-center su-justify-center
          ${levers.boxSizeOptions}
          ${levers.position}`}
          >
            <input
              type="checkbox"
              className="su-border-black-50 su-rounded"
              value={props.value}
              name={props.name}
              defaultChecked={props.isDefaultChecked}
              onChange={(e) => onClick(e)}
            />
          </div>
          <span className={levers.textSizeOptions}>{props.name}</span>
        </label>
      </div>
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

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
Checkbox.defaultProps = {
  position: "left",
  size: "small",
};
