import React from 'react';
import PropTypes from 'prop-types';
import { dcnb } from 'cnbuilder';
// eslint-disable-next-line import/no-cycle
import { Group } from './VerticalNav.Group';
import useActivePath from '../hooks/useActivePath';

/**
 *
 * @param {*} param0
 * @returns
 */
export const Item = ({
  element,
  items,
  active,
  isRoot,
  showNestedLevels,
  className,
  elementClasses,
  ...props
}) => {
  let linkClasses = dcnb(
    'su-group su-no-underline hocus:su-underline su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark',
    active
      ? 'su-text-black su-border-black-90 hocus:su-border-digital-blue-dark'
      : 'su-border-white',
    elementClasses
  );

  linkClasses = element.props.className || linkClasses;
  const LinkObj = React.cloneElement(element, {
    className: linkClasses,
  });

  const inPath = useActivePath(items);

  return (
    <li className={dcnb('su-nav-item su-m-0', className)} {...props}>
      {LinkObj}
      {Array.isArray(items) && (inPath || showNestedLevels) && (
        <Group
          menuTree={items}
          showNestedLevels={showNestedLevels}
          className="su-list-none su-pb-15 su-pl-20 children:children:su-py-6 children:children:su-text-20"
        />
      )}
    </li>
  );
};

Item.displayName = 'VerticalNav.Item';

// PropTypes
// -----------------------------------------------------------------------------

Item.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  element: PropTypes.element,
  items: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.bool,
  showNestedLevels: PropTypes.bool,
  elementClasses: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};
