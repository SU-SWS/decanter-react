/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "./Checkbox";

// Component is a component.
describe("Checkbox", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Checkbox).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Checkbox in the default state", () => {
    render(<Checkbox>Test Children</Checkbox>);
    screen.getByText("Test Children"); // full string match
  });
});
