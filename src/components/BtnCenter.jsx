import { Link } from "react-router-dom";

const BtnCenter = () => {
  return (
    <div>
      <div className="flex text-white mt-16 justify-center  my-10">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-green-900 to-green-500 py-3 px-4 mx-3 rounded-md"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default BtnCenter;
