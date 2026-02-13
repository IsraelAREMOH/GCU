import { serviceIcons } from "../constants";
import { MapPin, User, Phone, Mail, Building, ArrowDown } from "Lucide-react";
import { useState } from "react";

const Contact_FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    services: [],
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newServices = checked
        ? [...formData.services, value]
        : formData.services.filter((s) => s !== value);

      setFormData({ ...formData, services: newServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([{ msg: data.message || "An error occurred" }]);
        }
      } else {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          services: [],
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
      setErrors([{ msg: "Something went wrong. Try again later." }]);
    }
  };
  return (
    <div>
      <div className="bg-[#2A2727] text-[#f4f6ff] min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Studio <span className="text-[#19673b]">Moments</span>
          </h1>{" "}
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Want to work with us?
            <br />
            We're always ready for the next big story. Let's collaborate.
          </p>
          <h3 className="mt-4 px-6 py-2 font-semibold text-[#19673b] text-sm sm:text-base">
            Get in Touch
          </h3>
          <div className="flex mt-4 py-2 ">
            <ArrowDown className="w-full h-11 text-[#f4f6ff]" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 mb-10">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-center">
            <MapPin className="w-6 h-6 text-[#19673b] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Visit Our Studio</h3>
            <p className="text-gray-400 text-sm">
              123 Creative Lane, PhotoCity
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-center">
            <Phone className="w-6 h-6 text-[#19673b] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Talk to a Specialist</h3>
            <p className="text-gray-400 text-sm">+234 801 234 5678</p>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-center">
            <Mail className="w-6 h-6 text-[#19673b] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Email Studio Moments</h3>
            <p className="text-gray-400 text-sm">contact@studiomoments.ng</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-[#f4f6ff] text-gray-700 p-6 sm:p-10 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
            Let’s Talk About Your Project
          </h2>
          <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
            Get in touch with us today and let's discuss how we can make your
            project unforgettable. Fill out the form, drop us a message and
            we’ll guide you through the next steps!
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="pl-10 p-3 rounded text-gray-200 bg-gray-700 placeholder-gray-400 w-full text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="pl-10 p-3 rounded text-gray-200 bg-gray-700 placeholder-gray-400 w-full text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="pl-10 p-3 rounded text-gray-200 bg-gray-700 placeholder-gray-400 w-full text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <Building className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Business Name"
                className="pl-10 p-3 rounded text-gray-200 bg-gray-700 placeholder-gray-400 w-full text-sm sm:text-base"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-sm sm:text-base">
                Services (Click Me):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                {Object.keys(serviceIcons).map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`services-${service}`}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="flex items-center flex-wrap">
                      {serviceIcons[service]} {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Write us a message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="md:col-span-2 text-gray-200 p-4 rounded bg-gray-700 placeholder-gray-400 text-sm sm:text-base"
              rows={5}
              required
            ></textarea>
            <button className="md:col-span-2 mt-4 px-6 py-3 bg-[#19673B] hover:bg-green-600 text-white rounded w-full text-sm sm:text-base">
              Submit
            </button>
            {errors.length > 0 && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
                <ul>
                  {errors.map((err, idx) => (
                    <li key={idx}>{err.msg}</li>
                  ))}
                </ul>
              </div>
            )}

            {success && (
              <div className="bg-green-100 text-[#19673b] p-2 rounded mb-4">
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_FormSection;
