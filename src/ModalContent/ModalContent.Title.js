import React from 'react';
import PropTypes from 'prop-types';

/**
 * Modal Title Component.
 * @param {*} param0
 * @returns
 */

export const Title = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

Title.displayName = 'ModalContent.Title';

Title.propTypes = {
  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  // CSS Classes.
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};
