
import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_4c4pef6",      // from EmailJS
        "template_4gst4wc",     // from EmailJS
        form.current,
        "RK4z4nVv3m9sCpbS7"       // from EmailJS
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setMessage("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-16 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-500">
          Let's work together
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-12">
          Have a project in mind? Let's discuss how I can help bring your vision to life.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition mb-6"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:border-emerald-600 focus:outline-none transition mb-6"
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-emerald-600 transition flex items-center justify-center gap-2"
          >
            {isSending ? "Sending..." : "Send Message"} <ArrowRight size={18} />
          </button>

          {message && (
            <p className="text-center mt-4 text-emerald-600 font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
