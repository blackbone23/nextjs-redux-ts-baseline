import { Box, Container, Typography } from '@mui/material'

export default function Muipage() {

  return (
    <div>
      <Container sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box>
          <Typography variant="h3">Nextjs MUI</Typography>
        </Box>
      </Container>
    </div>
  )
}
