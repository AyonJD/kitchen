import {
  Box,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import Page from 'src/components/Page'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoThreeSidebarConfig from 'src/layouts/config/demoThreeSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'
import ChartLine from 'src/components/chart/ChartLine'
import ChartPie from 'src/components/chart/ChartPie'
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
} from 'src/components/animate'
import AccountsCard from 'src/components/_external-pages/AccountsCard'
import ChartBar from 'src/components/chart/ChartBar'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

//

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
//

export default function Analytics() {
  const { themeStretch } = useSettings()

  const PRODUCT = [
    'Sandwich',
    'Cheese Cake',
    'Chocolate Muffin',
    'Pasta',
    'Corn Soup',
  ]
  const UNIT = ['1 Unit', '2 Unit', '3 Unit', '4 Unit', '5 Unit']
  const tableData = Array.from(Array(5).keys()).map((_, index) => {
    return {
      product: PRODUCT[index],
      unit: UNIT[index],
    }
  })

  return (
    <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
      <Page title="Kitchen | Analytics">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <AccountsCard />

          <Box
            sx={{
              mt: 3,
              mb: 3,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 5,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <MotionInView variants={varFadeInLeft}>
              <CustomCard
                sx={{ width: 380, marginLeft: 'auto', marginRight: 'auto' }}
              >
                <CardHeader
                  title="Todays Sales"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      textAlign: 'center',
                      marginTop: '-25px',
                    },
                  }}
                />
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="customized table">
                    <TableHead>
                      <StyledTableRow>
                        <StyledTableCell>Item</StyledTableCell>
                        <StyledTableCell align="right">Volume</StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.map((item, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {item.product}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.unit}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CustomCard>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <CustomCard
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: { xs: 'auto', md: '439px' },
                }}
              >
                <CardHeader
                  title="Sold Product Analysis"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      marginTop: '-25px',
                    },
                  }}
                />
                <ChartBar />
                <Typography
                  variant="body2"
                  sx={{ mt: 2, display: 'inline-block', textAlign: 'justify' }}
                >
                  Lorem ipsum sit amet, consectetur adipisicing elit.
                  Perferendis culpa, modi nostrum vitae, ipsum, alias sapiente
                  eligendi dolorem fuga enim beatae similique consequuntur! nim
                  beatae similique consequuntur modi nostrum!
                </Typography>
              </CustomCard>
            </MotionInView>
          </Box>

          <CustomCard>
            <CardHeader
              title="Peek Hour Analysis"
              titleTypographyProps={{
                sx: {
                  mb: 2.5,
                  lineHeight: '2rem !important',
                  letterSpacing: '0.15px !important',
                  textAlign: 'center',
                  marginTop: '-25px',
                },
              }}
            />
            <MotionInView variants={varFadeInUp}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '90%',
                    md: '60%',
                  },
                  margin: 'auto',
                }}
              >
                <ChartLine />
                <Typography
                  variant="body2"
                  sx={{ mt: 2, display: 'inline-block', textAlign: 'justify' }}
                >
                  Lorem ipsum sit amet, consectetur adipisicing elit.
                  Perferendis culpa, modi nostrum vitae, ipsum, alias sapiente
                  eligendi dolorem fuga beatae similique consequuntur! nim
                  beatae similique beatae consequuntur modi nostrum! Consectetur
                  nostrum
                </Typography>
              </Box>
            </MotionInView>
          </CustomCard>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
