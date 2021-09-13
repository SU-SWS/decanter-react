import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { labelWeights } from "./Label.levers";

export const Label = ({ children, id, text, helpText, fontWeight }) => {
  // Defaults & Variables.
  // ---------------------------------------------------------------------------
  let weight = "regular";

  // Font Weight
  if (fontWeight && fontWeight in labelWeights) {
    weight = labelWeights[fontWeight];
  }

  return (
    <div>
      <label
        className={dcnb("su-label su-mb-5 su-text-18", weight)}
        htmlFor={id}
      >
        {text}
      </label>
      <p className="su-text-cool-grey su-mb-5 su-text-18 su-sans">{helpText}</p>
      {children}
    </div>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
Label.propTypes = {
  /**
   * Font weight.
   */
  fontWeight: PropTypes.oneOf(Object.keys(labelWeights)),

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