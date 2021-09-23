/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Autocomplete } from "./Autocomplete";

// Component is a component.
describe("Autocomplete", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Autocomplete).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Autocomplete in the default state", () => {
    render(<Autocomplete>Test Children</Autocomplete>);
    screen.getByText("Test Children"); // full string match
  });
});
