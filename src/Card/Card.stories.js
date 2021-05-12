import React from "react";
// import DOMPurify from "dompurify";
import { Card } from "./Card";
import { cardCtaOptions } from "./Card.levers";

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
  children: "Default Card",
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  align: "center",
  text: cardBody,
};
Default.storyName = "Default Card";

export const Minimal = CardTemplate.bind({});
Minimal.args = {
  isMinimal: true,
  children: "Minimal Card",
  headline: cardHeadline,
  superHeadline: cardSuperHeadline,
  align: "center",
  text: cardBody,
  cta: "ctaButton",
};
Minimal.storyName = "Minimal Card";
