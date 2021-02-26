import React from 'react';
import { FlexCell } from './FlexCell';
import { FlexBox } from '../FlexBox/FlexBox';
import { flexCellElements, flexCellWidth, flexCellFlex, flexCellGrow, flexCellShrink, flexCellOrder } from './FlexCell.levers';

export default {
  title: 'Layout/FlexBox Cell',
  component: FlexCell,
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: flexCellElements
      }
    },
    width: {
      control: {
        type: 'select',
        options: flexCellWidth
      }
    },
    flex: {
      control: {
        type: 'select',
        options: flexCellFlex
      }
    },
    grow: {
      control: {
        type: 'boolean'
      }
    },
    shrink: {
      control: {
        type: 'boolean'
      }
    },
    order: {
      control: {
        type: 'select',
        options: flexCellOrder
      }
    },
  }
};

const FlexCellTemplate = ({ children, ...rest }) => {
  return (
    <FlexBox gap={true} className='su-bg-foggy-light su-text-white su-text-center su-font-bold'>
      <FlexCell {...rest}>{children}</FlexCell>
      <div className='su-bg-black-40 su-p-10'>Short</div>
      <div className='su-bg-black-40 su-p-10'>Longer item</div>
      <div className='su-bg-black-40 su-p-10'>This item is even longer</div>
    </FlexBox>
  );
};

const FlexColTemplate = ({ children, ...rest }) => {
  return (
    <FlexBox gap={true} className='su-bg-foggy-light su-text-white su-text-center su-font-bold'>
      <FlexCell {...rest}>{children}</FlexCell>
      <div className='su-bg-black-40 su-p-10 su-col-span-2'>2</div>
      <div className='su-bg-black-40 su-p-10 su-col-span-2'>3</div>
      <div className='su-bg-black-40 su-p-10 su-col-span-2'>4</div>
      <div className='su-bg-black-40 su-p-10 su-col-span-4'>5</div>
      <div className='su-bg-black-40 su-p-10 su-col-span-4'>6</div>
      <div className='su-bg-black-40 su-p-10 su-col-span-4'>7</div>
    </FlexBox>
  );
};

export const Default = FlexCellTemplate.bind({});
Default.args = {
  className: 'su-bg-spirited su-p-10',
  children: 'Flex Cell'
};
Default.storyName = 'Flex Cell in a 12-column Flex';

export const FlexColCell = FlexColTemplate.bind({});
FlexColCell.args = {
  width: 6,
  children: '6-of-12 Columns',
  className: 'su-bg-spirited su-p-10'
};
FlexColCell.storyName = 'Flex Cell Spanning 6 of 12 Columns';
