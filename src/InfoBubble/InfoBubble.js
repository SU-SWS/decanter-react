import PropTypes from 'prop-types';
import React from 'react';

export const InfoBubble = ({ text }) => <div>Text</div>;

// Prop Types.
// -----------------------------------------------------------------------------
InfoBubble.propTypes = {
  // CSS Classes.
  className: PropTypes.string,

  // Text
  text: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
InfoBubble.defaultProps = {};
