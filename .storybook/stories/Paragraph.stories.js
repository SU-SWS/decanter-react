import React from 'react';
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'

export const textShort = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
export const textLong = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
export const textMixed = "<p>A <strong>paragraph</strong> (from the Greek paragraphos, <em>“to write beside”</em> or “<i>written beside</i>”) is a <a href=\"#\">self-contained unit of a discourse</a> in writing dealing with a <span class=\"su-underline\">particular point or idea</span>.</p>"

const Paragraph = ({children, ...props}) => {
  return (
    <p {...props}>{children}</p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default {
  title: 'Elements/Paragraph',
  component: Paragraph,
  excludeStories: ['textShort', 'textLong', 'textMixed'],
};

// Safety first.
const Template = (args) => <Paragraph {...args} />
// I too, live dangerously.
const DangerTemplate = ({children, ...args}) => (<div {...args} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />);

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

export const Type1 = Template.bind({});
Type1.args = {
  className: 'su-type-1',
  children: 'Heading Example'
}

export const Type2 = Template.bind({});
Type2.args = {
  className: 'su-type-2',
  children: 'Heading Example'
}

export const Type3 = Template.bind({});
Type3.args = {
  className: 'su-type-3',
  children: 'Heading Example'
}

export const Type4 = Template.bind({});
Type4.args = {
  className: 'su-type-4',
  children: 'Heading Example'
}

export const Type5 = Template.bind({});
Type5.args = {
  className: 'su-type-5',
  children: 'Heading Example'
}

export const Type6 = Template.bind({});
Type6.args = {
  className: 'su-type-6',
  children: 'Heading Example'
}

export const MixedContent = DangerTemplate.bind({});
MixedContent.args = {
  className: '',
  children: textMixed
}

export const Splash = Template.bind({})
Splash.args = {
  ...Short.args,
  className: 'su-splash-text'
}

export const Intro = Template.bind({})
Intro.args = {
  ...Short.args,
  className: 'su-intro-text'
}

export const Big = Template.bind({})
Big.args = {
  ...Short.args,
  className: 'su-big-paragraph'
}
