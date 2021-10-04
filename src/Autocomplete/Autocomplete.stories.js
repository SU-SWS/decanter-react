import React from 'react';
import { AutocompleteField } from './Autocomplete';

export default {
  title: 'Forms/Autocomplete',
  component: AutocompleteField,
};

const options = [
  {
    value: 'Option 1',
  },
  {
    value: 'Option 2',
  },
  {
    value: 'Option 3',
  },
  {
    value: 'Option 4',
  },
  {
    value: 'Option 5',
  },
  {
    value: 'Option 6',
  },
  {
    value: 'Option 7',
  },
  {
    value: 'Option 8',
  },
  {
    value: 'Option 9',
  },
  {
    value: 'Option 10',
  },
  {
    value: 'Option 11',
  },
  {
    value: 'Option 12',
  },
  {
    value: 'Option 13',
  },
  {
    value: 'Option 14',
  },
];

const AutocompleteTemplate = ({ ...rest }) => (
  <AutocompleteField options={options} {...rest} />
);

export const Single = AutocompleteTemplate.bind({});
Single.args = {
  options,
  label: 'Label',
  description: '',
};

export const SingleAcceptNewValues = AutocompleteTemplate.bind({});
SingleAcceptNewValues.args = {
  options,
  acceptNewValues: true,
  placeholder: 'Type and select',
};

export const Multiple = AutocompleteTemplate.bind({});
Multiple.args = {
  label: 'Label',
  options,
  multiple: true,
  placeholder: 'Type and select',
};

export const MultipleAcceptNewValues = AutocompleteTemplate.bind({});
MultipleAcceptNewValues.args = {
  options,
  acceptNewValues: true,
  multiple: true,
  placeholder: 'Type and select',
};

export const Disabled = AutocompleteTemplate.bind({});
Disabled.args = {
  options,
  disabled: true,
  placeholder: 'Type and select',
};
