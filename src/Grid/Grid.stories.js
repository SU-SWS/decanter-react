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
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[4]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[5]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[6]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[7]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[8]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[9]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[10]) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children[11]) }} />
    </>
  return (
    <Grid {...rest}>{content}</Grid>
  )
}

export const Default = GridTemplate.bind({});
Default.args = {
  xxl: 4,
  children: [
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">1</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">2</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">3</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">4</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">5</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">6</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">7</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">8</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">9</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">10</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">11</span>',
    '<span class="su-text-center su-bg-poppy-light su-type-3 su-font-bold su-p-10 su-block">12</span>'],
  className: 'su-bg-illuminating-light'
};
Default.storyName = 'CSS Grid'
