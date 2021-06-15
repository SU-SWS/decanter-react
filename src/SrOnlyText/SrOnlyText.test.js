/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { SrOnlyText } from "./SrOnlyText";

// Component is a component.
describe("SrOnlyText", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(SrOnlyText).toBeTruthy();
  });

  // Default is rendered.
  it("renders the SrOnlyText in the default state", () => {
    render(<SrOnlyText />);
  });
});
