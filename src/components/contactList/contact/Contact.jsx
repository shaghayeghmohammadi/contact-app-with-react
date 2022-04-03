import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { id, number, name } = contact;
  // console.log(contact);
  return (
    <div key={id} className="item">
      <ion-icon id="icon" name="person-circle-outline"></ion-icon>

      <Link to={`user/${id}`} state={{ contact: contact }}>
        <div className="pContainer">
          <p className="pTaginList">Name : {name} </p>
          <p>Number : {number} </p>
        </div>
      </Link>

      <button onClick={() => onDelete(id)}>
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Contact;
