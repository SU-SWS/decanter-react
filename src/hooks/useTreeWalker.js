/**
 *
 * @param {Array} items
 * @param {String} pageLink
 * @param {Boolean} showNestedLevels
 * @returns
 */
const walkTree = (items, pageLink, showNestedLevels) => {
  if (!pageLink || !items.length) {
    return items;
  }

  // Check if menu item's url matches the current page url
  const urlMatch = (link) =>
    pageLink.indexOf(link) > -1 &&
    (!pageLink.split(link)[1] || pageLink.split(link)[1] === "/");

  // Recursive function that will add active and activeTrail props to the active link, it's parents and the
  // immediate children if available.
  const setLinkProps = (obj) => {
    if (obj) {
      if (urlMatch(obj.link)) {
        // eslint-disable-next-line no-param-reassign
        obj.active = true;
      } else if (obj.childItems?.length > 0) {
        // eslint-disable-next-line no-param-reassign, array-callback-return
        obj.childItems.map((child) => {
          // eslint-disable-next-line no-param-reassign
          obj.activeTrail = true;
          if (urlMatch(child.link)) {
            // eslint-disable-next-line no-param-reassign
            child.active = true;
          } else {
            setLinkProps(child);
          }
        });
      }
    }
  };

  // eslint-disable-next-line array-callback-return
  items.map((item, key) => {
    // Recursive function that will check which of the first level items have the active item and need to be opened.
    const getActiveSubmenu = (obj) => {
      if (urlMatch(obj.link)) {
        setLinkProps(items[key]);
      } else if (obj.childItems?.length) {
        // eslint-disable-next-line array-callback-return
        obj.childItems.map((child) => {
          if (urlMatch(child.link)) {
            setLinkProps(items[key]);
          } else {
            getActiveSubmenu(child);
          }
        });
      }
    };
    if (!showNestedLevels) {
      getActiveSubmenu(item);
    } else {
      setLinkProps(item);
    }
  });

  return items;
};

/**
 *
 */
export default (items, pageLink, showNestedLevels) =>
  walkTree(items, pageLink, showNestedLevels);
