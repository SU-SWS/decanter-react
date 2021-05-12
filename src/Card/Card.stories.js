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
  isMinimal: false,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
  align: "center",
};
Default.storyName = "Default Card";

export const Minimal = CardTemplate.bind({});
Minimal.args = {
  isMinimal: true,
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  text: cardBody,
  cta: "ctaLink",
  align: "center",
};
Minimal.storyName = "Minimal Card";
