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

// Default State
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavTemplate = ({ children, ...rest }) => (
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
              <VerticalNav.Item>
                <a href="#">Item Three - Three - Two</a>
              </VerticalNav.Item>
              <VerticalNav.Item active>
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
);
export const Default = VerticalNavTemplate.bind({});

// No Active State
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavTemplateNoActive = ({ children, ...rest }) => (
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
              <VerticalNav.Item>
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
);
export const NoActivePath = VerticalNavTemplateNoActive.bind({});

// No Active State
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavTemplateMultipleActive = ({ children, ...rest }) => (
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
              <VerticalNav.Item active>
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
          <VerticalNav.Item active>
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
              <VerticalNav.Item>
                <a href="#">Item Three - Three - Two</a>
              </VerticalNav.Item>
              <VerticalNav.Item>
                <a href="#">Item Three - Three - Three</a>
              </VerticalNav.Item>
              <VerticalNav.Item active>
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
);
export const MultipleActivePaths = VerticalNavTemplateMultipleActive.bind({});

// Deep Nesting
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavDeepNesting = ({ children, ...rest }) => (
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
                <VerticalNav.Group>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - One</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Two</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Three</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Four</a>
                    <VerticalNav.Group>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - One</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Two</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item active>
                        <a href="#">Item One - One - Three - Four - Three</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Four</a>
                      </VerticalNav.Item>
                    </VerticalNav.Group>
                  </VerticalNav.Item>
                </VerticalNav.Group>
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
  </VerticalNav>
);
export const DeepNesting = VerticalNavDeepNesting.bind({});

// Deep Nesting - With Style
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavDeepNestingStyled = ({ children, ...rest }) => (
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
                <VerticalNav.Group>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - One</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Two</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Three</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Four</a>
                    <VerticalNav.Group>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - One</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Two</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item active>
                        <a href="#">Item One - One - Three - Four - Three</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Four</a>
                      </VerticalNav.Item>
                    </VerticalNav.Group>
                  </VerticalNav.Item>
                </VerticalNav.Group>
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
  </VerticalNav>
);
export const DeepNestingStyled = VerticalNavDeepNestingStyled.bind({});

// Deep Nesting - Active Path
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavDeepNestingActivePath = ({ children, ...rest }) => (
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
                <VerticalNav.Group>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - One</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Two</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Three</a>
                  </VerticalNav.Item>
                  <VerticalNav.Item>
                    <a href="#">Item One - One - Three - Four</a>
                    <VerticalNav.Group>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - One</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Two</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item active>
                        <a href="#">Item One - One - Three - Four - Three</a>
                      </VerticalNav.Item>
                      <VerticalNav.Item>
                        <a href="#">Item One - One - Three - Four - Four</a>
                      </VerticalNav.Item>
                    </VerticalNav.Group>
                  </VerticalNav.Item>
                </VerticalNav.Group>
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
  </VerticalNav>
);
export const DeepNestingActivePath = VerticalNavDeepNestingActivePath.bind({});
