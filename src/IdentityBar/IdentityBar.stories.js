import React from 'react';
import { IdentityBar } from './IdentityBar';

import { withDesign } from 'storybook-addon-designs';
import { IdentityBarColors } from './IdentityBar.levers';

export default {
  title: 'Stanford Identity/Identity Bar',
  decorators: [withDesign],
  component: IdentityBar
};

// Set up an Alert Template.
const IdentityBarTemplate = ({ children, ...rest }) => <IdentityBar {...rest} />;

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = IdentityBarTemplate.bind({});

Default.args = {
  color: 'cardinal-red'
};

// Make sure the enum types work.
Default.argTypes = {
  type: {
    control: {
      type: 'select',
      options: IdentityBarColors
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
