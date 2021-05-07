import React from "react";
import { SrOnlyText } from "./SrOnlyText";

export default {
  title: "Accessibility/Screen Reader Only Text",
  component: SrOnlyText,
  parameters: {
    docs: {
      description: {
        component: "For adding text for screen readers that is not visible.",
      },
    },
  },
};

// Set up the Template.
const SrOnlyTextTemplate = (props) => <SrOnlyText {...props} />;

export const Default = SrOnlyTextTemplate.bind({});
Default.args = {
  srText: "This text is for screen readers only",
};
Default.storyName = "Example";
