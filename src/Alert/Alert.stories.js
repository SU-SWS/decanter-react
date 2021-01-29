import React from 'react'
import { Alert } from './Alert'

export default {
  title: 'Composite/Alert',
  component: Alert
}

// Set up an Alert Template.
const AlertTemplate = (args) => <Alert {...args}>{args.content}</Alert>

// Some default text.
const alertText = (
  <React.Fragment>
    This is the details of the alert message. This is a&nbsp;
    <a href='https://news.stanford.edu'>link within an alert.</a>
  </React.Fragment>
)

// Default State
export const Default = AlertTemplate.bind({})
Default.args = { content: alertText }

// Success Variant.
export const Success = AlertTemplate.bind({})
Success.args = {
  variant: 'info',
  dismiss: true,
  label: 'Success',
  heading: 'Success Heading',
  content: alertText
}
