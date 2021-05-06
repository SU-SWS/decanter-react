import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { GlobalFooter } from "./GlobalFooter";

// Component is a component.
describe("GlobalFooter", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(GlobalFooter).toBeTruthy();
  });
});
