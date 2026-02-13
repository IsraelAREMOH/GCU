import Contact_FormSection from "../../components/Contact_FormSection";
import Contact_HeroBanner from "../../components/Contact_HeroBanner";
import Contact_TeamSection from "../../components/Contact_TeamSection";

const Contact = () => {
  return (
    <>
      <Contact_HeroBanner />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Contact_TeamSection />
        <Contact_FormSection />
      </div>
    </>
  );
};

export default Contact;
