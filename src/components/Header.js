import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }} className="heading">
            <AppBar position="static">
                <Toolbar>
                    <ListAltIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sing Up Form
                    </Typography>
                    <ListAltIcon />
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Header;