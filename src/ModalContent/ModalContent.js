import React from 'react';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import { DismissButton } from '../DismissButton/DismissButton';
import { Body } from './ModalContent.Body';
import { Cta } from './ModalContent.Cta';
import { Footer } from './ModalContent.Footer';

/**
 * ModalContent Component
 *
 * HTML ModalContent element
 */

export const ModalContentRoot = ({
  className,
  children,
  onClose,
  dismissText,
  dismissSrText,
  ...props
}) => (
  <div
    className={dcnb(
      'su-bg-white su-flex su-flex-col su-rs-pt-2 su-rs-pr-3 su-rs-pb-4 su-rs-pl-5 su-absolute su-left-1/2 su-top-1/2 su-transform su--translate-x-1/2 su--translate-y-1/2 su-z-50',
      className
    )}
    {...props}
  >
    <DismissButton
      icon="x"
      className="su-ml-auto su-rs-mb-2 su-text-digital-blue hocus:su-text-black"
      onClick={onClose}
      iconProps={{
        className: 'su-ml-02em',
      }}
      srText={dismissSrText}
      text={dismissText}
    />

    {children}
  </div>
);

ModalContentRoot.displayName = 'ModalContent';

/**
 * Exports
 */
export const ModalContent = Object.assign(ModalContentRoot, {
  Body,
  Cta,
  Footer,
});

// Prop Types.
// -----------------------------------------------------------------------------
ModalContentRoot.propTypes = {
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  /**
   * Dismiss button props
   */
  dismissText: PropTypes.string,
  dismissSrText: PropTypes.string,
};
