/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ModalContent } from "./ModalContent";

// Component is a component.
describe("Modal", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(ModalContent).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Modal Content in the default state", () => {
    render(<ModalContent>Test Children</ModalContent>);
    screen.getByText("Test Children"); // full string match
  });
});
