import { Link } from "react-router-dom";
import "./contactList.css";
import Contact from "./contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  const totalItems = contacts.length;
  console.log(totalItems);

  return (
    <section className="contactList">
      <div className="listHeader">
        <h4>{totalItems} contacts</h4>
        <div className="iconSection">
          <Link to="/add">
            <ion-icon id="add" name="add-outline"></ion-icon>
          </Link>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </div>
      {contacts.map((contact) => {
        return <Contact contact={contact} onDelete={onDelete} />;
      })}
    </section>
  );
};

export default ContactList;
