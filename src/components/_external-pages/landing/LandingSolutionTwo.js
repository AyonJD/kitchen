import NextLink from 'next/link'
// material
import { styled } from '@mui/material/styles'
import { Box, Grid, Stack, Container, Typography, Card } from '@mui/material'
//
import {
  varZoomIn,
  varFadeInUp,
  MotionInView,
  varFadeInDown,
} from '../../animate'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import TapasIcon from '@mui/icons-material/Tapas'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import InsightsIcon from '@mui/icons-material/Insights'

// ----------------------------------------------------------------------

const SOLUTIONTITLE = [
  'Dine-in Management',
  'Kitchen Management',
  'Digital Menu',
  'Purchase Management',
  'Stock Management',
  'Sales Management',
  'Resturent Analytics',
]
const SOLUTION_URL = [
  '/demo-one/order-selection',
  '/demo-two/order-input',
  '/demo-three/sales',
  '/demo-four/landing-slider',
  '/demo-five/digital-menu',
  '/demo-five/digital-menu',
  '/demo-five/digital-menu',
]
const SOLUTION_ICON = [
  RestaurantIcon,
  RestaurantMenuIcon,
  RamenDiningIcon,
  ShoppingBasketIcon,
  ShowChartIcon,
  PointOfSaleIcon,
  InsightsIcon,
]

const SOLUtION_ITEMS = [...Array(7)].map((_, index) => ({
  title: SOLUTIONTITLE[index],
  icon: SOLUTION_ICON[index],
  url: SOLUTION_URL[index],
}))

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

const LeftLogoStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'center',
    },
  })
)

export default function LandingSolutionTwo() {
  return (
    <RootStyle>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '80%',
              md: '50%',
            },
          }}
        >
          <Box>
            <LeftLogoStyle
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Logo */}
              <MotionInView variants={varZoomIn}>
                <img
                  style={{ width: 130, height: 130, cursor: 'pointer' }}
                  src="/static/brand/logo.png"
                  alt="hero"
                />
              </MotionInView>

              {/* Main heading */}
              <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.main',
                    fontFamily: 'Saira Condensed, sans-serif',
                  }}
                >
                  Kitchen Wizard
                </Typography>
              </MotionInView>

              {/* Sub heaing */}
              <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Saira Condensed, sans-serif' }}
                >
                  Digitally manage Food Industry Activities
                </Typography>
              </MotionInView>
            </LeftLogoStyle>
          </Box>
        </Box>

        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '60%',
            },
          }}
        >
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Online solutions to manage your kitchen & dine-in
              </Typography>
            </MotionInView>
          </Box>

          <Grid container spacing={2} justifyContent={'center'}>
            {/* The first 3 items of the array */}
            {SOLUtION_ITEMS.slice(0, 3).map((item, index) => (
              <Grid
                item
                //   xs={12}
                xs={index === 4 ? 12 : 6}
                md={index === 0 || index === 1 ? 6 : 6}
              >
                <NextLink href={item.url} key={index}>
                  <MotionInView
                    variants={
                      index === 0 || index === 1 ? varFadeInDown : varFadeInUp
                    }
                  >
                    <Card
                      sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.45)', py: 3 }}
                      cardIndex={index}
                    >
                      <Stack spacing={5}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <item.icon
                            style={{ fontSize: 30, mb: 2, color: 'gray' }}
                          />
                          <Typography variant="h4" sx={{ textAlign: 'center' }}>
                            {item.title}
                          </Typography>
                        </div>
                      </Stack>
                    </Card>
                  </MotionInView>
                </NextLink>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ width: '100%', mt: 0 }}>
          <Box sx={{ mb: 5, mt: 20, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Monitor purchase, inventory & sales with analytics
              </Typography>
            </MotionInView>
          </Box>

          <Grid container spacing={2} justifyContent={'center'}>
            {/* The last 4 items of the array */}
            {SOLUtION_ITEMS.slice(3, 7).map((item, index) => (
              <Grid
                item
                //   xs={12}
                xs={index === 4 ? 12 : 6}
                md={index === 0 || index === 1 ? 3 : 3}
              >
                <NextLink href={item.url} key={index}>
                  <MotionInView
                    variants={
                      index === 0 || index === 1 ? varFadeInDown : varFadeInUp
                    }
                  >
                    <Card
                      sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.45)', py: 3 }}
                      cardIndex={index}
                    >
                      <Stack spacing={5}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <item.icon
                            style={{ fontSize: 30, mb: 2, color: 'gray' }}
                          />
                          <Typography variant="h4" sx={{ textAlign: 'center' }}>
                            {item.title}
                          </Typography>
                        </div>
                      </Stack>
                    </Card>
                  </MotionInView>
                </NextLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </RootStyle>
  )
}
