import React from 'react';
import { Select } from './Select';

export default {
  title: 'Simple/Select',
  component: Select,
};

const SelectTemplate = ({ ...rest }) => <Select {...rest} />;

export const Default = SelectTemplate.bind({});
Default.args = {
  label: 'Label',
  description:
    'Your help text goes here, designed to be more visible, and in the correct reading order for your end users and screen readers alike.',
  containerClasses: 'su-w-[290px]',
  onClick: (value) => {},
  options: [
    { id: 'item1', value: 'Item One' },
    { id: 'item2', value: 'Item Two' },
    { id: 'item3', value: 'Item Three' },
  ],
};

export const withIntialValue = SelectTemplate.bind({});
withIntialValue.args = {
  label: 'Label',
  description:
    'Your help text goes here, designed to be more visible, and in the correct reading order for your end users and screen readers alike.',
  containerClasses: 'su-w-[290px]',
  initialSelect: { id: 'item2', value: 'Item Two' },
  onClick: (value) => {},
  options: [
    { id: 'item1', value: 'Item One' },
    { id: 'item2', value: 'Item Two' },
    { id: 'item3', value: 'Item Three' },
  ],
};
withIntialValue.storyName = 'Select with no default value';

export const noDetails = SelectTemplate.bind({});
noDetails.args = {
  containerClasses: 'su-w-[290px]',
  onClick: (value) => {},
  options: [
    { id: 'item1', value: 'Item One' },
    { id: 'item2', value: 'Item Two' },
    { id: 'item3', value: 'Item Three' },
  ],
};
noDetails.storyName = 'No label and desctiption';

export const Icons = SelectTemplate.bind({});
Icons.args = {
  label: 'Label',
  description:
    'Your help text goes here, designed to be more visible, and in the correct reading order for your end users and screen readers alike.',
  containerClasses: 'su-w-[290px]',
  initialSelect: { id: 'item2', value: 'Item Two', icon: 'StarIcon' },
  onClick: (value) => {},
  options: [
    { id: 'item1', value: 'Item One', icon: 'SunIcon' },
    { id: 'item2', value: 'Item Two', icon: 'StarIcon' },
    { id: 'item3', value: 'Item Three', icon: 'ShoppingCartIcon' },
  ],
};
Icons.storyName = 'Icon select list variant';
