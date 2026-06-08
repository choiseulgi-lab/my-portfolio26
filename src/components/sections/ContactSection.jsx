import { Box, Container, Typography } from '@mui/material'

function ContactSection() {
  return (
    <Box sx={{ backgroundColor: '#1A1A2E', py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{ color: '#DCED1E', letterSpacing: 4, textTransform: 'uppercase', display: 'block', mb: 2 }}
          >
            Contact Section
          </Typography>
          <Typography variant="h2" sx={{ color: '#FFFFFF', mb: 3 }}>
            여기는 Contact 섹션입니다.
          </Typography>
          <Box sx={{ width: 48, height: 3, backgroundColor: '#DCED1E', mx: 'auto', mb: 4 }} />
          <Typography variant="body1" sx={{ color: '#888888', lineHeight: 1.8 }}>
            연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>
          <Box
            sx={{
              mt: 6,
              p: 4,
              border: '1px dashed #2A2A3E',
              borderRadius: 2,
              color: '#888888',
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
