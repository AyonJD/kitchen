// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import GroupsIcon from '@mui/icons-material/Groups'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled'

import { TextField } from '@mui/material'
import { useState } from 'react'

const renderStats = tableData => {
  const salesData = [
    {
      stats: 8,
      title: 'Empty Tables',
      color: 'primary',
      icon: <HourglassDisabledIcon sx={{ fontSize: '1.75rem' }} />,
    },
    {
      stats: 0,
      title: 'Active Tables',
      color: 'success',
      icon: <CircleNotificationsIcon sx={{ fontSize: '1.75rem' }} />,
    },
    {
      stats: 0,
      color: 'info',
      title: 'Served Tables',
      icon: <GroupsIcon sx={{ fontSize: '1.75rem' }} />,
    },
  ]

  // Count the active tables whics status is !== 'Empty' and update the stats count
  salesData[0].stats = tableData.filter(
    table => table.status === 'Empty'
  ).length

  // Count the active tables whics status is === 'Empty' and update the stats count
  salesData[1].stats = tableData.filter(
    table => table.status === 'Active'
  ).length

  // Count the active tables whics status is === 'Served' and update the stats count
  salesData[2].stats = tableData.filter(
    table => table.status === 'Served'
  ).length


  return salesData.map((item, index) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const AccountsAnalytics = ({ tableData }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formatDate = date => {
    if (!date) return ''
    const formattedDate = new Date(date)
    const year = formattedDate.getFullYear()
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0')
    const day = formattedDate.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardHeader
          title="Dine-in Analytics"
          // subheader={
          //   <>
          //     <TextField
          //       id="outlined-basic"
          //       onChange={e => setSelectedDate(e.target.value)}
          //       value={formatDate(selectedDate) || formatDate(new Date())}
          //       label="Search Analytics"
          //       variant="outlined"
          //       size="small"
          //       type="date"
          //     />
          //     <Typography
          //       variant="body2"
          //       sx={{ marginBottom: 2, marginTop: 2 }}
          //     >
          //       <Box
          //         component="span"
          //         sx={{ fontWeight: 600, color: 'text.primary' }}
          //       >
          //         {new Date(selectedDate).toLocaleDateString('en-US', {
          //           year: 'numeric',
          //           month: 'long',
          //           day: 'numeric',
          //         })}
          //       </Box>{' '}
          //       summary
          //     </Typography>
          //   </>
          // }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: '2rem !important',
              letterSpacing: '0.15px !important',
              textAlign: 'center',
            },
          }}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats(tableData)}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default AccountsAnalytics
