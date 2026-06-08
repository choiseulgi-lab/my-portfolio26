import { Box, Container, Typography } from '@mui/material'

function SkillTreeSection() {
  return (
    <Box sx={{ backgroundColor: '#F5EDD6', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Skill Tree Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1614', mb: 3 }}>
            여기는 Skill Tree 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 2, backgroundColor: '#D4C4A8', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#6B4C3B', lineHeight: 1.8 }}>
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
          <Box
            sx={{
              mt: 6,
              p: 4,
              border: '1px dashed #D4C4A8',
              borderRadius: 2,
              color: '#9B8B7E',
            }}
          >
            <Typography variant="body2">Skill Tree / Progress Bar 영역</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default SkillTreeSection
