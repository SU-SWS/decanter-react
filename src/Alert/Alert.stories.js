import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Alert } from './Alert';
import { DismissButton } from '../DismissButton/DismissButton';
import { alertTypes } from './Alert.levers';

const alertBody = (
  <p className="last:su-mb-0 su-leading-display su-card-paragraph">
    A <strong>paragraph</strong> from the Greek paragraphos,{' '}
    <em>to write beside</em> or <i>written beside</i> is a{' '}
    <a href="#" className="su-underline hocus:su-no-underline">
      self-contained unit of a discourse
    </a>{' '}
    in writing dealing with a particular point or idea.
  </p>
);

const alertBodyShort = (
  <p className="last:su-mb-0 su-leading-display su-card-paragraph">
    For displaying a notification that keeps people informed of a status.
  </p>
);

export default {
  title: 'Composite/Alert',
  decorators: [withDesign],
  component: Alert,
  subcomponents: { DismissButton },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0',
    },
    docs: {
      description: {
        component:
          'For displaying a notification that keeps people informed of a status, or for displaying a validation message that alerts someone of an important piece of information.',
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: alertTypes,
      },
    },
  },
};

// Set up an Alert Template.
const AlertTemplate = ({ children, ...rest }) => (
  <Alert {...rest}>{children}</Alert>
);

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = AlertTemplate.bind({});
Default.args = {
  children: alertBodyShort,
};

export const Info = AlertTemplate.bind({});
Info.args = {
  children: alertBodyShort,
  type: 'info',
  label: 'information:',
};

// Supports Markdown.
Info.parameters = {
  docs: {
    description: {
      story: 'Informational style.',
    },
  },
};

export const Error = AlertTemplate.bind({});
Error.args = {
  children: alertBody,
  type: 'error',
  label: 'error:',
};
Error.parameters = {
  docs: {
    description: {
      story: 'Error Message.',
    },
  },
};

export const Warning = AlertTemplate.bind({});
Warning.args = {
  children: alertBody,
  type: 'warning',
  label: 'warning:',
};
Warning.parameters = {
  docs: {
    description: {
      story: 'Warning Message.',
    },
  },
};

export const Success = AlertTemplate.bind({});
Success.args = {
  children: alertBody,
  type: 'success',
  label: 'success:',
};
Success.parameters = {
  docs: {
    description: {
      story: 'Successful Transaction Message.',
    },
  },
};

export const LabelsOnTop = AlertTemplate.bind({});
LabelsOnTop.args = {
  children: alertBody,
  isIconTop: true,
  isLabelTop: true,
};

export const BigIcon = AlertTemplate.bind({});
BigIcon.args = {
  children: alertBody,
  heading: 'Alert Lorem Ipsum',
  hasLabel: false,
  isLargeIcon: true,
};
BigIcon.storyName = 'Big Icon + Big Heading ';

export const BigIconLabel = AlertTemplate.bind({});
BigIconLabel.args = {
  children: alertBody,
  type: 'info',
  label: 'information:',
  isLabelTop: true,
  isLargeIcon: true,
};
BigIconLabel.storyName = 'Big Icon + Top Label';

export const NoDismiss = AlertTemplate.bind({});
NoDismiss.args = {
  children: alertBody,
  hasDismiss: false,
};
NoDismiss.storyName = 'No Dismiss Button';
