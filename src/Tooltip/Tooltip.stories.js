import React from 'react';
import { Button } from '../Button/Button';
import { Tooltip } from './Tooltip';
import { tooltipAlignment } from './Tooltip.levers';

const infoButton = (
  <Button
    variant="unset"
    size="unset"
    className="su-leading-trim su-shadow-none hocus:su-shadow-none su-rounded-full su-p-0 children:su-m-0 children:su-text-black hocus:children:su-text-digital-blue active:children:su-text-digital-blue"
    icon="info"
  />
);

export default {
  title: 'Form Elements/Tool tip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Tooltip component',
      },
    },
  },
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: tooltipAlignment,
      },
    },
  },
};

// Set up the Template.
const TooltipTemplate = (props) => <Tooltip {...props} />;

export const Default = TooltipTemplate.bind({});
Default.args = {
  tooltipText:
    'Tool tip text Cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.',
  children: infoButton,
};
Default.storyName = 'Example';
