import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../hooks/ReduceComponent";
import "../styles/ContactForm.css";

const CreateContact = () => {
  const [form, setForm] = useState({
    name: "",
    photoUrl: "",
    address: "",
    phone: "",
    email: ""
  });
  const [photoPreview, setPhotoPreview] = useState("");
  const { store, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm(prev => ({ ...prev, photoUrl: ev.target.result }));
      setPhotoPreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  }
};

  const saveContact = () => {
    dispatch({ type: "CREATE_CONTACT", value: form });
    navigate("/");
  };

  return (
    <div className="contact-form-container">
      <h1>Create Contact</h1>
      <form onSubmit={e => { e.preventDefault(); saveContact(); }}>
        <div className="contact-form-group">
        {photoPreview && (<img src={photoPreview} alt="Preview" style={{ width: 100, borderRadius: "50%", marginBottom: 10 }}/>)}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        </div>
        <div className="contact-form-group">
        <input
          type="file"
          name="photo"
          placeholder="Profile Picture URL"
          accept="image/*"
          value={form.photoUrl}
          onChange={handlePhotoChange}
        />
        </div>
        <div className="contact-form-group">
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        </div>
        <div className="contact-form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />
        </div>
        <div className="contact-form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="contact-form-actions">
        <button className="contact-form-btn" type="submit">Save Contact</button>
        <Link to="/">
          <button className="contact-form-btn cancel" type="button">Back to Home</button>
        </Link>
        </div>
      </form>
    </div>
  );
};
export default CreateContact;
