import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("SUCCESS");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setStatus("ERROR");
      });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 bg-white p-8 rounded-md shadow-md"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-indigo-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-indigo-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-indigo-500"
        />
        <button
          type="submit"
          className="rounded-md bg-gray-100 text-gray-800 font-medium px-4 py-2
  shadow-md shadow-gray-400
  hover:shadow-inner hover:shadow-gray-300
  active:shadow-inner active:shadow-gray-300
  focus:outline-none focus:ring-2 focus:ring-gray-400"npm 
        >
          Send Message
        </button>

        {status === "SUCCESS" && (
          <p className="text-green-600 text-center mt-4">
            Message sent successfully!
          </p>
        )}
        {status === "ERROR" && (
          <p className="text-red-600 text-center mt-4">
            Oops! Something went wrong.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
