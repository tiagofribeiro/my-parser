import { ReactNode } from "react"

type ChildrenType = {
    children: ReactNode;
}

type RouteType = {
    name: string;
    path: string;
    element: JSX.Element;
}

export { ChildrenType, RouteType }