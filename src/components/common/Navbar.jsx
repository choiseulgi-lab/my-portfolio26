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
      sx={{ backgroundColor: '#1A1614', boxShadow: 'none', borderBottom: '1px solid #3A2E2A' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: '#F5EDD6', textDecoration: 'none', fontWeight: 600, letterSpacing: 1 }}
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
                color: location.pathname === item.path ? '#C8432B' : '#D4C4A8',
                fontWeight: location.pathname === item.path ? 600 : 400,
                borderBottom: location.pathname === item.path ? '2px solid #C8432B' : '2px solid transparent',
                borderRadius: 0,
                '&:hover': { color: '#F5EDD6', backgroundColor: 'transparent' },
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
