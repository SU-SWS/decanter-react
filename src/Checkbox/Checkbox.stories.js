import React from 'react';
import { Checkbox } from './Checkbox';
import { checkboxPosition, checkboxSize } from './Checkbox.levers';

export default {
  title: 'Form Elements/Checkbox',
  component: Checkbox,
  argTypes: {
    position: {
      control: {
        type: 'inline-radio',
        options: checkboxPosition,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: checkboxSize,
      },
    },
  },
};

const CheckboxTemplate = ({ ...rest }) => (
  <Checkbox
    {...rest}
    name="Checkbox"
    value="checkbox"
    isDefaultChecked={false}
    onClick={() => {}}
  />
);

export const Small = CheckboxTemplate.bind({});
Small.args = {
  position: 'left',
  size: 'small',
  className: '',
};
Small.storyName = 'Small Checkbox';

export const Large = CheckboxTemplate.bind({});
Large.args = {
  position: 'left',
  size: 'large',
  className: '',
};
Large.storyName = 'Large Checkbox';

export const Right = CheckboxTemplate.bind({});
Right.args = {
  position: 'right',
  size: 'small',
  className: '',
};
Right.storyName = 'Checkbox on the right';