import React from "react";
import { dcnb } from "cnbuilder";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element: { childItems, active, activeTrail, Link },
  pageLink,
  showNestedLevels,
  ...props
}) => {
  let linkClasses = dcnb(
    "su-group su-no-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-cardinal-red-xdark hocus:su-border-cardinal-red-xdark hocus:su-underline",
    active ? "su-text-black su-border-black-90" : "su-border-white"
  );

  let LinkObj;
  if (Link) {
    linkClasses = dcnb(linkClasses, Link.props.className);
    LinkObj = React.cloneElement(Link, { className: linkClasses });
  }

  return (
    <>
      {LinkObj && Object.keys(LinkObj).length && (
        <li {...props}>
          {LinkObj}
          {!!childItems?.length && (active || activeTrail || showNestedLevels) && (
            <ul className="su-pb-15 su-list-none su-pl-20 children:children:su-py-6 children:children:su-text-20">
              {childItems.map((item) => (
                <Item
                  element={item}
                  pageLink={pageLink}
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

Item.displayName = "VerticalNav.Item";
