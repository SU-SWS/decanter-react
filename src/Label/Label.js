import React from "react";
import PropTypes from "prop-types";

export const Label = ({ children, id, text, helpText }) => (
  <div>
    <label className="su-label" htmlFor={id}>
      {text}
    </label>
    <p>{helpText}</p>
    {children}
  </div>
);

// Prop Types.
// -----------------------------------------------------------------------------
Label.propTypes = {
  // Label text
  text: PropTypes.string,

  // Help text
  helpText: PropTypes.string,

  // Label and Input ID
  id: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
Label.defaultProps = {};
