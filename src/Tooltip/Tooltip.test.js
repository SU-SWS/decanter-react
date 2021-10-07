/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { Tooltip } from "./Tooltip";


// Component is a component.
describe("InlineError", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Tooltip).toBeTruthy();
  });

  // Default is rendered.
  it("renders the InlineError in the default state", () => {
    render(<Tooltip />);
  });
});
