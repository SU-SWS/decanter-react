import React from 'react';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';

/**
 * Modal Body Component.
 * @param {*} param0
 * @returns
 */

export const Body = ({ children, className, ...props }) => (
  <div className={dcnb('su-rs-mb-3', className)} {...props}>
    {children}
  </div>
);

Body.displayName = 'ModalContent.Body';

Body.propTypes = {
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
