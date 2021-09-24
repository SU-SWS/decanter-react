import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';

/**
 * Modal Cta Component.
 * @param {*} param0
 * @returns
 */

export const Cta = ({ children, className, ...props }) => (
  <div
    className={dcnb(
      'su-flex su-items-center su-justify-center su-flex su-justify-center su-rs-mb-2',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Cta.displayName = 'ModalContent.Cta';

Cta.propTypes = {
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
