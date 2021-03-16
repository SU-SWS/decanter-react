import React from 'react';
import { CtaLink } from './CtaLink';
import { ctaLinkDisplay, ctaLinkIcons, ctaLinkColors } from './CtaLink.levers';

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
  link: 'https://stanford.edu'
};
Default.storyName = 'Default';

export const External = CtaLinkTemplate.bind({});
External.args = {
  text: 'External Link',
  icon: 'external',
  link: 'https://stanford.edu'
};
External.storyName = 'External';

export const Lock = CtaLinkTemplate.bind({});
Lock.args = {
  text: 'Protected Link',
  icon: 'lock',
  link: 'https://stanford.edu'
};
Lock.storyName = 'Protected';

export const Download = CtaLinkTemplate.bind({});
Download.args = {
  text: 'Download Link',
  icon: 'download',
  link: 'https://stanford.edu'
};
Download.storyName = 'Download';

export const Email = CtaLinkTemplate.bind({});
Email.args = {
  text: 'Email Link',
  icon: 'email',
  link: 'mailto:a@example.com'
};
Email.storyName = 'Email';

export const Video = CtaLinkTemplate.bind({});
Video.args = {
  text: 'Video Link',
  icon: 'video',
  link: 'https://stanford.edu'
};
Video.storyName = 'Video';

export const Jump = CtaLinkTemplate.bind({});
Jump.args = {
  text: 'Jump Link',
  icon: 'jump',
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
