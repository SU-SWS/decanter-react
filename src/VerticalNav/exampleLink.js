import React from 'react';

export const Link = ({ name, link, active, ...props }) => (
  <a href="#" {...props}>
    {name}
  </a>
);
