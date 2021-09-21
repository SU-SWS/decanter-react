import React from 'react';
import { Hero } from './Hero';
import { Card } from '../Card/Card';
import { CtaButton } from '../CtaButton/CtaButton';
import { Container } from '../Container/Container';
import { FlexBox } from '../FlexBox/FlexBox';
import { Heading } from '../Heading/Heading';

export default {
  title: 'Composite/Hero',
  component: Hero,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=16530%3A326',
    },
    docs: {
      description: {
        component: 'More information coming soon...',
      },
    },
  },
  argTypes: {},
};

const HeroTemplate = ({ ...rest }) => (
  <Hero {...rest}>
    <Card className="su-relative su-max-w-full md:su-max-w-600 md:su-absolute md:su-top-auto md:su-left-36 md:su-bottom-36">
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

export const Default = HeroTemplate.bind({});
Default.args = {
  bgImage: 'https://placekitten.com/1000/750',
  imgClasses: 'su-relative',
};
Default.storyName = 'Default';

const HeroGradient = ({ ...rest }) => (
  <Hero {...rest}>
    <div
      className="su-absolute su-block su-w-full su-h-full su-top-0"
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0), rgb(24, 29, 28))',
      }}
      aria-hidden="true"
    />
    <Container className="su-relative su-w-full su-rs-pt-9 su-rs-pb-4 su-top-0">
      <FlexBox direction="col" className="lg:su-mt-600">
        <div className="su-text-center su-text-white">
          <p className="su-max-w-prose su-font-semibold su-leading-display su-text-m1 su-text-shadow-md md:su-text-4 su-mx-auto su-mb-01em">
            Superheading
          </p>
          <Heading
            level={2}
            font="serif"
            weight="bold"
            className="su-leading-tight su-tracking-normal su-text-shadow-lg su-mb-02em sm:su-text-m6"
          >
            Headline
          </Heading>
          <p className="su-max-w-prose su-text-20 su-leading-display su-text-shadow su-mx-auto su-mb-0">
            Subheadline Donec sodales sagittis magna. Cras non dolor. Vestibulum
            suscipit nulla quis orci. Fusce vulputate eleifend sapien. Nulla
            porta dolor.
          </p>
        </div>
      </FlexBox>
    </Container>
  </Hero>
);

export const CustomGradient = HeroGradient.bind({});
CustomGradient.args = {
  bgImage: 'https://placekitten.com/1000/750',
  imgClasses: 'su-absolute',
};
CustomGradient.storyName = 'Custom Hero with Gradient and Text overlay';
