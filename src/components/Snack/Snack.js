import React from 'react';
import {Alert, Snackbar} from "@mui/material";

function Snack({isOpen, handleClose = Function.prototype}) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >Product is added</Alert>
        </Snackbar>
    )
}

export {Snack};