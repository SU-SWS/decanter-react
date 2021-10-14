import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { Group } from './VerticalNav.Group';
import { Item } from './VerticalNav.Item';

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation.
 */
const VerticalNavRoot = ({ menu, className, showNestedLevels, ...props }) => (
  <nav
    className={dcnb('su-vertical-nav su-relative', className)}
    {...props}
    aria-label="Section Menu"
  >
    <Group menuTree={menu} showNestedLevels={showNestedLevels} />
  </nav>
);
VerticalNavRoot.displayName = 'VerticalNav';

// Bind them.
// -----------------------------------------------------------------------------

export const VerticalNav = Object.assign(VerticalNavRoot, { Item });

// Prop Types.
// -----------------------------------------------------------------------------

VerticalNavRoot.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  showNestedLevels: PropTypes.bool,
};
