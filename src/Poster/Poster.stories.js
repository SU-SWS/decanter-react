import React from "react";
import { Poster } from "./Poster";
import { layoutOptions } from "./Poster.levers";

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
      url:
        "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A36",
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
    <Poster.Content>
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph children:su-leading-snug">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
    </Poster.Content>
  </Poster>
);

const PosterTemplateImage = ({ ...rest }) => (
  <Poster {...rest}>
    <Poster.Image
      image={{
        src: "https://placekitten.com/600/400",
      }}
      className="su-rs-mr-4"
    />
    <Poster.Content>
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph children:su-leading-snug">
        Cras varius. Ut non enim eleifend felis pretium feugiat. Suspendisse
        feugiat. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse
        faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor.
      </p>
    </Poster.Content>
  </Poster>
);

export const Default = PosterTemplate.bind({});
Default.storyName = "Default";

export const DefaultImage = PosterTemplateImage.bind({});
DefaultImage.storyName = "Default with Image";
