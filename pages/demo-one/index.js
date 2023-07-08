import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import MainNavbar from 'src/layouts/main/MainNavbar'
import { Box, Button, Container, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
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

export default function DemoOne() {
  const [slidesToShow, setSlidesToShow] = useState(3)


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
      <Page title="Kitchen | Demo One">
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
                                <NextLink href='/demo-one/order-selection' passHref>
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
                Demo One Heading
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
                  height: '100%',
                  marginBottom: {
                    xs: 2,
                    sm: 2,
                    md: 0,
                  },
                }}
              >
                <MotionInView variants={varFadeInLeft}>
                  <Typography
                    variant="body"
                    style={{ display: 'inline-block', textAlign: 'justify' }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt expedita facere, alias distinctio quasi obcaecati,
                    qui nisi ullam aut accusamus sed corporis officiis
                    recusandae ipsam aspernatur fugit. Quasi a commodi,
                    blanditiis ipsam totam quae explicabo quos eligendi sit est
                    quisquam, et at harum ipsa. Consequatur cupiditate
                    excepturi, ut placeat inventore iure, repellat porro enim
                    quam sunt veritatis itaque ipsa. Tempora est quo, inventore
                    culpa ex sequi tempore, ab aspernatur ad natus deserunt.
                    Veniam cum sint deleniti. Laboriosam, at officiis. Dolorem
                    nihil tenetur officia perferendis rem saepe ipsa animi,
                    itaque assumenda eaque blanditiis laudantium unde temporibus
                    natus ea labore neque, eos similique minima! Nostrum, eum
                    quos.
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
                <MotionInView variants={varFadeInRight}>
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
                  <NextLink href="/demo-one/order-selection" passHref>
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
