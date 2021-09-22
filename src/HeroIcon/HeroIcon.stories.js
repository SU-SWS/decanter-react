import React from 'react';
import { HeroIcon } from './HeroIcon';
import { heroIconOptions } from './HeroIcon.levers';

export default {
  title: 'Simple/Hero Icon',
  component: HeroIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: heroIconOptions,
      },
    },
  },
};

const HeroIconTemplate = (props) => <HeroIcon {...props} />;

export const Default = HeroIconTemplate.bind({});
Default.args = {
  icon: 'arrow-narrow-right',
};
Default.storyName = 'Arrow Right Icon';

export const Video = HeroIconTemplate.bind({});
Video.args = {
  icon: 'video',
};
Video.storyName = 'Video Icon';

export const Play = HeroIconTemplate.bind({});
Play.args = {
  icon: 'play',
};
Play.storyName = 'Play Icon';

export const Podcast = HeroIconTemplate.bind({});
Podcast.args = {
  icon: 'podcast',
};
Podcast.storyName = 'Podcast Icon';

export const External = HeroIconTemplate.bind({});
External.args = {
  icon: 'external',
};
External.storyName = 'External Icon';

export const Download = HeroIconTemplate.bind({});
Download.args = {
  icon: 'download',
};
Download.storyName = 'Download Icon';

export const Email = HeroIconTemplate.bind({});
Email.args = {
  icon: 'email',
};
Email.storyName = 'Email Icon';

export const ChevronDown = HeroIconTemplate.bind({});
ChevronDown.args = {
  icon: 'chevron-down',
};
ChevronDown.storyName = 'Chevron Down Icon';

export const ChevronRight = HeroIconTemplate.bind({});
ChevronRight.args = {
  icon: 'chevron-right',
};
ChevronRight.storyName = 'Chevron Right Icon';
