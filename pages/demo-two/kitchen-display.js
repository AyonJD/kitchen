import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import Page from 'src/components/Page'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoTwoSidebarConfig from 'src/layouts/config/demoTowSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

export default function KitchenDisplay() {
  const { themeStretch } = useSettings()
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'

  const tableData = [
    {
      id: 'DDMMYY000',
      name: 'Table 1',
      staff: 'Staff 1',
      orderTime: '12:00 PM',
      items: ['Hamburger (2 units)', 'Donuts (1 unit)'],
      background: isLight ? '#F7B011' : '#FFD800',
      isServed: true,
    },
    {
      id: 'DDMMYY004',
      name: 'Table 5',
      staff: 'Staff 2',
      orderTime: '12:00 PM',
      items: ['Muffin (1 unit)', 'Pizza (1 unit)'],
      background: isLight ? '#038003' : '#00FF00',
      isCooking: true,
    },
    {
      id: 'DDMMYY001',
      name: 'Table 2',
      staff: 'Staff 3',
      orderTime: '12:00 PM',
      items: ['Sausage (1 unit)', 'Fried chicken (1 unit)'],
      background: isLight ? '#F7B011' : '#FFD800',
      isServed: true,
    },
    {
      id: 'DDMMYY002',
      name: 'Table 3',
      staff: 'Staff 4',
      orderTime: '12:00 PM',
      items: ['Sandwich (3 units)', 'Pretzel (1 unit)'],
      background: theme =>
        `${alpha(
          isLight ? theme.palette.common.black : theme.palette.grey[500],
          0.12
        )}`,
      isCooking: true,
    },
    {
      id: 'DDMMYY005',
      name: 'Table 6',
      staff: 'Staff 5',
      orderTime: '12:00 PM',
      items: ['Milkshake (1 unit)', 'Burrito (1 unit)'],
      background: theme =>
        `${alpha(
          isLight ? theme.palette.common.black : theme.palette.grey[500],
          0.12
        )}`,
      isCooking: true,
    },
    {
      id: 'DDMMYY003',
      name: 'Table 4',
      staff: 'Staff 6',
      orderTime: '12:00 PM',
      items: ['Soft drink (2 units)', 'Baguette (1 unit)'],
      background: isLight ? '#F7B011' : '#FFD800',
    },
  ]

  return (
    <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
      <Page title="Kitchen | Kitchen Display">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Current Orders
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, textAlign: 'center' }}
          >
            All ordered items are shown here
          </Typography>
          <Grid container spacing={3}>
            {tableData.map((table, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CustomCard
                  sx={{
                    background: table.isCooking
                      ? 'rgba(255, 208, 155, 0.6)'
                      : table.isServed
                      ? 'rgba(0, 128, 0, 0.2)'
                      : 'rgba(255, 208, 155, 0.1)',
                    marginTop: 2,
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: 23,
                          marginBottom: 0.5,
                          color: table.isCooking
                            ? 'rgb(255, 153, 0)'
                            : table.isServed
                            ? 'rgba(0, 128, 0, 1)'
                            : 'rgba(0, 0, 0, .7)',
                        }}
                      >
                        {table.isCooking
                          ? 'In Cooking'
                          : table.isServed
                          ? 'Order Served to Staff'
                          : 'In Queue'}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: 13, marginBottom: 0.5 }}
                      >
                        {table.name}
                      </Typography>
                      <Typography
                        variant="small"
                        sx={{ fontSize: 13, marginBottom: 0.5 }}
                      >
                        Id: {table.id}
                      </Typography>
                      <Typography
                        variant="small"
                        sx={{ fontSize: 13, marginBottom: 0.5 }}
                      >
                        Staff: {table.staff}
                      </Typography>
                      <Typography variant="small" sx={{ fontSize: 13 }}>
                        Order Time: {table.orderTime}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ borderWidth: 1.5, borderStyle: '', marginTop: 2 }}
                    >
                      <TableContainer component={Paper}>
                        <Table
                          size="small"
                          aria-label="a dense table"
                          sx={{ background: 'rgba(255, 208, 155, 0.1)' }}
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell>Item</TableCell>
                              <TableCell align="right">Volume</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {table.items.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                  {row.split('(')[0]}{' '}
                                </TableCell>
                                <TableCell align="right">
                                  {row.split('(')[1].split(')')[0]}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <FormControl sx={{ mt: 3, minWidth: '100%' }}>
                        <InputLabel>Order Progress</InputLabel>
                        <Select label="Order Progress">
                          <MenuItem value="1">
                            {/* <Button variant="contained" sx={{ width: '100%' }}> */}
                            Mark as Served
                            {/* </Button> */}
                          </MenuItem>
                          <MenuItem value="2">
                            {/* <Button variant="contained" sx={{ width: '100%' }}> */}
                            Mark as Processing
                            {/* </Button> */}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CustomCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
