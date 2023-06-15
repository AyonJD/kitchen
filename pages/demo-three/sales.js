import { Container, Typography, useTheme } from "@mui/material";
import Page from "src/components/Page";
import SelectionForm from "src/components/_external-pages/selection-form";
import CustomCard from "src/components/card/CustomCard";
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
                    <Typography variant="h6" component="h6" paragraph sx={{textAlign: 'center'}}>
                        Order Id: 123456
                    </Typography>
                    <CustomCard >
                        <SelectionForm dynamicField="Staff" header="Select Order"/>
                    </CustomCard>
                </Container>
            </Page>
        </DashboardLayout>
    )
}