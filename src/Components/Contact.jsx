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
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
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
          className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
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
