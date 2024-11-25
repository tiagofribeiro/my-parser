import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RouteType } from "../global/types";

type RouterType = {
    routes: RouteType[];
}

const Router = ({ routes }: RouterType) => {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    {routes.map((route, index) =>
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Router;