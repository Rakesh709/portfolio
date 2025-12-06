
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
    <section id="contact" className=" md:px-10 lg:px-16 mt-20 mb-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-500">
          Let's work together
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12">
          Have a project in mind? Let's discuss how I can help bring your vision to life.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className=" rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm"
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
  className="
    w-full py-4
    text-white font-medium
    rounded-xl
    flex items-center justify-center gap-2
    transition-all duration-200

    /* Base look */
    bg-gradient-to-br from-slate-800 to-slate-900
    border border-white
    shadow-[0_5px_0_0_rgba(0,0,0,0.6)]

    /* Hover (green + glow) */
    hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-700
    hover:shadow-[0_7px_0_0_rgba(0,0,0,0.55),0_0_20px_rgba(255,255,255,0.35)]

    /* Active press effect */
    active:shadow-[0_3px_0_0_rgba(0,0,0,0.7)]
    active:translate-y-1

    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  {isSending ? "Sending..." : "Send Message"}
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
