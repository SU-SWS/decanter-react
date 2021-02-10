import React from 'react'
import { Alert } from './Alert'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Composite/Alert',
  decorators: [withDesign],
  component: Alert
}

// Set up an Alert Template.
const AlertTemplate = ({ content, ...rest }) => <Alert {...rest}>{content}</Alert>

// Some default text.
const alertText = (
  <React.Fragment>
    This is the details of the alert message. This is a&nbsp;
    <a href='https://news.stanford.edu'>link within an alert.</a>
  </React.Fragment>
)

// Default State
export const Default = AlertTemplate.bind({})

Default.args = { content: alertText };
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
}