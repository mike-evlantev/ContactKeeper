import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          ref={text}
          placeholder="Filter Contacts"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ContactFilter;
