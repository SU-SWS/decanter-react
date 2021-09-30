import React from 'react';
import { InfoBubble } from './InfoBubble';

export default {
  title: 'Form Elements/Information Bubble',
  component: InfoBubble,
  parameters: {
    docs: {
      description: {
        component: 'Information Bubble component',
      },
    },
  },
};

// Set up the Template.
const InfoBubbleTemplate = (props) => <InfoBubble {...props} />;

export const Default = InfoBubbleTemplate.bind({});
Default.args = {};
Default.storyName = 'Example';
