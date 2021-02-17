import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const BlockquoteComponent = ({children, ...props}) => {
  return (
    <blockquote {...props}>
      <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
      <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
      <cite>Said no one, ever</cite>
    </blockquote>
  )
}

BlockquoteComponent.propTypes = {
  className: PropTypes.string,
}

export default {
  title: 'HTML Elements/Blockquote',
  component: BlockquoteComponent,
  decorators: centered
};

// Safety first.
const Template = (args) => <BlockquoteComponent {...args} />
export const Blockquote = Template.bind({})
Blockquote.args = {
  className: '',
}
