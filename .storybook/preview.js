import '../src/styles/theme.css';
import { themes } from '@storybook/theming';
import { DocsContainer } from './components/DocContainer';

import darkLogo from '../src/stories/assets/logo-bg-dark.png';
import lightLogo from '../src/stories/assets/logo-bg-light.png';

const themeOverrideLight = {
  brandTitle: 'Ragnarok',
  brandUrl: './',
  brandImage: lightLogo
}
const themeOverrideDark = {
  brandTitle: 'Ragnarok',
  brandUrl: './',
  brandImage: darkLogo
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    disable: true
  },
  docs: {
    container: DocsContainer,
  },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: '#181818',
      ...themeOverrideDark
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: '#ffffff',
      ...themeOverrideLight
    },
    darkClass: 'bg-dark',
    lightClass: 'bg-light',
    stylePreview: true,
    // current: 'light',
  },
  layout: 'centered',
}