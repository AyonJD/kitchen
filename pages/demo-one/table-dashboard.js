// Dine-in Area

import DashboardLayout from 'src/layouts/dashboard'
import demoOneSidebarConfig from '../../src/layouts/config/demoOneSidebarConfig'
import Page from 'src/components/Page'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  alpha,
  useTheme,
} from '@mui/material'
import CustomCard from 'src/components/card/CustomCard'
import TableWithChairs from 'src/components/_external-pages/table-with-chair'
import { useState } from 'react'
import Popup from 'src/components/popup/Popup'
import ClearIcon from '@mui/icons-material/Clear'
import AccountsAnalytics from 'src/components/_external-pages/AccountAnalytics'

const tableData = [
  {
    id: 'DDMMYY000',
    name: 'Table: 1',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY004',
    name: 'Table: 5',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY001',
    name: 'Table: 2',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY002',
    name: 'Table: 3',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY005',
    name: 'Table: 6',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY003',
    name: 'Table: 4',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY006',
    name: 'Table: 7',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
  {
    id: 'DDMMYY007',
    name: 'Table: 8',
    status: 'Empty',
    orderTime: null,
    servingTime: null,
    items: null,
    background: '#a45430',
  },
]

export default function TableDashboard() {
  const [tables, setTables] = useState(tableData)
  const [openPopup, setOpenPopup] = useState(false)
  const [dataIndex, setDataIndex] = useState(null)
  const [formData, setFormData] = useState({
    category: 'Breakfast Items',
    product: 'Sandwich',
    number: '1',
    staff: 'Mamun',
    numCustomers: '1',
  })

  const handleClick = tableIndex => {
    setDataIndex(tableIndex)
    const updatedTables = [...tables]

    if (updatedTables[tableIndex].status === 'Empty') {
      setOpenPopup(true)
      const selectedItems = [...formData.product]
      updatedTables[tableIndex].items = selectedItems

      updatedTables[tableIndex].status = 'Active'
      updatedTables[tableIndex].orderTime = new Date().toLocaleTimeString()
      updatedTables[tableIndex].background = '#F7B011'
    } else if (updatedTables[tableIndex].status === 'Active') {
      updatedTables[tableIndex].status = 'Served'
      updatedTables[tableIndex].servingTime = new Date().toLocaleTimeString()

      updatedTables[tableIndex].background = '#038003'
    }
    setTables(updatedTables)
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleClick(dataIndex)
    setOpenPopup(false)
  }

  const tableStyles = {
    boxHeight: 166,
    boxWidth: 400,
    tableHeight: 133.33,
    tableWidth: 133.33,
    chairHorizontalPosition: 100,
    chairVerticalPosition: -14,
    chairVerticalHeight: 20,
    chairVerticalWidth: 66.67,
    chairHorizontalHeight: 66.67,
    chairHorizontalWidth: 20,
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <>
      <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
        <Page title="Kitchen | Table Dashboard">
          <Container>
            <AccountsAnalytics tableData={tableData} />

            <Grid container spacing={3}>
              {tables.map((table, index) => (
                <Grid key={index} item xs={12} md={6}>
                  <CustomCard
                    sx={{
                      marginBottom: 0,
                      display: 'flex',
                      justifyContent: 'space-between',
                      height: '425px',
                    }}
                  >
                    <Grid container spacing={2} sx={{ width: '100%' }}>
                      <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h5"
                          sx={{
                            textAlign: 'center',
                            marginBottom: 4,
                            marginLeft: 2,
                            border: '1px solid gray',
                            padding: 1,
                            borderRadius: 1,
                          }}
                        >
                          {table.status} {table.name}
                        </Typography>
                        <TableWithChairs
                          func={handleClick}
                          tableIndex={index}
                          status={table.status}
                          tableStyles={tableStyles}
                          tableBackground={table.background}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          marginLeft: 2,
                          marginTop: 2,
                          textAlign: 'center',
                        }}
                      >
                        <p>Id: {table.id}</p>
                        {table?.orderTime && (
                          <p>Order Time: {table.orderTime}</p>
                        )}
                        {table?.servingTime && (
                          <p>Serving Time: {table.servingTime}</p>
                        )}
                        {dataIndex === index && formData.product && (
                          <p>
                            Items:{' '}
                            {/* {table.items.map((item, index) => (
                              <span key={index}>
                                {item}
                                {index !== table.items.length - 1 && ', '}
                              </span>
                            ))} */}
                            {formData.product}
                          </p>
                        )}
                      </Grid>
                    </Grid>
                  </CustomCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Page>
      </DashboardLayout>
      {openPopup && (
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <Paper sx={{ p: 4 }} className="menu_item_index">
            <ClearIcon
              onClick={() => setOpenPopup(false)}
              color="#000"
              className="cross_icon margin_bottom_16px"
            />
            <Typography variant="h5" mb={4}>
              Form
            </Typography>
            <Box sx={{ maxWidth: '100%' }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                      <InputLabel>Food Category</InputLabel>
                      <Select
                        name="category"
                        label="Food Category"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <MenuItem value="Breakfast Items">
                          Breakfast Items
                        </MenuItem>
                        <MenuItem value="Lunch Packages">
                          Lunch Packages
                        </MenuItem>
                        <MenuItem value="Dinner Packages">
                          Dinner Packages
                        </MenuItem>
                        <MenuItem value="Snacks">Snacks</MenuItem>
                        <MenuItem value="Drinks">Drinks</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                      <InputLabel>Food Item</InputLabel>
                      <Select
                        name="product"
                        label="Food Item"
                        value={formData.product}
                        onChange={handleChange}
                      >
                        <MenuItem value="Sandwich">Sandwich</MenuItem>
                        <MenuItem value="Cheese Cake">Cheese Cake</MenuItem>
                        <MenuItem value="Chocolate Muffin">
                          Chocolate Muffin
                        </MenuItem>
                        <MenuItem value="Pasta">Pasta</MenuItem>
                        <MenuItem value="Corn Soup">Corn Soup</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                      <InputLabel>Number</InputLabel>
                      <Select
                        name="number"
                        label="Number"
                        value={formData.number}
                        onChange={handleChange}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                      <InputLabel>Assigned Staff</InputLabel>
                      <Select
                        name="staff"
                        value={formData.staff}
                        onChange={handleChange}
                        label="Assigned Staff"
                      >
                        <MenuItem value="Mamun">Mamun</MenuItem>
                        <MenuItem value="Rashed">Rashed</MenuItem>
                        <MenuItem value="Shahin">Shahin</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                      <InputLabel>Number of Customers</InputLabel>
                      <Select
                        name="numCustomers"
                        label="Number of Customers"
                        value={formData.numCustomers}
                        onChange={handleChange}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  className="button_bg"
                  sx={{ marginTop: 4 }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Paper>
        </Popup>
      )}
    </>
  )
}
