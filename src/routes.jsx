import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContactList from "./pages/ContactList";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactList />,
  },
  {
    path: "/createContact",
    element: <CreateContact />,
  },
  {
    path: "/editContact/:id",
    element: <EditContact />,
  }
]);