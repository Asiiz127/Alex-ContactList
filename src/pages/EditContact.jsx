import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../hooks/ReduceComponent";


const EditContact = () => {
    const [email, setEmail] = useState("");
    const { store, dispatch } = useContext(StoreContext);
    const {id} = useParams();

    const getEmailFromStore = () => {
        const contact = store.ContactList.find(c => c.id === id);
        return contact ? contact.email : "";
    };
    useEffect(() => {
        const contact = store.ContactList.find[c => c.id === parseInt(id)];
        if (contact) setEmail(contact.email);
        },
    [id, store.ContactList]);

    const navigate = useNavigate();

    const editContact = () => {
        dispatch({ type: 'EDIT_CONTACT', id, value: { email } });
        navigate("/");
    };


    return (<>
    <h1>Edit Contact</h1>
    <Link to="/">
    <button>Back to Home</button>
    </Link>
    <input
        type="email"
        placeholder={getEmailFromStore()}
        value={email}
        onChange={e => setEmail(e.target.value)}
    />
    <button onClick={editContact}>Edit Contact</button>
    </>)
}
export default EditContact;