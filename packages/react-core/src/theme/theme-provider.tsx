import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { cirroTheme } from './cirro-theme';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider adds the Cirro theme to the app.
 * Other packages can build on this theme with their own providers.
 */
export function ThemeProvider({ children }: ThemeProviderProps): ReactElement {
  return (
    <MuiThemeProvider theme={cirroTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;800&display=swap');
        `}
      />
      {children}
    </MuiThemeProvider>
  );
} 