import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { VerticalNav } from './VerticalNav';
import { Link } from './exampleLink';

export default {
  title: 'Navigation/Vertical Nav',
  decorators: [withDesign],
  component: VerticalNav,
  subcomponents: {
    'VerticalNav.Item': VerticalNav.Item,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FeSiATfz2AcP1ziOvL2m02/SWS-Alumni-Homesite?node-id=1025%3A0',
    },
    docs: {
      description: {
        component:
          'For displaying an heirachical sidebar nav in a vertical nested list.',
      },
    },
  },
};

// Default State
// /////////////////////////////////////////////////////////////////////////////

const menuTree = [
  {
    id: '1',
    link: {
      cached_url: '/i-0',
    },
    Link: <Link href="/i-0" name="Item One" type="Link" />,
    childItems: [
      {
        id: '2',
        link: {
          cached_url: '/i-0-0',
        },

        Link: <Link href="/i-0-0" name="Item One - One" type="Link" />,
        childItems: [
          {
            id: '3',
            link: {
              cached_url: '/i-0-0-0',
            },
            Link: (
              <Link href="/i-0-0-0" name="Item One - One - One" type="Link" />
            ),
          },
          {
            id: '4',
            link: {
              cached_url: '/i-0-0-1',
            },
            Link: (
              <Link href="/i-0-0-1" name="Item One - One - Two" type="Link" />
            ),
          },
          {
            id: '5',
            link: {
              cached_url: '/i-0-0-2',
            },
            Link: (
              <Link href="/i-0-0-2" name="Item One - One - Three" type="Link" />
            ),
          },
          {
            id: '6',
            link: {
              cached_url: '/i-0-0-3',
            },
            Link: (
              <Link href="/i-0-0-3" name="Item One - One - Four" type="Link" />
            ),
          },
        ],
      },
      {
        id: '7',
        link: {
          cached_url: '/i-0-1',
        },
        Link: <Link href="/i-0-1" name="Item One - Two" type="Link" />,
      },
      {
        id: '8',
        link: {
          cached_url: '/i-0-2',
        },
        Link: <Link href="/i-0-2" name="Item One - Three" type="Link" />,
      },
      {
        id: '9',
        link: {
          cached_url: '/i-0-3',
        },
        Link: <Link href="/i-0-3" name="Item One - Four" type="Link" />,
      },
    ],
  },
  {
    id: '10',
    link: {
      cached_url: '/i-2',
    },
    Link: <Link href="/i-0-3" name="Item One - Two" type="Link" />,
  },
  {
    id: '11',
    link: {
      cached_url: '/i-2',
    },
    Link: <Link href="/i-2" name="Item Three" type="Link" />,
    childItems: [
      {
        id: '12',
        link: {
          cached_url: '/i-2-0',
        },
        Link: <Link href="/i-2-0" name="Item Three - One" type="Link" />,
        childItems: [
          {
            id: '13',
            link: {
              cached_url: '/i-2-0-0',
            },
            Link: (
              <Link href="/i-2-0-0" name="Item Three - One - One" type="Link" />
            ),
          },
          {
            id: '14',
            link: {
              cached_url: '/i-2-0-1',
            },
            Link: (
              <Link href="/i-2-0-1" name="Item Three - One - Two" type="Link" />
            ),
          },
          {
            id: '15',
            link: {
              cached_url: '/i-2-0-2',
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
                id: '16',
                link: {
                  cached_url: '/i-2-0-2-0',
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
                id: '17',
                link: {
                  cached_url: '/i-2-0-2-1',
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
            id: '18',
            link: {
              cached_url: '/i-2-0-3',
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
        id: '19',
        link: {
          cached_url: '/i-2-1',
        },
        Link: <Link href="/i-2-1" name="Item Three - Two" type="Link" />,
      },
      {
        id: '20',
        link: {
          cached_url: '/i-2-2',
        },
        Link: <Link href="/i-2-2" name="Item Three - Three" type="Link" />,
      },
      {
        id: '21',
        link: {
          cached_url: '/i-2-3',
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

Default.args = {
  classes: {
    rootList: '',
    rootGroup: '',
    childLists: '',
    childListItems: '',
  },
};

// Deep Nesting
// /////////////////////////////////////////////////////////////////////////////
const VerticalNavDeepNesting = ({ children, ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} pageLink="/i-0-0" showNestedLevels />
);
export const DeepNesting = VerticalNavDeepNesting.bind({});
DeepNesting.args = {
  classes: {
    rootList: '',
    rootGroup: '',
    childLists: '',
    childListItems: '',
  },
};
