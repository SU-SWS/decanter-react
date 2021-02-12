import React from 'react';
import PropTypes from 'prop-types'

export const textShort = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
export const textLong = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
export const textMixed = "<p>A <strong>paragraph</strong> (from the Greek paragraphos, <em>“to write beside”</em> or “<i>written beside</i>”) is a <a href=\"#\">self-contained unit of a discourse</a> in writing dealing with a <span class=\"su-underline\">particular point or idea</span>.</p>"

const Paragraph = ({children, ...props}) => {
  return (
    <p {...props}>{children}</p>
  )
}

Paragraph.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string
}

export default {
  title: 'Elements/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args = {
  className: '',
  children: textLong
}

export const Short = Template.bind({});
Short.args = {
  className: '',
  children: textShort
}

export const Long = Template.bind({});
Long.args = {
  className: '',
  children: textLong,
}

