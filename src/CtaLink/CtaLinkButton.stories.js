import React from 'react';
//import { CtaLinkButton } from './CtaLinkButton';
import { CtaLink } from './CtaLink';
import { ctaLinkDisplay, ctaLinkIcons, ctaLinkAnimations, ctaLinkColors } from "./CtaLink.levers";
import { ctaLinkButtonVariants, ctaLinkButtonSizes } from "./CtaLinkButton.levers";

export default {
  title: 'Simple/CTA Link Button',
  component: CtaLink,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ctaLinkButtonVariants
      }
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ctaLinkButtonSizes
      }
    },
    display: {
      control: {
        type: 'inline-radio',
        options: ctaLinkDisplay
      }
    },
    icon: {
      control: {
        type: 'select',
        options: ctaLinkIcons
      }
    },
    animate: {
      control: {
        type: 'inline-radio',
        options: ctaLinkAnimations
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

const CtaLinkButtonTemplate = ({ ...rest }) => {
  return (
    <CtaLink {...rest} />
  );
};

export const Solid = CtaLinkButtonTemplate.bind({});
Solid.args = {
  isButton: true,
  variant: 'solid',
  size: 'default',
  icon: 'none',
  text: 'Solid Link Button',
  link: 'https://stanford.edu'
};

export const Outline = CtaLinkButtonTemplate.bind({});
Outline.args = {
  isButton: true,
  variant: 'outline',
  size: 'default',
  icon: 'none',
  text: 'Outline Button',
  link: 'https://stanford.edu'
};

export const Ghost = CtaLinkButtonTemplate.bind({});
Ghost.args = {
  isButton: true,
  variant: 'ghost',
  size: 'default',
  icon: 'none',
  text: 'Ghost Button',
  link: 'https://stanford.edu'
};

export const Big = CtaLinkButtonTemplate.bind({});
Big.args = {
  isButton: true,
  variant: 'solid',
  size: 'big',
  icon: 'none',
  text: 'Big Button',
  link: 'https://stanford.edu'
};

export const Small = CtaLinkButtonTemplate.bind({});
Small.args = {
  isButton: true,
  variant: 'outline',
  size: 'small',
  icon: 'none',
  text: 'Small Button',
  link: 'https://stanford.edu',
};

export const Action = CtaLinkButtonTemplate.bind({});
Action.args = {
  isButton: true,
  variant: 'solid',
  size: 'default',
  icon: 'action',
  animate: 'right',
  text: 'Solid with Right Caret',
  link: 'https://stanford.edu'
};
Action.storyName = 'With Right Caret';

export const Download = CtaLinkButtonTemplate.bind({});
Download.args = {
  isButton: true,
  variant: 'solid',
  size: 'default',
  icon: 'download',
  animate: 'down',
  text: 'Solid Download Button',
  link: 'https://stanford.edu'
};
Download.storyName = 'With Download Icon';
