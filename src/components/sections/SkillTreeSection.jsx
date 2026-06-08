import { Box, Container, Typography } from '@mui/material'

function SkillTreeSection() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#2D45D4', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Skill Tree Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1A2E', mb: 3 }}>
            여기는 Skill Tree 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 3, backgroundColor: '#DCED1E', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#2D2D2D', lineHeight: 1.8 }}>
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
          <Box
            sx={{
              mt: 6,
              p: 4,
              border: '1px dashed #DEDED4',
              borderRadius: 2,
              color: '#888888',
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
