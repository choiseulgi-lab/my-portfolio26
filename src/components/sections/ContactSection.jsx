import { Box, Container, Typography } from '@mui/material'

function ContactSection() {
  return (
    <Box sx={{ backgroundColor: '#1A1614', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#C8432B', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Contact Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#F5EDD6', mb: 3 }}>
            여기는 Contact 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 2, backgroundColor: '#C8432B', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#9B8B7E', lineHeight: 1.8 }}>
            연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>
          <Box
            sx={{
              mt: 6,
              p: 4,
              border: '1px dashed #3A2E2A',
              borderRadius: 2,
              color: '#6B4C3B',
            }}
          >
            <Typography variant="body2">메시지 폼 · 이메일 · SNS 링크 영역</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactSection
