import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import Icon from "react-hero-icon";

export const InlineError = ({ className, text, icon, iconType, isError }) => {
  const iconProps = { height: 20, width: 20 };

  // Default Icon.
  let defaultIcon = (
    <Icon
      icon="x"
      type="sold"
      aria-hidden="true"
      className="su-text-digital-red su-inline su-mr-3"
      {...iconProps}
    />
  );

  if (icon) {
    defaultIcon = (
      <Icon
        icon={icon}
        type={iconType}
        aria-hidden="true"
        className="su-text-digital-red su-inline su-mr-3"
        {...iconProps}
      />
    );
  }

  return (
    <>
      {isError && (
        <div className={dcnb("su-text-digital-red", className)}>
          <p className="su-text-16">
            {defaultIcon}
            {text}
          </p>
        </div>
      )}
    </>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
InlineError.propTypes = {
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  // Error message
  text: PropTypes.string,

  // Icon name
  icon: PropTypes.string,

  // Icon Type
  iconType: PropTypes.string,

  // Is there an error message?
  isError: PropTypes.bool,
};

// Default Props.
// -----------------------------------------------------------------------------
InlineError.defaultProps = {
  icon: "x",
  iconType: "solid",
  isError: false,
};
