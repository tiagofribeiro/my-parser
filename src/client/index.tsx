import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import THEME from "./global/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ThemeProvider theme={THEME}>
        <CssBaseline enableColorScheme />
        <App />
    </ThemeProvider>
);