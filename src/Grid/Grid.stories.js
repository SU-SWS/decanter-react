import React from 'react';
import { Grid } from './Grid';
import DOMPurify from 'dompurify'

const cellContent = [
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">1</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">2</span>',
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">3</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">4</span>',
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">5</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">6</span>',
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">7</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">8</span>',
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">9</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">10</span>',
  '<span class="su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10 su-block">11</span>',
  '<span class="su-text-center su-bg-plum su-type-3 su-font-bold su-p-10 su-block">12</span>'
]

export default {
  title: 'Layout/CSS Grid',
  component: Grid,
  argTypes: {
    xs: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
    sm: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
    md: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
    lg: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
    xl: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    },
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
  return (
    <Grid {...rest}>
      {children.map((child, index) => (
        // We do this to mimic sending in CMS content or another React component.
        <div key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(child) }} />
      ))}
    </Grid>
  )
}

export const Default = GridTemplate.bind({});
Default.args = {
  gap: true,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 4,
  xxl: 4,
  children: cellContent,
  className: 'su-bg-black-10 su-text-white'
};
Default.storyName = '4-Column Grid with Responsive Gaps'

export const NoGap = GridTemplate.bind({});
NoGap.args = {
  gap: false,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 3,
  xxl: 3,
  children: cellContent,
  className: 'su-bg-black-10 su-text-white'
};
NoGap.storyName = '3-Column Grid with No Gap'
