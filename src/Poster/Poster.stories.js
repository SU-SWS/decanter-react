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
      url: "https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A36",
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
      <p className="su-big-paragraph">
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
      className="su-rs-mb-2"
    />
    <Poster.Content>
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph">
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
    <Poster.Image
      image={{
        src: "https://placekitten.com/600/400",
      }}
      className="su-rs-mr-4"
    />
    <Poster.Content>
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph">
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
    <Poster.Image
      image={{
        src: "https://placekitten.com/600/400",
      }}
      className="su-rs-mb-2"
    />
    <Poster.Content className="su-text-white">
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph">
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
    <Poster.Image
      image={{
        src: "https://placekitten.com/600/400",
      }}
      className="su-rs-mr-4"
    />
    <Poster.Content className="su-text-white">
      <Poster.Headline className="su-mb-0">Title</Poster.Headline>
      <p className="su-big-paragraph">
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

export const DefaultLeft = PosterTemplate.bind({});
DefaultLeft.args = {
  layout: "left",
};
DefaultLeft.storyName = "Default, Left Algin";

export const DefaultImage = PosterTemplateImage.bind({});
DefaultImage.storyName = "Default with Image, Center Align";

export const DefaultImageLeft = PosterTemplateImageLeft.bind({});
DefaultImageLeft.args = {
  layout: "left",
};
DefaultImageLeft.storyName = "Default with Image, Left Align";

export const DefaultGreyBg = PosterTemplateImage.bind({});
DefaultGreyBg.args = {
  bgColor: "su-bg-foggy-light",
};
DefaultGreyBg.storyName = "Default Light Grey Background";

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
};
CustomPoster.storyName = "Custom Poster with Bg Gradient, Center Align";

export const CustomPosterLeft = PosterTemplateCustomLeft.bind({});
CustomPosterLeft.args = {
  bgImage: {
    src: "https://placekitten.com/600/400",
  },
  bgGradient:
    "linear-gradient(240deg, rgba(24, 29, 28) 10%, rgba(98, 0, 89, 0.85) 60%, rgb(177, 4, 14) 100%)",
  layout: "left",
};
CustomPosterLeft.storyName = "Custom Poster with Bg Gradient, Left Align";
