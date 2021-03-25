import React from 'react';
import { DismissButton } from './DismissButton';
import { Button } from '../Button/Button';
import { dismissIconOptions, dismissIconTypes, dismissIconColors } from './DismissButton.levers';
import { SrOnlyText } from '../SrOnlyText/SrOnlyText';

export default {
  title: 'Simple/Dismiss Button',
  component: DismissButton,
  subcomponents: { Button, SrOnlyText },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: dismissIconColors
      }
    },
    icon: {
      control: {
        type: 'inline-radio',
        options: dismissIconOptions
      }
    },
    iconType: {
      control: {
        type: 'inline-radio',
        options: dismissIconTypes
      }
    },
    onClick: {
      action: 'clicked'
    }
  }
};

const DismissButtonTemplate = ({ ...rest }) => {
  return (
    <DismissButton {...rest} />
  );
};

export const Default = DismissButtonTemplate.bind({});
Default.args = {
  text: 'Dismiss',
  classes: {
    wrapper: 'su-text-17 su-uppercase su-font-bold su-inline-block su-tracking-widest'
  }
};
Default.storyName = 'Alert Dismiss Button (Dark)';

export const Close = DismissButtonTemplate.bind({});
Close.args = {
  text: 'Close',
  icon: 'x',
  iconType: 'solid'
};
Close.storyName = 'Close Button with X Icon';

export const SrText = DismissButtonTemplate.bind({});
SrText.args = {
  SrText: 'Close Modal',
  icon: 'x',
  iconType: 'solid'
};
SrText.storyName = 'Icon Button with Screen Reader Only Text';
