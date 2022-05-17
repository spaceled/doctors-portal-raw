import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// https://web.programming-hero.com/update-1/video/update-1-69-2-introduction-to-material-ui-to-use-default-appbar
// https://web.programming-hero.com/update-1/video/update-1-69-5-finish-service-and-explore-material-ui-common-utility
// https://web.programming-hero.com/update-1/video/update-1-69-8-create-simple-top-banner-using-material-ui
// https://web.programming-hero.com/update-1/post/update-1-text-instruction-important-module-70-final-project-part-2-appointment-
// https://web.programming-hero.com/update-1/video/update-1-70-1-module-introduction-and-appointment-page-setup

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors Portal
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;