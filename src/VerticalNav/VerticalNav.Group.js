import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { Item } from './VerticalNav.Item';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({ menuTree, className, showNestedLevels, ...props }) => (
  <ul
    className={
      className ||
      'su-nav-group su-list-none su-p-0 children:su-border-t children:su-border-solid children:su-border-black-20 children:children:su-text-21'
    }
    {...props}
  >
    {menuTree.map((group) => (
      <>
        {group.link && (
          <Item
            key={group.id || group.link.href || group.link.to}
            element={group.link}
            active={group.active}
            items={group.children}
            showNestedLevels={showNestedLevels}
          />
        )}
      </>
    ))}
  </ul>
);

Group.displayName = 'VerticalNav.Group';

// Prop Types.
// -----------------------------------------------------------------------------

Group.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  menuTree: PropTypes.arrayOf(PropTypes.object).isRequired,
  showNestedLevels: PropTypes.bool,
};
