// Decanter Styles.
import 'decanter/dist/decanter.css'
import 'decanter/dist/decanter.js'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
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
}
