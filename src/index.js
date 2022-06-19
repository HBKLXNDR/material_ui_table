import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
        }
    }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);


