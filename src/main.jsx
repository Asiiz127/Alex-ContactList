import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import ReduceComponent from './hooks/ReduceComponent';  // Import the ReduceComponent for local state management

const Main = () => {
    return (
        <React.StrictMode> 
            <ReduceComponent>
                <RouterProvider router={router}>
                </RouterProvider>
            </ReduceComponent>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
