import React from 'react';
import { Logo } from './Logo';
import { logoColors, logoTypes } from "./Logo.levers";

export default {
  title: 'Stanford Identity/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: logoColors
      }
    },
    type: {
      control: {
        type: 'select',
        options: logoTypes
      }
    },
    isLink: {
      control: {
        type: 'boolean',
      }
    },
  }
};

// Set up the Logo template.
const LogoTemplate = (props) => <Logo {...props} />;

export const Red = LogoTemplate.bind({});
Red.args = {
  color: 'cardinal-red',
  type: 'short',
  className: 'su-type-3'
};
Red.storyName = 'Cardinal Red';

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

export const NotLink = LogoTemplate.bind({});
NotLink.args = {
  color: 'cardinal-red',
  type: 'short',
  className: 'su-type-3',
  isLink: false
};
NotLink.storyName = 'Cardinal Red (Not Linked)';
