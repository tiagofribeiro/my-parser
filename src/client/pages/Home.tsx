import { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Widget from "../components/Widget";
import { LAYOUT, BREAKPOINTS, COLUMNS } from "../global/layout";
import { feedParser } from "../utils/parser";

const ResponsiveGrid = WidthProvider(Responsive);

const HomePage = () => {
    const [text, setText] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleSubmit = () => {
        feedParser(text)
    };

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
            <Box component={"form"} sx={{ display: "flex", width: "100%", columnGap: "12px" }}>
                <TextField
                    fullWidth
                    label={'Comando'}
                    value={text}
                    onChange={handleInputChange}
                />
                <Button variant={"contained"} onClick={handleSubmit}>Enviar</Button>
            </Box>
            <div style={{ width: "100%", marginTop: "24px" }}>
                <ResponsiveGrid
                    className="layout"
                    rowHeight={100}
                    layouts={LAYOUT}
                    cols={COLUMNS}
                    breakpoints={BREAKPOINTS}
                    containerPadding={[0,0]}
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
                    <div key={"d"}>
                        <Widget />
                    </div>
                </ResponsiveGrid>
            </div>
        </Container>
    );
}

export default HomePage;