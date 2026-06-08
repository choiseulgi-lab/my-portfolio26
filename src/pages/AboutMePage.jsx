import { Box, Container, Typography } from '@mui/material'

function AboutMePage() {
  return (
    <Box sx={{ backgroundColor: '#F5EDD6', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            About Me
          </Typography>
          <Typography variant="h1" sx={{ color: '#1A1614', mb: 3 }}>
            About Me 페이지
          </Typography>
          <Box sx={{ width: 60, height: 2, backgroundColor: '#C8432B', mx: 'auto', mb: 6 }} />
          <Box
            sx={{
              p: 6,
              backgroundColor: '#FAF3E8',
              border: '1px solid #D4C4A8',
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#6B4C3B', lineHeight: 2 }}>
              About Me 페이지가 개발될 공간입니다.
              <br />
              상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutMePage
