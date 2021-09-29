import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
import { VerticalNavStateProvider } from './VerticalNav.context';
import useTreeWalker from '../hooks/useTreeWalker';
import { Group } from './VerticalNav.Group';
import { Item } from './VerticalNav.Item';

/**
 * Vertical Nav Component.
 *
 * For displaying sidebar navigation.
 */
const VerticalNavRoot = ({
  menu,
  pageLink,
  classes = {},
  navOpened = false,
  showNestedLevels = false,
  ...props
}) => {
  const menuTree = useTreeWalker(menu, pageLink, showNestedLevels);
  return (
    <VerticalNavStateProvider tree={menuTree}>
      <nav
        className={dcnb(
          'su-relative',
          navOpened ? 'su-shadow-xl' : '',
          classes.rootList ? classes.rootList : ''
        )}
        {...props}
        aria-label="Section Menu"
      >
        {/* Desktop */}
        <Group
          menuTree={menuTree}
          pageLink={pageLink}
          className="su-hidden lg:su-block"
          showNestedLevels={showNestedLevels}
          classes={classes}
        />
        {/* Mobile */}
        <Group
          menuTree={menuTree}
          pageLink={pageLink}
          className="lg:su-hidden su-absolute su-z-20 su-shadow-xl su-bg-white su-w-full"
          aria-hidden={!navOpened}
          showNestedLevels={showNestedLevels}
          classes={classes}
        />
      </nav>
    </VerticalNavStateProvider>
  );
};
VerticalNavRoot.displayName = 'VerticalNav';

// Bind them.
// -----------------------------------------------------------------------------

export const VerticalNav = Object.assign(VerticalNavRoot, { Item });

// Prop Types.
// -----------------------------------------------------------------------------

VerticalNavRoot.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
