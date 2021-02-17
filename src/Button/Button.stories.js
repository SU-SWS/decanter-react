import React from 'react';
import { Button } from './Button';
import { buttonVariants, buttonSizes } from "./Button.levers";
import DOMPurify from 'dompurify'

export default {
  title: 'Simple/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: buttonVariants
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
  variant: 'primary',
  size: 'default',
  children: 'Primary Button',
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
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
