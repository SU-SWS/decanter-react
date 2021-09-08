import React from "react";

export const Link = ({ name, link, ...props }) => (
  <a href="#" {...props}>
    {name}
  </a>
);

// Group.displayName = "VerticalNav.Group";
//
// // Prop Types.
// // -----------------------------------------------------------------------------
//
// Group.propTypes = {
//   // Nodes and content.
//   children: PropTypes.oneOfType([
//     PropTypes.node,
//     PropTypes.element,
//     PropTypes.string,
//   ]),
//   className: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.array,
//     PropTypes.string,
//   ]),
// };
