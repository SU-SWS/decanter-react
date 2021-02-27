import React from 'react';
import { Lockup } from './Lockup';
import { Logo } from '../Logo/Logo';
import { withDesign } from 'storybook-addon-designs';
import { lockupColors } from './Lockup.levers';

export default {
  title: 'Stanford Identity/Department Branding',
  decorators: [withDesign],
  component: Lockup,
  subcomponents: { Logo },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: lockupColors
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A23'
    }
  }
};

// Set up the Lockup template.
const LockupTemplate = ({ line1, ...rest }) => <Lockup {...rest}>{line1}</Lockup>;

export const Default = LockupTemplate.bind({});
Default.args = {
  color: 'default',
  line1: 'Department',
  url: '/'
};
Default.storyName = 'Default';

export const White = LockupTemplate.bind({});
White.args = {
  color: 'white',
  line1: 'Department',
  url: '/'
};
White.storyName = 'White';
