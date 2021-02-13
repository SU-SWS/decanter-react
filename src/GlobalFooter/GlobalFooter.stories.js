import React from 'react';
import { GlobalFooter } from './GlobalFooter';

import { withDesign } from 'storybook-addon-designs';
import { GlobalFooterColors } from './GlobalFooter.levers';

export default {
  title: 'Stanford Identity/Global Footer',
  decorators: [withDesign],
  component: GlobalFooter
};

// Set up an Alert Template.
const GlobalFooterTemplate = ({ children, ...rest }) => <GlobalFooter {...rest} />;

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = GlobalFooterTemplate.bind({});

Default.args = {
  color: 'cardinal-red'
};

// Make sure the enum types work.
Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: GlobalFooterColors
    }
  }
};

// Connect a Figma Preview.
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A23'
  }
};
