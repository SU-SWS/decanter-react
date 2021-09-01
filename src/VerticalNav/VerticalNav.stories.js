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

const menuTree = [
  {
    text: "Item One",
    link: {
      cached_url: "/i-0",
    },
    linkComponent: '<a href="/i-0">Item One</a>',
    childItems: [
      {
        text: "Item One - One",
        link: {
          cached_url: "/i-0-0",
        },
        childItems: [
          {
            text: "Item One - One - One",
            link: {
              cached_url: "/i-0-0-0",
            },
          },
          {
            text: "Item One - One - Two",
            link: {
              cached_url: "/i-0-0-1",
            },
          },
          {
            text: "Item One - One - Three",
            link: {
              cached_url: "/i-0-0-2",
            },
          },
          {
            text: "Item One - One - Four",
            link: {
              cached_url: "/i-0-0-3",
            },
          },
        ],
      },
      {
        text: "Item One - Two",
        link: {
          cached_url: "/i-0-1",
        },
      },
      {
        text: "Item One - Three",
        link: {
          cached_url: "/i-0-2",
        },
      },
      {
        text: "Item One - Four",
        link: {
          cached_url: "/i-0-3",
        },
      },
    ],
  },
  {
    text: "Item Two",
    link: {
      cached_url: "/i-1",
    },
  },
  {
    text: "Item Three",
    link: {
      cached_url: "/i-2",
    },
    childItems: [
      {
        text: "Item Three - One",
        link: {
          cached_url: "/i-2-0",
        },
        childItems: [
          {
            text: "Item Three - One - One",
            link: {
              cached_url: "/i-2-0-0",
            },
          },
          {
            text: "Item Three - One - Two",
            link: {
              cached_url: "/i-2-0-1",
            },
          },
          {
            text: "Item Three - One - Three",
            link: {
              cached_url: "/i-2-0-2",
            },
            childItems: [
              {
                text: "Item Three - One - Three - One",
                link: {
                  cached_url: "/i-2-0-2-0",
                },
              },
              {
                text: "Item Three - One - Three - Two",
                link: {
                  cached_url: "/i-2-0-2-1",
                },
              },
            ],
          },
          {
            text: "Item Three - One - Four",
            link: {
              cached_url: "/i-2-0-3",
            },
          },
        ],
      },
      {
        text: "Item Three - Two",
        link: {
          cached_url: "/i-2-1",
        },
      },
      {
        text: "Item Three - Three",
        link: {
          cached_url: "/i-2-2",
        },
      },
      {
        text: "Item Three - Four",
        link: {
          cached_url: "/i-2-3",
        },
      },
    ],
  },
  {
    text: "Item Four",
    link: {
      cached_url: "/i-3",
    },
    linkComponent: '<a href="/i-3">Item Four</a>',
  },
];

const VerticalNavTemplate = ({ ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} pageLink="/i-0-0" />
);
export const Default = VerticalNavTemplate.bind({});

// Deep Nesting
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavDeepNesting = ({ children, ...rest }) => (
  <VerticalNav {...rest} showNestedLevels menu={menuTree} pageLink="/i-0-0" />
);
export const DeepNesting = VerticalNavDeepNesting.bind({});
