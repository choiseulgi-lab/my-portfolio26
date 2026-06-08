import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

const placeholderProjects = [
  { id: 1, title: 'Project 01', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
  { id: 2, title: 'Project 02', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
  { id: 3, title: 'Project 03', desc: '썸네일 및 설명이 들어갈 예정입니다.' },
]

function ProjectsSection() {
  return (
    <Box sx={{ backgroundColor: '#FAF3E8', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Projects Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#1A1614', mb: 3 }}>
            여기는 Projects 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 2, backgroundColor: '#D4C4A8', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#6B4C3B' }}>
            대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {placeholderProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                sx={{
                  backgroundColor: '#F5EDD6',
                  border: '1px solid #D4C4A8',
                  borderRadius: 2,
                  boxShadow: 'none',
                  '&:hover': { borderColor: '#C8432B', boxShadow: '0 2px 12px rgba(200,67,43,0.12)' },
                  transition: 'all 0.2s',
                }}
              >
                <Box sx={{ height: 140, backgroundColor: '#E8DBBF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#9B8B7E' }}>썸네일 영역</Typography>
                </Box>
                <CardContent>
                  <Typography variant="h5" sx={{ color: '#1A1614', mb: 1 }}>{project.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#6B4C3B' }}>{project.desc}</Typography>
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
              backgroundColor: '#C8432B',
              color: '#FAF3E8',
              px: 5,
              py: 1.5,
              borderRadius: 0,
              '&:hover': { backgroundColor: '#A83522' },
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
