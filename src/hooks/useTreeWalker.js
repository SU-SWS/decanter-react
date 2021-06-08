import React from "react";

const walkTree = (items, filters, depth) => {
  let process = items;
  const tree = [];

  if (!Array.isArray(process)) {
    process = [items];
  }

  process.forEach((element) => {
    // Make a copy so we can edit it.
    let copy;

    // Component filter.
    if (filters.components.includes(element.type)) {
      let myChildren;
      const next = depth + 1;
      if (element.props.children) {
        myChildren = walkTree(element.props.children, filters, next);
      }

      copy = React.cloneElement(element, {
        level: depth,
        children: myChildren,
      });
    }

    tree.push(copy || element);
  });

  return tree;
};

/**
 *
 */
export default (tree, filters) => walkTree(tree, filters, 1);
