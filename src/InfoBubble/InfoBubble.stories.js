import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { InfoBubble } from './InfoBubble';
import { alignOptions } from './InfoBubble.levers';

const linkText = (
  <p className="su-mb-0">
    Your username adipiscing. Curabitur ullamcorper ultricies nisi. Vestibulum
    suscipit{' '}
    <a className="su-mb-0" href="/">
      nulla quis orci
    </a>
    .
  </p>
);

export default {
  title: 'Form Elements/Information Bubble',
  component: InfoBubble,
  subcomponents: { Tooltip },
  parameters: {
    docs: {
      description: {
        component: 'Information Bubble Component',
      },
    },
  },
  argTypes: {
    alignment: {
      options: alignOptions,
      control: {
        type: 'select',
      },
    },
  },
};

// Set up the Template.
const InfoBubbleTemplate = (props) => <InfoBubble {...props} />;

export const Default = InfoBubbleTemplate.bind({});
Default.args = {
  text: 'Tool tip text cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.',
  alignment: 'top',
  arrow: true,
};
Default.storyName = 'Default';

export const RightAlign = InfoBubbleTemplate.bind({});
RightAlign.args = {
  text: 'Tool tip text cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.',
  alignment: 'right',
};
RightAlign.storyName = 'Right Align';

export const Custom = InfoBubbleTemplate.bind({});
Custom.args = {
  text: linkText,
  alignment: 'bottom',
  arrow: true,
};
Custom.storyName = 'Custom with Link';
