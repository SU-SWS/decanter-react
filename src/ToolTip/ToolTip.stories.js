import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { ToolTip } from './ToolTip';
import { alignOptions } from './ToolTip.levers';

export default {
  title: 'Form Elements/Tool Tip',
  component: ToolTip,
  subcomponents: { Tooltip },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=12753%3A12775',
    },
    docs: {
      description: {
        component: 'Tool Tip Component',
      },
    },
  },
  argTypes: {
    alignment: {
      options: alignOptions,
      control: {
        type: 'select',
      },
    },
  },
};

// Set up the Template.
const ToolTipTemplate = (props) => <ToolTip {...props} />;

export const Default = ToolTipTemplate.bind({});
Default.args = {
  text: 'File name lorem ipsum dolar sit amet complete.png',
  alignment: 'top',
  arrow: true,
};
Default.storyName = 'Default';

export const RightAlign = ToolTipTemplate.bind({});
RightAlign.args = {
  text: 'Lorem ipsum ut leo. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
  alignment: 'right',
};
RightAlign.storyName = 'Right Align';
