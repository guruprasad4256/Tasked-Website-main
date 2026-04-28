import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall } from 'lucide-react';

interface CallRequestButtonProps {
  serverUrl?: string;
}

const CallRequestButton = ({ serverUrl }: CallRequestButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyO9AfzfGwVsrlmifvudkWxfoPAjdRZqWaQrp2UnDWB1TDeKyL4B68H00KP-2cszPvW/exec';

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Validation for Email
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Strict Validation for 10-digit Phone Number
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    
    const payload = {
      ...formData,
      pageUrl: window.location.href,
      timestamp: new Date().toLocaleString()
    };

    try {
      // Using text/plain to bypass CORS preflight with Google Apps Script
      await axios.post(GOOGLE_SCRIPT_URL, JSON.stringify(payload), {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });
      
      alert("Request sent successfully! Our experts will contact you soon.");
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', company: '' });
    } catch (error) {
      console.error("Submission error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="px-2">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full py-4 bg-[#F39200] text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#F39200] hover:scale-[1.02] transition-all shadow-xl"
        >
          <PhoneCall size={20} />
          Get a call from our experts
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-black border border-[#D8A623]/30 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden text-white"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-[#F39200] mb-2">Expert Consultation</h3>
              <p className="text-gray-400 text-sm mb-6">Fill out the form below and our team will get back to you shortly.</p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D8A623] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D8A623] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value.toLowerCase()})}
                />
                <input 
                  required
                  type="tel"
                  maxLength={10}
                  placeholder="Phone Number (10 digits)"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D8A623] transition-colors"
                  value={formData.phone}
                  // Prevents non-numeric input immediately
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                />
                <input 
                  required
                  type="text" 
                  placeholder="Company Name"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#D8A623] transition-colors"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-4 bg-[#F39200] text-black font-bold rounded-xl mt-4 hover:bg-[#f39200d6] disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CallRequestButton;