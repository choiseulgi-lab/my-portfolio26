import { Box, Container, Typography } from '@mui/material'

function ProjectsPage() {
  return (
    <Box sx={{ backgroundColor: '#F5F5EC', minHeight: '100vh', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#2D45D4', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Projects
          </Typography>
          <Typography variant="h1" sx={{ color: '#1A1A2E', mb: 3 }}>
            Projects 페이지
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
              Projects 페이지가 개발될 공간입니다.
              <br />
              포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectsPage
