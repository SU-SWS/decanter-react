import React from 'react';
import { dcnb } from 'cnbuilder';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element: { childItems, active, activeTrail, Link },
  pageLink,
  classes,
  showNestedLevels,
  ...props
}) => {
  let linkClasses = dcnb(
    'su-group su-no-underline hocus:su-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark',
    active
      ? 'su-text-black su-border-black-90 hocus:su-border-digital-blue-dark'
      : 'su-border-white'
  );

  let LinkObj;
  if (Link) {
    linkClasses = Link.props.className || linkClasses;
    LinkObj = React.cloneElement(Link, {
      className: linkClasses,
      active,
    });
  }

  return (
    <>
      {!!LinkObj && Object.keys(LinkObj).length && (
        <li
          className={dcnb(
            'su-m-0',
            classes.childListItems ? classes.childListItems : ''
          )}
          {...props}
        >
          {LinkObj}
          {!!childItems?.length && (active || activeTrail || showNestedLevels) && (
            <ul
              className={dcnb(
                'su-list-none',
                classes.childLists
                  ? classes.childLists
                  : 'su-pb-15 su-pl-20 children:children:su-py-6 children:children:su-text-20'
              )}
            >
              {childItems.map((item) => (
                <Item
                  key={item.id}
                  element={item}
                  pageLink={pageLink}
                  classes={classes}
                  showNestedLevels={showNestedLevels}
                />
              ))}
            </ul>
          )}
        </li>
      )}
    </>
  );
};

Item.displayName = 'VerticalNav.Item';
