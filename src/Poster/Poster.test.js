/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Poster } from "./Poster";

// Component is a component.
describe("Poster", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Poster).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Poster in the default state", () => {
    render(<Poster>Test Children</Poster>);
    screen.getByText("Test Children"); // full string match
  });
});
