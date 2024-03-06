import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {frontTheme} from "./frontTheme.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CssBaseline enableColorScheme/>
        <ThemeProvider theme={frontTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
