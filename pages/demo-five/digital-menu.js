import React from 'react'
import { styled } from '@mui/material/styles'
import MainNavbar from 'src/layouts/main/MainNavbar'
import Page from 'src/components/Page'
import { Container, Typography } from '@mui/material'
import { MotionInView, varFadeInDown } from 'src/components/animate'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

const DigitalMenu = () => {
  return (
    <>
      <MainNavbar />
      <Page title="Kitchen | Digital Gallery">
        <RootStyle>
          <Container>
            <MotionInView variants={varFadeInDown}>
              <Typography
                variant="h3"
                sx={{ mb: 4, textAlign: 'center', fontFamily: 'cursive' }}
              >
                Under Construction
              </Typography>
            </MotionInView>
          </Container>
        </RootStyle>
      </Page>
    </>
  )
}

export default DigitalMenu
