import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography, Button } from '@mui/material';
// import { Button } from '@mui/material/Button';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-120px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:5}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:5}} style={{ color: 'white', fontSize: '14px', fontWeight: 300 }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deserunt assumenda esse neque? Architecto assumenda quasi possimus accusantium voluptas mollitia.
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>LEARN MORE</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;