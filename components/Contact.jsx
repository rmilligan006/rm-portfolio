import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#A97155]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ryan Milligan</h2>
                <p>Front-End developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href={
                          "https://www.linkedin.com/in/ryan-milligan-18815820b/"
                        }
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link href={"https://github.com/rmilligan006"}>
                        <FaGithub />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link href={"/#contact"}>
                        <AiOutlineMail />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link href="/resume">
                        <BsFillPersonLinesFill />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl">
            <div className="p-4">
              <form
                action="https://getform.io/f/1b7bf3d9-889a-4589-af30-1e67c9b83d48"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
