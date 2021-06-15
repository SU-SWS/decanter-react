/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

// Component is a component.
describe("Button", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Button).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Button in the default state", () => {
    render(<Button>Test Children</Button>);
    screen.getByText("Test Children"); // full string match
  });
});
