import React from 'react';
import PropTypes from "prop-types";

export const SrOnlyText = (props) => {
  return (
    <span className='su-sr-only'>{props.srText ?? '(link is external)'}</span>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
SrOnlyText.propTypes = {
  /**
   * Text for screen reader only
   */
  srText: PropTypes.string
};

// Default Props.
// -----------------------------------------------------------------------------
SrOnlyText.defaultProps = {
  srText: '(link is external)'
};
