import React from 'react';
import PropTypes from 'prop-types'

const Blockquote = ({children, ...props}) => {
  return (
    <blockquote {...props}>
      <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
      <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
      <cite>Said no one, ever</cite>
    </blockquote>
  )
}

Blockquote.PropTypes = {
  className: PropTypes.string,
}

export default {
  title: 'Elements/Blockquote',
  component: Blockquote
};

// Safety first.
const Template = (args) => <Blockquote {...args} />
export const Default = Template.bind({})
Default.args = {
  className: '',
}
