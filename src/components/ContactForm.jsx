import { useState } from "react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFeedback({ type: "", text: "" });

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: PUBLIC_KEY,
            template_params: {
              from_name: formData.fullName,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
              to_name: "Web Wizard",
            },
          }),
        }
      );

      const result = await response.text();

      if (!response.ok) {
        throw new Error(result);
      }

      setFeedback({
        type: "success",
        text: "Your message has been sent successfully!",
      });

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setFeedback({
        type: "error",
        text: "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleContactFormSubmit}
      className="p-4 md:p-6 flex flex-col gap-4 bg-background-tertiary [box-shadow:0px_0px_20px_1px_rgba(0,0,0,0.2)] rounded-lg md:rounded-2xl"
    >
      <h2 className="inline md:hidden text-3xl font-body font-bold">
        Contact Form
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Your Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg ring ring-transparent focus:ring-accent-primary outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg ring ring-transparent focus:ring-accent-primary outline-none"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg ring ring-transparent focus:ring-accent-primary outline-none"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 md:p-4 text-text-primary bg-background-secondary rounded-lg ring ring-transparent focus:ring-accent-primary outline-none resize-none"
      />

      {feedback.text && (
        <p
          className={`text-sm ${feedback.type === "success"
            ? "text-green-500"
            : "text-red-500"
            }`}
        >
          {feedback.text}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="px-8 py-4 flex justify-center items-center text-sm font-bold text-background-primary dark:text-text-primary bg-linear-to-br from-accent-primary to-accent-secondary rounded-full hover:[box-shadow:0_0_16px_var(--accent-primary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;