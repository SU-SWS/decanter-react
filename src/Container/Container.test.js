/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Container } from "./Container";

// Component is a component.
describe("Container", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Container).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Container in the default state", () => {
    render(<Container>Test Children</Container>);
    screen.getByText("Test Children"); // full string match
  });
});
