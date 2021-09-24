/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AutocompleteField } from "./Autocomplete";

// Component is a component.
describe("AutocompleteField", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(AutocompleteField).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Autocomplete in the default state", () => {
    render(<AutocompleteField>Test Children</AutocompleteField>);
    screen.getByText("Test Children"); // full string match
  });
});
