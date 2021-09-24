import React from 'react';
import { DismissButton } from './DismissButton';
import { Button } from '../Button/Button';
import {
  dismissIconOptions,
  dismissIconTypes,
  dismissIconColors,
} from './DismissButton.levers';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';

export default {
  title: 'Simple/Dismiss Button',
  component: DismissButton,
  subcomponents: { Button, SrOnlyText },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: dismissIconColors,
      },
    },
    icon: {
      control: {
        type: 'inline-radio',
        options: dismissIconOptions,
      },
    },
    iconType: {
      control: {
        type: 'inline-radio',
        options: dismissIconTypes,
      },
    },
    iconSize: {
      control: {
        type: 'range',
        min: 16,
        max: 100,
        step: 1,
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const DismissButtonTemplate = ({ ...rest }) => <DismissButton {...rest} />;

export const Default = DismissButtonTemplate.bind({});
Default.args = {
  text: 'Dismiss',
  srText: 'alert',
  className:
    'su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest',
  iconProps: {
    className: 'su-ml-02em',
  },
};
Default.storyName = 'Alert Dismiss Button (Dark)';

export const Close = DismissButtonTemplate.bind({});
Close.args = {
  text: 'Close',
  icon: 'x',
  iconType: 'solid',
  iconProps: {
    className: 'su-ml-02em',
  },
};
Close.storyName = 'Close Button with X Icon';

export const SrText = DismissButtonTemplate.bind({});
SrText.args = {
  srText: 'Close Modal',
  icon: 'x',
  iconType: 'solid',
};
SrText.storyName = 'Icon Button with Screen Reader Only Text';

export const CustomSize = DismissButtonTemplate.bind({});
CustomSize.args = {
  srText: 'Close Modal',
  icon: 'x-circle',
  iconType: 'solid',
  iconSize: 60,
  iconProps: {
    className: 'su-text-sky-dark hocus:su-text-plum',
  },
};
CustomSize.storyName = 'Large Icon Button with Custom Color';
