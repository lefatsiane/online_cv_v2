/* eslint-disable */

"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log(`message sent.`);
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4  relative"
    >
      {/* <div className="  bg-[radial-gradient(ellipse-at-center,_var(--tw-gradient-stops))] bg-orange-900 to-transparent rounded-full h-80 w-80 z-1 blur-lg absolute -top-/4 -left-4 transform -translate-x-1/2 -translate-y-1/2   "></div>
       */}
      <div>
        {" "}
        <h5 className="font-bold text-white text-xl my-2 ">
          Let's Get in Touch
        </h5>{" "}
        <p className="text-slate-300 mb-4 max-w-md z-10  ">Lorem ipsum</p>
        <div className="z-10 flex flex-row gap-2 ">
          <Link href="https://github.com/lefatsiane">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/lefa-tsiane-420a5b185/">
            <Image src={LinkedinIcon} alt="GitHub Icon" />
          </Link>
        </div>
      </div>{" "}
      <div className="-z-1">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium "
              htmlFor="email"
            >
              Enter Email{" "}
            </label>
            <input
              name="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
              type="email"
              id="email"
              required
              placeholder="yourEmail@mail.com"
            />
          </div>

          <div className="mb-6">
            <label
              className="text-white mb-2 block text-sm font-medium "
              htmlFor=" subject"
            >
              Subject{" "}
            </label>
            <input
              name="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
              type=" text"
              id="subject"
              required
              placeholder="Greetings Lefa!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Good day, My Name is..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send
          </button>
          {emailSubmitted && (
            <p className="text-green-500 mt-4">Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
