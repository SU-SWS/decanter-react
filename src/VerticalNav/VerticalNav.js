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
const VerticalNavRoot = ({
  className,
  menu,
  pageLink,
  navOpened = false,
  showNestedLevels = false,
  ...props
}) => {
  const menuTree = useTreeWalker(menu, pageLink, showNestedLevels);
  return (
    <VerticalNavStateProvider tree={menuTree}>
      <nav
        className={dcnb("su-relative", navOpened ? "su-shadow-xl" : "")}
        {...props}
        aria-label="Section Menu"
      >
        {/* Desktop */}
        <Group
          menuTree={menuTree}
          pageLink={pageLink}
          className="su-hidden lg:su-block"
          showNestedLevels={showNestedLevels}
        />

        {/* Mobile */}
        <Group
          menuTree={menuTree}
          pageLink={pageLink}
          className="lg:su-hidden su-absolute su-z-20 su-shadow-xl su-bg-white su-w-full"
          aria-hidden={!navOpened}
          showNestedLevels={showNestedLevels}
        />
      </nav>
    </VerticalNavStateProvider>
  );
};
VerticalNavRoot.displayName = "VerticalNav";

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
};
