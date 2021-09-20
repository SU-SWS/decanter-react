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
    isAnimate: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const HeroIconTemplate = (props) => <HeroIcon {...props} />;

export const Default = HeroIconTemplate.bind({});
Default.args = {
  icon: 'arrow-narrow-right',
  isAnimate: true,
};
Default.storyName = 'Default';

export const Video = HeroIconTemplate.bind({});
Video.args = {
  icon: 'video',
  isAnimate: true,
};
Video.storyName = 'Video';
