import React from 'react';
import { CtaButton } from './CtaButton';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { ctaButtonVariants } from './CtaButton.levers';
import { buttonSizes } from '../common/button/button.levers';
import { iconOptions, iconAnimations } from '../common/icon/icon.levers';

export default {
  title: 'Simple/CTA Link Button',
  component: CtaButton,
  subcomponents: { SrOnlyText },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ctaButtonVariants,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: buttonSizes,
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
  },
};

const CtaButtonTemplate = ({ ...rest }) => <CtaButton {...rest} />;

export const Solid = CtaButtonTemplate.bind({});
Solid.args = {
  isButton: true,
  variant: 'solid',
  size: 'default',
  icon: 'none',
  text: 'Solid Link Button',
  href: 'https://stanford.edu',
};

export const Primary = CtaButtonTemplate.bind({});
Primary.args = {
  variant: 'primary',
  size: 'default',
  icon: 'none',
  text: 'Primary Button',
  href: 'https://stanford.edu',
};

export const Secondary = CtaButtonTemplate.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
  icon: 'none',
  text: 'Secondary Button',
  href: 'https://stanford.edu',
};

export const Outline = CtaButtonTemplate.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  icon: 'none',
  text: 'Outline Button',
  href: 'https://stanford.edu',
};

export const Ghost = CtaButtonTemplate.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
  icon: 'none',
  text: 'Ghost Button',
  href: 'https://stanford.edu',
};

export const Big = CtaButtonTemplate.bind({});
Big.args = {
  variant: 'solid',
  size: 'big',
  icon: 'none',
  text: 'Big Button',
  href: 'https://stanford.edu',
};

export const Small = CtaButtonTemplate.bind({});
Small.args = {
  variant: 'outline',
  size: 'small',
  icon: 'none',
  text: 'Small Button',
  href: 'https://stanford.edu',
};

export const Action = CtaButtonTemplate.bind({});
Action.args = {
  variant: 'solid',
  size: 'default',
  icon: 'action',
  animate: 'right',
  text: 'Solid with Right Caret',
  href: 'https://stanford.edu',
};
Action.storyName = 'With Right Caret';

export const Download = CtaButtonTemplate.bind({});
Download.args = {
  variant: 'solid',
  size: 'default',
  icon: 'download',
  animate: 'down',
  text: 'Solid Download Button',
  href: 'https://stanford.edu',
};
Download.storyName = 'With Download Icon';

export const NoAnimate = CtaButtonTemplate.bind({});
NoAnimate.args = {
  variant: 'solid',
  size: 'default',
  icon: 'email',
  animate: 'none',
  text: 'Contact us',
  href: 'mailto:a@example.com',
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
  href: 'https://stanford.edu',
};
SrText.storyName = 'With Screen Reader Only Text';

export const Custom = CtaButtonTemplate.bind({});
Custom.args = {
  variant: 'unset',
  size: 'unset',
  icon: 'external',
  animate: 'top-right',
  text: 'With Custom Classes',
  link: 'https://stanford.edu',
  className:
    'su-uppercase su-tracking-widest su-font-semibold su-bg-lagunita-dark hocus:su-bg-plum su-text-white hocus:su-text-white su-p-30',
};
Custom.storyName = 'With Custom Styling';

export const CustomProps = CtaButtonTemplate.bind({});
CustomProps.args = {
  variant: 'solid',
  size: 'default',
  icon: 'external',
  animate: 'top-right',
  text: 'With Custom Props',
  href: 'https://stanford.edu',
  id: 'custom-id',
  target: '_blank',
  rel: 'nofollow',
};
CustomProps.storyName = 'With Custom Props';

export const CustomClick = CtaButtonTemplate.bind({});
CustomClick.args = {
  variant: 'solid',
  size: 'default',
  icon: 'external',
  animate: 'top-right',
  text: 'Link with Custom Click Event',
  className: 'su-cursor-pointer',
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
      <CtaButton {...args} />
      <div>
        <a href="javascript:void(0);" onClick={setFocus}>
          Clicking here will set focus using ctaButtonRef.current.focus()
        </a>
      </div>
    </div>
  );
};

ForwardRef.args = {
  text: "Target Button",
  size: "default",
  href: "https://stanford.edu",
  ref: ctaButtonRef,
};
ForwardRef.storyName = "With Forwarded Ref";
