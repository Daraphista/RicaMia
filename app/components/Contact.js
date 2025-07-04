"use client";

import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-8 mb-8 w-full" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className="p-4 border border-white/20 rounded-md"
          placeholder="Name"
          type="text"
          name="name"
          required
        />

        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          className="p-4 border border-white/20 rounded-md"
          placeholder="Email"
          type="email"
          name="email"
          required
        />

        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          className="p-4 border border-white/20 rounded-md"
          placeholder="Message"
          name="message"
          required
        ></textarea>

        <button
          type="submit"
          className="py-4 px-8 border border-white rounded-full hover:bg-white hover:text-[#624a3c] transition-all duration-300 cursor-pointer"
        >
          Work With Me
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
