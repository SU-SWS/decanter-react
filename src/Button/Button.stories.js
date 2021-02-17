import React from 'react';
import { Button } from './Button';
import { buttonStyles, buttonSizes } from "./Button.levers";
import DOMPurify from 'dompurify'

export default {
  title: 'Simple/Button',
  component: Button,
  argTypes: {
    style: {
      control: {
        type: 'radio',
        options: buttonStyles
      }
    },
    size: {
      control: {
        type: 'radio',
        options: buttonSizes
      }
    }
  }
};

const ButtonTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
  return (
    <Button {...rest}>{content}</Button>
  )
}

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  style: 'primary',
  size: 'default',
  children: 'Primary Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  style: 'secondary',
  size: 'default',
  children: 'Secondary Button',
};

export const Big = ButtonTemplate.bind({});
Big.args = {
  style: 'primary',
  size: 'big',
  children: 'Big Button',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  style: 'primary',
  size: 'small',
  children: 'Small Button',
};
