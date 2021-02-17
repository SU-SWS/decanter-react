import React from 'react';
import { Button } from './Button';
import { buttonVariants, buttonSizes, buttonTypes } from "./Button.levers";
import DOMPurify from 'dompurify'

export default {
  title: 'Simple/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: buttonVariants
      }
    },
    size: {
      control: {
        type: 'select',
        options: buttonSizes
      }
    },
    type: {
      control: {
        type: 'select',
        options: buttonTypes
      }
    },
    onClick: {
      action: 'clicked'
    }
  },
  parameters: {
    jest: [
      'Button.test.js'
    ]
  }
};

const ButtonTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
  return (
    <Button {...rest}>{content}</Button>
  )
}

export const Default = ButtonTemplate.bind({});
Default.args = {
  children: '🦸‍♀️ Be <span class="su-font-bold">BOLD</span> 🦸‍♂️',
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Big = ButtonTemplate.bind({});
Big.args = {
  variant: 'primary',
  size: 'big',
  children: 'Big Button',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  variant: 'primary',
  size: 'small',
  children: 'Small Button',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  variant: 'primary',
  isDisabled: true,
  children: 'Disabled Button',
};

export const Minimal = ButtonTemplate.bind({});
Minimal.args = {
  variant: 'none',
  size: 'minimal',
  children: 'Minimal Button',
};
