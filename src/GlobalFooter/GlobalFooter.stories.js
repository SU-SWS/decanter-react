import React from 'react';
import { GlobalFooter } from './GlobalFooter';
import { Logo } from '../Logo/Logo';
import { SrOnlyLabel } from "../SrOnlyLabel/SrOnlyLabel";
import { withDesign } from 'storybook-addon-designs';
import { GlobalFooterColors } from './GlobalFooter.levers';

export default {
  title: 'Stanford Identity/Global Footer',
  decorators: [withDesign],
  component: GlobalFooter,
  subcomponents: { SrOnlyLabel, Logo },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: GlobalFooterColors
      }
    },
  }
};

// Set up an Alert Template.
const GlobalFooterTemplate = ({ children, ...rest }) => <GlobalFooter {...rest} />;

export const Default = GlobalFooterTemplate.bind({});
Default.args = {
  color: 'cardinal-red',
};
Default.storyName = 'Cardinal Red'

export const DigitalRed = GlobalFooterTemplate.bind({});
DigitalRed.args = {
  color: 'digital-red',
};
DigitalRed.storyName = 'Digital Red'

export const Black = GlobalFooterTemplate.bind({});
Black.args = {
  color: 'black',
};

// Connect a Figma Preview.
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A23'
  }
};
