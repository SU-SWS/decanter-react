import React from "react";
import { Card } from "./Card";
import { cardAlignOptions } from "./Card.levers";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../CtaLink/CtaLink";
import { CtaButton } from "../CtaButton/CtaButton";

export default {
  title: "Composite/Card",
  component: Card,
  subcoponent: { Heading, CtaLink, CtaButton },
  argTypes: {
    align: {
      control: {
        type: "inline-radio",
        options: cardAlignOptions,
      },
    },
    isMinimal: {
      control: {
        type: "boolean",
      },
    },
  },
};

const CardTemplate = ({ ...rest }) => (
  <Card {...rest}>
    {/* Developer would pass in their own card content components */}
    <span className="su-font-sans su-font-bold su-type-0 su-mb-0">
      Super headline
    </span>
    <Heading level="3" size={1} className="su-mb-0">
      Headline
    </Heading>
    <p className="su-card-paragraph">
      Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit
      nulla quis orci. Phasellus a est.
    </p>
    <CtaLink
      text="Learn more"
      srText="about Decanter"
      animate="right"
      icon="more"
      href="https://decanter.stanford.edu"
    />
    <CtaButton
      text="Learn more"
      srText="about Decanter"
      animate="right"
      icon="more"
      variant="solid"
      size="default"
      href="https://decanter.stanford.edu"
      className="su-mt-16"
    />
  </Card>
);

export const Default = CardTemplate.bind({});
Default.args = {};
Default.storyName = "Default";

export const DefaultImage = CardTemplate.bind({});
DefaultImage.args = {
  image: {
    filename: "https://placekitten.com/600/300",
  },
};
DefaultImage.storyName = "Default with Image";

export const DefaultCenter = CardTemplate.bind({});
DefaultCenter.args = {
  align: "center",
};
DefaultCenter.storyName = "Default Center Content";

export const Minimal = CardTemplate.bind({});
Minimal.args = {
  isMinimal: true,
};
Minimal.storyName = "Minimal";

export const MinimalImage = CardTemplate.bind({});
MinimalImage.args = {
  image: {
    filename: "https://placekitten.com/600/300",
  },
  isMinimal: true,
};
MinimalImage.storyName = "Minimal with Image";

export const MinimalCenter = CardTemplate.bind({});
MinimalCenter.args = {
  align: "center",
  isMinimal: true,
};
MinimalCenter.storyName = "Minimal Center Content";
