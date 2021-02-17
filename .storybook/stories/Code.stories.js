import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const CodeComponent = ({type, ...props}) => {
  switch(type) {
    case 'kbd':
      return (<kbd {...props}>Cmd input</kbd>)
    case 'code':
      return (<code {...props} dangerouslySetInnerHTML={{__html: '<div>code here</div>'}} />)
    case 'samp':
      return (<samp {...props}>This is sample output from a computer program.</samp>)
  }
}

export default {
  title: 'HTML Elements/Code',
  component: CodeComponent,
  decorators: centered
};

// Safety first.
const Template = (args) => <CodeComponent {...args} />

export const KeyboardInput = Template.bind({})
KeyboardInput.args = {
  className: '',
  type: 'kbd'
}

export const CodeInput = Template.bind({})
CodeInput.args = {
  className: '',
  type: 'code'
}

export const SampleInput = Template.bind({})
SampleInput.args = {
  className: '',
  type: 'samp'
}

CodeComponent.propTypes = {
  className: PropTypes.string
}
