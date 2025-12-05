"use client";
import { useState, useEffect } from "react";

const COURSES = [
  "MBA in Marketing",
  "MBA in Finance",
  "MBA in HR",
  "MBA in Business Analytics",
];

const CAPTCHA_LENGTH = 6;

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    captchaAnswer: "",
  });

  const [captcha, setCaptcha] = useState("");

  // Generate captcha on load
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.captchaAnswer !== captcha) {
      alert("Captcha incorrect!");
      return;
    }

    console.log("FORM SUBMITTED ↓↓");
    console.table(formData);

    alert("Form submitted successfully!");

    // Reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      captchaAnswer: "",
    });
    generateCaptcha();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* NAME */}
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      {/* EMAIL */}
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      {/* PHONE */}
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      {/* COURSE SELECT */}
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">
          Choose Your Course
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* CAPTCHA */}
      <div className="relative mb-4 flex flex-col">
        <label className="leading-7 text-sm text-gray-600 mb-2">
          Enter the text below:
        </label>

        <div className="flex items-center mb-2">
          <span className="bg-gray-200 px-4 py-2 rounded text-lg font-mono tracking-widest select-none">
            {captcha}
          </span>
          <button
            type="button"
            onClick={generateCaptcha}
            className="ml-2 px-2 py-1 bg-[#4A301C] text-white rounded text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582M20 20v-5h-.581M4 9a8 8 0 0112.874-4.644M20 15a8 8 0 01-12.874 4.644"
              />
            </svg>
          </button>
        </div>

        <input
          type="text"
          name="captchaAnswer"
          placeholder="Type the text here"
          value={formData.captchaAnswer}
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full bg-[#4A301C] text-white py-3 rounded-lg font-semibold hover:bg-[#3a2616] transition-all"
      >
        Submit Application
      </button>
    </form>
  );
}
