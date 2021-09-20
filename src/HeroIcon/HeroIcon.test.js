/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from "@testing-library/react";
 import "@testing-library/jest-dom/extend-expect";
 import { HeroIcon } from "./HeroIcon";
 
 // Component is a component.
 describe("HeroIcon", () => {
   // Is a component with valid syntax.
   it("is truthy", () => {
     expect(HeroIcon).toBeTruthy();
   });
 
   // Default is rendered.
   it("renders the Button in the default state", () => {
     render(<HeroIcon text="Test Text" />);
     screen.getByText("Test Text"); // full string match
   });
 });
 