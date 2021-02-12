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
