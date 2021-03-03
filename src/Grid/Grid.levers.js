/**
 * Available HTML elements of the grid.
 */
export const gridElements = ['div', 'section', 'article', 'main', 'footer', 'aside', 'header', 'nav', 'form'];

/**
 * Grid gap or not
 */
export const gridGap = [true, false];

/**
 * Available number of grid columns for all breakpoints (1 to 12)
 */
export const gridNumCols = Array.from({length: 12}, (_, i) => i + 1);
