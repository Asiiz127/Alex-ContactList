import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { ContactList } from "./pages/ContactList";
import { CreateContact } from "./pages/CreateContact";
import { EditContact } from "./pages/EditContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ContactList />} errorElement={<h1>Not found!</h1>}>
      <Route path="createContact" element={<CreateContact />} />
      <Route path="editContact/:id" element={<EditContact />} />
    </Route>
  )
);
