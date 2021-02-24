import React from 'react';
import { Container } from './Container';
import { containerElements, containerWidths } from './Container.levers';
import DOMPurify from 'dompurify'

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: containerElements
      }
    },
    width: {
      control: {
        type: 'select',
        options: containerWidths
      }
    },
  }
};

const ContainerTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
  return (
    <Container {...rest}>{content}</Container>
  )
}

export const Default = ContainerTemplate.bind({});
Default.args = {
  element: 'div',
  width: 'centered-container',
  children: "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
  className: 'su-bg-illuminating-light su-rs-py-6'
};
Default.storyName = 'Centered Container'

export const Fullwidth = ContainerTemplate.bind({});
Fullwidth.args = {
  element: 'section',
  width: 'full',
  children: "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
  className: 'su-bg-foggy-light su-rs-py-6'
};
Fullwidth.storyName = '100% Width'
