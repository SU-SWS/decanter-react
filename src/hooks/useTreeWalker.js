import React from "react";

/**
 *
 * @param {*} children
 * @returns
 */
const FindActiveInChildren = (children) => {
  if (!Array.isArray(children)) {
    return false;
  }

  const vals = children.map((item) => {
    if (item.props.active === true) {
      return true;
    }
    if (item.props.children) {
      return FindActiveInChildren(item.props.children);
    }
    return false;
  });

  // Reduce all the true/false values of the search down to one keeping true if
  // available and returning false if active was not found.
  const reduce = vals.flat().reduce((acc, curr) => acc || curr);

  return reduce;
};

/**
 *
 * @param {*} items
 * @param {*} filters
 * @param {*} depth
 * @returns
 */
const walkTree = (items, filters, depth) => {
  let process = items;
  const tree = [];

  if (!Array.isArray(process)) {
    process = [items];
  }

  process.forEach((element) => {
    // Make a copy so we can edit it.
    let copy;
    let inActivePath;

    // Component filter.
    if (filters.components.includes(element.type)) {
      let myChildren;
      const next = depth + 1;

      // If this element contains children find out about the active path.
      // And create the clones.
      if (element.props.children) {
        inActivePath = FindActiveInChildren(element.props.children);
        myChildren = walkTree(element.props.children, filters, next);
      }

      copy = React.cloneElement(element, {
        level: depth,
        children: myChildren,
        inActivePath,
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
