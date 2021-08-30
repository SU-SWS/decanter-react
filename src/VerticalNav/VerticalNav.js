import React from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import { VerticalNavStateProvider } from "./VerticalNav.context";
import useTreeWalker from "../hooks/useTreeWalker";
import { Group } from "./VerticalNav.Group";
import { Item } from "./VerticalNav.Item";

// TODO:
// -- Active tree path so we can style the links of the active path.
// -- Always keep level 1 open even if there is no active item.
// -- Create and store component tree in the context.
// -- Provide a way for children links to find out if they are 'active'

// -----------------------------------------------------------------------------

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation.
 */
const VerticalNavRoot = ({ className, children, ...props }) => {
  const filters = { components: [Group, Item] };
  const menuTree = useTreeWalker(children, filters);
  return (
    <VerticalNavStateProvider tree={menuTree}>
      <nav className={dcnb("vertical-nav", className)} {...props}>
        {menuTree}
      </nav>
    </VerticalNavStateProvider>
  );
};
VerticalNavRoot.displayName = "VerticalNav";

// Bind them.
// -----------------------------------------------------------------------------

export const VerticalNav = Object.assign(VerticalNavRoot, { Item, Group });

// Prop Types.
// -----------------------------------------------------------------------------

VerticalNavRoot.propTypes = {
  // Nodes and content.
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};
