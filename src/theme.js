import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#C8432B',
      light: '#D4624E',
      dark: '#A83522',
      contrastText: '#FAF3E8',
    },
    secondary: {
      main: '#8B2028',
      light: '#A83535',
      dark: '#6A1820',
      contrastText: '#FAF3E8',
    },
    background: {
      default: '#F5EDD6',
      paper: '#FAF3E8',
    },
    text: {
      primary: '#1A1614',
      secondary: '#6B4C3B',
      disabled: '#9B8B7E',
    },
    divider: '#D4C4A8',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.125rem', fontWeight: 500 },
    h2: { fontSize: '1.5rem', fontWeight: 500 },
    h3: { fontSize: '1.25rem', fontWeight: 500 },
    h4: { fontSize: '1.125rem', fontWeight: 500 },
    h5: { fontSize: '1rem', fontWeight: 500 },
    h6: { fontSize: '0.875rem', fontWeight: 500 },
  },
  spacing: 8,
})

export default theme
