/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { TextField } from "./TextField";

// Component is a component.
describe("TextField", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(TextField).toBeTruthy();
  });

  // Default is rendered.
  it("renders the TextField in the default state", () => {
    render(<TextField />);
  });
});
