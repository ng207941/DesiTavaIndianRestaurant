import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useRef} from "react";
import {FullSizeMenu} from "./FullSizeMenu/FullSizeMenu";
import {PopUpController} from "./FullSizeMenu/Login/PopUpController/PopUpController";
import logo from '../Images/Tava-Indian-Bistro-curries-naan.jpg'

export function ButtonAppBar() {
    const ref = useRef();

    const loginRef = useRef();

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <FullSizeMenu ref={ref}></FullSizeMenu>
                    <PopUpController ref={loginRef}></PopUpController>
                    <Button color="inherit" onClick={() => ref.current.handleClickOpen()}>Menu</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DesiTava
                    </Typography>
                    <Button color="inherit" onClick={() => loginRef.current.handleClickOpen()}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    <img src={logo} alt="logg" width="100%" height="100%"></img>
        </div>
    );
}
