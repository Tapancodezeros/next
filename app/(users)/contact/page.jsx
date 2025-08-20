"use client";
import { useState } from "react";

const About = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    about: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handlereset = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      about: "",  
    })

  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form
        className="flex flex-col max-w-md mx-auto my-30 gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border p-2 rounded mb-4"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border p-2 rounded mb-4"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="about"
          placeholder="Tell us about yourself"
          className="border p-2 rounded mb-4"
          value={form.about}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
        <button type="reset" onClick={handlereset} className="bg-gray-500 text-white p-2 rounded ">
          Reset
        </button>

      </form>
    </div>
  );
};

export default About;