import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { VerticalNav } from './VerticalNav';

export default {
  title: 'Navigation/Vertical Nav',
  decorators: [withDesign],
  component: VerticalNav,
  subcomponents: {
    'VerticalNav.Group': VerticalNav.Group,
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

// Example link.
const Link = ({ children, href = '#', ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

const LinkGatsby = ({ children, to = '#', ...props }) => (
  <Link href={to} {...props}>
    {children}
  </Link>
);

const LinkNext = ({ children, href = '#', ...props }) => (
  <Link href={href} {...props}>
    {children}
  </Link>
);

// Default State
// /////////////////////////////////////////////////////////////////////////////

const menuTree = [
  {
    link: (
      <LinkGatsby to="/" name="Home">
        Home
      </LinkGatsby>
    ),
  },
  {
    link: (
      <LinkNext href="/about" name="About">
        About
      </LinkNext>
    ),

    children: [
      {
        link: (
          <LinkGatsby to="/about/page-1" name="About Page 1">
            About Page 1
          </LinkGatsby>
        ),
        children: [
          {
            link: (
              <LinkGatsby
                to="/about/page-1/level-3"
                name="About Page Level 3 - Page 1"
              >
                About Page Level 3 - Page 1
              </LinkGatsby>
            ),
          },
          {
            link: (
              <LinkNext
                href="/about/page-1/level-3-2"
                name="About Page Level 3 - Page 2"
              >
                About Page Level 3 - Page 2
              </LinkNext>
            ),
          },
        ],
      },
      {
        link: (
          <LinkNext href="/about/page-2" name="About Page 2">
            About Page 2
          </LinkNext>
        ),
      },
    ],
  },
  {
    link: (
      <LinkGatsby to="/resources" name="Resources">
        Resources
      </LinkGatsby>
    ),
  },
  {
    link: (
      <LinkNext href="/contact" name="Contact">
        Contact
      </LinkNext>
    ),

    children: [
      {
        link: (
          <LinkGatsby to="/contact/page-1" name="Contact Page 1">
            Contact Page 1
          </LinkGatsby>
        ),
        children: [
          {
            link: (
              <LinkGatsby
                to="/contact/page-1/level-3"
                name="Contact Page Level 3 - Page 1"
              >
                Contact Page Level 3 - Page 1
              </LinkGatsby>
            ),
            active: true,
          },
          {
            link: (
              <LinkNext
                href="/contact/page-1/level-3-2"
                name="Contact Page Level 3 - Page 2"
              >
                Contact Page Level 3 - Page 2
              </LinkNext>
            ),
          },
        ],
      },
      {
        link: (
          <LinkNext href="/contact/page-2" name="Contact Page 2">
            Contact Page 2
          </LinkNext>
        ),
      },
    ],
  },
];

const VerticalNavTemplate = ({ ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} />
);
export const Default = VerticalNavTemplate.bind({});
Default.args = {};

// Deep Nesting
// /////////////////////////////////////////////////////////////////////////////
const VerticalNavDeepNesting = ({ children, ...rest }) => (
  <VerticalNav {...rest} menu={menuTree} showNestedLevels />
);
export const DeepNesting = VerticalNavDeepNesting.bind({});
DeepNesting.args = {};
