import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ py: 4, backgroundColor: '#333', color: '#fff' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Gain.pro
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Gain.pro is a leading platform dedicated to providing insightful financial data and analysis. Our mission is to empower businesses with the tools they need to make informed decisions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" color="inherit" underline="hover" display="block">Home</Link>
                        <Link href="#" color="inherit" underline="hover" display="block">About Us</Link>
                        <Link href="#" color="inherit" underline="hover" display="block">Products</Link>
                        <Link href="#" color="inherit" underline="hover" display="block">Contact Us</Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="#" color="inherit" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" color="inherit" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/gain-pro/?originalSubdomain=nl" target="_blank" color="inherit" aria-label="LinkedIn">
                                <LinkedIn />
                            </IconButton>
                            <IconButton href="#" color="inherit" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Gain.pro. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
