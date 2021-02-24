import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Grid } from './Grid'

// Component is a component.
describe('Grid', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(Grid).toBeTruthy()
  })
})
