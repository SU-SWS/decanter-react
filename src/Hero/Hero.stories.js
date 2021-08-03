import React from "react";
import { Hero } from "./Hero";
import { Card } from "../Card/Card";
import { CtaButton } from "../CtaButton/CtaButton";

export default {
  title: "Composite/Hero",
  component: Hero,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=16530%3A326",
    },
    docs: {
      description: {
        component: "More information coming soon...",
      },
    },
  },
  argTypes: {},
};

const HeroTemplate = ({ ...rest }) => <Hero {...rest} />;

export const Default = HeroTemplate.bind({});
Default.args = {
  bgImage: { src: "https://placekitten.com/2000/1300" },
};
Default.storyName = "Default";

const HeroCardTemp = ({ ...rest }) => (
  <Hero {...rest}>
    <Card className="su-card su-hero__card su-absolute su-top-auto su-left-36 su-bottom-36">
      <Card.Content align="left" className="su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
        <Card.Superhead>Super headline</Card.Superhead>
        <Card.Headline>Headline</Card.Headline>
        <p className="su-card-paragraph">
          Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit
          nulla quis orci. Phasellus a est.
        </p>
        <CtaButton
          text="Learn more"
          srText="about Decanter"
          animate="right"
          icon="more"
          variant="solid"
          size="default"
          href="https://decanter.stanford.edu"
          className="su-rs-mt-neg1"
        />
      </Card.Content>
    </Card>
  </Hero>
);

export const DefaultCard = HeroCardTemp.bind({});
DefaultCard.args = {
  bgImage: { src: "https://placekitten.com/2000/1300" },
};
DefaultCard.storyName = "Default with Card";

const HeroCaptionTemp = ({ ...rest }) => (
  <Hero {...rest}>
    <div className="su-caption su-w-full su-flex su-justify-end su-cc">
      <p className="su-max-w-prose su-text-right">
        Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud{" "}
        <a href="#">exercitation ullamco laboris nisi</a> ut aliquip{" "}
        <i>(ex ea commodo consequat</i>).
      </p>
    </div>
  </Hero>
);

export const DefaultCaption = HeroCaptionTemp.bind({});
DefaultCaption.args = {
  bgImage: { src: "https://placekitten.com/2000/1300" },
};
DefaultCaption.storyName = "Default with Caption";
