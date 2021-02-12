import React from 'react';
import PropTypes from 'prop-types'

const textShort = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const textLong = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

const Paragraph = (props) => {
  return (
    <p className={props.className}>{props.children}</p>
  )
}

Paragraph.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default {
  title: 'Internal/Paragraph',
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

