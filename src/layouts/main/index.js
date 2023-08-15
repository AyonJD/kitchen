import PropTypes from 'prop-types'
// material
import { Box, Link, Container, Typography } from '@mui/material'
// components
import Logo from '../../components/Logo'

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default function MainLayout({ children }) {
  return (
    <>
      {/* <MainNavbar /> */}
      <div>{children}</div>

      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
          <Typography variant="caption" component="p">
            © All rights reserved
            <br /> made by &nbsp;
            <Link href="#">Syntax Systems</Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}
