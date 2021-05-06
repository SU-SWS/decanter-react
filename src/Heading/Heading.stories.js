import React from "react";
import { Heading } from "./Heading";
import {
  headingFonts,
  headingLevels,
  headingWeights,
  headingTracking,
  headingSizes,
  headingAlign,
} from "./Heading.levers";

export default {
  title: "Simple/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: "range",
        min: 1,
        max: headingLevels[headingLevels.length - 1],
        step: 1,
      },
    },
    font: {
      control: {
        type: "inline-radio",
        options: Object.keys(headingFonts),
      },
    },
    tracking: {
      control: {
        type: "inline-radio",
        options: Object.keys(headingTracking),
      },
    },
    align: {
      control: {
        type: "inline-radio",
        options: Object.keys(headingAlign),
      },
    },
    size: {
      control: {
        type: "range",
        min: 0,
        max: Object.keys(headingSizes).length - 1,
        step: 1,
      },
    },
    weight: {
      control: {
        type: "inline-radio",
        options: Object.keys(headingWeights),
      },
    },
    uppercase: {
      control: {
        type: "boolean",
      },
    },
    italic: {
      control: {
        type: "boolean",
      },
    },
    srOnly: {
      control: {
        type: "boolean",
      },
    },
  },
};

// Set up Heading Template.
const HeadingTemplate = (props) => <Heading {...props} />;

export const Default = HeadingTemplate.bind({});
Default.args = {
  level: 1,
  children: "Heading Level 1",
};
Default.storyName = "Default H1";

export const H2 = HeadingTemplate.bind({});
H2.args = {
  level: 2,
  children: "Heading Level 2",
};
H2.storyName = "Default H2";

export const H3 = HeadingTemplate.bind({});
H3.args = {
  level: 3,
  children: "Heading Level 3",
};
H3.storyName = "Default H3";

export const H4 = HeadingTemplate.bind({});
H4.args = {
  level: 4,
  children: "Heading Level 3",
};
H4.storyName = "Default H4";

export const H5 = HeadingTemplate.bind({});
H5.args = {
  level: 5,
  children: "Heading Level 5",
};
H5.storyName = "Default H5";

export const H6 = HeadingTemplate.bind({});
H6.args = {
  level: 6,
  children: "Heading Level 6",
};
H6.storyName = "Default H6";

export const Serif = HeadingTemplate.bind({});
Serif.args = {
  level: 2,
  font: "serif",
  weight: "semibold",
  children: "Serif and Semibold H2",
};
Serif.storyName = "Serif and Semibold H2";

export const Slab = HeadingTemplate.bind({});
Slab.args = {
  level: 4,
  font: "slab",
  weight: "light",
  size: 6,
  children: "Large Slab Font & Light H4",
};
Slab.storyName = "Large Slab Font & Light H4";

export const Uppercase = HeadingTemplate.bind({});
Uppercase.args = {
  level: 3,
  weight: "semibold",
  tracking: "wider",
  uppercase: true,
  className: "su-text-18",
  children: "Small Uppercase H3",
};
Uppercase.storyName = "Small Uppercase H3";

export const CustomProps = HeadingTemplate.bind({});
CustomProps.args = {
  level: "3",
  weight: "bold",
  tracking: "wider",
  uppercase: true,
  children: "Heading with Custom Props",
  id: "my-id",
  style: { color: "rebeccapurple" },
  leading: "custom-leading",
};
CustomProps.storyName = "With Custom Props";
