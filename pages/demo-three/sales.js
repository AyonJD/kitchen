import { Container, useTheme } from "@mui/material";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function Sales() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
            <Page title="Kitchen | Sales">
                <Container maxWidth={themeStretch ? false : 'xl'}>

                </Container>
            </Page>
        </DashboardLayout>
    )
}