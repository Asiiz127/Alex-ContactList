import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const [email, setEmail] = useState("");
    const { store, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const saveContact = () => {
        const newContact = { email };
        dispatch({ type: 'CREATE_CONTACT', value: { newContact } });
        navigate("/");
    }

    return  (<>
        <h1>Create Contact</h1>
        <Link to="/">
        <button>Back to Home</button>
        </Link>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={saveContact}>Save Contact</button>
    </>)
}