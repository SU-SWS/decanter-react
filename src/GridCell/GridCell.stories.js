import React from 'react';
import { GridCell } from './GridCell';
import { Grid } from '../Grid/Grid';
import {
  gridCellElements,
  gridColSpan,
  gridColLine,
  gridRowSpan,
  gridRowLine,
} from './GridCell.levers';

export default {
  title: 'Layout/CSS Grid Cell',
  component: GridCell,
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: gridCellElements,
      },
    },
    xs: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.xs),
      },
    },
    sm: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.sm),
      },
    },
    md: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.md),
      },
    },
    lg: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.lg),
      },
    },
    xl: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.xl),
      },
    },
    xxl: {
      control: {
        type: 'select',
        options: Object.keys(gridColSpan.xxl),
      },
    },
    colStart: {
      control: {
        type: 'select',
        options: Object.keys(gridColLine),
      },
    },
    row: {
      control: {
        type: 'select',
        options: Object.keys(gridRowSpan),
      },
    },
    rowStart: {
      control: {
        type: 'select',
        options: Object.keys(gridRowLine),
      },
    },
  },
};

const GridCellTemplate = ({ children, ...rest }) => (
  <Grid
    xs={12}
    gap
    className="su-bg-foggy-light su-text-white su-text-center su-type-1 su-font-bold"
  >
    <GridCell {...rest}>{children}</GridCell>
    <div className="su-bg-black-60 su-py-10">2</div>
    <div className="su-bg-black-60 su-py-10">3</div>
    <div className="su-bg-black-60 su-py-10">4</div>
    <div className="su-bg-black-60 su-py-10">5</div>
    <div className="su-bg-black-60 su-py-10">6</div>
    <div className="su-bg-black-60 su-py-10">7</div>
    <div className="su-bg-black-60 su-py-10">8</div>
    <div className="su-bg-black-60 su-py-10">9</div>
    <div className="su-bg-black-60 su-py-10">10</div>
    <div className="su-bg-black-60 su-py-10">11</div>
    <div className="su-bg-black-60 su-py-10">12</div>
  </Grid>
);

const GridColTemplate = ({ children, ...rest }) => (
  <Grid
    xs={12}
    gap
    className="su-bg-foggy-light su-text-white su-text-center su-type-2 su-font-bold"
  >
    <GridCell {...rest}>{children}</GridCell>
    <div className="su-bg-black-60 su-p-10 su-col-span-2">2</div>
    <div className="su-bg-black-60 su-p-10 su-col-span-2">3</div>
    <div className="su-bg-black-60 su-p-10 su-col-span-2">4</div>
    <div className="su-bg-black-60 su-p-10 su-col-span-4">5</div>
    <div className="su-bg-black-60 su-p-10 su-col-span-4">6</div>
    <div className="su-bg-black-60 su-p-10 su-col-span-4">7</div>
  </Grid>
);

const GridRowTemplate = ({ children, ...rest }) => (
  <Grid
    xs={2}
    gap
    className="su-grid-rows-4 su-bg-foggy-light su-text-white su-text-center su-type-2 su-font-bold"
  >
    <GridCell {...rest}>{children}</GridCell>
    <div className="su-bg-black-60 su-p-10">2</div>
    <div className="su-bg-black-60 su-p-10">3</div>
    <div className="su-bg-black-60 su-p-10">4</div>
    <div className="su-bg-black-60 su-p-10">5</div>
    <div className="su-bg-black-60 su-p-10">6</div>
  </Grid>
);

const GridStartTemplate = ({ children, ...rest }) => (
  <Grid
    xs={12}
    gap
    className="su-bg-foggy-light su-text-white su-text-center su-type-2 su-font-bold"
  >
    <GridCell {...rest}>{children}</GridCell>
    <div className="su-bg-black-60 su-p-10">2</div>
    <div className="su-bg-black-60 su-p-10">3</div>
    <div className="su-bg-black-60 su-p-10">4</div>
    <div className="su-bg-black-60 su-p-10">5</div>
    <div className="su-bg-black-60 su-p-10">6</div>
  </Grid>
);

export const Default = GridCellTemplate.bind({});
Default.args = {
  children: '1',
  className: 'su-bg-spirited su-p-10',
};
Default.storyName = 'Grid Cell in a 12-column Grid';

export const GridColCell = GridColTemplate.bind({});
GridColCell.args = {
  xs: 6,
  children: '1',
  className: 'su-bg-spirited su-p-10',
};
GridColCell.storyName = 'Grid Cell Spanning 6 of 12 Columns';

export const GridStartCell = GridStartTemplate.bind({});
GridStartCell.args = {
  xs: 8,
  colStart: 3,
  children: '1',
  className: 'su-bg-spirited su-p-10',
};
GridStartCell.storyName = 'Grid Cell Starting at Line 3 & Spanning 8 Columns';

export const GridRowCell = GridRowTemplate.bind({});
GridRowCell.args = {
  row: 3,
  children: '1',
  className: 'su-bg-spirited su-p-10',
};
GridRowCell.storyName = 'Grid Cell Spanning 3 Rows';
