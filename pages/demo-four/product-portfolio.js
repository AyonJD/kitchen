import { Container, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
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

export default function ProductPortfolio() {
    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Product Portfolio">
                <RootStyle>
                    <Container>
                        <Typography variant="h3" sx={{ mb: 5 }}>
                            Product Portfolio
                        </Typography>

                        <NextLink href="/demo-four/galary">
                            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                See Gallery
                            </Button>
                        </NextLink>
                        <NextLink href="/demo-four/landing-slider">
                            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                                Go Back
                            </Button>
                        </NextLink>
                    </Container>
                </RootStyle>
            </Page>
        </>
    )
}