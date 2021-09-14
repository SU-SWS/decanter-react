import React from "react";
import { InlineError } from "./InlineError";

export default {
  title: "Form Elements/Inline Error",
  component: InlineError,
  parameters: {
    docs: {
      description: {
        component: "Reusable Inline Error text component",
      },
    },
  },
};

// Set up the Template.
const InlineErrorTemplate = (props) => <InlineError {...props} />;

export const Default = InlineErrorTemplate.bind({});
Default.args = {
  errorText:
    "Error text Cras dapibus. Fusce vulputate eleifend sapien. Etiam rhoncus.",
};
Default.storyName = "Example";
