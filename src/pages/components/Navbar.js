import React from "react";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <TemporaryDrawer />

                    <Typography className="ml-2" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Real Estate Agency
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}