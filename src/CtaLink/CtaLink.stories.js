import React from 'react';
import { CtaLink } from './CtaLink';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';
import { ctaLinkColors } from './CtaLink.levers';
import { iconOptions, iconAnimations } from '../common/icon/icon.levers';

export default {
  title: 'Simple/CTA Link',
  component: CtaLink,
  subcomponents: { SrOnlyText },
  argTypes: {
    color: {
      options: ctaLinkColors,
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      options: iconOptions,
      control: {
        type: 'select',
      },
    },
    animate: {
      options: iconAnimations,
      control: {
        type: 'inline-radio',
      },
    },
  },
};

const CtaLinkTemplate = ({ ...rest }) => <CtaLink {...rest} />;

export const Default = CtaLinkTemplate.bind({});
Default.args = {
  text: 'Call to Action Link',
  animate: 'right',
  href: 'https://stanford.edu',
};
Default.storyName = 'Default Call to Action';

export const Form = CtaLinkTemplate.bind({});
Form.args = {
  text: 'Form CTA Link',
  animate: 'right',
  color: 'green',
  href: 'https://stanford.edu',
};
Form.storyName = 'Form CTA Link';

export const More = CtaLinkTemplate.bind({});
More.args = {
  text: 'Learn more about this',
  icon: 'more',
  animate: 'right',
  href: 'https://stanford.edu',
};
More.storyName = 'Learn More';

export const External = CtaLinkTemplate.bind({});
External.args = {
  text: 'External Link',
  icon: 'external',
  animate: 'top-right',
  href: 'https://stanford.edu',
};
External.storyName = 'External';

export const Lock = CtaLinkTemplate.bind({});
Lock.args = {
  text: 'Protected Link',
  icon: 'lock',
  animate: 'right',
  href: 'https://stanford.edu',
};
Lock.storyName = 'Protected';

export const Download = CtaLinkTemplate.bind({});
Download.args = {
  text: 'Download Link',
  icon: 'download',
  animate: 'down',
  href: 'https://stanford.edu',
};
Download.storyName = 'Download';

export const Email = CtaLinkTemplate.bind({});
Email.args = {
  text: 'Email Link',
  icon: 'email',
  animate: 'right',
  href: 'mailto:a@example.com',
};
Email.storyName = 'Email';

export const Video = CtaLinkTemplate.bind({});
Video.args = {
  text: 'Video Link',
  icon: 'video',
  animate: 'right',
  href: 'https://stanford.edu',
};
Video.storyName = 'Video';

export const Jump = CtaLinkTemplate.bind({});
Jump.args = {
  text: 'Jump Link',
  icon: 'jump',
  animate: 'down',
  href: 'https://stanford.edu',
};
Jump.storyName = 'Jump';

export const NoIcon = CtaLinkTemplate.bind({});
NoIcon.args = {
  text: 'Link with No Icon',
  icon: 'none',
  href: 'https://stanford.edu',
};
NoIcon.storyName = 'No Icon';

export const NoAnimate = CtaLinkTemplate.bind({});
NoAnimate.args = {
  text: 'Red Action Link with No Animation',
  color: 'red',
  icon: 'action',
  animate: 'none',
  href: 'https://stanford.edu',
};
NoAnimate.storyName = 'Red Link with No Animation';

export const CustomProps = CtaLinkTemplate.bind({});
CustomProps.args = {
  text: 'Link with Custom Props',
  color: 'red',
  icon: 'external',
  animate: 'top-right',
  rel: 'nofollow',
  target: '_blank',
  id: 'custom-id',
  href: 'https://stanford.edu',
};
CustomProps.storyName = 'Link with Custom Props';

export const CustomClick = CtaLinkTemplate.bind({});
CustomClick.args = {
  text: 'Link with Custom Click Event',
  color: 'red',
  icon: 'external',
  animate: 'top-right',
  rel: 'nofollow',
  className: 'su-cursor-pointer',
  onClick: () => {
    alert("Hey, you did it."); // eslint-disable-line
  },
};

CustomClick.storyName = 'Link with Custom Click';

export const SrText = CtaLinkTemplate.bind({});
SrText.args = {
  text: 'Learn more',
  srText: 'about Decanter React',
  icon: 'more',
  animate: 'right',
  href: 'https://decanter.stanford.edu',
};
SrText.storyName = 'Link with Screen Reader Only Text';

const linkRef = React.createRef();

export const ForwardRef = (args) => {
  /* eslint-disable no-script-url */
  /* eslint-disable jsx-a11y/anchor-is-valid */
  const setFocus = (e) => {
    e.preventDefault();
    linkRef.current.focus();
  };

  return (
    <div>
      <CtaLink {...args} />
      <div>
        <a href="#" onClick={setFocus}>
          Clicking here will set focus using linkRef.current.focus()
        </a>
      </div>
    </div>
  );
};

ForwardRef.args = {
  text: 'Target Link',
  href: 'https://stanford.edu',
  ref: linkRef,
};
ForwardRef.storyName = 'With Forwarded Ref';
