import { JSX, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import ClassComponents from "./pages/ClassComponents";
import UseState from "./pages/hooks/UseState";

export interface PageInterface {
    name: string;
    link: string;
    element: JSX.Element;
}

const pages: PageInterface[] = [
    {
        name: "Home",
        link: "/",
        element: <App />,
    },
    {
        name: "ClassComponents",
        link: "/class-components",
        element: <ClassComponents />,
    },
    {
        name: "UseState",
        link: "/hooks/use-state",
        element: <UseState />,
    },
];

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <NavLinks pages={pages} />
            <Routes>
                {pages.map((page, idx) => (
                    <Route key={idx} path={page.link} element={page.element} />
                ))}
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
