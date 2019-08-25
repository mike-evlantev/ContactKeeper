import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFormOriginal from "../contacts/ContactFormOriginal";

const Home = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <ContactForm />
        {/* <ContactFormOriginal /> */}
      </div>
      <div className="col-sm-6">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
