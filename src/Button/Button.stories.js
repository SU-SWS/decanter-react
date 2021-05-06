import React from "react";
import DOMPurify from "dompurify";
import { Button } from "./Button";
import { buttonVariants, buttonTypes } from "./Button.levers";
import { buttonSizes } from "../common/button/button.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";

export default {
  title: "Simple/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
        options: buttonVariants,
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: buttonSizes,
      },
    },
    type: {
      control: {
        type: "inline-radio",
        options: buttonTypes,
      },
    },
    icon: {
      control: {
        type: "select",
        options: iconOptions,
      },
    },
    animate: {
      control: {
        type: "inline-radio",
        options: iconAnimations,
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
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
  variant: "solid",
  children: "Solid Button",
};

export const Outline = ButtonTemplate.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline Button",
};

export const Ghost = ButtonTemplate.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost Button",
};

export const Big = ButtonTemplate.bind({});
Big.args = {
  variant: "solid",
  size: "big",
  children: "Big Button",
};

export const Small = ButtonTemplate.bind({});
Small.args = {
  variant: "solid",
  size: "small",
  children: "Small Button",
};

export const Action = ButtonTemplate.bind({});
Action.args = {
  variant: "solid",
  icon: "action",
  animate: "right",
  children: "Call to Action Button",
};
Action.storyName = "With Animated Icon";

export const Download = ButtonTemplate.bind({});
Download.args = {
  variant: "outline",
  icon: "download",
  animate: "down",
  children: "Download Button",
};
Download.storyName = "With Download Icon";

export const Disabled = ButtonTemplate.bind({});
Disabled.args = {
  variant: "solid",
  isDisabled: true,
  children: "Disabled Button",
};

export const Custom = ButtonTemplate.bind({});
Custom.args = {
  variant: "unset",
  size: "unset",
  className:
    "su-bg-plum-light su-text-illuminating-light su-font-slab su-text-20 su-p-30 su-font-semibold hocus:su-bg-palo-alto",
  children: "With Custom Styling",
};
Custom.storyName = "With Custom Styling";

export const Richtext = ButtonRichTextTemplate.bind({});
Richtext.args = {
  children: '🦸‍♀️ Be <span class="su-font-bold">BOLD</span> 🦸‍♂️',
};
Richtext.storyName = "With Rich Text Content";

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
