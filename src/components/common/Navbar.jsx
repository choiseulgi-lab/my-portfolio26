import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
]

function Navbar() {
  const location = useLocation()

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: '#1A1A2E', boxShadow: 'none', borderBottom: '1px solid #2A2A3E' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: '#DCED1E', textDecoration: 'none', fontWeight: 700, letterSpacing: 2 }}
        >
          PORTFOLIO
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#DCED1E' : '#FFFFFF',
                fontWeight: location.pathname === item.path ? 600 : 400,
                borderBottom: location.pathname === item.path ? '2px solid #DCED1E' : '2px solid transparent',
                borderRadius: 0,
                '&:hover': { color: '#DCED1E', backgroundColor: 'transparent' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
