import { Container } from "@mui/material";

import RouterTemplate from "./RouterTemplate";
import { RouteType } from "../global/types";

type AppTemplateType = {
    routes: RouteType[];
}

const AppTemplate = ({ routes }: AppTemplateType) => {
    return (
        <Container>
            <RouterTemplate routes={routes} />
        </Container>
    );
}

export default AppTemplate;