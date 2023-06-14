import { Container, Typography, useTheme } from "@mui/material";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function Recipe() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="Kitchen | Recipe">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Typography variant="h3" component="h1" paragraph>
                        Kitchen | Recipe Page
                    </Typography>
                </Container>
            </Page>
        </DashboardLayout>
    )
}