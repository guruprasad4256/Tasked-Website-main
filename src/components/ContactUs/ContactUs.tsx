import { motion } from "framer-motion";
import React, { useState } from "react";
import { api } from "@/utils/axiosConfig"; // <-- import your axios instance

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    utm_source: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {

      const payload = { ...formData, utm_source: "moh_website" };

      const res = await api.post("/api/moh-website-leads", payload);
      if (res.status === 200) {
        setSuccess("Your message has been sent!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          utm_source: "moh_website",
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative text-white px-5 pt-4 sm:pt-16 pb-[250px] md:pb-[350px] lg:pb-[350px] mb-[-160px] lg:px-24 bg-black font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Text */}
        <div className="lg:w-3/5 w-full">
          <h2 className="text-[40px] lg:text-[48px] font-bold mb-6">
            Talk to Manhours On Hire
          </h2>
          <p className="text-gray-300 mb-6 text-[16px] leading-[26px]">
            Need vetted professionals on the clock? <br />
            We’ll get back within 4 - 6 hours (Mon–Fri) <br />
            If forms arent your thing, Call us at

          </p>
          <h3 className="text-[20px] font-semibold mb-3">
            Talk to our team today to
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-2 text-[16px] leading-[26px]">

            <li>
              <strong>WhatsApp(fastest):</strong> +91 8660880846
            </li>


          </ul>
        </div>

        {/* Right Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:w-2/5 w-full h-auto p-8 flex flex-col justify-center mx-auto overflow-hidden fancy-form"
          style={{
            boxShadow: `
              inset 8px 8px 20px #FF073A40,
              inset -8px 8px 20px #FF073A40,
              inset 8px -8px 10px #FF073A40,
              inset -8px -8px 10px #FF073A40
            `,
            borderRadius: "3px",
            background: "#111",
          }}
        >
          {/* Animated border spans */}
          <span
            style={{
              background: "linear-gradient(to right, transparent, #FF073A)",
            }}
          ></span>
          <span
            style={{
              background: "linear-gradient(to bottom, transparent, #FF073A)",
            }}
          ></span>
          <span
            style={{
              background: "linear-gradient(to left, transparent, #FF073A)",
            }}
          ></span>
          <span
            style={{
              background: "linear-gradient(to top, transparent, #FF073A)",
            }}
          ></span>

          <form
            className="flex flex-col space-y-4 relative z-10"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 rounded-lg bg-transparent border border-white focus:border-red-500 outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 rounded-lg bg-transparent border border-white focus:border-red-500 outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Work Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg bg-transparent border border-white focus:border-red-500 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Contact Number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg bg-transparent border border-white focus:border-red-500 outline-none"
            />
            <textarea
              rows={4}
              name="message"
              placeholder="How Can We Help You?"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg bg-transparent border border-white focus:border-red-500 outline-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {success && (
              <p className="text-green-400 text-sm mt-2">{success}</p>
            )}
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </form>
        </motion.div>
      </div>

      {/* Fancy animation styles */}
      <style>{`
        .fancy-form span {
          position: absolute;
          box-shadow:
            0 0 8px #FF073A,
            0 0 16px #FF073A,
            0 0 32px #FF073A,
            0 0 64px rgba(255, 7, 58, 0.8);
        }
        .fancy-form span:nth-child(1) {
          top: 0;
          right: 0;
          width: 100%;
          height: 3px;
          animation: animate1 8s linear infinite;
        }
        .fancy-form span:nth-child(2) {
          top: 0;
          right: 0;
          height: 100%;
          width: 3px;
          animation: animate2 8s linear infinite;
          animation-delay: 4s;
        }
        .fancy-form span:nth-child(3) {
          bottom: 0;
          right: 0;
          width: 100%;
          height: 3px;
          animation: animate3 8s linear infinite;
        }
        .fancy-form span:nth-child(4) {
          top: 0;
          left: 0;
          height: 100%;
          width: 3px;
          animation: animate4 8s linear infinite;
          animation-delay: 4s;
        }
        @keyframes animate1 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes animate2 {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes animate3 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes animate4 {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
