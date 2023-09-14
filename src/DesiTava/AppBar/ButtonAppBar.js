import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuDialog} from "./MenuDialog/MenuDialog";
import {useRef} from "react";
import {FullSizeMenu} from "./FullSizeMenu/FullSizeMenu";


export function ButtonAppBar() {
    const ref = useRef();

    // function handleClickOpen() {
    //     return(
    //         <MenuDialog handle></MenuDialog>
    //     )
    // }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton*/}
                    {/*    size="large"*/}
                    {/*    edge="start"*/}
                    {/*    color="inherit"*/}
                    {/*    aria-label="menu"*/}
                    {/*    sx={{ mr: 2 }}*/}
                    {/*    onClick={fn}*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <FullSizeMenu ref={ref}></FullSizeMenu>
                    <Button color="inherit" onClick={() => ref.current.handleClickOpen()}>Menu</Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DesiTava
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
