import React from "react";
import { FlexBox } from "./FlexBox";
import {
  flexElements,
  flexDirection,
  flexWrap,
  flexGap,
  flexJustifyContent,
  flexJustifyItems,
  flexAlignContent,
  flexAlignItems,
} from "./FlexBox.levers";

export default {
  title: "Layout/FlexBox",
  component: FlexBox,
  argTypes: {
    element: {
      control: {
        type: "select",
        options: flexElements,
      },
    },
    direction: {
      control: {
        type: "inline-radio",
        options: Object.keys(flexDirection),
      },
    },
    wrap: {
      control: {
        type: "inline-radio",
        options: Object.keys(flexWrap),
      },
    },
    gap: {
      control: {
        type: "boolean",
        options: flexGap,
      },
    },
    justifyContent: {
      control: {
        type: "select",
        options: Object.keys(flexJustifyContent),
      },
    },
    justifyItems: {
      control: {
        type: "select",
        options: Object.keys(flexJustifyItems),
      },
    },
    alignContent: {
      control: {
        type: "select",
        options: Object.keys(flexAlignContent),
      },
    },
    alignItems: {
      control: {
        type: "select",
        options: Object.keys(flexAlignItems),
      },
    },
  },
};

const FlexBoxTemplate = ({ children, ...rest }) => (
  <FlexBox {...rest}>
    <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">
      1
    </div>
    <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">
      2
    </div>
    <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">
      3
    </div>
  </FlexBox>
);

const FlexBoxMultiTemplate = ({ children, ...rest }) => (
  <FlexBox {...rest}>
    <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">
      1
    </div>
    <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">
      2
    </div>
    <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">
      3
    </div>
    <div className="su-w-1/4 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">
      4
    </div>
    <div className="su-w-1/5 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">
      5
    </div>
    <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">
      6
    </div>
  </FlexBox>
);

export const Default = FlexBoxTemplate.bind({});
Default.args = {
  gap: true,
  className: "su-bg-foggy-light su-text-white",
};
Default.storyName = "Single Row";

export const SpaceBetween = FlexBoxTemplate.bind({});
SpaceBetween.args = {
  gap: true,
  justifyContent: "space-between",
  className: "su-bg-foggy-light su-text-white",
};
SpaceBetween.storyName = "Single Row with Space Between Items";

export const MultipleRows = FlexBoxMultiTemplate.bind({});
MultipleRows.args = {
  wrap: "wrap",
  gap: true,
  justifyContent: "start",
  className: "su-bg-foggy-light su-text-white",
};
MultipleRows.storyName = "Multiple Rows";

export const MultipleRowsCenter = FlexBoxMultiTemplate.bind({});
MultipleRowsCenter.args = {
  wrap: "wrap",
  gap: true,
  justifyContent: "center",
  className: "su-bg-foggy-light su-text-white",
};
MultipleRowsCenter.storyName = "Multiple Rows with Centered Items";

export const ColumnCenter = FlexBoxMultiTemplate.bind({});
ColumnCenter.args = {
  direction: "col",
  gap: true,
  alignItems: "center",
  className: "su-bg-foggy-light su-text-white",
};
ColumnCenter.storyName = "Centered Items in Single Column";

export const CustomProps = FlexBoxMultiTemplate.bind({});
CustomProps.args = {
  gap: true,
  className: "su-bg-foggy-light su-text-white",
  id: "my-id",
  rel: "no-follow",
  "data-stuff": "some-value",
  title: "Hi, I am a title",
};
CustomProps.storyName = "With Custom Props";
