import React from 'react';
import { Button } from './Button';
import { buttonVariants, buttonSizes, buttonTypes } from "./Button.levers";
import DOMPurify from 'dompurify';
import { SrText } from "../CtaLink/CtaLink.stories";

export default {
  title: 'Simple/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: buttonVariants
      }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: buttonSizes
      }
    },
    type: {
      control: {
        type: 'inline-radio',
        options: buttonTypes
      }
    },
    onClick: {
      action: 'clicked'
    }
  }
};

const ButtonTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />;
  return (
    <Button {...rest}>{content}</Button>
  );
};

export const Solid = ButtonTemplate.bind({});
Solid.args = {
  variant: 'solid',
  children: 'Solid Button',
};

export const Outline = ButtonTemplate.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
};

export const Big = ButtonTemplate.bind({});
Big.args = {
  variant: 'solid',
  size: 'big',
  children: 'Big Button',
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  variant: 'solid',
  size: 'small',
  children: 'Small Button',
};

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  variant: 'solid',
  isDisabled: true,
  children: 'Disabled Button',
};

export const Minimal = ButtonTemplate.bind({});
Minimal.args = {
  variant: 'none',
  size: 'minimal',
  children: 'Minimal Button',
};

export const Richtext = ButtonTemplate.bind({});
Richtext.args = {
  children: '🦸‍♀️ Be <span class="su-font-bold">BOLD</span> 🦸‍♂️',
};
Richtext.storyName = 'Button with Rich Text Content';
