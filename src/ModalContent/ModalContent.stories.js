import React, { useState } from 'react';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { ModalContent } from './ModalContent';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { DismissButton } from '../DismissButton/DismissButton';

export default {
  title: 'Composite/Modal Content',
  component: ModalContent,
  subcomponents: {
    'ModalContent.Body': ModalContent.Body,
    'ModalContent.Cta': ModalContent.Cta,
    'ModalContent.Footer': ModalContent.Footer,
    Button,
    DismissButton,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=16530%3A326',
    },
    docs: {
      description: {
        component:
          "This component is the inner content of the modal and doesn't include the modal functionality. <br /> To add the modal functionality, please refer to https://mui.com/components/modal/ and add ModalContent component as the content for the MUI modal. <br />" +
          "The 'In Modal' story shows an example of usage. <br /> <br />" +
          '<strong>Note:</strong> ModalUnstyled needs to be imported from MUI Core for the modal functionality to work: <br />' +
          "<strong>import ModalUnstyled from '@mui/core/ModalUnstyled';</strong>",
      },
    },
  },
};

const ModalContentTemplate = ({ onClose, ...rest }) => (
  <ModalContent
    {...rest}
    onClose={onClose}
    dismissText="Close"
    dismissSrText="Close"
  >
    <Heading level={2}>Title</Heading>
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
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <ModalUnstyled
        open={isOpen}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        BackdropComponent={() => (
          <div className="su-bg-black su-bg-opacity-50 su-fixed su-inset-0 su-z-50" />
        )}
      >
        <div>
          <ModalContent
            onClose={onClose}
            dismissText="Close"
            dismissSrText="Close"
          >
            <Heading level={2} id="child-modal-title">
              Title
            </Heading>
            <ModalContent.Body>
              <span className="su-font-bold su-text-22">
                Your username donec venenatis vulputate lorem. Lorem ipsum
                dolor.
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
              If the problem persists, please{' '}
              <a href="">submit a help ticket.</a>
            </ModalContent.Footer>
          </ModalContent>
        </div>
      </ModalUnstyled>
    </div>
  );
};

export const InModal = InModalTemplate.bind({});
InModal.storyName = 'In Modal';
