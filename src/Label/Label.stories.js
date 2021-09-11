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
Default.args = {};
Default.storyName = "Example";
