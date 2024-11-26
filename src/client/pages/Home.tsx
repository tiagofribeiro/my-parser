import { Container, TextField } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Widget from "../components/Widget";

const ResponsiveGrid = WidthProvider(Responsive);

const layout = {
    lg: [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 1, y: 0, w: 1, h: 1 },
        { i: "c", x: 2, y: 0, w: 1, h: 1 },
    ],
    md: [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 1, y: 0, w: 1, h: 1 },
        { i: "c", x: 2, y: 0, w: 1, h: 1 },
    ],
    sm: [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 0, y: 1, w: 1, h: 1 },
        { i: "c", x: 0, y: 2, w: 1, h: 1 },
    ],
};

const HomePage = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: '24px',
                alignItems: "center",
                bgcolor: "background.paper"
            }}
        >
            <h1>Digite um comando:</h1>
            <TextField
                fullWidth
                label={'Comando'}
            />
            <div style={{ width: "100%", marginTop: "24px" }}>
                <ResponsiveGrid
                    className="layout"
                    layouts={layout}
                    rowHeight={100}
                >
                    <div key={"a"}>
                        <Widget />
                    </div>
                    <div key={"b"}>
                        <Widget />
                    </div>
                    <div key={"c"}>
                        <Widget />
                    </div>
                </ResponsiveGrid>
            </div>
        </Container>
    );
}

export default HomePage;