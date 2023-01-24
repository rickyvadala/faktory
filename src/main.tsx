import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import {FkyMainLayout} from "./layouts/fky-main-layout/FkyMainLayout";
import {FkyHome} from "./pages/home/FkyHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FkyMainLayout/>,
        children: [
            {
                index: true,
                element: <FkyHome/>,
            },
            // {
            //     path: 'play',
            //     element: <Play/>,
            // }
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
