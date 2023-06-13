import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
import { motion } from 'framer-motion';
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

// ----------------------------------------------------------------------

const SOLUTIONTITLE = ['Demo One', 'Demo Two', 'Demo Three', 'Demo Four'];
const SOLUTIONICON = ['/static/brand/logo.png', '/static/brand/logo.png', '/static/brand/logo.png', '/static/brand/logo.png',];

const SOLUtION_ITEMS = [...Array(4)].map((_, index) => ({
    title: SOLUTIONTITLE[index],
    icon: SOLUTIONICON[index],
}));

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
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
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
        [theme.breakpoints.up('md')]: {
            margin: 'unset',
            textAlign: 'center',
        },
    })
);

// ----------------------------------------------------------------------

function SolutionsCard({ solution, cardIndex }) {
    const theme = useTheme();
    const { title, icon } = solution;

    const isLight = theme.palette.mode === 'light';

    return (
        <Card
            sx={{
                cursor: 'pointer',
                p: 5,
                boxShadow: (theme) =>
                    `0px 48px 80px ${alpha(
                        isLight ? theme.palette.grey[500] : theme.palette.common.black,
                        0.12
                    )}`,
                ...(cardIndex === 1 && {
                    boxShadow: (theme) =>
                        `0px 48px 80px ${alpha(
                            isLight ? theme.palette.grey[500] : theme.palette.common.black,
                            0.48
                        )}`,
                }),
            }}
        >
            <Stack spacing={5}>
                <div>
                    <Typography
                        variant='overline'
                        sx={{ mb: 2, color: 'text.disabled', display: 'block' }}
                    >
                        LICENSE
                    </Typography>
                    <Typography variant='h4'>{title}</Typography>
                </div>
            </Stack>
        </Card>
    );
}

export default function LandingOfferedSolutions() {
    return (
        <RootStyle>
            <Container>
                <Box style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <LeftLogoStyle
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        {/* Logo */}
                        <MotionInView variants={varZoomIn}>
                            <img
                                style={{ width: 200, height: 200, cursor: 'pointer' }}
                                src='/static/brand/logo.png'
                                alt='hero'
                            />
                        </MotionInView>

                        {/* Main heading */}
                        <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                            <Typography variant='h1' sx={{ color: 'common.white' }}>
                                Kitchen
                            </Typography>
                        </MotionInView>

                        {/* Sub heaing */}
                        <MotionInView variants={varFadeInUp} style={{ marginTop: 0 }}>
                            <Typography variant='h4' sx={{ color: 'common.white' }}>
                                Cafe & Restaurant
                            </Typography>
                        </MotionInView>

                    </LeftLogoStyle>
                </Box>

            </Container>

            <Container>
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
                        <Grid key={index} item xs={12} md={6}>
                            <MotionInView
                                variants={index === 0 || index === 1 ? varFadeInDown : varFadeInUp}
                            >
                                <SolutionsCard solution={item} cardIndex={index} />
                            </MotionInView>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </RootStyle>
    );
}
