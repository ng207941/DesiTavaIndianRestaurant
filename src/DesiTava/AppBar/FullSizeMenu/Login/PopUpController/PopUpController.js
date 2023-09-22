import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {forwardRef, useImperativeHandle} from "react";
import {LoginPage} from "../LoginPage/LoginPage";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    loginRef: React.Ref<>,
) {
    return <Slide direction="up" ref={loginRef} {...props} />;
});

export const PopUpController =  forwardRef((props, loginRef) =>{
    const [open, setOpen] = React.useState(false);

    useImperativeHandle(loginRef, () => ({
        handleClickOpen() {
            setOpen(true);
        }
    }));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            DesiTava
                        </Typography>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <LoginPage></LoginPage>
            </Dialog>
        </div>
    );
});
