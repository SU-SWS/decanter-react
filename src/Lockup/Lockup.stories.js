import React from 'react';
import { Lockup } from './Lockup';
import { Logo } from '../Logo/Logo';
import { withDesign } from 'storybook-addon-designs';
import { lockupColors } from './Lockup.levers';

export default {
  title: 'Stanford Identity/Lockup (Department Branding)',
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
const LockupTemplate = (props) => <Lockup {...props} />;

export const Default = LockupTemplate.bind({});
Default.args = {
  line1: 'Department',
  url: 'https://decanter.stanford.edu'
};
Default.storyName = 'Option N';

export const L = LockupTemplate.bind({});
L.args = {
  line1: 'Finance',
  classes: {
    line1: 'su-uppercase su-font-semibold'
  }
};
L.storyName = 'Option L';

export const NotLink = LockupTemplate.bind({});
NotLink.args = {
  line1: 'Department',
  isLink: false
};
NotLink.storyName = 'Unlinked Logo';

export const White = LockupTemplate.bind({});
White.args = {
  color: 'white',
  line1: 'Department'
};
White.storyName = 'White Logo (For Dark Background)';
