import { CheckIcon } from '@heroicons/react/solid';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import React from 'react';

export const InlineValid = ({ className, validText, icon, iconType }) => {
  const iconProps = { height: 20, width: 20 };

  // Default Icon.
  let defaultIcon = (
    <CheckIcon
      aria-hidden="true"
      className="su-text-digital-green su-inline su-mr-3"
      {...iconProps}
    />
  );

  if (icon) {
    const Icon = icon;
    defaultIcon = (
      <Icon
        icon={icon}
        type={iconType}
        aria-hidden="true"
        className="su-text-digital-green su-inline su-mr-3"
        {...iconProps}
      />
    );
  }

  if (validText) {
    return (
      <div className={dcnb('su-text-digital-green', className)}>
        <p className="su-text-16">
          {defaultIcon}
          {validText}
        </p>
      </div>
    );
  }
  return null;
};

// Prop Types.
// -----------------------------------------------------------------------------
InlineValid.propTypes = {
  // CSS Classes.
  className: PropTypes.string,

  // Valid message
  validText: PropTypes.string,

  // Icon name
  icon: PropTypes.string,
};

// Default Props.
// -----------------------------------------------------------------------------
InlineValid.defaultProps = {};
