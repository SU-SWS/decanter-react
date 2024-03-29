import React from 'react';
import { Card } from './Card';
import { CtaLink } from '../CtaLink/CtaLink';
import { CtaButton } from '../CtaButton/CtaButton';
import { cardElements } from './Card.levers';

export default {
  title: 'Composite/Card',
  component: Card,
  subcomponents: {
    'Card.Content': Card.Content,
    'Card.Image': Card.Image,
    'Card.Superhead': Card.Superhead,
    'Card.Headline': Card.Headline,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=60%3A2916',
    },
    docs: {
      description: {
        component:
          'Card component with several fields to ensure flexibility - a media element, headline, super headline, body content, call-to-action (CTA) link and button link.',
      },
    },
  },
  argTypes: {
    element: {
      type: 'select',
      options: cardElements,
    },
    isMinimal: {
      type: 'boolean',
    },
  },
};

const CardTemplateDefault = ({ ...rest }) => (
  <Card {...rest}>
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
);

const CardTemplateDefaultImage = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
      }}
    />
    <Card.Content align="left" className="su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
      <Card.Superhead isUppercase="true">Super headline</Card.Superhead>
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
        variant="outline"
        size="default"
        href="https://decanter.stanford.edu"
        className="su-mt-16"
      />
    </Card.Content>
  </Card>
);

const CardTemplateDefaultCenter = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
      }}
    />
    <Card.Content align="center" className="su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
      <Card.Superhead>Super headline</Card.Superhead>
      <Card.Headline>Headline</Card.Headline>
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
    </Card.Content>
  </Card>
);

const CardTemplateDefaultRight = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
      }}
    />
    <Card.Content align="right" className="su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
      <Card.Superhead>Super headline</Card.Superhead>
      <Card.Headline>Headline</Card.Headline>
      <p className="su-card-paragraph">
        Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit
        nulla quis orci. Phasellus a est.
      </p>
      <CtaButton
        text="Download"
        srText="this cat"
        animate="down"
        icon="download"
        variant="solid"
        size="default"
        href="https://decanter.stanford.edu"
        className="su-rs-mt-neg1"
      />
    </Card.Content>
  </Card>
);

const CardTemplateMinimal = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Content align="left">
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
        className="su-mt-16"
      />
    </Card.Content>
  </Card>
);

const CardTemplateMinimalImage = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
        alt: 'something',
        id: 'su-id',
      }}
    />
    <Card.Content align="left" className="su-rs-pt-2">
      <Card.Superhead>Super headline</Card.Superhead>
      <Card.Headline>Headline</Card.Headline>
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
    </Card.Content>
  </Card>
);

const CardTemplateMinimalCenter = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
      }}
    />
    <Card.Content align="center" className="su-rs-pt-2">
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
        className="su-mt-16"
      />
    </Card.Content>
  </Card>
);

const CardTemplateMinimalRight = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      image={{
        src: 'https://placekitten.com/600/300',
      }}
    />
    <Card.Content align="right" className="su-rs-pt-2">
      <Card.Superhead>Super headline</Card.Superhead>
      <Card.Headline>Headline</Card.Headline>
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
    </Card.Content>
  </Card>
);

const CardTemplateCustom = ({ ...rest }) => (
  <Card {...rest}>
    <Card.Image
      aspectRatio="1x1"
      image={{
        src: 'https://placekitten.com/600/400',
      }}
    />
    <Card.Content align="left" className="su-rs-px-2 su-rs-pt-2 su-rs-pb-4">
      <Card.Superhead className="su-text-sky su-uppercase su-tracking-widest">
        Super headline
      </Card.Superhead>
      <Card.Headline
        font="slab"
        size={4}
        className="su-text-plum-light"
        data-label="custom-card"
      >
        Headline
      </Card.Headline>
      <p className="su-card-paragraph">
        Fusce convallis metus id felis luctus adipiscing. Vestibulum suscipit
        nulla quis orci. Phasellus a est.
      </p>
      <CtaButton
        text="Learn more"
        srText="about Decanter"
        animate="right"
        icon="more"
        variant="unset"
        size="unset"
        href="https://decanter.stanford.edu"
        className="su-rs-mt-0 su-bg-lagunita-dark hocus:su-bg-plum su-text-white hocus:su-text-white su-p-30"
      />
    </Card.Content>
  </Card>
);

export const Default = CardTemplateDefault.bind({});
Default.storyName = 'Default';

export const DefaultImage = CardTemplateDefaultImage.bind({});
DefaultImage.storyName = 'Default with Image';

export const DefaultCenter = CardTemplateDefaultCenter.bind({});
DefaultCenter.storyName = 'Default Center Content';

export const DefaultRight = CardTemplateDefaultRight.bind({});
DefaultRight.storyName = 'Default Right Content';

export const Minimal = CardTemplateMinimal.bind({});
Minimal.args = {
  isMinimal: true,
};
Minimal.storyName = 'Minimal';

export const MinimalImage = CardTemplateMinimalImage.bind({});
MinimalImage.args = {
  isMinimal: true,
};
MinimalImage.storyName = 'Minimal with Image';

export const MinimalCenter = CardTemplateMinimalCenter.bind({});
MinimalCenter.args = {
  isMinimal: true,
};
MinimalCenter.storyName = 'Minimal Center Content';

export const MinimalRight = CardTemplateMinimalRight.bind({});
MinimalRight.args = {
  isMinimal: true,
};
MinimalRight.storyName = 'Minimal Right Content';

export const CustomCard = CardTemplateCustom.bind({});
CustomCard.args = {
  className: 'su-bg-foggy-light',
  id: 'decanter-card',
};
CustomCard.storyName = 'Custom Card with Square Image';
