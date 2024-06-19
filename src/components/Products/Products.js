import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
import Img1 from "../../assets/Img1.jpg";

// Products data
const products = [
    {
        name: 'Financial Data Analysis',
        description: 'Comprehensive analysis of financial data to help you make informed decisions.',
        image: `${Img1}`,
        price: 'Starting at $100/month',
    },
    {
        name: 'Market Insights',
        description: 'In-depth market insights to give you a competitive edge.',
        image: `${Img1}`,
        price: 'Starting at $200/month',
    },
    {
        name: 'Custom Reports',
        description: 'Tailored reports to meet your specific business needs.',
        image: `${Img1}`,
        price: 'Contact us for pricing',
    },
];

// Single product card
const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    {product.price}
                </Button>
                <Button size="small" color="secondary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

// products section
const Products = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Our Products
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;
