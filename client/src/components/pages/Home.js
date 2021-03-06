import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const { loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

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
