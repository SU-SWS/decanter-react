import React from 'react';
import { TextField } from './TextField';
import { Label } from '../Label/Label';
import { labelWeights } from '../Label/Label.levers';
import { InlineError } from '../InlineError/InlineError';
import { InlineValid } from '../InlineValid/InlineValid';

export default {
  title: 'Form Elements/Text Field',
  component: TextField,
  subcomponents: {
    Label,
    InlineError,
    InlineValid,
  },
  parameters: {
    docs: {
      description: {
        component: 'Additional information coming soon...',
      },
    },
  },
  argTypes: {
    fontWeight: {
      control: {
        type: 'inline-radio',
        options: Object.keys(labelWeights),
      },
    },
  },
};

// Set up the Template.
const TextFieldTemplate = (props) => <TextField {...props} />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
  className: '',
  labelText: 'Text Field Input',
  helpText:
    'Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.',
  id: 'input__text',
  placeholder: 'Placeholder Text',
};
Default.storyName = 'Default';

export const LabelWeight = TextFieldTemplate.bind({});
LabelWeight.args = {
  className: '',
  labelText: 'Text Field Input',
  helpText:
    'Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.',
  id: 'input__text',
  placeholder: 'Placeholder Text',
  fontWeight: 'bold',
};
LabelWeight.storyName = 'Bold Label Weight';

export const Error = TextFieldTemplate.bind({});
Error.args = {
  className: '',
  errorText: 'Error: Lorem ipsum',
  labelText: 'Text Field Input',
  helpText:
    'Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.',
  id: 'input__text',
  placeholder: 'Placeholder Text',
};
Error.storyName = 'Error Message';

export const Valid = TextFieldTemplate.bind({});
Valid.args = {
  className: '',
  validText: 'Valid: Lorem ipsum',
  labelText: 'Text Field Input',
  helpText:
    'Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.',
  id: 'input__text',
  placeholder: 'Placeholder Text',
};
Valid.storyName = 'Valid Message';
