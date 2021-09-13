import React from "react";
import { Label } from "./Label";

export default {
  title: "Form Elements/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component: "Reusable label and help text component",
      },
    },
  },
};

// Set up the Template.
const LabelTemplate = (props) => <Label {...props} />;

export const Default = LabelTemplate.bind({});
Default.args = {
  id: "input__text",
  text: "Label",
  helpText:
    "Help text Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.",
  fontWeight: "bold",
};
Default.storyName = "Example";
