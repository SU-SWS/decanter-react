import { XIcon } from '@heroicons/react/solid';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';

export const InlineError = ({ className, errorText, icon }) => {
  const iconProps = { height: 20, width: 20 };

  // Default Icon.
  let defaultIcon = (
    <XIcon
      aria-hidden="true"
      className="su-text-digital-red su-inline su-mr-3"
      {...iconProps}
    />
  );

  if (icon) {
    const Icon = icon;
    defaultIcon = (
      <Icon
        aria-hidden="true"
        className="su-text-digital-red su-inline su-mr-3"
        {...iconProps}
      />
    );
  }

  if (errorText) {
    return (
      <div className={dcnb('su-text-digital-red', className)}>
        <p className="su-text-16">
          {defaultIcon}
          {errorText}
        </p>
      </div>
    );
  }
  return null;
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
};

// Default Props.
// -----------------------------------------------------------------------------
InlineError.defaultProps = {};
