import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import Icon from "react-hero-icon";

export const InlineError = ({ className, errorText, icon, iconType }) => {
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
      {errorText && (
        <div className={dcnb("su-text-digital-red", className)}>
          <p className="su-text-16">
            {defaultIcon}
            {errorText}
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
  className: PropTypes.string,

  // Error message
  errorText: PropTypes.string,

  // Icon name
  icon: PropTypes.string,

  // Icon Type
  iconType: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
InlineError.defaultProps = {
  icon: "x",
  iconType: "solid",
};
