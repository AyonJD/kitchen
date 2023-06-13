import { Box, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

export default function TableWithChairs({ tableBackground }) {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <Box sx={{ position: 'relative', height: 400, width: 400, margin: 'auto' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 200,
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: (theme) =>
                        `${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.12)}`,
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
                    <Typography variant="h5">Table</Typography>
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
                <Paper sx={{ width: 100, height: 100 }} elevation={3} />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 60,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 30,
                    }}
                >
                    <Paper sx={{
                        width: '100%', height: '100%',
                        background: (theme) =>
                            `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[600], 0.19)}`,
                    }} elevation={3} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 60,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 30,
                    }}
                >
                    <Paper sx={{
                        width: '100%', height: '100%',
                        background: (theme) =>
                            `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[600], 0.19)}`,
                    }} elevation={3} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 60,
                        transform: 'translateY(-50%)',
                        width: 30,
                        height: 100,
                    }}
                >
                    <Paper sx={{
                        width: '100%', height: '100%',
                        background: (theme) =>
                            `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[600], 0.19)}`,
                    }} elevation={3} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 60,
                        transform: 'translateY(-50%)',
                        width: 30,
                        height: 100,
                    }}
                >
                    <Paper sx={{
                        width: '100%', height: '100%',
                        background: (theme) =>
                            `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[600], 0.19)}`,
                    }} elevation={3} />
                </Box>
            </Box>
        </Box>
    );
};
