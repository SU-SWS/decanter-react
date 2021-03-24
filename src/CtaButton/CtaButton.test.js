import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CtaButton } from "./CtaButton";

// Component is a component.
describe('CtaButton', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(CtaButton).toBeTruthy();
  });

  // Default is rendered.
  it('renders the CTA Link in the default state', () => {
    render(<CtaButton text='Test' />);
    screen.getByText('Test'); // full string match
  });
});
