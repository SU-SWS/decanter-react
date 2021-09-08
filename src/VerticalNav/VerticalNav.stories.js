/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withDesign } from "storybook-addon-designs";
import { VerticalNav } from "./VerticalNav";
import { Link } from "./exampleLink";

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
    link: {
      cached_url: "/i-0",
    },
    Link: (
      <Link href="/i-0" name="Item One (Link Component example)" type="Link" />
    ),
    childItems: [
      {
        link: {
          cached_url: "/i-0-0",
        },
        Link: <a href="/i-0-0">Item One - One (a tag example)</a>,
        childItems: [
          {
            link: {
              cached_url: "/i-0-0-0",
            },
            Link: (
              <Link
                href="/i-0-0-0"
                name="Item One - One - One (external class example)"
                type="Link"
                className="su-bg-foggy-light"
              />
            ),
          },
          {
            link: {
              cached_url: "/i-0-0-1",
            },
            Link: (
              <Link href="/i-0-0-1" name="Item One - One - Two" type="Link" />
            ),
          },
          {
            link: {
              cached_url: "/i-0-0-2",
            },
            Link: (
              <Link href="/i-0-0-2" name="Item One - One - Three" type="Link" />
            ),
          },
          {
            link: {
              cached_url: "/i-0-0-3",
            },
            Link: (
              <Link href="/i-0-0-3" name="Item One - One - Four" type="Link" />
            ),
          },
        ],
      },
      {
        link: {
          cached_url: "/i-0-1",
        },
        Link: <Link href="/i-0-1" name="Item One - Two" type="Link" />,
      },
      {
        link: {
          cached_url: "/i-0-2",
        },
        Link: <Link href="/i-0-2" name="Item One - Three" type="Link" />,
      },
      {
        link: {
          cached_url: "/i-0-3",
        },
        Link: <Link href="/i-0-3" name="Item One - Four" type="Link" />,
      },
    ],
  },
  {
    link: {
      cached_url: "/i-2",
    },
    Link: <Link href="/i-0-3" name="Item One - Two" type="Link" />,
  },
  {
    link: {
      cached_url: "/i-2",
    },
    Link: <Link href="/i-2" name="Item Three" type="Link" />,
    childItems: [
      {
        link: {
          cached_url: "/i-2-0",
        },
        Link: <Link href="/i-2-0" name="Item Three - One" type="Link" />,
        childItems: [
          {
            link: {
              cached_url: "/i-2-0-0",
            },
            Link: (
              <Link href="/i-2-0-0" name="Item Three - One - One" type="Link" />
            ),
          },
          {
            link: {
              cached_url: "/i-2-0-1",
            },
            Link: (
              <Link href="/i-2-0-1" name="Item Three - One - Two" type="Link" />
            ),
          },
          {
            link: {
              cached_url: "/i-2-0-2",
            },
            Link: (
              <Link
                href="/i-2-0-2"
                name="Item Three - One - Three"
                type="Link"
              />
            ),
            childItems: [
              {
                link: {
                  cached_url: "/i-2-0-2-0",
                },
                Link: (
                  <Link
                    href="/i-2-0-2-0"
                    name="Item Three - One - Three - One"
                    type="Link"
                  />
                ),
              },
              {
                link: {
                  cached_url: "/i-2-0-2-1",
                },
                Link: (
                  <Link
                    href="/i-2-0-2-1"
                    name="Item Three - One - Three - Two"
                    type="Link"
                  />
                ),
              },
            ],
          },
          {
            link: {
              cached_url: "/i-2-0-3",
            },
            Link: (
              <Link
                href="/i-2-0-3"
                name="Item Three - One - Four"
                type="Link"
              />
            ),
          },
        ],
      },
      {
        link: {
          cached_url: "/i-2-1",
        },
        Link: <Link href="/i-2-1" name="Item Three - Two" type="Link" />,
      },
      {
        link: {
          cached_url: "/i-2-2",
        },
        Link: <Link href="/i-2-2" name="Item Three - Three" type="Link" />,
      },
      {
        link: {
          cached_url: "/i-2-3",
        },
        Link: <Link href="/i-2-3" name="Item Three - Four" type="Link" />,
      },
    ],
  },
];

const VerticalNavTemplate = ({ ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} pageLink="/i-0-0" />
);
export const Default = VerticalNavTemplate.bind({});

// Deep Nesting
// /////////////////////////////////////////////////////////////////////////////

const VerticalNavDeepNesting = ({ children, ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} pageLink="/i-0-0" showNestedLevels />
);
export const DeepNesting = VerticalNavDeepNesting.bind({});
