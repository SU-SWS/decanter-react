import React from "react";
import { dcnb } from "cnbuilder";
import PropTypes from "prop-types";
import { DismissButton } from "../DismissButton/DismissButton";
import { Button } from "../Button/Button";

/**
 * ModalContent Component
 *
 * HTML ModalContent element
 */

export const ModalContent = ({
  className,
  onClose,
  children,
  actionButton,
  footerChildren,
  cancelButtonProps,
  ...props
}) => (
  <div
    className={dcnb(
      "su-bg-white su-max-w-4xl lg:su-max-w-5xl su-flex su-flex-col su-rs-pt-2 su-rs-pr-3 su-rs-pb-4 su-rs-pl-5",
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
        className: "su-ml-02em",
      }}
      srText="Close"
      text="Dismiss"
    />
    <div className="su-rs-mb-3">{children}</div>
    <div className="su-flex su-justify-center su-rs-mb-2">
      <Button onClick={onClose} {...cancelButtonProps}>
        Go Back
      </Button>
      {actionButton}
    </div>
    {footerChildren}
  </div>
);

// Prop Types.
// -----------------------------------------------------------------------------
ModalContent.propTypes = {
  /**
   * CSS Class names.
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  /**
   * Props for styling the cancel button.
   */
  cancelButtonProps: PropTypes.oneOfType([PropTypes.object]),

  // Children
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  // Footer Children.
  footerChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),

  // Action button.
  actionButton: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
};

// Default Props.
// -----------------------------------------------------------------------------
ModalContent.defaultProps = {
  children:
    "Your username donec venenatis vulputate lorem. Lorem ipsum dolor.\n Click “Continue” to be redirected to your account management",
  footerChildren: (
    <div className="su-text-center">
      If the problem persists, please <a href="">submit a help ticket.</a>
    </div>
  ),
  className: "",
  actionButton: (
    <Button animate="right" icon="action">
      Continue
    </Button>
  ),
  cancelButtonProps: { className: "su-mr-10", variant: "outline" },
};
