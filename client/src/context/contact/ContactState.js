import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: "5",
        name: "Contact5",
        email: "contact5@a.com",
        phone: "555-555-5555",
        type: "personal"
      },
      {
        id: "6",
        name: "Contact6",
        email: "contact6@a.com",
        phone: "666-666-6666",
        type: "personal"
      },
      {
        id: "7",
        name: "Contact7",
        email: "contact7@a.com",
        phone: "777-777-7777",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState); // state - allows access to state, dispatch - allows to dispatch objects to Reducer

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update contact

  // Fileter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
