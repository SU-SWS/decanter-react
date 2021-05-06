import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { GridCell } from "./GridCell";

// Component is a component.
describe("GridCell", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(GridCell).toBeTruthy();
  });
});
