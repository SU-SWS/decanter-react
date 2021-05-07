import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CtaLink } from "./CtaLink";

// Component is a component.
describe("CtaLink", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(CtaLink).toBeTruthy();
  });

  // Default is rendered.
  it("renders the CTA Link in the default state", () => {
    render(<CtaLink text="Test" />);
    screen.getByText("Test"); // full string match
  });
});
