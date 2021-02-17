// Decanter Styles.
import 'decanter/dist/decanter.css'
import 'decanter/dist/decanter.js'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// Our Breakpoints
const customViewports = {
  sm: {
    name: 'Small Breakpoint',
    styles: {
      width: '576px',
      height: '328px'
    }
  },
  md: {
    name: 'Medium Breakpoint',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  lg: {
    name: 'Large Breakpoint',
    styles: {
      width: '992px',
      height: '1200px'
    }
  },
  xl: {
    name: 'Extra Large Breakpoint',
    styles: {
      width: '1200px',
      height: '1024px'
    }
  },
  '2xl': {
    name: '2X Extra Large Breakpoint',
    styles: {
      width: '1500px',
      height: '1100px'
    }
  }
};

// Configuration.
export const parameters = {
  actions: {
    argTypesRegex: '^on.*'
  },
  controls: {
    expanded: true
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports
    },
  },
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: '#FFFFFF',
      },
      {
        name: 'Black',
        value: '#2E2D29',
      },
      {
        name: 'True Black',
        value: '#000000',
      },
      {
        name: 'Cardinal Red',
        value: '#8C1515',
      },
      {
        name: 'Digital Red',
        value: '#B1040E',
      },
      {
        name: 'Digital Blue',
        value: '#006CB8',
      },
      {
        name: 'Digital Green',
        value: '#008566',
      },
      {
        name: 'Palo Alto',
        value: '#175E54',
      },
      {
        name: 'Palo Verde',
        value: '#279989',
      },
      {
        name: 'Olive',
        value: '#8F993E',
      },
      {
        name: 'Bay',
        value: '#6fa287',
      },
      {
        name: 'Sky',
        value: '#4298B5',
      },
      {
        name: 'Lagunita',
        value: '#007C92',
      },
      {
        name: 'Poppy',
        value: '#E98300',
      },
      {
        name: 'Spirited',
        value: '#E04F39',
      },
      {
        name: 'illuminating',
        value: '#FEDD5C',
      },
      {
        name: 'Plum',
        value: '#620059',
      },
      {
        name: 'Brick',
        value: '#651C32',
      },
      {
        name: 'Archway',
        value: '#5D4B3C',
      },
      {
        name: 'Stone',
        value: '#5D4B3C',
      },
      {
        name: 'Foggy',
        value: '#DAD7CB',
      },
    ],
  }
}
