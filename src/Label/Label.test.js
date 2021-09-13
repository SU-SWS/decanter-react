/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Label } from "./Label";

// Component is a component.
describe("Label", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Label).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Label in the default state", () => {
    render(<Label />);
  });
});
