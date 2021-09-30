import React from 'react';
import { InfoBubble } from './InfoBubble';

export default {
  title: 'Form Elements/Information Bubble',
  component: InfoBubble,
  parameters: {
    docs: {
      description: {
        component: 'Information Bubble Component',
      },
    },
  },
};

// Set up the Template.
const InfoBubbleTemplate = (props) => <InfoBubble {...props} />;

export const Default = InfoBubbleTemplate.bind({});
Default.args = {
  text: 'Error text Cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.',
};
Default.storyName = 'Default';
