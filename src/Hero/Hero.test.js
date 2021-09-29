/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Hero } from "./Hero";

// Component is a component.
describe("Hero", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(Hero).toBeTruthy();
  });

  // Default is rendered.
  it("renders the Hero in the default state", () => {
    render(<Hero>Test Children</Hero>);
    screen.getByText("Test Children"); // full string match
  });
});
