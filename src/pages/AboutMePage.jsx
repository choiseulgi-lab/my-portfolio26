import { Box, Container, Typography } from '@mui/material'

function AboutMePage() {
  return (
    <Box sx={{ backgroundColor: '#F5F5EC', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#2D45D4', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            About Me
          </Typography>
          <Typography variant="h1" sx={{ color: '#1A1A2E', mb: 3 }}>
            About Me 페이지
          </Typography>
          <Box sx={{ width: 60, height: 3, backgroundColor: '#DCED1E', mx: 'auto', mb: 6 }} />
          <Box
            sx={{
              p: 6,
              backgroundColor: '#FFFFFF',
              border: '1px solid #DEDED4',
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#2D2D2D', lineHeight: 2 }}>
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
