import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCED1E',
      light: '#E8F540',
      dark: '#C8D818',
      contrastText: '#1A1A2E',
    },
    secondary: {
      main: '#2D45D4',
      light: '#4D62E0',
      dark: '#1A2EAA',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5EC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#2D2D2D',
      disabled: '#888888',
    },
    divider: '#DEDED4',
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
