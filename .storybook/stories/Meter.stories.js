import React from 'react';
import PropTypes from 'prop-types'
import { centered } from "./Decorators"

const MeterComponent = (props) => {
  return (
    <meter {...props}>{props.value} out of {props.max}</meter>
  )
}

export default {
  title: 'HTML Elements/Meter',
  component: MeterComponent,
  decorators: centered
};

// Safety first.
const Template = (args) => <MeterComponent {...args} />

export const Meter = Template.bind({})
Meter.args = {
  className: '',
  value: 2,
  min: 0,
  max: 10
}

MeterComponent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
}
