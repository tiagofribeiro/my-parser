import { createTheme } from "@mui/material";

const THEME = createTheme({
    palette: {
        background: {
            default: '#fff9e8',
            paper: '#f7f6f2',
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
