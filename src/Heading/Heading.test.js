import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Heading } from './Heading';

// Component is a component.
describe('Heading', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(Heading).toBeTruthy();
  });

  // Default is rendered.
  it('renders the Heading in the default state', () => {
    render(<Heading>Test Children</Heading>);
    screen.getByText('Test Children'); // full string match
  });
});
