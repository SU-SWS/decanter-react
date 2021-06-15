/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Logo } from "./Logo";

// Component is a component.
describe("Logo", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Logo).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Logo in the default state", () => {
    render(<Logo />);
  });
});
