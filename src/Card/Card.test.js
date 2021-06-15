/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./Card";

// Component is a component.
describe("Card", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Card).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Card in the default state", () => {
    render(<Card>Test Children</Card>);
    screen.getByText("Test Children"); // full string match
  });
});
