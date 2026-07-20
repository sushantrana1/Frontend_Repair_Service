import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="bg-gradient-to-br from-blue-100 via-white to-cyan-50 py-0 px-0">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-3">

            <ContactInfo />

            <ContactForm />

          </div>

        </div>

      </section>

      
    </>
  );
};

export default Contact;