import React from "react";
import { CtaButton } from "./CtaButton";
import { SrOnlyText } from "../SrOnlyText/SrOnlyText";
import { ctaButtonVariants } from "./CtaButton.levers";
import { buttonSizes } from "../common/button/button.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";

export default {
  title: "Simple/CTA Link Button",
  component: CtaButton,
  subcomponents: { SrOnlyText },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
        options: ctaButtonVariants,
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: buttonSizes,
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
  },
};

const CtaButtonTemplate = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Solid Link Button
    </a>
  </CtaButton>
);

export const Solid = CtaButtonTemplate.bind({});
Solid.args = {
  isButton: true,
  variant: "solid",
  size: "default",
  icon: "none",
};

const CtaButtonOutline = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-digital-red group-hocus:su-bg-white group-hocus:su-text-black"
    >
      Button
    </a>
  </CtaButton>
);

export const Outline = CtaButtonOutline.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
  icon: "none",
};

export const Ghost = CtaButtonTemplate.bind({});
Ghost.args = {
  variant: "ghost",
  size: "default",
  icon: "none",
};

const CtaButtonBig = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Big Button
    </a>
  </CtaButton>
);

export const Big = CtaButtonBig.bind({});
Big.args = {
  variant: "solid",
  size: "big",
  icon: "none",
};

const CtaButtonSmall = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-digital-red group-hocus:su-bg-white group-hocus:su-text-black"
    >
      Small Button
    </a>
  </CtaButton>
);

export const Small = CtaButtonSmall.bind({});
Small.args = {
  variant: "outline",
  size: "small",
  icon: "none",
};

const CtaButtonAction = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Solid with Right Caret
    </a>
  </CtaButton>
);

export const Action = CtaButtonAction.bind({});
Action.args = {
  variant: "solid",
  size: "default",
  icon: "action",
  animate: "right",
};
Action.storyName = "With Right Caret";

const CtaButtonDownload = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Solid Download Button
    </a>
  </CtaButton>
);

export const Download = CtaButtonDownload.bind({});
Download.args = {
  variant: "solid",
  size: "default",
  icon: "download",
  animate: "down",
};
Download.storyName = "With Download Icon";

const CtaButtonNoAnimate = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Contact Us
    </a>
  </CtaButton>
);

export const NoAnimate = CtaButtonNoAnimate.bind({});
NoAnimate.args = {
  variant: "solid",
  size: "default",
  icon: "email",
  animate: "none",
};
NoAnimate.storyName = "With Non-animated Icon";

const CtaButtonSr = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Learn More
    </a>
  </CtaButton>
);

export const SrText = CtaButtonSr.bind({});
SrText.args = {
  variant: "solid",
  size: "default",
  icon: "external",
  animate: "top-right",
  srText: "about Decanter",
};
SrText.storyName = "With Screen Reader Only Text";

const CtaButtonCustom = ({ ...rest }) => (
  <CtaButton {...rest}>
    <a
      href="https://stanford.edu"
      className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
    >
      Custom Button
    </a>
  </CtaButton>
);

export const Custom = CtaButtonCustom.bind({});
Custom.args = {
  variant: "unset",
  size: "unset",
  icon: "external",
  animate: "top-right",
  className:
    "su-uppercase su-tracking-widest su-font-semibold su-bg-lagunita-dark hocus:su-bg-plum su-text-white hocus:su-text-white su-p-30",
};
Custom.storyName = "With Custom Styling";

export const CustomProps = CtaButtonCustom.bind({});
CustomProps.args = {
  variant: "solid",
  size: "default",
  icon: "external",
  animate: "top-right",
  id: "custom-id",
  target: "_blank",
  rel: "nofollow",
};
CustomProps.storyName = "With Custom Props";

export const CustomClick = CtaButtonCustom.bind({});
CustomClick.args = {
  variant: "solid",
  size: "default",
  icon: "external",
  animate: "top-right",
  className: "su-cursor-pointer",
  onClick: () => {
    /* eslint-disable */
    alert("Hey, you did it.");
  },
};
CustomClick.storyName = "Link with Custom Click";

const ctaButtonRef = React.createRef();

export const ForwardRef = (args) => {
  /* eslint-disable */
  const setFocus = () => {
    ctaButtonRef.current.focus();
  };

  return (
    <div>
      <CtaButton {...args}>
        <a
          href="https://stanford.edu"
          className="su-font-regular su-no-underline group-hover:su-underline su-text-white group-hocus:su-text-white"
        >
          Target Button
        </a>
      </CtaButton>
      <div>
        <a href="javascript:void(0);" onClick={setFocus}>
          Clicking here will set focus using ctaButtonRef.current.focus()
        </a>
      </div>
    </div>
  );
};

ForwardRef.args = {
  size: "default",
  ref: ctaButtonRef,
};
ForwardRef.storyName = "With Forwarded Ref";
