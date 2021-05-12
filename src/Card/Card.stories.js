import React from "react";
// import DOMPurify from "dompurify";
import { Card } from "./Card";
import { cardCtaOptions, cardAlignOptions } from "./Card.levers";
import { ctaButtonVariants } from "../CtaButton/CtaButton.levers";
import { buttonSizes } from "../common/button/button.levers";
import { iconOptions, iconAnimations } from "../common/icon/icon.levers";

const cardHeadline = "Headline";

const cardSuperHeadline = "Super Headline";

const cardBody =
  "Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit nulla quis orci. Phasellus a est.";

const cardCtaText = "Call to action link";

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
    linkIcon: {
      control: {
        type: "select",
        options: iconOptions,
      },
    },
    buttonVariant: {
      control: {
        type: "inline-radio",
        options: ctaButtonVariants,
      },
    },
    buttonSize: {
      control: {
        type: "inline-radio",
        options: buttonSizes,
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
  ctaText: cardCtaText,
};
DefaultCtaLink.storyName = "Default Cta Link Card";

export const DefaultCtaButton = CardTemplate.bind({});
DefaultCtaButton.args = {
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
  ctaText: cardCtaText,
};
DefaultCtaButton.storyName = "Default Cta Button Card";

export const Minimal = CardTemplate.bind({});
Minimal.args = {
  isMinimal: true,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
  ctaText: cardCtaText,
};
Minimal.storyName = "Minimal Card";

export const MinimalImage = CardTemplate.bind({});
MinimalImage.args = {
  image: {
    filename: "http://placekitten.com/260/180",
    alt: "Kitten",
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
  ctaText: cardCtaText,
};
MinimalCtaLink.storyName = "Minimal Cta Link Card";

export const MinimalCtaButton = CardTemplate.bind({});
MinimalCtaButton.args = {
  isMinimal: true,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
  ctaText: cardCtaText,
};
MinimalCtaButton.storyName = "Minimal Cta Button Card";
