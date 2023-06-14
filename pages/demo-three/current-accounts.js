import { Container, useTheme } from "@mui/material";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function CurrentAccounts() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
            <Page title="Kitchen | Current Accounts">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Typography variant="h3" component="h1" paragraph>
                        Current Accounts
                    </Typography>
                </Container>
            </Page>
        </DashboardLayout>
    )
}