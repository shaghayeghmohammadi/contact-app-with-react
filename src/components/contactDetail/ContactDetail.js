import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div>
      <p>name: {contact.name}</p>
      <p>number: {contact.number}</p>
      <Link to="/">Go To Contact List</Link>
    </div>
  );
};

export default ContactDetail;
