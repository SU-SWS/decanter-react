import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FlexCell } from "./FlexCell";

// Component is a component.
describe("FlexCell", () => {
  // Is a component with valid syntax.
  it("is truthy", () => {
    expect(FlexCell).toBeTruthy();
  });
});
