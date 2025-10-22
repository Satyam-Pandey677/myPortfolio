import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_78kyysw",   // replace with EmailJS service ID
        "template_2pc5k8a",  // replace with EmailJS template ID
        form.current,
        "jZjRdZIfgng_mMpns"    // replace with EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            💬 Let’s Connect
          </h2>
          <p className="text-gray-600">
            Wanna collaborate, hire me, or just say hi? Drop a message below 👇
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Info Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

            <div className="flex items-center gap-4 mb-5">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">
                satyampandey@email.com
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">Mumbai, India</span>
            </div>
          </div>

          {/* Right Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className={`mt-6 w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : sent
                ? "Message Sent ✅"
                : "Send Message 🚀"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
