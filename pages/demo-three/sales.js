import { Container, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import Page from 'src/components/Page'
import SelectionForm from 'src/components/_external-pages/selection-form'
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoThreeSidebarConfig from 'src/layouts/config/demoThreeSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

export default function Sales() {
  const { themeStretch } = useSettings()
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'

  const [formData, setFormData] = useState({
    category: '',
    product: '',
    number: '',
    staff: '',
    numCustomers: '',
    note: '',
  })

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
      <Page title="Kitchen | Sales">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <MotionInView variants={varFadeInDown}>
            <Typography
              variant="h6"
              component="h6"
              paragraph
              sx={{ textAlign: 'center' }}
            >
              Order Id: 123456
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <CustomCard>
              <SelectionForm
                dynamicField="Assigned Staff"
                header="Select Order"
                setFormData={setFormData}
                formData={formData}
                handleSubmit={handleSubmit}
              />
            </CustomCard>
          </MotionInView>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
