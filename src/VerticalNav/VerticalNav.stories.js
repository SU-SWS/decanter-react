/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withDesign } from "storybook-addon-designs";
import { VerticalNav } from "./VerticalNav";

export default {
  title: "Navigation/Vertical Nav",
  decorators: [withDesign],
  component: VerticalNav,
  subcomponents: {
    "VerticalNav.Item": VerticalNav.Item,
    "VerticalNav.Group": VerticalNav.Group,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/FeSiATfz2AcP1ziOvL2m02/SWS-Alumni-Homesite?node-id=1025%3A0",
    },
    docs: {
      description: {
        component:
          "For displaying an heirachical sidebar nav in a vertical nested list.",
      },
    },
  },
};

// Set up a VertNav Template.
const VerticalNavTemplate = ({ children, ...rest }) => (
  <>
    <VerticalNav {...rest}>
      <VerticalNav.Group>
        <VerticalNav.Item>
          <a href="#">Item One</a>
          <VerticalNav.Group>
            <VerticalNav.Item>
              <a href="#">Item One - One</a>
              <VerticalNav.Group>
                <VerticalNav.Item>
                  <a href="#">Item One - One - One</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Two</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Three</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Four</a>
                </VerticalNav.Item>
              </VerticalNav.Group>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Two</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Three</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Four</a>
            </VerticalNav.Item>
          </VerticalNav.Group>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Two</a>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Three</a>
          <VerticalNav.Group>
            <VerticalNav.Item>
              <a href="#">Item Three - One</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Three - Two</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Three - Three</a>
              <VerticalNav.Group>
                <VerticalNav.Item>
                  <a href="#">Item Three - Three - One</a>
                </VerticalNav.Item>
                <VerticalNav.Item active>
                  <a href="#">Item Three - Three - Two</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item Three - Three - Three</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item Three - Three - Four</a>
                </VerticalNav.Item>
              </VerticalNav.Group>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Three - Four</a>
            </VerticalNav.Item>
          </VerticalNav.Group>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Four</a>
        </VerticalNav.Item>
      </VerticalNav.Group>
    </VerticalNav>

    <p> --------------------------------------------- </p>

    <VerticalNav {...rest}>
      <VerticalNav.Group>
        <VerticalNav.Item>
          <a href="#">Item One</a>
          <VerticalNav.Group>
            <VerticalNav.Item active>
              <a href="#">Item One - One</a>
              <VerticalNav.Group>
                <VerticalNav.Item>
                  <a href="#">Item One - One - One</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Two</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Three</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item One - One - Four</a>
                </VerticalNav.Item>
              </VerticalNav.Group>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Two</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Three</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item One - Four</a>
            </VerticalNav.Item>
          </VerticalNav.Group>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Two</a>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Three</a>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Four</a>
        </VerticalNav.Item>
      </VerticalNav.Group>
      <VerticalNav.Group>
        <VerticalNav.Item>
          <a href="#">Item Five</a>
          <VerticalNav.Group>
            <VerticalNav.Item>
              <a href="#">Item Five - One</a>
              <VerticalNav.Group>
                <VerticalNav.Item>
                  <a href="#">Item Five - One - One</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item Five - One - Two</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item Five - One - Three</a>
                </VerticalNav.Item>
                <VerticalNav.Item>
                  <a href="#">Item Five - One - Four</a>
                </VerticalNav.Item>
              </VerticalNav.Group>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Five - Two</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Five - Three</a>
            </VerticalNav.Item>
            <VerticalNav.Item>
              <a href="#">Item Five - Four</a>
            </VerticalNav.Item>
          </VerticalNav.Group>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Six</a>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Seven</a>
        </VerticalNav.Item>
        <VerticalNav.Item>
          <a href="#">Item Eight</a>
        </VerticalNav.Item>
      </VerticalNav.Group>
    </VerticalNav>
  </>
);

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = VerticalNavTemplate.bind({});
