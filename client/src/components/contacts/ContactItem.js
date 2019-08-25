import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div
      className={
        "card " +
        (type === "professional" ? "border-success" : "border-primary") +
        " mb-3"
      }
    >
      <div
        className={
          "card-header " +
          (type === "professional" ? "border-success" : "border-primary") +
          " bg-transparent"
        }
      >
        {name}
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary") +
            " float-right"
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className="card-body">
        <h5 className="text-primary text-left"></h5>
        <ul className="list">
          {email && (
            <li>
              <i className="fas fa-envelope-open" /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone" /> {phone}
            </li>
          )}
        </ul>
        <p className="float-right">
          <button
            className="btn btn-dark btn-sm mr-1"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
