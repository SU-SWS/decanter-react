import React from 'react';
import { Grid } from './Grid';
import { gridCols2Xl } from './Grid.levers';
import DOMPurify from 'dompurify'

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    xxl: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
  }
};

const GridTemplate = ({ children, ...rest }) => {
  // We do this to mimic sending in CMS content or another React component.
  const content =
    <>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[0]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[1]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[2]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[3]) }} />
    </>
  return (
    <Grid {...rest}>{content}</Grid>
  )
}

export const Default = GridTemplate.bind({});
Default.args = {
  xxl: 4,
  children: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  className: 'su-bg-illuminating-light'
};
Default.storyName = 'CSS Grid'
