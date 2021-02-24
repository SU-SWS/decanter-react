import React from 'react';
import { FlexBox } from './FlexBox';
import { flexDirection, flexWrap, flexJustifyContent, flexJustifyItems, flexAlignContent, flexAlignItems } from './FlexBox.levers';

export default {
  title: 'Layout/FlexBox',
  component: FlexBox,
  argTypes: {
    direction: {
      control: {
        type: 'inline-radio',
        options: flexDirection
      }
    },
    wrap: {
      control: {
        type: 'inline-radio',
        options: flexWrap
      }
    },
    justifyContent: {
      control: {
        type: 'select',
        options: flexJustifyContent
      }
    },
    justifyItems: {
      control: {
        type: 'select',
        options: flexJustifyItems
      }
    },
    alignContent: {
      control: {
        type: 'select',
        options: flexAlignContent
      }
    },
    alignItems: {
      control: {
        type: 'select',
        options: flexAlignItems
      }
    },
  }
};

const FlexBoxTemplate = ({ children, ...rest }) => {
  return (
    <FlexBox {...rest}>
      <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">1</div>
      <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">2</div>
      <div className="su-w-1/6 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">3</div>
    </FlexBox>
  )
}

const FlexBoxMultiTemplate = ({ children, ...rest }) => {
  return (
    <FlexBox {...rest}>
      <div className="su-w-1/3 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">1</div>
      <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">2</div>
      <div className="su-w-1/6 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">3</div>
      <div className="su-w-1/3 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">4</div>
      <div className="su-w-1/6 su-text-center su-bg-spirited su-type-3 su-font-bold su-p-10">5</div>
      <div className="su-w-1/6 su-text-center su-bg-plum su-type-3 su-font-bold su-p-10">6</div>
    </FlexBox>
  )
}

export const Default = FlexBoxTemplate.bind({});
Default.args = {
  className: 'su-bg-foggy-light su-text-white'
};
Default.storyName = 'Single Row'

export const MultipleRows = FlexBoxMultiTemplate.bind({});
MultipleRows.args = {
  wrap: 'wrap',
  justifyContent: 'start',
  className: 'su-bg-foggy-light su-text-white'
};
MultipleRows.storyName = 'Multiple Rows with Wrapping'
