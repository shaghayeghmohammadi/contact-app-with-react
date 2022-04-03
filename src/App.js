import "./App.css";
import AddContact from "./components/addContact/AddContact";
import { useEffect, useState } from "react";
import ContactList from "./components/contactList/ContactList";
import { Route, Routes } from "react-router";

import ContactDetail from "./components/contactDetail/ContactDetail";
function App() {
  const [contacts, setContacts] = useState([]);
  // console.log(contacts.length);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteHandler = (id) => {
    // console.log("delete shod", id);

    const deleteContact = contacts.filter((c) => c.id !== id);

    setContacts(deleteContact);
  };

  return (
    <div className="App">
      <h1>My Contacts</h1>

      <Routes>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />

        <Route
          path="/"
          element={<ContactList contacts={contacts} onDelete={deleteHandler} />}
        />

        <Route path="/user/:id" element={<ContactDetail />} />
      </Routes>
    </div>
  );
}

export default App;
