import React from "react";
import { Poster } from "./Poster";
import { layoutOptions } from "./Poster.levers";
import { CtaButton } from "../CtaButton/CtaButton";

export default {
  title: "Composite/Poster",
  component: Poster,
  subcomponents: {
    "Poster.Content": Poster.Content,
    "Poster.Image": Poster.Image,
    "Poster.Headline": Poster.Headline,
  },
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
  argTypes: {
    layout: {
      type: "select",
      options: layoutOptions,
    },
  },
};

const PosterTemplate = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Content className="su-items-center su-text-center su-align-center">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
      <CtaButton
        text="Learn more"
        srText="about Decanter"
        animate="right"
        icon="more"
        variant="solid"
        size="big"
        href="https://decanter.stanford.edu"
      />
    </Poster.Content>
  </Poster>
);

const PosterTemplateImage = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image className="su-rs-mb-2">
      <img
        src="https://placekitten.com/600/400"
        className="su-object-cover su-w-full su-h-full su-object-center"
        alt=""
      />
    </Poster.Image>
    <Poster.Content className="su-items-center su-text-center su-align-center">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
    </Poster.Content>
  </Poster>
);

const PosterTemplateImageLeft = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image className="su-rs-mr-4">
      <img
        src="https://placekitten.com/600/400"
        className="su-object-cover su-w-full su-h-full su-object-center"
        alt=""
      />
    </Poster.Image>

    <Poster.Content className="su-items-start md:su-flex-grow">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
    </Poster.Content>
  </Poster>
);

const PosterTemplateCustom = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image className="su-rs-mb-2">
      <img
        src="https://placekitten.com/600/400"
        className="su-object-cover su-w-full su-h-full su-object-center"
        alt=""
      />
    </Poster.Image>
    <Poster.Content className="su-text-white su-items-center su-text-center su-align-center">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
    </Poster.Content>
  </Poster>
);

const PosterTemplateCustomLeft = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image className="su-rs-mr-4">
      <img
        src="https://placekitten.com/600/400"
        className="su-object-cover su-w-full su-h-full su-object-center"
        alt=""
      />
    </Poster.Image>
    <Poster.Content className="su-text-white su-items-start md:su-flex-grow">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
      <CtaButton
        text="Learn more"
        srText="about Decanter"
        animate="right"
        icon="more"
        variant="unset"
        size="small"
        href="https://decanter.stanford.edu"
        className="su-rs-mt-0 su-bg-white hocus:su-bg-lagunita su-text-black hocus:su-text-white"
      />
    </Poster.Content>
  </Poster>
);

const PosterTemplateCustomBorder = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image className="su-border-3 su-border-solid su-border-digital-red-light su-rs-mb-2">
      <img
        src="https://placekitten.com/600/400"
        className="su-object-cover su-w-full su-h-full su-object-center"
        alt=""
      />
    </Poster.Image>
    <Poster.Content className="su-text-white su-items-center su-text-center su-align-center">
      <Poster.Headline>Title</Poster.Headline>
      <p className="su-big-paragraph su-leading-snug last:su-mb-0">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
      <CtaButton
        text="Learn more"
        srText="about Decanter"
        animate="right"
        icon="more"
        variant="ghost"
        size="big"
        href="https://decanter.stanford.edu"
        className="su-rs-mt-0"
      />
    </Poster.Content>
  </Poster>
);

export const Default = PosterTemplate.bind({});
Default.args = {
  bgColor: "su-bg-foggy-light",
};
Default.storyName = "Default";

export const DefaultImage = PosterTemplateImage.bind({});
DefaultImage.args = {
  bgColor: "su-bg-foggy-light",
};
DefaultImage.storyName = "Default with Image, Center layout";

export const DefaultImageLeft = PosterTemplateImageLeft.bind({});
DefaultImageLeft.args = {
  bgColor: "su-bg-foggy-light",
  layout: "left",
};
DefaultImageLeft.storyName = "Default with Image, Left layout";

export const DefaultGreyBg = PosterTemplateImage.bind({});
DefaultGreyBg.args = {
  bgColor: "su-bg-white",
};
DefaultGreyBg.storyName = "Default White Background";

export const DefaultBlackBg = PosterTemplateCustomLeft.bind({});
DefaultBlackBg.args = {
  bgColor: "su-bg-black",
  layout: "left",
};
DefaultBlackBg.storyName = "Default Black Background";

export const CustomPoster = PosterTemplateCustom.bind({});
CustomPoster.args = {
  bgImage: {
    src: "https://placekitten.com/600/400",
  },
  isGradient: true,
};
CustomPoster.storyName = "Custom Poster with Bg Gradient, Center layout";

export const CustomPosterLeft = PosterTemplateCustomLeft.bind({});
CustomPosterLeft.args = {
  bgImage: {
    src: "https://placekitten.com/600/400",
  },
  bgGradient:
    "linear-gradient(240deg, rgba(24, 29, 28) 10%, rgba(98, 0, 89, 0.85) 60%, rgb(177, 4, 14) 100%)",
  layout: "left",
  isGradient: true,
};
CustomPosterLeft.storyName = "Custom Poster with Bg Gradient, Left layout";

export const CustomPosterBorder = PosterTemplateCustomBorder.bind({});
CustomPosterBorder.args = {
  bgColor: "su-bg-lagunita",
};
CustomPosterBorder.storyName = "Custom Poster with CtaButton";
