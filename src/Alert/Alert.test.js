import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Alert } from './Alert'
import { Default } from './Alert.stories'

// Component is a component.
describe('Alert', () => {
  it('is truthy', () => {
    expect(Alert).toBeTruthy()
  })
})

// Default is rendered.
it('renders the Alert in the default state', () => {
  render(<Alert {...Default.args} />)
  expect(screen.getByClass('su-alert')).toHaveTextContent('Alert Lorem Ipsum')
});
