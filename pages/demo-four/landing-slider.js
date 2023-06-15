import { Button, Container, Typography } from "@mui/material";
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import Page from "src/components/Page";
import MainNavbar from "src/layouts/main/MainNavbar";
import { useRouter } from "next/router";

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function LandingSlider() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/demo-four/product-portfolio');

        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    const handleGoBack = () => {
        router.push('/demo-four');

        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    return (
        <>
            <MainNavbar />
            <Page title="Kitchen | Landing Slider">
                <RootStyle>
                    <Container>
                        <Typography variant="h3" sx={{ mb: 5 }}>
                            Landing Slider
                        </Typography>

                        <Button onClick={handleRedirect} variant="contained" color="primary" sx={{ mr: 2 }}>
                            Product Portfolio
                        </Button>

                        <NextLink href="/demo-four/" passHref>
                            <Button
                                // onClick={handleGoBack}
                                variant="contained" color="primary" sx={{ mr: 2 }}>
                                Go Back
                            </Button>
                        </NextLink>
                    </Container>
                </RootStyle>
            </Page>
        </>
    )
}