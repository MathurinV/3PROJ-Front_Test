import {createTheme} from "@mui/material";

export const frontTheme = createTheme({
    // default colors
    palette: {
        primary: {
            main: '#142d54',
        }, secondary: {
            main: '#ffffff',
        }, error: {
            main: '#9d0101',
        }, warning: {
            main: '#f4ecaf',
        }, background: {
            paper: '#fdfcf5',
        }
    },
    // default typography
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
})