/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { InlineValid } from "./InlineValid";

// Component is a component.
describe("InlineValid", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(InlineValid).toBeTruthy();
  });

  // Default is rendered.
  it("renders the InlineValid in the default state", () => {
    render(<InlineValid />);
  });
});
