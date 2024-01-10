import { motion } from 'framer-motion'
// material
import { styled } from '@mui/material/styles'
import { Box, Stack, Container, Typography } from '@mui/material'
//
import { varFadeInUp, varWrapEnter, varZoomIn } from '../../animate'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}))

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'center',
    },
  })
)

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <div className="carousel">
          <div className={`heroOverlay carousel slide_one`}></div>
        </div>

        <Container>
          <ContentStyle
            style={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Logo */}
            <motion.img
              style={{ width: 200, height: 200, cursor: 'pointer' }}
              variants={varZoomIn}
              src="/static/brand/logo.png"
              alt="hero"
            />

            {/* Main heading */}
            <motion.div variants={varFadeInUp} style={{ marginTop: 0 }}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Kitchen Wizard
              </Typography>
            </motion.div>

            {/* Sub heaing */}
            <motion.div variants={varFadeInUp} style={{ marginTop: '-10px' }}>
              <Typography variant="h4" sx={{ color: 'common.white' }}>
                Digitally manage Food Industry Activities
              </Typography>
            </motion.div>

            {/* Slogan */}
            <motion.div variants={varFadeInUp} style={{ marginTop: 10 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'common.white',
                  width: {
                    xs: '100%',
                    sm: '70%',
                  },
                  textAlign: 'center',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontFamily: 'Saira Condensed, sans-serif',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  wordSpacing: '0.1rem',
                }}
              >
                Online solutions to streamline activities in kitchen management,
                dine area management, material purchase & stock management,
                order & booking management etc.
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  )
}
