import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../hooks/ReduceComponent";
import { Outlet } from "react-router-dom";

const ContactList = () => {
    const {store, dispatch} = useContext(StoreContext);
    const navigate = useNavigate();

    const editContact = (id) => {
        navigate(`/editContact/${id}`);
    }
    const removeContact = (id) => {
        dispatch({ type: 'REMOVE_CONTACT', id });
    }
    return (
        <>
            <h1>Contact List</h1>
            <Link to="/createContact">
            <button>Create New Contact</button>
            </Link>
            <ul>
            {store.ContactList.map(contact => (
                <li key={contact.id}>
                {contact.email}
                <button onClick={() => editContact(contact.id)}>✏️</button>
                <button onClick={() => removeContact(contact.id)}>X</button>
                </li>
            ))}
            </ul>
            <Outlet />
        </>)
}
export default ContactList;
