// Food Order

import {
  Box,
  Container,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
// layouts
import DashboardLayout from 'src/layouts/dashboard'
// hooks
import useSettings from 'src/hooks/useSettings'
// components
import Page from 'src/components/Page'
// Config

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import demoSixSidebarConfig from 'src/layouts/config/demoSixSidebarConfig'
// ----------------------------------------------------------------------

export default function TodaysPurchase() {
  const { themeStretch } = useSettings()
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'

  const [allProducts, setAllProducts] = useState([])
  const [formData, setFormData] = useState({
    category: '',
    product: '',
    number: '',
    staff: '',
    numCustomers: '',
    price: 0,
  })

  const handleSubmit = event => {
    event.preventDefault()
    if (
      !formData.category ||
      !formData.product ||
      !formData.number ||
      !formData.staff ||
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
    })
  }

  const tableStyles = {
    boxHeight: 400,
    boxWidth: 400,
    tableHeight: 200,
    tableWidth: 200,
    chairHorizontalPosition: 60,
    chairVerticalPosition: 60,
    chairVerticalHeight: 30,
    chairVerticalWidth: 100,
    chairHorizontalHeight: 100,
    chairHorizontalWidth: 30,
  }

  return (
    <DashboardLayout sideBarConfig={demoSixSidebarConfig}>
      <Page title="Kitchen | Todays Purchase">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Box sx={{ pb: 2, display: 'flex', gap: 4, }}>
            <Box sx={{ width: '30%', marginTop: '10px' }}>
              <img
                style={{ width: '100%', marginBottom: '50px' }}
                src="/static/todays-purchase/bdt.png"
                alt=""
              />
              <img
                style={{ width: '100%' }}
                src="/static/todays-purchase/card.png"
                alt=""
              />
            </Box>
            <Box sx={{ width: '75%' }}>
              <img
                style={{ width: '100%' }}
                src="/static/todays-purchase/meat.png"
                alt=""
              />
              <img
                style={{ width: '100%' }}
                src="/static/todays-purchase/veg.png"
                alt=""
              />
            </Box>
          </Box>
          {/* <Box sx={{ pb: 5, display: 'flex', gap: 4, alignItems: 'center' }}>
            <Box sx={{ width: '30%' }}>
              <img
                style={{ width: '100%' }}
                src="/static/todays-purchase/card.png"
                alt=""
              />
            </Box>
            <Box sx={{ width: '75%' }}>
              <img
                style={{ width: '100%' }}
                src="/static/todays-purchase/veg.png"
                alt=""
              />
            </Box>
          </Box> */}
        </Container>
      </Page>
    </DashboardLayout>
  )
}
