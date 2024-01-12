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
// ----------------------------------------------------------------------

export default function OrderSelection() {
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
    <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
      <Page title="Kitchen | Order Selection">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {allProducts.length > 0 && (
            <MotionInView variants={varFadeInDown}>
              <CustomCard sx={{ mb: 3 }}>
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
                    paddingBottom: 2,
                  }}
                >
                  <Table sx={{ background: '#FDF6F2' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                        >
                          Order Item
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Item Category
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Customers
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Item Unit
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Item Price
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="right"
                        >
                          Total
                        </TableCell>
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: {
                xs: 'column', // Set flexDirection to column on small devices
                sm: 'column', // Set flexDirection to column on small devices
                md: 'row', // Reset flexDirection to row on medium and larger devices
              },
            }}
          >
            <MotionInView variants={varFadeInLeft}>
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginBottom: '-30px' }}
              >
                Table 01
              </Typography>

              <TableWithChairs
                tableStyles={tableStyles}
                tableBackground="#a45430"
              />

              <Typography
                variant="small"
                gutterBottom
                sx={{
                  textAlign: 'center',
                  marginTop: '-30px',
                  display: 'block',
                  color: 'primary.main',
                  fontWeight: 'bold',
                }}
              >
                Order Id: 123456
              </Typography>
              <Typography
                variant="small"
                sx={{
                  textAlign: 'center',
                  display: 'block',
                  marginBottom: 1,
                  color: 'primary.main',
                  fontWeight: 'bold',
                }}
              >
                Order Time:{' '}
                {new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>
            </MotionInView>

            <MotionInView
              variants={varFadeInRight}
              sx={{
                width: {
                  xs: '100%', // Set width to 100% on small devices
                  sm: '60%', // Set width to 100% on small devices
                  md: '40%', // Reset width to 40% on medium and larger devices
                },
                marginTop: {
                  sm: 5, // Set marginTop to 2 on small devices
                  md: 0, // Reset marginTop on medium and larger devices
                },
              }}
            >
              <CustomCard>
                <SelectionForm
                  dynamicField="Assigned Staff"
                  setFormData={setFormData}
                  formData={formData}
                  handleSubmit={handleSubmit}
                />
              </CustomCard>
            </MotionInView>
          </Box>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
