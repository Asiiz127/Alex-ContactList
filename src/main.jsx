import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ReduceComponent } from './hooks/ReduceComponent';
import './styles/main.css';


function Main () {
    return (
        <React.StrictMode> 
            <ReduceComponent>
                <RouterProvider router={router} />
            </ReduceComponent>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
