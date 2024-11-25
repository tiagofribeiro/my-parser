import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import Router from "../components/Router";
import { RouteType } from "../global/types";

type AppTemplateType = {
    routes: RouteType[];
}

const AppTemplate = ({ routes }: AppTemplateType) => {
    return (
        <Container>
            <Router routes={routes} />
        </Container>
    );
}

export default AppTemplate;