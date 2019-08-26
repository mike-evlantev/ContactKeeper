import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <ContactForm />
      </div>
      <div className="col-sm-6">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
