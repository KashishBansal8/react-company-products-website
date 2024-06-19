import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import HeroBanner from "../../assets/HeroBanner.jpg";

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                background: `url(${HeroBanner}) center/cover no-repeat`,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container>
                <Typography variant="h2" component="h1" color="white" gutterBottom>
                    Welcome to Our Website
                </Typography>
                <Typography variant="h5" component="p" color="white" paragraph>
                    We provide the best solutions for your business.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;
