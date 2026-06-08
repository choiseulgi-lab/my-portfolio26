import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function AboutMeSection() {
  return (
    <Box sx={{ backgroundColor: '#FAF3E8', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            About Me Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1614', mb: 3 }}>
            여기는 About Me 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 2, backgroundColor: '#D4C4A8', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#6B4C3B', lineHeight: 1.8, mb: 5 }}>
            간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="outlined"
            sx={{
              borderColor: '#C8432B',
              color: '#C8432B',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              '&:hover': { backgroundColor: '#C8432B', color: '#FAF3E8', borderColor: '#C8432B' },
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
