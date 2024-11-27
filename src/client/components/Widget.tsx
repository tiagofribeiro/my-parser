import { Box } from "@mui/material";

type WidgetType = {
    
}

const Widget = () => {
    return (
        <Box
            sx={{
                bgcolor: 'success.dark',
                height: '100%'
            }}
        >
            <span>Teste</span>
        </Box>

    );
}

export default Widget;