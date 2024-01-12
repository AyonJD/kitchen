import DashboardLayout from 'src/layouts/dashboard'
import demoOneSidebarConfig from '../../src/layouts/config/demoOneSidebarConfig'
import useSettings from 'src/hooks/useSettings'
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  alpha,
  useTheme,
} from '@mui/material'
import CustomCard from 'src/components/card/CustomCard'
import Page from 'src/components/Page'
import { useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell'

import dynamic from 'next/dynamic'
import {
  ButtonAnimate,
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
} from 'src/components/animate'
import demoFourSidebarConfig from 'src/layouts/config/demoFourSidebarConfig'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import toast from 'react-hot-toast'

const DynamicRating = dynamic(() => import('@mui/material/Rating'), {
  ssr: false,
})

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

export default function Feedback() {
  const { themeStretch } = useSettings()
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'

  const tableData = {
    id: 'DDMMYY000',
    name: 'Table 1',
    status: 'Served',
    orderTime: '12:00 PM',
    items: ['Hamburger (1 unit)', 'Noodle (1 unit)'],
    images: [
      '/static/mock-images/demo-one-5.png',
      '/static/mock-images/demo-one-3.png',
    ],
    background: isLight ? '#038003' : '#00FF00',
  }

  const [allFeedback, setAllFeedback] = useState([])
  const [formData, setFormData] = useState({
    rating: null,
    comment: '',
    food: [...tableData.items],
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleRatingChange = (event, newValue) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      rating: newValue,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    toast.success('Thank you for your review!')
    // if (
    //   !formData.category ||
    //   !formData.product ||
    //   !formData.number ||
    //   !formData.staff ||
    //   !formData.numCustomers
    // ) {
    //   return toast.error('Please fill in all fields')
    // }

    setAllFeedback(prevProducts => [...prevProducts, formData])
    // setFormData({
    //   category: '',
    //   product: '',
    //   number: '',
    //   staff: '',
    //   numCustomers: '',
    //   price: 0,
    // })
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
    <DashboardLayout sideBarConfig={demoFourSidebarConfig}>
      <Page title="Kitchen | Feedback">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          {allFeedback.length > 0 && (
            <MotionInView variants={varFadeInDown}>
              <CustomCard sx={{ mb: 3 }}>
                <Typography variant="h3" component="h1" paragraph>
                  Review List
                </Typography>

                <TableContainer>
                  <Table sx={{ background: '#FDF6F2' }}>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                        >
                          Order Item
                        </TableCell>

                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Review
                        </TableCell>
                        <TableCell
                          sx={{ background: '#D3CDCC', color: '#000000' }}
                          // className="text_white"
                          align="center"
                        >
                          Rating
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {allFeedback.map((row, index) => (
                        <>
                          {row.food?.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{item}</TableCell>
                              {index === 0 && (
                                <>
                                  <TableCell
                                    rowSpan={row.food.length + 1}
                                    align="center"
                                  >
                                    {row.comment}
                                  </TableCell>

                                  <TableCell rowSpan={2} align="center">
                                    {row.rating} stars
                                  </TableCell>
                                </>
                              )}
                            </TableRow>
                          ))}
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CustomCard>
            </MotionInView>
          )}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              gap: 2,
              flexDirection: {
                xs: 'column', // Set flexDirection to column on small devices
                sm: 'column', // Set flexDirection to column on small devices
                md: 'row', // Reset flexDirection to row on medium and larger devices
              },
            }}
          >
            {/* <MotionInView variants={varFadeInRight}>
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', marginBottom: '-30px' }}
              >
                Table One
              </Typography>

              <TableWithChairs
                status={tableData.status}
                tableStyles={tableStyles}
                tableBackground={tableData.background}
              />

              <Typography
                variant="small"
                gutterBottom
                sx={{
                  textAlign: 'center',
                  marginTop: '-30px',
                  display: 'block',
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
                }}
              >
                Order Time:{' '}
                {new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>

              <Typography
                variant="small"
                sx={{ textAlign: 'center', display: 'block' }}
              >
                Items:{' '}
                {tableData.items.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index !== tableData.items.length - 1 && ', '}
                  </span>
                ))}
              </Typography>
            </MotionInView> */}

            <MotionInView variants={varFadeInLeft}>
              <CustomCard
                sx={{
                  marginTop: {
                    sm: 5, // Set marginTop to 2 on small devices
                    md: 0, // Reset marginTop on medium and larger devices
                  },
                }}
              >
                <Typography
                  sx={{ textAlign: 'center', mb: 3 }}
                  variant="h5"
                  gutterBottom
                >
                  Please Rate our Foods & Service
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    marginBottom: 3,
                  }}
                >
                  <div>
                    <DynamicRating
                      name="feedback-rating"
                      value={formData.rating}
                      onChange={handleRatingChange}
                      size="large"
                    />
                  </div>
                  <Typography variant="h6">{formData.rating || 0}</Typography>
                </Box>

                <Grid container spacing={2}>
                  {tableData.items.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                        <InputLabel>{item}</InputLabel>
                        <Select
                          name={item}
                          label={item}
                          value={formData[item] || ''}
                          onChange={handleChange}
                        >
                          <MenuItem value="Not Satisfied">
                            {' '}
                            Not Satisfied
                          </MenuItem>
                          <MenuItem value="Not Bad"> Not Bad</MenuItem>
                          <MenuItem value="Managable"> Managable</MenuItem>
                          <MenuItem value="Fully Satisfied">
                            {' '}
                            Fully Satisfied
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  ))}
                </Grid>

                <TextField
                  label="Comment"
                  multiline
                  rows={4}
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />

                <ButtonAnimate mediumClick={true}>
                  <Button
                    variant="contained"
                    className="button_bg"
                    onClick={handleSubmit}
                    sx={{ marginTop: 1 }}
                  >
                    Submit Feedback
                  </Button>
                </ButtonAnimate>
              </CustomCard>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Table</StyledTableCell>
                      <StyledTableCell align="center">Customer</StyledTableCell>
                      <StyledTableCell className="no_wrap" align="center">
                        Customer ID
                      </StyledTableCell>
                      <StyledTableCell align="center">Food</StyledTableCell>
                      <StyledTableCell className="no_wrap" align="right">
                        Food Image
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell
                        className="no_wrap"
                        component="th"
                        scope="row"
                      >
                        Table 01
                      </StyledTableCell>
                      <StyledTableCell align="center">Rashed</StyledTableCell>
                      <StyledTableCell align="center">00101</StyledTableCell>
                      <StyledTableCell className="no_wrap" align="center">
                        {tableData.items.map((item, index) => (
                          <Typography variant="body" key={index}>
                            {item}
                            <br />
                          </Typography>
                        ))}
                      </StyledTableCell>
                      <StyledTableCell className="no_wrap" align="center">
                        {tableData.images.map((item, index) => (
                          <Image
                            src={item}
                            alt="food"
                            width={70}
                            height={50}
                            key={index}
                          />
                        ))}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </MotionInView>
          </Box>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
