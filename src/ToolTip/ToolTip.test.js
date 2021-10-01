/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ToolTip } from "./ToolTip";

// Component is a component.
describe("ToolTip", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(ToolTip).toBeTruthy();
  });

  // Default is rendered.
  it("renders the ToolTip in the default state", () => {
    render(<ToolTip text="Test Text" />);
  });
});