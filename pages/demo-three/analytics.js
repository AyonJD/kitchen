import { Container, Typography, useTheme } from "@mui/material";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function Analytics() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
            <Page title="Kitchen | Analytics">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Typography variant="h3" component="h1" paragraph>
                        Analytics
                    </Typography>
                </Container>
            </Page>
        </DashboardLayout>
    )
}