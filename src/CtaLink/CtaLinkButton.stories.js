import React from 'react';
import { CtaLinkButton } from './CtaLinkButton';
import { ctaLinkDisplay } from './CtaLink.levers';
import { ctaLinkButtonVariants, ctaLinkButtonSizes } from "./CtaLinkButton.levers";

export default {
  title: 'Simple/CTA Link Button',
  component: CtaLinkButton,
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
  }
};

const CtaLinkButtonTemplate = ({ children, ...rest }) => {
  return (
    <CtaLinkButton {...rest}>{children}</CtaLinkButton>
  );
};

export const Solid = CtaLinkButtonTemplate.bind({});
Solid.args = {
  children: 'Solid Link Button',
  link: 'https://stanford.edu'
};

export const Outline = CtaLinkButtonTemplate.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline Button',
  link: 'https://stanford.edu'
};

export const Ghost = CtaLinkButtonTemplate.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
  link: 'https://stanford.edu'
};


export const Big = CtaLinkButtonTemplate.bind({});
Big.args = {
  variant: 'solid',
  size: 'big',
  children: 'Big Button',
  link: 'https://stanford.edu'
};

export const Small = CtaLinkButtonTemplate.bind({});
Small.args = {
  variant: 'outline',
  size: 'small',
  children: 'Small Button',
  link: 'https://stanford.edu',
};
