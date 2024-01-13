// Food Order

import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
// layouts
import DashboardLayout from 'src/layouts/dashboard'
// hooks
import useSettings from 'src/hooks/useSettings'
// components
import Page from 'src/components/Page'
// Config
import demoOneSidebarConfig from '../../src/layouts/config/demoOneSidebarConfig'
import TableWithChairs from 'src/components/_external-pages/table-with-chair'
import SelectionForm from 'src/components/_external-pages/selection-form'
import CustomCard from 'src/components/card/CustomCard'
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
} from 'src/components/animate'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import demoSixSidebarConfig from 'src/layouts/config/demoSixSidebarConfig'
import demoEightSidebarConfig from 'src/layouts/config/demoEightSidebarConfig'
// ----------------------------------------------------------------------

export default function SalesStatus() {
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
    <DashboardLayout sideBarConfig={demoEightSidebarConfig}>
      <Page title="Kitchen | Order Selection">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography
            variant="h3"
            sx={{ mb: 1, marginTop: '-35px', textAlign: 'center' }}
          >
            Sales Status
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
          <Box sx={{ pb: 5, display: 'flex', gap: 4, alignItems: 'center' }}>
            <Box sx={{ width: '40%' }}>
              <img
                style={{ width: '100%' }}
                src="/static/sales/table.png"
                alt=""
              />
            </Box>
            <Box sx={{ width: '60%' }}>
              <img
                style={{ width: '100%' }}
                src="/static/sales/chart.png"
                alt=""
              />
            </Box>
          </Box>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
