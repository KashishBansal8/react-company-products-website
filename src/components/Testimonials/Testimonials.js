import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import AvatarImg from "../../assets/Avatar.jpg";


// Testimonials data
const testimonials = [
    {
        name: 'Alice Johnson',
        title: 'CEO, Company A',
        image: `${AvatarImg}`,
        quote: 'Gain.pro has transformed the way we handle financial data. Their insights are invaluable!',
    },
    {
        name: 'Bob Smith',
        title: 'CFO, Company B',
        image: `${AvatarImg}`,
        quote: 'The market insights provided by Gain.pro are second to none. Highly recommend!',
    },
    {
        name: 'Carol Davis',
        title: 'CTO, Company C',
        image: `${AvatarImg}`,
        quote: 'The custom reports from Gain.pro have been a game-changer for our strategic planning.',
    },
];


// Single Testimonial card
const TestimonialCard = ({ testimonial }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardContent>
                <Avatar src={testimonial.image} sx={{ width: 80, height: 80, margin: 'auto' }} />
                <Typography gutterBottom variant="h6" component="div" align="center" sx={{ mt: 2 }}>
                    {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {testimonial.title}
                </Typography>
                <Typography variant="body1" color="text.primary" align="center" sx={{ mt: 2 }}>
                    "{testimonial.quote}"
                </Typography>
            </CardContent>
        </Card>
    );
};


// Testimonial section
const Testimonial = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    What Our Clients Say
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <TestimonialCard testimonial={testimonial} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;
