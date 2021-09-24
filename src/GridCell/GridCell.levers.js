/**
 * Available HTML elements of the grid cell.
 */
export const gridCellElements = [
  'div',
  'section',
  'article',
  'main',
  'footer',
  'aside',
  'header',
  'nav',
];

/**
 * Available Breakpoints Mapped to TW output.
 */
export const gridColBPs = {
  xs: '',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: '2xl',
};

/**
 * Number of columns a grid cell can span (1 to 12)
 */
export const gridColSpan = {
  xs: {
    auto: 'su-col-auto',
    full: 'su-col-span-full',
    1: 'su-col-span-1',
    2: 'su-col-span-2',
    3: 'su-col-span-3',
    4: 'su-col-span-4',
    5: 'su-col-span-5',
    6: 'su-col-span-6',
    7: 'su-col-span-7',
    8: 'su-col-span-8',
    9: 'su-col-span-9',
    10: 'su-col-span-10',
    11: 'su-col-span-11',
    12: 'su-col-span-12',
  },
  sm: {
    auto: 'sm:su-col-auto',
    full: 'sm:su-col-span-full',
    1: 'sm:su-col-span-1',
    2: 'sm:su-col-span-2',
    3: 'sm:su-col-span-3',
    4: 'sm:su-col-span-4',
    5: 'sm:su-col-span-5',
    6: 'sm:su-col-span-6',
    7: 'sm:su-col-span-7',
    8: 'sm:su-col-span-8',
    9: 'sm:su-col-span-9',
    10: 'sm:su-col-span-10',
    11: 'sm:su-col-span-11',
    12: 'sm:su-col-span-12',
  },
  md: {
    auto: 'md:su-col-auto',
    full: 'md:su-col-span-full',
    1: 'md:su-col-span-1',
    2: 'md:su-col-span-2',
    3: 'md:su-col-span-3',
    4: 'md:su-col-span-4',
    5: 'md:su-col-span-5',
    6: 'md:su-col-span-6',
    7: 'md:su-col-span-7',
    8: 'md:su-col-span-8',
    9: 'md:su-col-span-9',
    10: 'md:su-col-span-10',
    11: 'md:su-col-span-11',
    12: 'md:su-col-span-12',
  },
  lg: {
    auto: 'lg:su-col-auto',
    full: 'lg:su-col-span-full',
    1: 'lg:su-col-span-1',
    2: 'lg:su-col-span-2',
    3: 'lg:su-col-span-3',
    4: 'lg:su-col-span-4',
    5: 'lg:su-col-span-5',
    6: 'lg:su-col-span-6',
    7: 'lg:su-col-span-7',
    8: 'lg:su-col-span-8',
    9: 'lg:su-col-span-9',
    10: 'lg:su-col-span-10',
    11: 'lg:su-col-span-11',
    12: 'lg:su-col-span-12',
  },
  xl: {
    auto: 'xl:su-col-auto',
    full: 'xl:su-col-span-full',
    1: 'xl:su-col-span-1',
    2: 'xl:su-col-span-2',
    3: 'xl:su-col-span-3',
    4: 'xl:su-col-span-4',
    5: 'xl:su-col-span-5',
    6: 'xl:su-col-span-6',
    7: 'xl:su-col-span-7',
    8: 'xl:su-col-span-8',
    9: 'xl:su-col-span-9',
    10: 'xl:su-col-span-10',
    11: 'xl:su-col-span-11',
    12: 'xl:su-col-span-12',
  },
  xxl: {
    auto: '2xl:su-col-auto',
    full: '2xl:su-col-span-full',
    1: '2xl:su-col-span-1',
    2: '2xl:su-col-span-2',
    3: '2xl:su-col-span-3',
    4: '2xl:su-col-span-4',
    5: '2xl:su-col-span-5',
    6: '2xl:su-col-span-6',
    7: '2xl:su-col-span-7',
    8: '2xl:su-col-span-8',
    9: '2xl:su-col-span-9',
    10: '2xl:su-col-span-10',
    11: '2xl:su-col-span-11',
    12: '2xl:su-col-span-12',
  },
};

/**
 * Available column line numbers a cell can start from (1 to 12, for a grid with max 12 columns)
 */
export const gridColLine = {
  1: 'su-col-start-1',
  2: 'su-col-start-2',
  3: 'su-col-start-3',
  4: 'su-col-start-4',
  5: 'su-col-start-5',
  6: 'su-col-start-6',
  7: 'su-col-start-7',
  8: 'su-col-start-8',
  9: 'su-col-start-9',
  10: 'su-col-start-10',
  11: 'su-col-start-11',
  12: 'su-col-start-12',
  auto: 'su-col-start-auto',
};

/**
 * Number of rows a grid cell can span (1 to 6)
 */
export const gridRowSpan = {
  1: 'su-row-span-1',
  2: 'su-row-span-2',
  3: 'su-row-span-3',
  4: 'su-row-span-4',
  5: 'su-row-span-5',
  6: 'su-row-span-6',
  auto: 'su-row-auto',
  full: 'su-row-span-full',
};

/**
 * Available row line numbers a cell can start from (1 to 6, for a grid with max 6 rows)
 */
export const gridRowLine = {
  1: 'su-row-start-1',
  2: 'su-row-start-2',
  3: 'su-row-start-3',
  4: 'su-row-start-4',
  5: 'su-row-start-5',
  6: 'su-row-start-6',
  auto: 'su-row-start-auto',
};
