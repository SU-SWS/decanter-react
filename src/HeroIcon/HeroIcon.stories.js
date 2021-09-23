import React from 'react';
import { iconOptions } from '../common/icon/icon.levers';
import { HeroIcon } from './HeroIcon';

export default {
  title: 'Simple/Hero Icon',
  component: HeroIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: iconOptions,
      },
    },
  },
};

const HeroIconTemplate = (props) => <HeroIcon {...props} />;

export const Default = HeroIconTemplate.bind({});
Default.args = {
  icon: 'more',
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

export const Jump = HeroIconTemplate.bind({});
Jump.args = {
  icon: 'jump',
};
Jump.storyName = 'Jump Icon';

export const Action = HeroIconTemplate.bind({});
Action.args = {
  icon: 'action',
};
Action.storyName = 'Action Icon';
