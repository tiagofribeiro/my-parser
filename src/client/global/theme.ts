import { createTheme } from "@mui/material";

const THEME = createTheme({
    palette: {
        background: {
            default: '#e3f0ff',
            paper: '#f0f7ff',
        },
        text: {
            primary: '#0b2747',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            main: '#57a5ff',
            dark: '#207de8',
        },
    },
});

export default THEME
