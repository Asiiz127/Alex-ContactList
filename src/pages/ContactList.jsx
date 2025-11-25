import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../hooks/ReduceComponent";
import { Outlet } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import "../styles/ContactForm.css";

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
            <div className="main-container">
            <h1>Contact List</h1>
            <Link to="/createContact">
            <button className="add-contact-btn">Add new contact</button>
            </Link>
            <ul className="contact-list">
                {store.ContactList.map(contact => (
                    <ContactCard
                    key={contact.id}
                    contact={contact}
                    onEdit={() => editContact(contact.id)}
                    onDelete={() => removeContact(contact.id)}
                    />
                ))}
            </ul>
            <Outlet />
            </div>
            </>);
};
export default ContactList;
