import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



export const EditContact = () => {
    const [email, setEmail] = useState("");
    const { store, dispatch } = useContext(Context);
    const {position} = useParams();

    useEffect(() => {
        const contact = store.contactList[position];
        console.log(contact);
    }, [position]);

    const navigate = useNavigate();

    const editContact = () => {
        dispatch({ type: 'EDIT_CONTACT', position: parseInt(position), value: { email } });
        navigate("/");
    }

    return (<>
    <h1>Edit Contact</h1>
    {position}
    <Link to="/">
    <button>Back to Home</button>
    </Link>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <button onClick={editContact}>Edit Contact</button>
    </>)
}