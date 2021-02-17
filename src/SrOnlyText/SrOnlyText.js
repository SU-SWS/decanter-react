import React from 'react';
import PropTypes from "prop-types";

export const SrOnlyText = (props) => {
  const txt = props.srText ?? '(link is external)'
  return (
    <span className='su-sr-only'>{txt}</span>
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
