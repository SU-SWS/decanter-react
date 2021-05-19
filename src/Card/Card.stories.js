import React from "react";
import { Card } from "./Card";
import { cardAlignOptions } from "./Card.levers";
import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";
import { CardSuperhead } from "./CardSuperhead";
import { Heading } from "../Heading/Heading";
import { CtaLink } from "../CtaLink/CtaLink";
import { CtaButton } from "../CtaButton/CtaButton";

export default {
  title: "Composite/Card",
  component: Card,
  subcomponents: {
    CardContent: Card.Content,
    CardImage: Card.Image,
    CardSuperHead: Card.Superhead,
    Heading: Card.Heading,
    CtaLink: Card.CtaLink,
    CtaButton: Card.CtaButton,
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=60%3A2916",
    },
    docs: {
      description: {
        component:
          "Card component with several fields to ensure flexibility - a media element, headline, super headline, body content, call-to-action (CTA) link and button link.",
      },
    },
  },
  argTypes: {
    isMinimal: {
      control: {
        type: "boolean",
      },
    },
    align: {
      control: {
        type: "inline-radio",
        options: cardAlignOptions,
      },
    },
  },
};

const CardTemplate = ({ ...rest }) => (
  <Card {...rest}>
    {/* Developer would pass in their own card content components */}
    <CardContent>
      <CardSuperhead className="su-font-sans su-font-bold su-type-0 su-mb-0">
        Super headline
      </CardSuperhead>
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
    </CardContent>
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
  children: <CardImage image />,
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
