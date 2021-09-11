import React from "react";
import PropTypes from "prop-types";

export const InlineError = ({ className, text, icon, isError }) => (
  <>
    {isError && (
      <div className={className}>
        <span>{icon}</span>
        <p>{text}</p>
      </div>
    )}
  </>
);

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

  // Is there an error message?
  isError: PropTypes.bool,
};

// Default Props.
// -----------------------------------------------------------------------------
InlineError.defaultProps = {};
