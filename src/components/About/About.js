import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import AvatarImg from "../../assets/Avatar.jpg";

const teamMembers = [
    {
        name: 'John Doe',
        title: 'CEO',
        image: `${AvatarImg}`,
        bio: 'John is the visionary behind Gain.pro with over 20 years of experience in the industry.',
    },
    {
        name: 'Jane Smith',
        title: 'CTO',
        image: `${AvatarImg}`,
        bio: 'Jane leads our tech team, ensuring our platform remains cutting-edge and reliable.',
    },
    {
        name: 'Mike Johnson',
        title: 'CFO',
        image: `${AvatarImg}`,
        bio: 'Mike oversees financial operations, driving strategic growth and stability.',
    },
];

const About = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
            <Container>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    About Gain.pro
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Gain.pro is a leading platform dedicated to providing insightful financial data and analysis. Our mission is to empower businesses with the tools they need to make informed decisions.
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Our team of experienced professionals works tirelessly to ensure the highest quality of service and innovation. Meet the leadership team driving Gain.pro forward.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                                <Avatar
                                    src={member.image}
                                    sx={{ width: 120, height: 120, margin: 'auto', mt: 3 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align="center">
                                        {member.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                                        {member.bio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
