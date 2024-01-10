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
import { TextField } from '@mui/material'
import { useState } from 'react'

const salesData = [
  {
    stats: '$10k',
    title: 'Total Sales',
    color: 'success',
    icon: <AttachMoneyIcon sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '8.5k',
    title: 'Total Revinew Count',
    color: 'primary',
    icon: <TrendingUpIcon sx={{ fontSize: '1.75rem' }} />,
  },
  {
    stats: '20.2k',
    color: 'info',
    title: 'Customer Per Day',
    icon: <GroupsIcon sx={{ fontSize: '1.75rem' }} />,
  },
]

const renderStats = () => {
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

const AccountsCard = () => {
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
      <Card>
        <CardHeader
          title="Shop Analytics"
          subheader={
            <>
              <TextField
                id="outlined-basic"
                onChange={e => setSelectedDate(e.target.value)}
                value={formatDate(selectedDate) || formatDate(new Date())}
                label="Search Analytics"
                variant="outlined"
                size="small"
                type="date"
              />
              <Typography
                variant="body2"
                sx={{ marginBottom: 2, marginTop: 2 }}
              >
                <Box
                  component="span"
                  sx={{ fontWeight: 600, color: 'text.primary' }}
                >
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Box>{' '}
                summary
              </Typography>
            </>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.5,
              lineHeight: '2rem !important',
              letterSpacing: '0.15px !important',
            },
          }}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderStats()}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default AccountsCard
