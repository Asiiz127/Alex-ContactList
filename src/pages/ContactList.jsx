import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

export const ContactList = () => {
    const {store, dispatch} = useContext(Context);
    const navigate = useNavigate();

    const removeContact = (position) => {
        dispatch({ type: 'REMOVE_CONTACT', position });
    }

    const editContact = (position) => {
        navigate(`/EditContact/${position}`);
    }

    return (<>
            <h1>Contact List</h1>
            <Link to="/CreateContact">
            <button>Create New Contact</button>
            </Link>
            <ul>
                {store.contactList.map((contact, index) => <li>{contact.email}
                    <button onClick={() => editContact(index)}>✏️</button>
                    <button onClick={() => removeContact(index)}>X</button>
                </li>)}
            </ul>
        </>)
}
