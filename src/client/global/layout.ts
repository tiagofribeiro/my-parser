import ReactGridLayout from "react-grid-layout";

const LAYOUT: ReactGridLayout.Layouts = {
    lg: [
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 0, w: 2, h: 1 },
        { i: "c", x: 4, y: 0, w: 2, h: 1 },
        { i: "d", x: 6, y: 0, w: 2, h: 1 },
    ],
    md: [
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 1, w: 2, h: 1 },
        { i: "c", x: 0, y: 0, w: 2, h: 1 },
        { i: "d", x: 2, y: 1, w: 2, h: 1 },
    ],
    sm: [
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 0, y: 1, w: 2, h: 1 },
        { i: "c", x: 0, y: 2, w: 2, h: 1 },
        { i: "d", x: 0, y: 3, w: 2, h: 1 },
    ],
};

const BREAKPOINTS: { [P: string]: number } = {
    lg: 1000,
    md: 796,
    sm: 568,
};

const COLUMNS: { [P: string]: number } = {
    lg: 8,
    md: 4,
    sm: 2,
};

export { LAYOUT, BREAKPOINTS, COLUMNS };
