import HomePage from "../pages/Home";
import { RouteType } from "./types";

const ROUTES: RouteType[] = [
    {
        name: 'Home',
        path: '/',
        element: <HomePage />
    }
]

export default ROUTES;