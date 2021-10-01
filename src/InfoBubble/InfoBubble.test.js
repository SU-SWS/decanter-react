/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { InfoBubble } from "./InfoBubble";

// Component is a component.
describe("InfoBubble", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(InfoBubble).toBeTruthy();
  });

  // Default is rendered.
  it("renders the InfoBubble in the default state", () => {
    render(<InfoBubble text="Test Text" />);
  });
});