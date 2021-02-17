import React from 'react';
import PropTypes from "prop-types";

export const SrOnlyLabel = (props) => {
  return (
    <span className='su-sr-only'>{props.srText ?? '(link is external)'}</span>
  );
};

// Prop Types.
// -----------------------------------------------------------------------------
SrOnlyLabel.propTypes = {
  /**
   * Text label for screen reader only
   */
  srText: PropTypes.string
};

// Default Props.
// -----------------------------------------------------------------------------
SrOnlyLabel.defaultProps = {
  srText: '(link is external)'
};
