import {
  Box,
  Container,
  Grid,
  Typography,
  alpha,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import Page from 'src/components/Page'
import SelectionForm from 'src/components/_external-pages/selection-form'
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
} from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoTwoSidebarConfig from 'src/layouts/config/demoTowSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

export default function OrderInput() {
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

  const imageArray = [
    '/static/mock-images/image_1.jpg',
    '/static/mock-images/image_2.jpg',
    '/static/mock-images/image_3.jpg',
    '/static/mock-images/image_4.jpg',
    '/static/mock-images/image_5.jpg',
  ]

  const getProductImages = product => {
    let images = []

    if (product === 'product1') {
      images = [imageArray[0], imageArray[1]]
    } else if (product === 'product2') {
      images = [imageArray[2], imageArray[3]]
    } else if (product === 'product3') {
      images = [imageArray[4], imageArray[0]]
    }

    return images
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  const sliderBackground = isLight ? '#1CCAFF' : '#1CCAFF'

  // Extract the selected product from formData
  const { product } = formData

  return (
    <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
      <Page title="Kitchen | Order Input">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MotionInView variants={varFadeInLeft}>
              <Typography variant="small">Order Id: 123456</Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography variant="small">Staff Id: AER342</Typography>
            </MotionInView>
          </Box>

          <MotionInView variants={varFadeInUp}>
            <CustomCard sx={{ marginTop: 2 }}>
              <SelectionForm
                header="Select order"
                dynamicField="Table Number"
                setFormData={setFormData}
                formData={formData}
                handleSubmit={handleSubmit}
                renderExtraField={true}
              />
            </CustomCard>
          </MotionInView>

          {product && (
            <CustomCard sx={{ marginTop: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" mb={2} align="center">
                    Product Images
                  </Typography>
                </Grid>
                {getProductImages(product).map((image, index) => (
                  <Grid item xs={12} md={6} key={`product-image-${index + 1}`}>
                    <img
                      src={image}
                      alt={`Product ${product} Image ${index + 1}`}
                      style={{ borderRadius: '8px' }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CustomCard>
          )}
        </Container>
      </Page>
    </DashboardLayout>
  )
}
