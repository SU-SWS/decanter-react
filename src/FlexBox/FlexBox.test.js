import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FlexBox } from './FlexBox';

// Component is a component.
describe('FlexBox', () => {
  // Is a component with valid syntax.
  it('is truthy', () => {
    expect(FlexBox).toBeTruthy();
  });
});
