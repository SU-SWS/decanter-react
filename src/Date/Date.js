import React from "react";
import PropTypes from "prop-types";
import Icon from "react-hero-icon";
import { dcnb } from "cnbuilder";
import { iconPosition } from "./Date.levers";

/**
 * Date Component
 *
 * HTML Date element
 */
export const Date = React.forwardRef(
  ({ className, position, value, label, id, onChange, ...props }) => {
    // Defaults & Variables.
    // ---------------------------------------------------------------------------
    const levers = {};

    // Levers
    // ---------------------------------------------------------------------------

    // position
    if (position && iconPosition.includes(position)) {
      switch (position) {
        case "left":
          levers.positionIcon = "su-left-0 su-ml-20";
          levers.positionWrapper = "su-pl-50";
          break;

        case "right":
          levers.positionIcon = "su-right-0 su-mr-20";
          levers.positionWrapper = "su-pr-50";
          break;

        default:
        // None.
      }
    }

    return (
      <div>
        <label htmlFor={id} className="su-text-lg su-mb-12 su-flex">
          {label}
        </label>
        <span className="su-border-b su-border-black-70 su-rounded su-inline-block su-relative">
          <input
            {...props}
            onChange={(e) => onChange(e.target.value)}
            className={dcnb(
              "su-text-18 su-p-20 su-border su-border-black-20",
              "focus:su-ring focus:su-ring-4 focus:su-ring-opacity-20 focus:su-ring-digital-blue-light",
              "focus:su-border-digital-blue focus:su-border-b-4 focus:su--mb-4 focus:su-rounded",
              levers.positionWrapper
            )}
            id={id}
            value={value}
            type="date"
            required
          />
          <Icon
            icon="calendar"
            className={dcnb(
              "su-absolute su-top-2/4 su-transform su--translate-y-2/4",
              levers.positionIcon
            )}
            type="outline"
            aria-hidden="true"
          />
        </span>
      </div>
    );
  }
);

Date.propTypes = {
  /**
   * Icon Position
   */
  position: PropTypes.oneOf(iconPosition),
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

// Default Props.
// -----------------------------------------------------------------------------
Date.defaultProps = {
  position: "right",
};
