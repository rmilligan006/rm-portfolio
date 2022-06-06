import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#DEA057");
  const [linkColor, setlinkColor] = useState("#1f2937");

  const router = useRouter;

  useEffect(() => {
    if (
      router.asPath === "/travel" ||
      router.asPath === "/myFlix" ||
      router.asPath === "/meet" ||
      router.asPath === "/netflix"
    ) {
      setNavBg("transparent");
      setlinkColor("#E0D8B0");
    } else {
      setNavBg("#DEA057");
      setlinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link style={{ color: `${linkColor}` }} href="/">
          <Image
            src="/../public/assets/navLogo.png"
            alt="/"
            width="140"
            height="150"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-[#BB9981] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          {/*Mobile Menu */}
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/navLogoMenu.png"
                  alt="/"
                  width="120"
                  height="115"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-slate-200 shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something amazing together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#590696]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full bg-slate-200 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <Link
                    href={
                      "https://www.linkedin.com/in/ryan-milligan-18815820b/"
                    }
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full bg-slate-200 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <Link href={"https://github.com/rmilligan006"}>
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full bg-slate-200 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <Link href={"/#contact"}>
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full bg-slate-200 shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <Link href="/resume">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
