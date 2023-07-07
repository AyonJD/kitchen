import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
// material
import { useTheme, styled, alpha } from '@mui/material/styles';
import {
    Box,
    Grid,
    Card,
    Link,
    Stack,
    Button,
    Divider,
    Container,
    Typography,
} from '@mui/material';
//
import {
    varZoomIn,
    varFadeIn,
    varFadeInUp,
    MotionInView,
    varFadeInDown,
} from '../../animate';
import CustomCard from 'src/components/card/CustomCard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import TapasIcon from '@mui/icons-material/Tapas';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// ----------------------------------------------------------------------

const SOLUTIONTITLE = ['Demo One', 'Demo Two', 'Demo Three', 'Demo Four', 'Demo Five'];
const SOLUTION_URL = ['/demo-one', '/demo-two', '/demo-three', '/demo-four', '/demo-five'];
const SOLUTION_ICON = [RestaurantIcon, RestaurantMenuIcon, RamenDiningIcon, TapasIcon, MenuBookIcon];

const SOLUtION_ITEMS = [...Array(5)].map((_, index) => ({
    title: SOLUTIONTITLE[index],
    icon: SOLUTION_ICON[index],
    url: SOLUTION_URL[index],

}));

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

const LeftLogoStyle = styled((props) => <Stack spacing={5} {...props} />)(
    ({ theme }) => ({
        zIndex: 10,
        maxWidth: '100%',
        margin: 'auto',
        textAlign: 'center',
        position: 'relative',
        paddingBottom: theme.spacing(15),
        [theme.breakpoints.up('md')]: {
            margin: 'unset',
            textAlign: 'center',
        },
    })
);

export default function LandingOfferedSolutions() {

    return (
        <RootStyle>
            <Container sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', width: '100%',
            }}>
                <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '80%',
                        md: '50%'
                    }
                }}>
                    <Box >
                        <LeftLogoStyle
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            {/* Logo */}
                            <MotionInView variants={varZoomIn}>
                                <img
                                    style={{ width: 130, height: 130, cursor: 'pointer' }}
                                    src='/static/brand/logo.png'
                                    alt='hero'
                                />
                            </MotionInView>

                            {/* Main heading */}
                            <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                                <Typography variant='h3' sx={{color: 'primary.main',  fontFamily: 'Saira Condensed, sans-serif'}} >
                                    Kitchen
                                </Typography>
                            </MotionInView>

                            {/* Sub heaing */}
                            <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                                <Typography variant='h6' sx={{ fontFamily: 'Saira Condensed, sans-serif'}}>
                                    Cafe & Restaurant
                                </Typography>
                            </MotionInView>

                        </LeftLogoStyle>
                    </Box>

                </Box>

                <Box sx={{
                    width: {
                        xs: '100%',
                        sm: '80%',
                    }
                }} >
                    <Box sx={{ mb: 5, textAlign: 'center' }}>
                        <MotionInView variants={varFadeInDown}>
                            <Typography variant='h2' sx={{ mb: 3 }}>
                                Offered Solutions
                            </Typography>
                        </MotionInView>
                        <MotionInView variants={varFadeInDown}>
                            <Typography
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? 'text.secondary'
                                            : 'text.primary',
                                }}
                            >
                                Choose the perfect demo for your needs.
                            </Typography>
                        </MotionInView>
                    </Box>

                    <Grid container spacing={5}>
                        {SOLUtION_ITEMS.map((item, index) => (
                            <NextLink href={item.url} passHref key={index}>
                                <Grid item xs={12} md={(index === 0 || index === 1) ? 6 : 4}>
                                    <MotionInView
                                        variants={index === 0 || index === 1 ? varFadeInDown : varFadeInUp}
                                    >
                                        <CustomCard cardIndex={index}>
                                            <Stack spacing={5}>
                                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                    <item.icon style={{ fontSize: 50, mb: 2 }} />
                                                    <Typography variant='h4'>{item.title}</Typography>
                                                </div>
                                            </Stack>
                                        </CustomCard>
                                    </MotionInView>
                                </Grid>
                            </NextLink>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </RootStyle >
    );
}
