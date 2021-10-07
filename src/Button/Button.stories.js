import DOMPurify from 'dompurify';
import React from 'react';
import { buttonSizes } from '../common/button/button.levers';
import { iconAnimations, iconOptions } from '../common/icon/icon.levers';
import { Button } from './Button';
import { buttonTypes, buttonVariants, iconAlignment } from './Button.levers';

export default {
  title: 'Simple/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: buttonVariants,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: buttonSizes,
      },
    },
    type: {
      control: {
        type: 'inline-radio',
        options: buttonTypes,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: iconOptions,
      },
    },
    animate: {
      control: {
        type: 'inline-radio',
        options: iconAnimations,
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'clicked',
    },
    iconPosition: {
      control: {
        type: 'select',
        options: iconAlignment,
      },
    },
  },
};

const ButtonTemplate = ({ ...rest }) => <Button {...rest} />;

const ButtonRichTextTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} /> // eslint-disable-line react/no-danger
  );
  return <Button {...rest}>{content}</Button>;
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

export const Ghost = ButtonTemplate.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
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

export const IconOnly = ButtonTemplate.bind({});
IconOnly.args = {
  variant: 'unset',
  size: 'unset',
  className:
    'su-leading-trim su-shadow-none hocus:su-shadow-none su-rounded-full su-p-0 children:su-m-0 children:su-text-black hocus:children:su-text-digital-blue active:children:su-text-digital-blue',
  icon: 'info',
};
IconOnly.storyName = 'Icon Only Button';

export const Action = ButtonTemplate.bind({});
Action.args = {
  variant: 'solid',
  icon: 'action',
  animate: 'right',
  children: 'Call to Action Button',
};
Action.storyName = 'With Animated Icon';

export const Download = ButtonTemplate.bind({});
Download.args = {
  variant: 'outline',
  icon: 'download',
  animate: 'down',
  children: 'Download Button',
};
Download.storyName = 'With Download Icon';

export const Email = ButtonTemplate.bind({});
Email.args = {
  variant: 'solid',
  icon: 'email',
  children: 'Email Button',
  iconPosition: 'left',
};
Email.storyName = 'With Leading Email Icon';

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  variant: 'solid',
  isDisabled: true,
  children: 'Disabled Button',
};

export const Custom = ButtonTemplate.bind({});
Custom.args = {
  variant: 'unset',
  size: 'unset',
  className:
    'su-bg-plum-light su-text-illuminating-light su-font-slab su-text-20 su-p-30 su-font-semibold hocus:su-bg-palo-alto',
  children: 'With Custom Styling',
};
Custom.storyName = 'With Custom Styling';

export const Richtext = ButtonRichTextTemplate.bind({});
Richtext.args = {
  children: '🦸‍♀️ Be <span class="su-font-bold">BOLD</span> 🦸‍♂️',
};
Richtext.storyName = 'With Rich Text Content';

const buttonRef = React.createRef();

export const ForwardRef = ({ ...args }) => {
  /* eslint-disable */
  const setFocus = () => {
    buttonRef.current.focus();
  };

  return (
    <div>
      <Button {...args} />
      <div>
        <a href="javascript:void(0);" onClick={setFocus}>
          Clicking here will set focus using buttonRef.current.focus()
        </a>
      </div>
    </div>
  );
};

ForwardRef.args = {
  children: "Target Button",
  ref: buttonRef,
};
ForwardRef.storyName = "With Forwarded Ref";
