import { createTheme } from "@mui/material";

const THEME = createTheme({
    palette: {
        background: {
            default: '#e3f0ff',
            paper: '#f0f7ff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            main: '#fff',
            dark: '#009688',
        },
    },
});

export default THEME
