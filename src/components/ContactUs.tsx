import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "../assets/css/ContactUs.css"
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaUsers,
  FaExclamationTriangle,
  FaArrowRight,
} from "react-icons/fa";
import { Box } from "@mui/material";

// Define interface for form data
interface FormData {
  name: string;
  mobile: string;
  email: string;
  qualification: string;
  message: string;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    message: "",
    consent: false,
  });
useEffect(() => {
    window.scrollTo(0, 0);
},[]);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Box>
    <div className="contact-container">
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-card">
          <h2 className="contact-title">Hi, Tell Us About Yourself</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Type message (Optional)" value={formData.message} onChange={handleChange} style={{width:"550px"}}></textarea>
            <label className="contact-checkbox">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} style={{width:"40px",marginTop:"20px"}}/>
              <span>I would like to receive information about ConsultIT.</span>
            </label>
            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-card">
          <h2 className="contact-title">
            <FaHome className="mr-2" /> Address
          </h2>
          <p className="contact-info">
            ConsultIT House, Opposite Bloom International School, Plot-20, IT Plots,
            Techzone 7, West, Greater Noida, Uttar Pradesh, 206207
          </p>
          <div className="contact-info">
            <FaPhone className="mr-2 text-red-600" /> +91-9810266776
          </div>
          <div className="contact-info">
            <FaEnvelope className="mr-2 text-red-600" /> info@consultit.co.in
          </div>
          <h3 className="mt-6 font-semibold text-gray-300">Follow Us</h3>
          <div className="contact-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-blue-600" /></a>
            <a href="#" aria-label="Facebook"><FaFacebook className="text-blue-500" /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp className="text-green-500" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-pink-500" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="text-red-500" /></a>
          </div>
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className="stay-connected">
        <h2 className="stay-connected-title">Stay Connected</h2>
        <div className="connected-grid">
          <div className="connected-card">
            <FaUsers className="icon" />
            <h3>Join Our Team</h3>
            <p>Search open positions that match your skills and interest. We look for passionate, curious, creative, and solution-driven team players.</p>
            <a href="#" className="connected-link">Search ConsultIT Jobs <FaArrowRight /></a>
          </div>
          <div className="connected-card">
            <FaExclamationTriangle className="icon" />
            <h3>Job Alert</h3>
            <p>Personalize your subscription to receive job alerts, latest news, and insider tips tailored to your preferences. See what exciting and rewarding opportunities await.</p>
            <a href="#" className="connected-link">Register For Job Alerts <FaArrowRight /></a>
          </div>
        </div>
      </div>
    </div>
    </Box>
  );
};

export default ContactForm;