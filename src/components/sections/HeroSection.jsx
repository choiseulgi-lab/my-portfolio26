import { Box, Container, Typography } from '@mui/material'

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1614',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Hero Section
          </Typography>
          <Typography variant="h1" sx={{ color: '#F5EDD6', mb: 3, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 600 }}>
            여기는 Hero 섹션입니다.
          </Typography>
          <Typography variant="body1" sx={{ color: '#9B8B7E', lineHeight: 1.8 }}>
            메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
          <Box sx={{ mt: 3, width: 60, height: 2, backgroundColor: '#C8432B', mx: 'auto' }} />
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
