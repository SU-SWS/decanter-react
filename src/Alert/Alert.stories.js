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

// Success Variant.
export const Success = AlertTemplate.bind({})
Success.args = {
  variant: 'success',
  dismiss: true,
  label: 'Success',
  heading: 'Success Heading',
  content: alertText
}
Success.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
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
Error.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
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
Info.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
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
Warning.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
}
