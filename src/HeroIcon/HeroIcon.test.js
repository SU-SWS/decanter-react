/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HeroIcon } from "./HeroIcon";
 
 // Component is a component.
 describe("HeroIcon", () => {
   // Is a component with valid syntax.
   it("is truthy", () => {
     expect(HeroIcon).toBeTruthy();
   });
 
   // Default is rendered.
   it("renders the Action HeroIcon in the default state", () => {
     render(<HeroIcon icon="action" srText="Test Text" />);
     screen.getByText("Test Text"); // full string match
   });
 });
 