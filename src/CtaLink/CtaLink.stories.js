import React from 'react';
import { CtaLink } from './CtaLink';
import { ctaLinkDisplay, ctaLinkIcons, ctaLinkColors, ctaLinkAnimations } from './CtaLink.levers';

export default {
  title: 'Simple/CTA Link',
  component: CtaLink,
  argTypes: {
    display: {
      control: {
        type: 'inline-radio',
        options: ctaLinkDisplay
      }
    },
    color: {
      control: {
        type: 'inline-radio',
        options: ctaLinkColors
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
  }
};

const CtaLinkTemplate = ({ ...rest }) => {
  return (
    <CtaLink {...rest} />
  );
};

export const Default = CtaLinkTemplate.bind({});
Default.args = {
  text: 'Call to Action Link',
  animate: 'right',
  link: 'https://stanford.edu',
};
Default.storyName = 'Default Call to Action';

export const More = CtaLinkTemplate.bind({});
More.args = {
  text: 'Learn more about this',
  icon: 'more',
  animate: 'right',
  link: 'https://stanford.edu',
};
More.storyName = 'Learn More';

export const External = CtaLinkTemplate.bind({});
External.args = {
  text: 'External Link',
  icon: 'external',
  animate: 'top-right',
  link: 'https://stanford.edu'
};
External.storyName = 'External';

export const Lock = CtaLinkTemplate.bind({});
Lock.args = {
  text: 'Protected Link',
  icon: 'lock',
  animate: 'right',
  link: 'https://stanford.edu'
};
Lock.storyName = 'Protected';

export const Download = CtaLinkTemplate.bind({});
Download.args = {
  text: 'Download Link',
  icon: 'download',
  animate: 'down',
  link: 'https://stanford.edu'
};
Download.storyName = 'Download';

export const Email = CtaLinkTemplate.bind({});
Email.args = {
  text: 'Email Link',
  icon: 'email',
  animate: 'right',
  link: 'mailto:a@example.com'
};
Email.storyName = 'Email';

export const Video = CtaLinkTemplate.bind({});
Video.args = {
  text: 'Video Link',
  icon: 'video',
  animate: 'right',
  link: 'https://stanford.edu'
};
Video.storyName = 'Video';

export const Jump = CtaLinkTemplate.bind({});
Jump.args = {
  text: 'Jump Link',
  icon: 'jump',
  animate: 'down',
  link: 'https://stanford.edu'
};
Jump.storyName = 'Jump';

export const NoIcon = CtaLinkTemplate.bind({});
NoIcon.args = {
  text: 'No Icon',
  icon: 'none',
  link: 'https://stanford.edu'
};
NoIcon.storyName = 'No Icon';

export const NoAnimate = CtaLinkTemplate.bind({});
NoAnimate.args = {
  text: 'Red Action Link with No Animation',
  color: 'red',
  icon: 'action',
  animate: 'none',
  link: 'https://stanford.edu'
};
NoAnimate.storyName = 'Red Link with No Animation';

export const CustomProps = CtaLinkTemplate.bind({});
CustomProps.args = {
  text: 'External Link with Custom Props',
  color: 'red',
  icon: 'external',
  animate: 'top-right',
  rel: 'no-follow',
  target: '_blank',
  id: 'custom-id',
  link: 'https://stanford.edu'
};
CustomProps.storyName = 'External Link with Custom Props';
