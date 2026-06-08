import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function AboutMeSection() {
  return (
    <Box sx={{ backgroundColor: '#F5F5EC', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#2D45D4', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            About Me Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1A2E', mb: 3 }}>
            여기는 About Me 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 3, backgroundColor: '#DCED1E', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#2D2D2D', lineHeight: 1.8, mb: 5 }}>
            간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="outlined"
            sx={{
              borderColor: '#1A1A2E',
              color: '#1A1A2E',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              '&:hover': { backgroundColor: '#1A1A2E', color: '#DCED1E', borderColor: '#1A1A2E' },
            }}
          >
            더 알아보기
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutMeSection
