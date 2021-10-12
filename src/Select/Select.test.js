/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Select } from "./Select";

// Component is a component.
describe("Select", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Select).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Select in the default state", () => {
    render(<Select>Test Children</Select>);
    screen.getByText("Test Children"); // full string match
  });
});
