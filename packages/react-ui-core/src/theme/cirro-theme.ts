/**
 * This file defines the base theme for Cirro applications using Material UI.
 * It includes customizations for colors, typography, and component styles
 * that establish Cirro's visual identity.
 */
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Core color palette used throughout the theme.
export const COLOR_HOVER = "#bdd7e1";
export const COLOR_PRIMARY = '#050b26';
export const COLOR_PRIMARY_LIGHT = '#5C5D73';
export const COLOR_LOGO_LIGHT = '#24bfd3';
export const COLOR_SECONDARY = '#0e7d9f';
export const COLOR_SECONDARY_LIGHT = '#FFF';
export const COLOR_HIGHLIGHT = "#B6D8E2";
export const COLOR_GRAY = '#f2f7f8';
export const COLOR_WARNING = '#894073';

// Base theme configuration
const baseThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: COLOR_PRIMARY,
      light: COLOR_PRIMARY_LIGHT,
    },
    secondary: {
      main: COLOR_SECONDARY,
      light: COLOR_SECONDARY_LIGHT,
    },
    warning: {
      main: COLOR_WARNING,
    },
    background: {
      default: '#FFFFFF',
    },
    divider: COLOR_PRIMARY_LIGHT,
  },
  typography: {
    fontFamily: 'Inter, "-apple-system", "BlinkMacSystemFont", sans-serif',
    fontSize: 18,
    fontWeightRegular: 400,
    fontWeightBold: 800,
    body1: {
      fontSize: '.8rem',
      lineHeight: 1.5,
      letterSpacing: '0',
      color: COLOR_PRIMARY,
    },
    body2: {
      fontSize: '.8rem',
      lineHeight: 1.5,
      letterSpacing: '0',
      color: COLOR_PRIMARY_LIGHT,
    },
    h1: {
      fontFamily: '"DM Serif Display", serif',
      lineHeight: 1.2,
      letterSpacing: 1.5,
      color: COLOR_PRIMARY,
      mb: 3,
    },
    h2: {
      fontFamily: '"DM Serif Display", serif',
      fontSize: '68px',
      lineHeight: 1.2,
      letterSpacing: '0em',
      color: COLOR_PRIMARY,
    },
    h3: {
      fontSize: '1.2rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
      color: COLOR_SECONDARY,
    },
    h4: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0em',
      color: COLOR_SECONDARY,
    },
    h5: {
      fontSize: '.8rem',
      lineHeight: 1,
      letterSpacing: '0em',
      color: COLOR_SECONDARY,
    },
    h6: {
      fontSize: '.8rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
      color: COLOR_PRIMARY,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_PRIMARY,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '12.8px',
          textTransform: 'none',
          fontWeight: 400,
          cursor: 'pointer',
          color: COLOR_PRIMARY,
        },
        startIcon: {
          color: COLOR_SECONDARY,
        },
        containedPrimary: {
          color: "#FFF",
        },
        containedSecondary: {
          color: "#FFF",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          border: 'none',
          backgroundColor: COLOR_GRAY,
          paddingBottom: '0px',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_GRAY,
        },
        title: {
          fontSize: '1rem',
          color: COLOR_SECONDARY,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '.8rem',
        },
        filledPrimary: {
          justifyContent: 'left',
          borderRadius: '3px',
          border: '0px solid',
          color: COLOR_PRIMARY,
          background: 'rgba(255,255,255,0)',
          ':focus': {
            background: COLOR_HIGHLIGHT,
          },
          ':hover': {
            background: COLOR_HIGHLIGHT,
          },
        },
        filledSecondary: {
          color: COLOR_PRIMARY,
          border: '0px solid',
          pt: 1,
          pb: 1,
          background: '#FFF',
          ':focus': {
            background: COLOR_HIGHLIGHT,
          },
          ':hover': {
            background: COLOR_HIGHLIGHT,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          zIndex: 1199,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: COLOR_SECONDARY_LIGHT,
            '&:hover': {
              backgroundColor: 'lightblue',
            },
          },
          paddingLeft: 0,
          cursor: 'pointer',
          '&:hover': {
            background: COLOR_HIGHLIGHT,
          },
        },
      },
      defaultProps: {
        sx: {
          pl: 4,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '0.8rem',
          color: COLOR_PRIMARY,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        secondary: {
          fontSize: '0.8rem',
          color: COLOR_PRIMARY_LIGHT,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          margin: 1,
          fontSize: '.8rem',
          textTransform: 'none',
          cursor: 'pointer',
          color: "#000",
          "&.Mui-hover": {
            backgroundColor: COLOR_HOVER,
          },
          "&.Mui-selected": {
            color: COLOR_SECONDARY,
            backgroundColor: "#FFF",
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: 'none',
          borderWidth: '0px',
          borderRadius: '3px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: COLOR_GRAY,
          color: COLOR_PRIMARY,
          fontSize: 11,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
          },
        },
      },
    },
  },
};

/**
 * The main Cirro theme instance created from the base options.
 * This theme can be used directly or extended for specific use cases.
 */
export const cirroTheme = createTheme(baseThemeOptions);
export type CirroThemeOptions = typeof baseThemeOptions;