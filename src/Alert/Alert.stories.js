import React from 'react'
import { Alert } from './Alert'
import { Button } from '../Button/Button'

import { withDesign } from 'storybook-addon-designs'
import { alertTypes } from './Alert.levers'

export default {
  title: 'Composite/Alert',
  decorators: [withDesign],
  component: Alert,
  subcomponents: { Button }
}

// Set up an Alert Template.
const AlertTemplate = ({ children, ...rest }) => <Alert {...rest}>{children}</Alert>

// Some default text.
const alertText = (
  <React.Fragment>
    This is the details of the alert message. This is a&nbsp;
    <a href='https://news.stanford.edu'>link within an alert.</a>
  </React.Fragment>
)

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = AlertTemplate.bind({})

Default.args = {
  children: alertText
}

// Make sure the enum types work.
Default.argTypes = {
  type: {
    control: {
      type: 'select',
      options: alertTypes
    }
  }
}

// Connect a Figma Preview.
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
}
