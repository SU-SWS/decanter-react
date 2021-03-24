import React from 'react';
import { CtaButton } from "./CtaButton";
import { ctaButtonVariants, ctaButtonSizes } from "./CtaButton.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";

export default {
  title: 'Simple/CTA Link Button',
  component: CtaButton,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ctaButtonVariants
      }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ctaButtonSizes
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
    color: {
      control: false,
    },
    isButton: {
      control: false,
    },
  }
};

const CtaButtonTemplate = ({ ...rest }) => {
  return (
    <CtaButton {...rest} />
  );
};

export const Solid = CtaButtonTemplate.bind({});
Solid.args = {
  isButton: true,
  variant: 'solid',
  size: 'default',
  icon: 'none',
  text: 'Solid Link Button',
  link: 'https://stanford.edu'
};

export const Outline = CtaButtonTemplate.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  icon: 'none',
  text: 'Outline Button',
  link: 'https://stanford.edu'
};

export const Ghost = CtaButtonTemplate.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
  icon: 'none',
  text: 'Ghost Button',
  link: 'https://stanford.edu'
};

export const Big = CtaButtonTemplate.bind({});
Big.args = {
  variant: 'solid',
  size: 'big',
  icon: 'none',
  text: 'Big Button',
  link: 'https://stanford.edu'
};

export const Small = CtaButtonTemplate.bind({});
Small.args = {
  variant: 'outline',
  size: 'small',
  icon: 'none',
  text: 'Small Button',
  link: 'https://stanford.edu',
};

export const Action = CtaButtonTemplate.bind({});
Action.args = {
  variant: 'solid',
  size: 'default',
  icon: 'action',
  animate: 'right',
  text: 'Solid with Right Caret',
  link: 'https://stanford.edu'
};
Action.storyName = 'With Right Caret';

export const Download = CtaButtonTemplate.bind({});
Download.args = {
  variant: 'solid',
  size: 'default',
  icon: 'download',
  animate: 'down',
  text: 'Solid Download Button',
  link: 'https://stanford.edu'
};
Download.storyName = 'With Download Icon';

export const NoAnimate = CtaButtonTemplate.bind({});
NoAnimate.args = {
  variant: 'solid',
  size: 'default',
  icon: 'email',
  animate: 'none',
  text: 'Contact us',
  link: 'mailto:a@example.com'
};
NoAnimate.storyName = 'With Non-animated Icon';

export const SrText = CtaButtonTemplate.bind({});
SrText.args = {
  variant: 'solid',
  size: 'default',
  icon: 'external',
  animate: 'top-right',
  text: 'Learn more',
  srText: 'about Decanter',
  link: 'https://stanford.edu'
};
SrText.storyName = 'With Screen Reader Only Text';

export const Custom = CtaButtonTemplate.bind({});
Custom.args = {
  variant: 'solid',
  size: 'default',
  icon: 'external',
  animate: 'top-right',
  text: 'With Custom Classes',
  link: 'https://stanford.edu',
  classes: {
    link: 'su-uppercase su-tracking-widest su-font-semibold su-bg-lagunita-dark su-border-lagunita-dark'
  }
};
Custom.storyName = 'With Custom Classes';

export const CustomProps = CtaButtonTemplate.bind({});
CustomProps.args = {
  variant: 'solid',
  size: 'default',
  icon: 'external',
  animate: 'top-right',
  text: 'With Custom Props',
  link: 'https://stanford.edu',
  id: 'custom-id',
  target: '_blank',
  rel: 'nofollow'
};
CustomProps.storyName = 'With Custom Props';
