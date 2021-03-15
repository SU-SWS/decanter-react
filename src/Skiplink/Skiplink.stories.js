import React from 'react';
import { Skiplink } from "./Skiplink";

export default {
  title: 'Accessibility/Skiplink',
  component: Skiplink,
  parameters: {
    docs: {
      description: {
        component: 'Accessible component for keyboard users to skip past repetitive header elements to go directly to the main content'
      }
    }
  }
};

// Set up the Template.
const SkiplinkTemplate = ({ ...rest }) => <Skiplink {...rest} />;

export const Default = SkiplinkTemplate.bind({});
Default.args = {
};
Default.storyName = 'Default anchor link and link text';

export const Custom = SkiplinkTemplate.bind({});
Custom.args = {
  anchorLink: '#custom-anchor-link',
  children: 'Hit tab with keyboard to see component',
};
Custom.storyName = 'Custom anchor link and link text';
