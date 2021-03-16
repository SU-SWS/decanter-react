import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Skiplink } from './Skiplink';

// Component is a component.
describe('Skiplink', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(Skiplink).toBeTruthy();
  });

  // Default is rendered.
  it('renders the Skiplink in the default state', () => {
    render(<Skiplink>Test Children</Skiplink>);
    screen.getByText('Test Children'); // full string match
  });
});
