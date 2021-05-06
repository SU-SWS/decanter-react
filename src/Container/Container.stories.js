import React from "react";
import DOMPurify from "dompurify";
import { Container } from "./Container";
import { containerElements, containerWidths } from "./Container.levers";

export default {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    element: {
      control: {
        type: "select",
        options: containerElements,
      },
    },
    width: {
      control: {
        type: "select",
        options: containerWidths,
      },
    },
  },
};

const ContainerTemplate = ({ children, ...rest }) => {
  /* eslint-disable */
  // We do this to mimic sending in CMS content or another React component.
  const content = (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
  );
  return <Container {...rest}>{content}</Container>;
};

const textLong =
  "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";

export const Default = ContainerTemplate.bind({});
Default.args = {
  children: textLong,
  className: "su-bg-illuminating-light su-rs-py-6",
};
Default.storyName = "Centered Container";

export const Fullwidth = ContainerTemplate.bind({});
Fullwidth.args = {
  element: "section",
  width: "full",
  children: textLong,
  className: "su-bg-foggy-light su-rs-py-6",
};
Fullwidth.storyName = "100% Width";

export const Screenwidth = ContainerTemplate.bind({});
Screenwidth.args = {
  element: "section",
  width: "screen",
  children: textLong,
  className: "su-bg-foggy su-rs-py-6",
};
Screenwidth.storyName = "100% Viewport Width";

export const CustomProps = ContainerTemplate.bind({});
CustomProps.args = {
  element: "section",
  width: "screen",
  children: textLong,
  className: "su-bg-foggy su-rs-py-6",
  id: "my-id",
  "data-stuff": "some value",
  rel: "no-follow",
};
CustomProps.storyName = "With Custom Props";
