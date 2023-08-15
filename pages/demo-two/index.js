import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import MainNavbar from 'src/layouts/main/MainNavbar'
import { Box, Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  varFadeInUp,
  MotionInView,
  ButtonAnimate,
  varFadeInLeft,
  varFadeInRight,
  varFadeInDown,
} from '../../src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import Page from 'src/components/Page'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

export default function DemoTwo() {
  const [slidesToShow, setSlidesToShow] = useState(3)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 960) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <MainNavbar />
      <Page title="Kitchen | Demo Two">
        <RootStyle>
          <Container>
            <MotionInView variants={varFadeInDown}>
              <Typography
                variant="h3"
                sx={{ textAlign: 'center', paddingTop: 0 }}
              >
                Demo Two Heading
              </Typography>
            </MotionInView>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: {
                  xs: 'auto',
                  sm: 'auto',
                  md: '400px',
                },
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                marginTop: 5,
              }}
            >
              <CustomCard
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '48%',
                  },

                  height: '100%',
                }}
              >
                <MotionInView variants={varFadeInRight}>
                  <img
                    style={{ width: '100%', borderRadius: '8px' }}
                    src="/static/home/restaurant.jpg"
                    alt=""
                  />
                </MotionInView>
              </CustomCard>

              <CustomCard
                sx={{
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: '48%',
                  },
                  height: '100%',
                  marginBottom: {
                    xs: 2,
                    sm: 2,
                    md: 0,
                  },
                  overflowY: 'auto',
                }}
              >
                <MotionInView variants={varFadeInLeft}>
                  <Typography
                    variant="body"
                    style={{ display: 'inline-block', textAlign: 'justify' }}
                  >
                    Welcome to our second concept demo, where we present three
                    powerful features that will revolutionise restaurant
                    operations and elevate the dining experience for staff:
                    Streamlined Order Input, Kitchen Display, and Accessible
                    Recipe Contents.We understand the importance of efficiency
                    and accuracy in restaurant operations. Our Streamlined Order
                    Input feature empowers your staff with a user-friendly and
                    intuitive interface, making order taking a breeze. Equipped
                    with handheld devices or tablets, waitstaff can easily
                    navigate the digital menu, access real-time information, and
                    effortlessly take customer orders at the table.In any
                    successful restaurant, a well-coordinated kitchen is
                    essential. Our Kitchen Display system ensures seamless
                    communication between the front-of-house and the kitchen. As
                    orders are placed, they are instantly transmitted to the
                    kitchen display screens, eliminating the need for manual
                    order transfers and minimising the risk of
                    miscommunication.. Our Accessible Recipe Contents feature
                    provides invaluable insights into the culinary creations
                    crafted by your talented kitchen team. Accessible through
                    staff tablets and the kitchen display, this repository of
                    recipes enables the kitchen staff to refer to ingredient
                    lists, cooking techniques, and plating instructions with
                    ease
                  </Typography>
                </MotionInView>
              </CustomCard>
            </Box>

            <Box sx={{ marginTop: 5, marginBottom: 2, textAlign: 'center' }}>
              <MotionInView variants={varFadeInUp}>
                <ButtonAnimate mediumClick={true}>
                  <NextLink href="/demo-two/order-input">
                    <Button sx={{ width: '200px' }} variant="contained">
                      See Demo
                    </Button>
                  </NextLink>
                </ButtonAnimate>
              </MotionInView>
            </Box>
          </Container>
        </RootStyle>
      </Page>
    </>
  )
}
