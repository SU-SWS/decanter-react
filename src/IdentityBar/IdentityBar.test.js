import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { IdentityBar } from './IdentityBar'

// Component is a component.
describe('IdentityBar', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(IdentityBar).toBeTruthy()
  })

  // Default is rendered.
  it('renders the IdentityBar in the default state', () => {
    render(<IdentityBar />)
  })
})
