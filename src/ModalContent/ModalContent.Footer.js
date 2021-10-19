import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';

/**
 * Modal Footer Component.
 * @param {*} param0
 * @returns
 */

export const Footer = ({ children, className, ...props }) => (
  <div className={dcnb('su-text-center', className)} {...props}>
    {children}
  </div>
);

Footer.displayName = 'ModalContent.Footer';

Footer.propTypes = {
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
