import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
    };

    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Contact Us
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4 }}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    required
                                />
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    Send Message
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                            <Typography variant="h6" gutterBottom>
                                Our Address
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                1234 Street Name
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                City, State, 12345
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Email: info@example.com
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Phone: (123) 456-7890
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
