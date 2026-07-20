import BookingForm from "../components/Book/BookingForm"
import BookingInfo from "../components/Book/BookingInfo"
import BookingSteps from "../components/Book/BookingSteps"
import FAQ from "../components/Book/FAQ"

const BookService = () => {
  return (
    <section className="bg-gradient-to-l from-blue-50 via-white to-cyan-100 py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-4">
            Book a Repair Service
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Schedule Your Appliance Repair
          </h1>

          <p className="mt-5 text-gray-600 max-w- text-lg mx-auto leading-7">
            Fill out the form below and our experienced technicians will
            contact you shortly to confirm your booking and schedule a
            convenient visit.
          </p>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          <BookingInfo />

        </div>

      </div>
       <BookingSteps/>

       <FAQ/>
    </section>
    
  );
};


export default BookService;