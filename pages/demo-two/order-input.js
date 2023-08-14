import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  alpha,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import Page from 'src/components/Page'
import SelectionForm from 'src/components/_external-pages/selection-form'
import {
  MotionInView,
  varFadeInDown,
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

  const [allProducts, setAllProducts] = useState([])
  const [formData, setFormData] = useState({
    category: '',
    product: '',
    number: '',
    tableNumber: null,
    numCustomers: '',
    note: '',
    price: 0,
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
    if (
      !formData.category ||
      !formData.product ||
      !formData.number ||
      !formData.tableNumber ||
      !formData.numCustomers
    ) {
      return toast.error('Please fill in all fields')
    }
    // Random price between 10 and 100
    formData.price = Math.floor(Math.random() * 100) + 10
    setAllProducts(prevProducts => [...prevProducts, formData])
    setFormData({
      category: '',
      product: '',
      number: '',
      staff: '',
      numCustomers: '',
      price: 0,
      note: '',
    })
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

          {allProducts.length > 0 && (
            <MotionInView variants={varFadeInDown}>
              <CustomCard sx={{ mb: 3, mt:2 }}>
                <Typography variant="h3" component="h1" paragraph>
                  Order List
                </Typography>

                <TableContainer
                  sx={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderLeft: 0,
                    borderRight: 0,
                    borderTop: 0,
                  }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order Item</TableCell>
                        <TableCell align="center">Item Category</TableCell>
                        <TableCell align="center">Customers</TableCell>
                        <TableCell align="center">Item Unit</TableCell>
                        <TableCell align="center">Item Price</TableCell>
                        <TableCell align="center">Table</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {allProducts.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.product}</TableCell>
                          <TableCell align="center">{row.category}</TableCell>
                          <TableCell align="center">
                            {row.numCustomers}
                          </TableCell>
                          <TableCell align="center">{row.number}</TableCell>
                          <TableCell align="center">{row.price}</TableCell>
                          <TableCell align="center">
                            {row.tableNumber}
                          </TableCell>
                          <TableCell align="right">
                            {row.number * row.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Typography
                  sx={{ textAlign: 'right', marginRight: 2, marginTop: 2 }}
                  variant="h6"
                  component="h6"
                  paragraph
                >
                  {`Subtotal: ${allProducts.reduce(
                    (acc, cur) => acc + cur.number * cur.price,
                    0
                  )}`}
                </Typography>
              </CustomCard>
            </MotionInView>
          )}

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
        </Container>
      </Page>
    </DashboardLayout>
  )
}
