import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className="card border-dark">
      <div className="card-header">{current ? "Edit" : "Add"} Contact</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <div className="btn-group d-flex">
              <input
                type="button"
                className={`btn btn-outline-secondary ${
                  type === "personal" ? "active" : ""
                }`}
                name="type"
                value="personal"
                onClick={onChange}
              />
              <input
                type="button"
                className={`btn btn-outline-secondary ${
                  type === "professional" ? "active" : ""
                }`}
                name="type"
                value="professional"
                onClick={onChange}
              />
            </div>
          </div>
          <div>
            <input
              type="submit"
              value={current ? "Update Contact" : "Add Contact"}
              className="btn btn-outline-primary float-right"
            />
          </div>
          {current && (
            <div>
              <button className="btn btn-outline-secondary" onClick={clearAll}>
                Clear
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
