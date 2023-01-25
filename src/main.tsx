import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import {FkyMainLayout} from "./layouts/fky-main-layout/FkyMainLayout";
import {FkyHome} from "./pages/home/FkyHome";
import {FkyEditor} from "./pages/editor/FkyEditor";
import {Provider} from "react-redux";
import {store} from "./store/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FkyMainLayout/>,
        children: [
            {
                index: true,
                element: <FkyHome/>,
            },
            {
                path: 'editor',
                element: <FkyEditor/>,
            },
            {
                path: 'editor/:id',
                element: <FkyEditor/>,
            }
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
