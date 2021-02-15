import React from 'react'
import { Alert } from './Alert'
import { Button } from '../Button/Button'
import { withDesign } from 'storybook-addon-designs'
import { alertTypes } from './Alert.levers'
import { textMixed } from '../../.storybook/stories/Paragraph.stories'
import DOMPurify from 'dompurify'

export default {
  title: 'Composite/Alert',
  decorators: [withDesign],
  component: Alert,
  subcomponents: { Button }
}

// Set up an Alert Template.
const AlertTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content = <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />
  return (
    <Alert {...rest}>{content}</Alert>
  )
}

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = AlertTemplate.bind({})

Default.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum'
}

export const Info = AlertTemplate.bind({})
Info.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  type: 'info'
}

export const Error = AlertTemplate.bind({})
Error.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  type: 'error'
}

export const Warning = AlertTemplate.bind({})
Warning.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  type: 'warning'
}

export const Success = AlertTemplate.bind({})
Success.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  type: 'success'
}

export const LabelsOnTop = AlertTemplate.bind({})
LabelsOnTop.args = {
  storyName: 'Labels on Top',
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  isIconTop: true,
  isLabelTop: true
}

export const NoDismiss = AlertTemplate.bind({})
NoDismiss.args = {
  storyName: 'No Dismiss Button',
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  hasDismiss: false
}

export const BigIcon = AlertTemplate.bind({})
BigIcon.args = {
  storyName: 'Big Icon + No Label',
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  hasLabel: false,
  isLargeIcon: true
}

export const NoHeader = AlertTemplate.bind({})
NoHeader.args = {
  storyName: 'No Header',
  children: textMixed,
  isLabelTop: true,
  isLargeIcon: true
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

Info.argTypes = { ...Default.argTypes }
Error.argTypes = { ...Default.argTypes }
Warning.argTypes = { ...Default.argTypes }
Success.argTypes = { ...Default.argTypes }
LabelsOnTop.argTypes = { ...Default.argTypes }
NoDismiss.argTypes = { ...Default.argTypes }
BigIcon.argTypes = { ...Default.argTypes }
NoHeader.argTypes = { ...Default.argTypes }

// Connect a Figma Preview.
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
  }
}

Info.parameters = { ...Default.parameters }
Error.parameters = { ...Default.parameters }
Warning.parameters = { ...Default.parameters }
Success.parameters = { ...Default.parameters }
LabelsOnTop.parameters = { ...Default.parameters }
NoDismiss.parameters = { ...Default.parameters }
BigIcon.parameters = { ...Default.parameters }
NoHeader.parameters = { ...Default.parameters }
