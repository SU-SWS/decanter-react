import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Alert } from './Alert'
import { Button } from '../Button/Button'
import { alertTypes } from './Alert.levers'
import { textMixed } from '../../.storybook/stories/Paragraph.stories'
import DOMPurify from 'dompurify'

export default {
  title: 'Composite/Alert',
  decorators: [withDesign],
  component: Alert,
  subcomponents: { Button },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0'
    },
    docs: {
      description: {
        component: 'For displaying a notification that keeps people informed of a status, or for displaying a validation message that alerts someone of an important piece of information.'
      }
    }
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: alertTypes
      }
    }
  }
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
  children: textMixed
}
Default.parameters = {
  jest: ['Alert.test.js']
}

export const Info = AlertTemplate.bind({})
Info.args = {
  children: textMixed,
  type: 'info'
}

// Supports Markdown.
Info.parameters = {
  docs: {
    description: {
      story: 'Informational style.'
    }
  }
}

export const Error = AlertTemplate.bind({})
Error.args = {
  children: textMixed,
  type: 'error',
  label: 'error'
}
Error.parameters = {
  docs: {
    description: {
      story: 'Error Message.'
    }
  }
}

export const Warning = AlertTemplate.bind({})
Warning.args = {
  children: textMixed,
  type: 'warning',
  label: 'warning'
}
Warning.parameters = {
  docs: {
    description: {
      story: 'Warning Message.'
    }
  }
}

export const Success = AlertTemplate.bind({})
Success.args = {
  children: textMixed,
  type: 'success',
  label: 'success'
}
Success.parameters = {
  docs: {
    description: {
      story: 'Successful Transaction Message.'
    }
  }
}

export const LabelsOnTop = AlertTemplate.bind({})
LabelsOnTop.args = {
  children: textMixed,
  isIconTop: true,
  isLabelTop: true
}

export const NoDismiss = AlertTemplate.bind({})
NoDismiss.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  hasDismiss: false
}
NoDismiss.storyName = 'No Dismiss Button'

export const BigIcon = AlertTemplate.bind({})
BigIcon.args = {
  children: textMixed,
  heading: 'Alert Lorem Ipsum',
  hasLabel: false,
  isLargeIcon: true
}
BigIcon.storyName = 'Big Icon + No Label'

export const WithHeader = AlertTemplate.bind({})
WithHeader.args = {
  heading: 'Alert Lorem Ipsum',
  children: textMixed,
  isLabelTop: true,
  isLargeIcon: true
}
