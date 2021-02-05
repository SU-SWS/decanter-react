import React from 'react'
import { Alert } from './Alert'

export default {
  title: 'Composite/Alert',
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
Default.args = { content: alertText }

// Success Variant.
export const Success = AlertTemplate.bind({})
Success.args = {
  variant: 'success',
  dismiss: true,
  label: 'Success',
  heading: 'Success Heading',
  content: alertText
}

// Error Variant.
export const Error = AlertTemplate.bind({})
Error.args = {
  variant: 'error',
  dismiss: true,
  label: 'Error',
  heading: 'Error Heading',
  content: alertText
}

// Info Variant.
export const Info = AlertTemplate.bind({})
Info.args = {
  variant: 'info',
  dismiss: true,
  label: 'Info',
  heading: 'Info Heading',
  content: alertText
}

// Warning Variant.
export const Warning = AlertTemplate.bind({})
Warning.args = {
  variant: 'warning',
  dismiss: true,
  label: 'Warning',
  heading: 'Warning Heading',
  content: alertText
}
