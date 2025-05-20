import * as React from "react";
import {StrictMode, Suspense} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./index.scss";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import App from "./pages/app/App.tsx";
import Loading from "./components/loading/Loading.tsx";

const LazyAccount = React.lazy(() => import("./pages/account/Account.tsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/account",
        element: <Suspense fallback={<Loading />}>
            <LazyAccount />
        </Suspense>
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </StrictMode>
);

export default router;