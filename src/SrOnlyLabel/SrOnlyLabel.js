import React from 'react';

export const SrOnlyLabel = (props) => {
  return (
    <span className='su-sr-only'>{props.srText ?? '(link is external)'}</span>
  );
};
