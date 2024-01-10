import { Box, Paper, Typography } from '@mui/material'
import { useTheme, alpha } from '@mui/material/styles'

export default function TableWithChairs({
  status,
  tableStyles,
  tableBackground,
  tableIndex,
  func,
}) {
  const {
    boxHeight,
    boxWidth,
    tableHeight,
    tableWidth,
    chairHorizontalPosition,
    chairVerticalPosition,
    chairPosition,
    chairVerticalHeight,
    chairVerticalWidth,
    chairHorizontalHeight,
    chairHorizontalWidth,
  } = tableStyles

  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'

  return (
    <Box
      onClick={func ? () => func(tableIndex) : undefined}
      sx={{
        position: 'relative',
        height: boxHeight,
        width: boxWidth,
        margin: 'auto',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: tableWidth,
          height: tableHeight,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: theme =>
            `${alpha(
              isLight ? theme.palette.grey[500] : theme.palette.common.black,
              0.12
            )}`,
          borderStyle: 'solid',
          borderWidth: 1.5,
          borderRadius: '50%',
        }}
      >
        <Paper
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: tableBackground,
          }}
          elevation={3}
        >
          <Typography color="#fff" variant="h4">
            {status ? status : 'Table 01'}
          </Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: chairVerticalPosition,
            left: '50%',
            transform: 'translateX(-50%)',
            width: chairVerticalWidth,
            height: chairVerticalHeight,
          }}
        >
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              background: '#3F0808',
            }}
            elevation={3}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: chairVerticalPosition,
            left: '50%',
            transform: 'translateX(-50%)',
            width: chairVerticalWidth,
            height: chairVerticalHeight,
          }}
        >
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              background: '#3F0808',
            }}
            elevation={3}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: chairHorizontalPosition,
            transform: 'translateY(-50%)',
            width: chairHorizontalWidth,
            height: chairHorizontalHeight,
          }}
        >
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              background: '#3F0808',
            }}
            elevation={3}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: chairHorizontalPosition,
            transform: 'translateY(-50%)',
            width: chairHorizontalWidth,
            height: chairHorizontalHeight,
          }}
        >
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              background: '#3F0808',
            }}
            elevation={3}
          />
        </Box>
      </Box>
    </Box>
  )
}
