import React from "react";
import { dcnb } from "cnbuilder";
import { Item } from "./VerticalNav.Item";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Group = ({
  menuTree,
  className,
  showNestedLevels,
  pageLink,
  ...props
}) => (
  <ul
    className={dcnb(
      "su-list-none su-p-0 children:su-border-t children:su-border-solid children:su-border-black-20 children:children:su-text-21",
      className
    )}
    {...props}
  >
    {menuTree.map((item) => (
      <Item
        element={item}
        pageLink={pageLink}
        showNestedLevels={showNestedLevels}
      />
    ))}
  </ul>
);

Group.displayName = "VerticalNav.Group";
