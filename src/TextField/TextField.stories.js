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
const TextFieldTemplate = ({
  labelText,
  helpText,
  id,
  errorText,
  isError,
  ...props
}) => (
  <TextField>
    <TextField.Label text={labelText} helpText={helpText} id={id}>
      <input
        {...props}
        className="su-input su-border su-border-black su-border-b-2 su-rounded su-pt-19 su-pb-20 su-px-19 su-w-full"
        id={id}
      />
      <TextField.InlineError text={errorText} isError={isError} />
    </TextField.Label>
  </TextField>
);

export const Default = TextFieldTemplate.bind({});
Default.args = {
  className: "",
  errorText: "Error: Lorem ipsum",
  labelText: "Text Field Input",
  isError: true,
  helpText:
    "Help text fusce vel dui. Phasellus magna. Fusce ac felis sit amet ligula pharetra condimentum. Nulla sit amet est. Nunc sed turpis.",
  id: "input__text",
  placeholder: "Placeholder Text",
};
Default.storyName = "Example";
