import { Box, Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Page from 'src/components/Page'
import MainNavbar from 'src/layouts/main/MainNavbar'
import {
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  ButtonAnimate,
  varFadeInLeft,
} from '../../src/components/animate'
import Slider from 'react-slick'
import CustomCard from 'src/components/card/CustomCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DashboardLayout from 'src/layouts/dashboard'
import demoFourSidebarConfig from 'src/layouts/config/demoFourSidebarConfig'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
  background: '#FEFCFC',
}))

export default function ProductPortfolio() {
  const router = useRouter()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  const cardData = [
    {
      title: 'Creamy Garlic Parmesan Pasta',
      image: '/static/mock-images/demo-one-1.png',
    },
    {
      title: 'Refreshing Cucumber Mint Salad',
      image: '/static/mock-images/demo-one-2.png',
    },
    {
      title: 'Kung Pao Chicken',
      image: '/static/mock-images/demo-one-3.png',
    },
    {
      title: 'Sweet and Sour Pork',
      image: '/static/mock-images/demo-one-4.png',
    },
    {
      title: 'Peking Roast Duck',
      image: '/static/mock-images/demo-one-5.png',
    },
  ]

  const handleGoBack = () => {
    router.push('/demo-four/landing-slider')

    setTimeout(() => {
      location.reload()
    }, 1000)
  }

  const handleRedirect = () => {
    router.push('/demo-four/gallery')

    setTimeout(() => {
      location.reload()
    }, 1000)
  }

  return (
    <>
      <DashboardLayout sideBarConfig={demoFourSidebarConfig}>
        <Page title="Kitchen | Product Portfolio">
          <RootStyle>
            <Container>
              <Box
                sx={{
                  mb: 5,
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h3">Snacks</Typography>
                <Typography variant="h6">
                  View our current snacks items
                </Typography>
              </Box>
              <MotionInView variants={varFadeInUp}>
                <Slider {...settings}>
                  {cardData.map((item, index) => (
                    <CustomCard
                      key={index}
                      cardIndex={index}
                      sx={{ margin: 2 }}
                    >
                      <Box>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">
                          {item.title}
                        </Typography>
                        <img src={item.image} alt="" />
                      </Box>
                    </CustomCard>
                  ))}
                </Slider>
              </MotionInView>
              {/* <Box sx={{ mt: 5 }}>
              <MotionInView variants={varFadeInLeft}>
                <ButtonAnimate mediumClick={true}>
                  <NextLink href="/demo-four/gallery">
                    <Button
                      // onClick={handleRedirect}
                      variant="contained"
                      color="primary"
                      sx={{ mr: 2 }}
                    >
                      See Gallery
                    </Button>
                  </NextLink>
                </ButtonAnimate>

                <ButtonAnimate mediumClick={true}>
                  <NextLink href="/demo-four/landing-slider">
                    <Button
                      // onClick={handleGoBack}
                      variant="contained"
                      color="primary"
                      sx={{ mr: 2 }}
                    >
                      Go Back
                    </Button>
                  </NextLink>
                </ButtonAnimate>
              </MotionInView>
            </Box> */}
            </Container>
          </RootStyle>
        </Page>
      </DashboardLayout>
    </>
  )
}
