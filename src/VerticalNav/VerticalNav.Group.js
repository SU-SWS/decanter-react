import React from 'react';
import { dcnb } from 'cnbuilder';
import { Item } from './VerticalNav.Item';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({
  menuTree,
  className,
  classes,
  showNestedLevels,
  pageLink,
  ...props
}) => (
  <ul
    className={dcnb(
      'su-list-none su-p-0 children:su-border-t children:su-border-solid children:su-border-black-20 children:children:su-text-21',
      className,
      classes.rootGroup ? classes.rootGroup : ''
    )}
    {...props}
  >
    {console.log(classes, 'f')}
    {menuTree.map((item) => (
      <Item
        key={item.id}
        element={item}
        classes={classes}
        pageLink={pageLink}
        showNestedLevels={showNestedLevels}
      />
    ))}
  </ul>
);

Group.displayName = 'VerticalNav.Group';
