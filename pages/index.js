// layouts
import MainLayout from 'src/layouts/main'
// material
import { styled } from '@mui/material/styles'
// components
import Page from 'src/components/Page'
import { LandingHero } from 'src/components/_external-pages/landing'
import LandingOfferedSolutions from 'src/components/_external-pages/landing/LandingOfferedSolutions'
import { useEffect } from 'react'
import LandingSolutionTwo from 'src/components/_external-pages/landing/LandingSolutionTwo'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// --------------------------------------------------

export default function LandingPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authenticated = window.localStorage.getItem('isAuthenticated')
      if (!authenticated) {
        window.location.href = '/auth/login'
      }
    }
  }, [])

  return (
    <MainLayout>
      <RootStyle title="Kitchen" id="move_top">
        <LandingHero />
        <ContentStyle>
          {/* <LandingOfferedSolutions /> */}
          <LandingSolutionTwo />
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  )
}
