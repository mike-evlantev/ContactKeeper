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
    <div className="card">
      <div class="card-header">{current ? "Edit" : "Add"} Contact</div>
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
            <div className="form-check">
              <label className="form-check-label mr-3">Contact Type</label>
              <input
                type="radio"
                name="type"
                value="personal"
                checked={type === "personal"}
                onChange={onChange}
              />{" "}
              Personal{" "}
              <input
                type="radio"
                name="type"
                value="professional"
                checked={type === "professional"}
                onChange={onChange}
              />{" "}
              Professional
            </div>
          </div>
          <div>
            <input
              type="submit"
              value={current ? "Update Contact" : "Add Contact"}
              className="btn btn-primary float-right"
            />
          </div>
          {current && (
            <div>
              <button className="btn btn-light" onClick={clearAll}>
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
