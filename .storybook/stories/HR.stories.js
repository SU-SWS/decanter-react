import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const HRComponent = (props) => {
  return (
    <hr {...props} />
  )
}

export default {
  title: 'HTML Elements/Horizontal Rule',
  component: HRComponent,
  decorators: centered
};

// Safety first.
const Template = (args) => <HRComponent {...args} />

export const HorizontalRule = Template.bind({})
HorizontalRule.args = {
  className: ''
}

HRComponent.propTypes = {
  className: PropTypes.string
}
