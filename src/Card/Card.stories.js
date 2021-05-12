import React from "react";
// import DOMPurify from "dompurify";
import { Card } from "./Card";
import { cardCtaOptions, cardAlignOptions } from "./Card.levers";

// const image = { filename: "http://placecorgi.com/260/180" };

const cardHeadline = "Headline";

const cardSuperHeadline = "Super Headline";

const cardBody =
  "Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit nulla quis orci. Phasellus a est.";

export default {
  title: "Simple/Card",
  component: Card,
  argTypes: {
    cta: {
      control: {
        type: "inline-radio",
        options: cardCtaOptions,
      },
    },
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

const CardTemplate = ({ ...rest }) => <Card {...rest} />;

export const Default = CardTemplate.bind({});
Default.args = {
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
Default.storyName = "Default Card";

export const DefaultImage = CardTemplate.bind({});
DefaultImage.args = {
  image: {
    filename: "http://placecorgi.com/260/180",
    alt: "Corgi puppy",
  },
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
DefaultImage.storyName = "Default Card with Image";

export const DefaultCtaLink = CardTemplate.bind({});
DefaultCtaLink.args = {
  cta: "ctaLink",
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
DefaultCtaLink.storyName = "Default Cta Link Card";

export const DefaultCtaButton = CardTemplate.bind({});
DefaultCtaButton.args = {
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
DefaultCtaButton.storyName = "Default Cta Button Card";

export const Minimal = CardTemplate.bind({});
Minimal.args = {
  isMinimal: true,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
Minimal.storyName = "Minimal Card";

export const MinimalImage = CardTemplate.bind({});
MinimalImage.args = {
  image: {
    filename: "http://placekitten.com/g/260/180",
    alt: "Corgi puppy",
  },
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
MinimalImage.storyName = "Minimal Card with Image";

export const MinimalCtaLink = CardTemplate.bind({});
MinimalCtaLink.args = {
  isMinimal: true,
  cta: "ctaLink",
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
MinimalCtaLink.storyName = "Minimal Cta Link Card";

export const MinimalCtaButton = CardTemplate.bind({});
MinimalCtaButton.args = {
  isMinimal: true,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
};
MinimalCtaButton.storyName = "Minimal Cta Button Card";
