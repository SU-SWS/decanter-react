import React from 'react';
import { Logo } from './Logo';
import { LogoColors, LogoTypes } from "./Logo.levers";

export default {
  title: 'Stanford Identity/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: LogoColors
      }
    },
    type: {
      control: {
        type: 'select',
        options: LogoTypes
      }
    },
  },
  parameters: {
    jest: [
      'Logo.test.js'
    ]
  }
};

// Set up an Alert Template.
const LogoTemplate = ({ children, ...rest }) => <Logo {...rest} />;

export const Red = LogoTemplate.bind({});
Red.args = {
  color: 'cardinal-red',
  type: 'short',
  className: 'su-type-3'
};
Red.storyName = 'Cardinal Red'

export const Black = LogoTemplate.bind({});
Black.args = {
  color: 'black',
  type: 'short',
  className: 'su-type-3'
};

export const White = LogoTemplate.bind({});
White.args = {
  color: 'white',
  type: 'short',
  className: 'su-type-3'
};

export const Full = LogoTemplate.bind({});
Full.args = {
  color: 'cardinal-red',
  type: 'full',
  className: 'su-type-3'
};

export const Stacked = LogoTemplate.bind({});
Stacked.args = {
  color: 'cardinal-red',
  type: 'stacked',
  className: 'su-type-3'
};
