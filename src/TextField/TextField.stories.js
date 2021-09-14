import React from "react";
import { TextField } from "./TextField";

export default {
  title: "Form Elements/Text Field",
  component: TextField,
  subcomponents: {
    "TextField.Label": TextField.Label,
    "TextField.InlineError": TextField.InlineError,
  },
  parameters: {
    docs: {
      description: {
        component: "Additional information coming soon...",
      },
    },
  },
};

// Set up the Template.
const TextFieldTemplate = (props) => <TextField {...props} />;

export const Default = TextFieldTemplate.bind({});
Default.args = {
  className: "",
  errorText: "Error: Lorem ipsum",
  labelText: "Text Field Input",
  helpText:
    "Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.",
  id: "input__text",
  placeholder: "Placeholder Text",
};
Default.storyName = "Example";
