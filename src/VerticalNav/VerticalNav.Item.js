import React, { useContext } from "react";
import PropTypes from "prop-types";
import { dcnb } from "cnbuilder";
import nextId from "react-id-generator";
import { VerticalNavContext } from "./VerticalNav.context";

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element: { text, link, childItems, active, activeTrail },
  pageLink,
  showNestedLevels,
  className,
  ...props
}) => {
  return (
    <li>
      <a
        href={link}
        className={dcnb(
          "su-group su-no-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-cardinal-red-xdark hocus:su-border-cardinal-red-xdark hocus:su-underline",
          active ? "su-text-black su-border-black-90 " : "su-border-white"
        )}
      >
        {text}
      </a>
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

// Prop Types.
// -----------------------------------------------------------------------------

Item.propTypes = {
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
