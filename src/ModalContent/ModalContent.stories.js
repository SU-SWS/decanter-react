import AriaModal from "react-aria-modal";
import React, { useState } from "react";
import { ModalContent } from "./ModalContent";

export default {
  title: "Composite/Modal Content",
  component: ModalContent,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=16530%3A326",
    },
    docs: {
      description: {
        component: "More information coming soon...",
      },
    },
  },
};

const ModalContentTemplate = ({
  actionButton,
  className,
  children,
  footerChildren,
  cancelButtonProps,
  ...rest
}) => (
  <ModalContent
    {...rest}
    className={className}
    actionButton={actionButton}
    footerChildren={footerChildren}
    cancelButtonProps={cancelButtonProps}
  >
    {children}
  </ModalContent>
);

export const Default = ModalContentTemplate.bind({});
Default.storyName = "Default";

const ModalContentInModalTemplate = ({
  actionButton,
  className,
  children,
  footerChildren,
  cancelButtonProps,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="su-rounded-md su-bg-opacity-20"
      >
        Open dialog
      </button>

      {isOpen && (
        <AriaModal
          titleText="Modal Title"
          initialFocus="#closeModal"
          verticallyCenter
          underlayClickExits
          onExit={close}
        >
          <ModalContent
            {...rest}
            onClose={close}
            className={className}
            actionButton={actionButton}
            footerChildren={footerChildren}
            cancelButtonProps={cancelButtonProps}
          >
            {children}
          </ModalContent>
        </AriaModal>
      )}
    </div>
  );
};

export const InModal = ModalContentInModalTemplate.bind({});
InModal.storyName = "In Modal";
