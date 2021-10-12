import React from 'react';
import { FlexCell } from './FlexCell';
import { FlexBox } from '../FlexBox/FlexBox';
import {
  flexCellElements,
  flexCellWidth,
  flexCellFlex,
  flexCellOrder,
} from './FlexCell.levers';

export default {
  title: 'Layout/FlexBox Cell',
  component: FlexCell,
  argTypes: {
    element: {
      options: flexCellElements,
      control: {
        type: 'select',
      },
    },
    xs: {
      options: Object.keys(flexCellWidth.xs),
      control: {
        type: 'select',
      },
    },
    sm: {
      options: Object.keys(flexCellWidth.sm),
      control: {
        type: 'select',
      },
    },
    md: {
      options: Object.keys(flexCellWidth.md),
      control: {
        type: 'select',
      },
    },
    lg: {
      options: Object.keys(flexCellWidth.lg),
      control: {
        type: 'select',
      },
    },
    xl: {
      options: Object.keys(flexCellWidth.xl),
      control: {
        type: 'select',
      },
    },
    xxl: {
      options: Object.keys(flexCellWidth.xxl),
      control: {
        type: 'select',
      },
    },
    flex: {
      options: Object.keys(flexCellFlex),
      control: {
        type: 'select',
      },
    },
    grow: {
      control: {
        type: 'boolean',
      },
    },
    shrink: {
      control: {
        type: 'boolean',
      },
    },
    order: {
      options: Object.keys(flexCellOrder),
      control: {
        type: 'select',
      },
    },
  },
};

const FlexCellTemplate = ({ children, ...rest }) => (
  <FlexBox
    gap
    className="su-bg-foggy-light su-text-white su-text-center su-font-bold"
  >
    <FlexCell {...rest}>{children}</FlexCell>
    <div className="su-bg-black-60 su-p-10">Short</div>
    <div className="su-bg-black-60 su-p-10">Longer item</div>
    <div className="su-bg-black-60 su-p-10">This item is even longer</div>
  </FlexBox>
);

const FlexColTemplate = ({ children, ...rest }) => (
  <FlexBox
    gap
    className="su-bg-foggy-light su-text-white su-text-center su-font-bold"
  >
    <FlexCell {...rest}>{children}</FlexCell>
    <div className="su-bg-black-60 su-p-10 su-w-2/12">2-of-12</div>
    <div className="su-bg-black-60 su-p-10 su-w-2/12">2-of-12</div>
    <div className="su-bg-black-60 su-p-10 su-w-2/12">2-of-12</div>
  </FlexBox>
);

export const Default = FlexCellTemplate.bind({});
Default.args = {
  className: 'su-bg-spirited su-p-10',
  children: 'Flex Cell',
};
Default.storyName = 'Default Auto-width Flex Cell';

export const FlexColCell = FlexColTemplate.bind({});
FlexColCell.args = {
  xs: 6,
  children: '6-of-12',
  className: 'su-bg-spirited su-p-10',
};
FlexColCell.storyName = 'Flex Cell Spanning 6 of 12 Columns';
