import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Alert } from './Alert'

// Component is a component.
describe('Alert', () => {

  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(Alert).toBeTruthy()
  })

  // Default is rendered.
  it('renders the Alert in the default state', () => {
    render(<Alert heading='Test Heading'>Test Children</Alert>)
    screen.getByText('Test Heading') // full string match
    screen.getByText('Test Children') // full string match
    screen.getByText('Dismiss') // full string match
  })
})
