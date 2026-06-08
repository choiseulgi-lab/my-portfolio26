import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

const placeholderProjects = [
  { id: 1, title: 'Project 01', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
  { id: 2, title: 'Project 02', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
  { id: 3, title: 'Project 03', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
]

function ProjectsSection() {
  return (
    <Box sx={{ backgroundColor: '#F5F5EC', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: '#2D45D4', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Projects Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1A2E', mb: 3 }}>
            여기는 Projects 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 3, backgroundColor: '#DCED1E', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#2D2D2D' }}>
            대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {placeholderProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DEDED4',
                  borderRadius: 2,
                  boxShadow: 'none',
                  '&:hover': { borderColor: '#DCED1E', boxShadow: '0 2px 12px rgba(220,237,30,0.2)' },
                  transition: 'all 0.2s',
                }}
              >
                <Box sx={{ height: 140, backgroundColor: '#F5F5EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#888888' }}>썸네일 영역</Typography>
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#1A1A2E', mb: 1 }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#2D2D2D' }}>{project.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            sx={{
              backgroundColor: '#DCED1E',
              color: '#1A1A2E',
              px: 5,
              py: 1.5,
              borderRadius: 0,
              fontWeight: 700,
              '&:hover': { backgroundColor: '#C8D818' },
            }}
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProjectsSection
