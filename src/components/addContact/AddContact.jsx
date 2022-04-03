import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import "./addContact.css";
import { useNavigate } from "react-router";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.number) {
      alert("All fields are mandatory!");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", number: "" });
    navigate("/");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      {/* <div className="formControl"> */}
      {/* <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div> */}
      <div className="formControl">
        <label htmlFor="">Number</label>
        <input
          type="number"
          name="number"
          value={contact.number}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">
        Add
        <ion-icon id="AddIcon" name="person-add-outline"></ion-icon>
      </button>
    </form>
  );
};

export default AddContact;
