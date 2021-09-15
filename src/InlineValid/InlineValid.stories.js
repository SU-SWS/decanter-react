import React from "react";
import { InlineValid } from "./InlineValid";

export default {
  title: "Form Elements/Inline Valid",
  component: InlineValid,
  parameters: {
    docs: {
      description: {
        component: "Reusable Inline Valid text component",
      },
    },
  },
};

// Set up the Template.
const InlineValidTemplate = (props) => <InlineValid {...props} />;

export const Default = InlineValidTemplate.bind({});
Default.args = {
  validText:
    "Valid: text Cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.",
};
Default.storyName = "Example";
