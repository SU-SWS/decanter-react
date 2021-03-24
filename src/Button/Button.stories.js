import React from 'react';
import { Button } from './Button';
import { buttonVariants, buttonSizes, buttonTypes } from "./Button.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";
import DOMPurify from 'dompurify';

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
    icon: {
      control: {
        type: 'select',
        options: iconOptions
      }
    },
    animate: {
      control: {
        type: 'inline-radio',
        options: iconAnimations
      }
    },
    isDisabled: {
      control: {
        type: 'boolean',
      }
    },
    onClick: {
      action: 'clicked'
    }
  }
};

const ButtonTemplate = ({ ...rest }) => {
  return (
    <Button {...rest} />
  );
};

const ButtonRichTextTemplate = ({ children, ...rest }) => {
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

export const Action = ButtonTemplate.bind({});
Action.args = {
  variant: 'solid',
  icon: 'action',
  animate: 'right',
  children: 'Call to Action Button',
};
Action.storyName = 'With animated icon';

export const Download = ButtonTemplate.bind({});
Download.args = {
  variant: 'outline',
  icon: 'download',
  animate: 'down',
  children: 'Download Button',
};
Download.storyName = 'With download icon';

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

export const Richtext = ButtonRichTextTemplate.bind({});
Richtext.args = {
  children: '🦸‍♀️ Be <span class="su-font-bold">BOLD</span> 🦸‍♂️',
};
Richtext.storyName = 'Button with Rich Text Content';
