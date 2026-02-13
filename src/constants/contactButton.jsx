import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <button className="flex text-white  my-10 bg-[#02066f] hover:bg-blue-900 px-5 py-2 rounded shadow">
      <Link to="/contact">CONTACT US</Link>
    </button>
  );
};

export default ContactButton;
