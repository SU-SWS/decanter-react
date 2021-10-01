import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { Button } from '../Button/Button';
import { InfoBubble } from './InfoBubble';
import { alignOptions } from './InfoBubble.levers';

const iconButton = (
  <Button
    variant="unset"
    size="unset"
    className="su-leading-trim su-shadow-none hocus:su-shadow-none su-rounded-full su-p-0 children:su-m-0 children:su-text-black hocus:children:su-text-digital-blue active:children:su-text-digital-blue"
    icon="info"
  />
);

const textButton = (
  <Button variant="solid" size="small">
    Text
  </Button>
);

const linkText = (
  <p>
    Your username adipiscing. Curabitur ullamcorper ultricies nisi. Vestibulum
    suscipit <a href="/">nulla quis orci</a>.
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
  children: iconButton,
  alignment: 'top',
  arrow: true,
};
Default.storyName = 'Default';

export const RightAlign = InfoBubbleTemplate.bind({});
RightAlign.args = {
  text: 'Tool tip text cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.',
  children: textButton,
  alignment: 'right',
};
RightAlign.storyName = 'Right Align';

export const Custom = InfoBubbleTemplate.bind({});
Custom.args = {
  text: linkText,
  children: iconButton,
  alignment: 'bottom',
  className: '!su-rs-p-1',
  arrow: true,
};
Custom.storyName = 'Custom with Link';
