/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { InlineError } from "./Tooltip";

// Component is a component.
describe("InlineError", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(InlineError).toBeTruthy();
  });

  // Default is rendered.
  it("renders the InlineError in the default state", () => {
    render(<InlineError />);
  });
});
