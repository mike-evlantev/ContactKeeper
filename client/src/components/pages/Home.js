import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    // esling-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="col-sm-6">
        <ContactForm />
      </div>
      <div className="col-sm-6">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
