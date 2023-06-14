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
import SelectionForm from 'src/components/_external-pages/selection-form';
import CustomCard from 'src/components/card/CustomCard';
// ----------------------------------------------------------------------

export default function OrderSelection() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const tableBackground = (theme) =>
        `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`;

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="Page One">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: {
                                sm: 'column', // Set flexDirection to column on small devices
                                md: 'row', // Reset flexDirection to row on medium and larger devices
                            },
                        }}
                    >
                        <Box>
                            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '-30px' }}>
                                Table One
                            </Typography>
                            <TableWithChairs tableBackground={tableBackground} />
                            <Typography variant="small" gutterBottom sx={{ textAlign: 'center', marginTop: '-30px', display: 'block' }}>
                                Order Id: 123456
                            </Typography>
                            <Typography variant="small" sx={{ textAlign: 'center', display: 'block' }}>
                                Order Time: 12:00 PM
                            </Typography>
                        </Box>

                        <CustomCard>
                            <SelectionForm />
                        </CustomCard>
                    </Box>
                </Container>
            </Page>
        </DashboardLayout>
    );
}
