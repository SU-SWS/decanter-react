import React from "react";
import { dcnb } from "cnbuilder";
import DOMPurify from "dompurify";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element: { text, link, childItems, active, activeTrail, linkComponent },
  pageLink,
  showNestedLevels,
  ...props
}) => {
  const linkClasses = dcnb(
    "su-group su-no-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-cardinal-red-xdark hocus:su-border-cardinal-red-xdark hocus:su-underline",
    active ? "su-text-black su-border-black-90 " : "su-border-white"
  );
  return (
    <li {...props}>
      {linkComponent ? (
        <React.Fragment>
          {/* eslint-disable-next-line react/no-danger */}
          <span
            className={linkClasses}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(linkComponent),
            }}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <a href={link} className={linkClasses}>
            {text}
          </a>
        </React.Fragment>
      )}

      {!!childItems?.length && (active || activeTrail || showNestedLevels) && (
        <ul className="su-pb-15 su-list-none su-pl-20 children:children:su-py-6 children:children:su-text-20">
          {childItems.map((item) => (
            <div>
              <Item
                element={item}
                pageLink={pageLink}
                showNestedLevels={showNestedLevels}
              />
            </div>
          ))}
        </ul>
      )}
    </li>
  );
};

Item.displayName = "VerticalNav.Item";
