import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Page from "src/components/Page";
import MainNavbar from "src/layouts/main/MainNavbar";

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function Gallery() {
    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Gallery">
                <RootStyle>
                    <Container>
                        <Typography variant="h3" sx={{ mb: 5 }}>
                            Gallery
                        </Typography>
                    </Container>
                </RootStyle>
            </Page>
        </>
    )
}