/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Date } from "./Date";

// Component is a component.
describe("Date", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Date).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Date in the default state", () => {
    render(<Date>Test Children</Date>);
    screen.getByText("Test Children"); // full string match
  });
});
