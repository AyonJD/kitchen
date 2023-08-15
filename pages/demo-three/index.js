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
  varFadeInLeft,
  ButtonAnimate,
  varFadeInDown,
  varFadeInRight,
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

export default function DemoThree() {
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
      <Page title="Kitchen | Demo Three">
        <RootStyle>
          <Container>
            {/* <MotionInView variants={varFadeInUp}>
                            <Slider {...settings}>
                                {cardData.map((item, index) => (
                                    <CustomCard key={index} cardIndex={index} sx={{ margin: 2 }}>
                                        <Box>
                                            <Typography sx={{ textAlign: 'center' }} variant="h4">
                                                {item.title}
                                            </Typography>
                                            <img src={item.image} alt="" />
                                        </Box>
                                    </CustomCard>
                                ))}
                            </Slider>
                        </MotionInView>

                        <MotionInView variants={varFadeInLeft}>
                            <ButtonAnimate mediumClick={true}>
                                <NextLink href='/demo-three/sales' passHref>
                                    <Button
                                        sx={{ marginTop: 5, marginBottom: 2 }}
                                        variant='contained'>
                                        See Demo
                                    </Button>
                                </NextLink>
                            </ButtonAnimate>
                        </MotionInView> */}

            <MotionInView variants={varFadeInDown}>
              <Typography
                variant="h3"
                sx={{ textAlign: 'center', paddingTop: 0 }}
              >
                Demo Three Heading
              </Typography>
            </MotionInView>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: {
                  xs: '100%',
                  sm: '100%',
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
                  height: 'auto',
                  marginBottom: {
                    xs: 2,
                    sm: 2,
                    md: 0,
                  },
                }}
              >
                <MotionInView variants={varFadeInRight}>
                  <Typography
                    variant="body"
                    style={{ display: 'inline-block', textAlign: 'justify' }}
                  >
                    Welcome to the Restaurant Sales Management System - a
                    comprehensive solution to manage restaurant sales, current
                    accounts, order items, prices, units, and monthly analytics.
                    you'll be greeted with a user-friendly dashboard that
                    provides an overview of your restaurant's key metrics.
                    You'll see graphs and charts displaying total sales, average
                    order value, top-selling items, and a summary of current
                    account balances.
                  </Typography>
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
                }}
              >
                <MotionInView variants={varFadeInLeft}>
                  <img
                    style={{ width: '100%', borderRadius: '8px' }}
                    src="/static/home/restaurant.jpg"
                    alt=""
                  />
                </MotionInView>
              </CustomCard>
            </Box>

            <Box sx={{ marginTop: 5, marginBottom: 2, textAlign: 'center' }}>
              <MotionInView variants={varFadeInUp}>
                <ButtonAnimate mediumClick={true}>
                  <NextLink href="/demo-three/sales">
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
