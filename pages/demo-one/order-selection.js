import { Box, Container, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// hooks
import useSettings from 'src/hooks/useSettings';
// components
import Page from 'src/components/Page';
// Config
import demoOneSidebarConfig from './demoOneSidebarConfig';
import TableWithChairs from 'src/components/_external-pages/table-with-chair';
// ----------------------------------------------------------------------

export default function OrderSelection() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const tableBackground = (theme) =>
        `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title='Page One'>
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='h4' sx={{ flexGrow: 1 }}>
                            Page One
                        </Typography>
                        <TableWithChairs tableBackground={tableBackground} />
                    </Box>
                </Container>
            </Page>
        </DashboardLayout>
    );
}
