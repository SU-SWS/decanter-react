import AriaModal from 'react-aria-modal';
import React, { useState } from 'react';
import { ModalContent } from './ModalContent';
import { Button } from '../Button/Button';

export default {
  title: 'Composite/Modal Content',
  component: ModalContent,
  subcomponents: {
    'ModalContent.Title': ModalContent.Title,
    'ModalContent.Body': ModalContent.Body,
    'ModalContent.Cta': ModalContent.Cta,
    'ModalContent.Footer': ModalContent.Footer,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=16530%3A326',
    },
    docs: {
      description: {
        component: 'More information coming soon...',
      },
    },
  },
};

const ModalContentTemplate = ({ onClose, ...rest }) => (
  <ModalContent {...rest} onClose={onClose}>
    <ModalContent.Title>
      <h2 className="su-h2">Title</h2>
    </ModalContent.Title>
    <ModalContent.Body>
      <span className="su-font-bold su-text-22">
        Your username donec venenatis vulputate lorem. Lorem ipsum dolor.
      </span>{' '}
      <span className="su-subheading">
        Click “Continue” to be redirected to your account management
      </span>
    </ModalContent.Body>
    <ModalContent.Cta>
      <Button onClick={onClose} variant="outline" className="su-mr-26">
        Close
      </Button>

      <Button animate="right" icon="action">
        Continue
      </Button>
    </ModalContent.Cta>
    <ModalContent.Footer>
      If the problem persists, please <a href="">submit a help ticket.</a>
    </ModalContent.Footer>
  </ModalContent>
);
export const Default = ModalContentTemplate.bind({});
Default.storyName = 'Default';

const InModalTemplate = () => {
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
          <ModalContentTemplate onClose={close} />
        </AriaModal>
      )}
    </div>
  );
};

export const InModal = InModalTemplate.bind({});
InModal.storyName = 'In Modal';
