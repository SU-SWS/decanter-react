import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const TextComponent = (props) => {
  return (
    <div {...props}>
      <p><a href="#!">This is a text link</a>.</p>
      <p><strong>Strong is used to indicate strong importance.</strong></p>
      <p><em>This text has added emphasis.</em></p>
      <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>
      <p>The <i>i element</i> is text that is offset from the normal text.</p>
      <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
      <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
      <p><s>This text has a strikethrough</s>.</p>
      <p>Superscript<sup>®</sup>.</p>
      <p>Subscript for things like H<sub>2</sub>O.</p>
      <p><small>This small text is small for for fine print, etc.</small></p>
      <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
      <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
      <p><cite>This is a citation.</cite></p>
      <p>The <dfn>dfn element</dfn> indicates a definition.</p>
      <p>The <mark>mark element</mark> indicates a highlight.</p>
      <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
      <p>The time element: <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
    </div>
  )
}

export default {
  title: 'HTML Elements/Text Styles',
  component: TextComponent,
  decorators: centered
};

// Safety first.
const Template = (args) => <TextComponent {...args} />

export const TextStyles = Template.bind({})
TextStyles.args = {
  className: ''
}

TextStyles.propTypes = {
  className: PropTypes.string
}
