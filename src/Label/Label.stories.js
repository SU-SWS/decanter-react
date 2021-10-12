import React from 'react';
import { Label } from './Label';
import { labelWeights } from './Label.levers';

export default {
  title: 'Form Elements/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Reusable label and help text component',
      },
    },
  },
  argTypes: {
    fontWeight: {
      options: Object.keys(labelWeights),
      control: {
        type: 'inline-radio',
      },
    },
  },
};

// Set up the Template.
const LabelTemplate = (props) => <Label {...props} />;

export const Default = LabelTemplate.bind({});
Default.args = {
  id: 'input__text',
  labelText: 'Label',
  helpText:
    'Help text Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.',
};
Default.storyName = 'Default';

export const Bold = LabelTemplate.bind({});
Bold.args = {
  id: 'input__text',
  labelText: 'Label',
  helpText:
    'Help text Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.',
  fontWeight: 'bold',
};
Bold.storyName = 'Bold Label';

export const Light = LabelTemplate.bind({});
Light.args = {
  id: 'input__text',
  labelText: 'Label',
  helpText:
    'Help text Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.',
  fontWeight: 'light',
};
Light.storyName = 'Light Label';
