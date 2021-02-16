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
    render(<p>This is content</p>)
    screen.getByText('This is content') // full string match
  })

})

