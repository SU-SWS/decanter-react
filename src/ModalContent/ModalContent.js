import React from 'react';
import { dcnb } from 'cnbuilder';
import PropTypes from 'prop-types';
import { DismissButton } from '../DismissButton/DismissButton';
import { Title } from './ModalContent.Title';
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
  ...props
}) => (
  <div
    className={dcnb(
      'su-bg-white su-max-w-[400px] md:su-max-w-[683px] su-flex su-flex-col su-rs-pt-2 su-rs-pr-3 su-rs-pb-4 su-rs-pl-5',
      className
    )}
    {...props}
  >
    <DismissButton
      id="closeModal"
      icon="x"
      className="su-ml-auto su-rs-mb-2 su-text-digital-blue hocus:su-text-black"
      onClick={onClose}
      iconProps={{
        className: 'su-ml-02em',
      }}
      srText="Close"
      text="Dismiss"
    />

    {children}
  </div>
);

ModalContentRoot.displayName = 'ModalContent';

/**
 * Exports
 */
export const ModalContent = Object.assign(ModalContentRoot, {
  Title,
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
   * Optional click handler.
   */
  onClose: PropTypes.func,
};
