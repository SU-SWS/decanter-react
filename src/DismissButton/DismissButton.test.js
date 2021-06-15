/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DismissButton } from "./DismissButton";

// Component is a component.
describe("DismissButton", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(DismissButton).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Button in the default state", () => {
    render(<DismissButton text="Test Text" />);
    screen.getByText("Test Text"); // full string match
  });
});
