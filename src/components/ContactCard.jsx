import "../styles/ContactCard.css";

const ContactCard = ({ contact, onEdit, onDelete }) => (
  <div className="contact-card">
    <img src={contact.photoUrl} alt={contact.name} className="contact-photo" />
    <div className="contact-info">
      <h2>{contact.name}</h2>
      <div>
        <span><i className="fa fa-map-marker" /> {contact.address}</span>
      </div>
      <div>
        <span><i className="fa fa-phone" /> {contact.phone}</span>
      </div>
      <div>
        <span><i className="fa fa-envelope" /> {contact.email}</span>
      </div>
    </div>
    <div className="contact-actions">
      <button onClick={onEdit}><i className="fa fa-pencil" /></button>
      <button onClick={onDelete}><i className="fa fa-trash" /></button>
    </div>
  </div>
);
export default ContactCard;