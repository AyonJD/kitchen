import React from 'react';
import MainNavbar from 'src/layouts/main/MainNavbar';
import { Box, Container, Typography } from '@mui/material';
import { alpha, useTheme, styled } from '@mui/material/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { varFadeInUp, MotionInView } from '../../src/components/animate';
import CustomCard from 'src/components/card/CustomCard';

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),
    },
}));

export default function DemoOne() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const cardData = [
        {
            title: 'Demo One',
            image: '/static/mock-images/demo-one-1.png',
        },
        {
            title: 'Demo Two',
            image: '/static/mock-images/demo-one-2.png',
        },
        {
            title: 'Demo Three',
            image: '/static/mock-images/demo-one-3.png',
        },
        {
            title: 'Demo Four',
            image: '/static/mock-images/demo-one-4.png',
        },
        {
            title: 'Demo Five',
            image: '/static/mock-images/demo-one-5.png',
        }
    ]

    return (
        <>
            <MainNavbar />
            <RootStyle>
                <Container>
                    <MotionInView variants={varFadeInUp}>
                        <Slider {...settings}>
                            {
                                cardData.map((item, index) => (
                                    <CustomCard cardIndex={index} sx={{ marginRight: 2, marginLeft: 2 }}>
                                        <Box>
                                            <Typography sx={{ textAlign: 'center' }} variant="h4">{item.title}</Typography>
                                            <img src={item.image} alt="" />
                                        </Box>
                                    </CustomCard>
                                ))
                            }

                            {/* <Box>
                                <h3>2</h3>
                                <img src='/static/mock-images/demo-one-1.jpg' alt="" />
                            </Box>
                            <Box>
                                <h3>3</h3>
                                <img src='/static/mock-images/demo-one-1.jpg' alt="" />
                            </Box>
                            <Box>
                                <h3>4</h3>
                                <img src='/static/mock-images/demo-one-1.jpg' alt="" />
                            </Box>
                            <Box>
                                <h3>5</h3>
                                <img src='/static/mock-images/demo-one-1.jpg' alt="" />
                            </Box>
                            <Box>
                                <h3>6</h3>
                                <img src='/static/mock-images/demo-one-1.jpg' alt="" />
                            </Box> */}
                        </Slider>
                    </MotionInView>
                </Container>
            </RootStyle>
            {/* Add more components or content as needed */}


        </>
    );
}
