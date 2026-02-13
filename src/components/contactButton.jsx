import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <button className="flex text-white  my-10 bg-[#19673B] hover:bg-green-700 px-5 py-2 rounded shadow">
      <Link to="/contact">CONTACT US</Link>
    </button>
  );
};

export default ContactButton;
