"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../Images/logo.png";

export default function Foter() {
  return (
    <Footer container className="bg-white text-black rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="scale-110">
            <a
              href="/"
              className="text-black tracking-widest text-2xl font-normal font-poppins flex items-center"
            >
              <img src={logo} className="h-6 w-auto" alt="Logo" /> &nbsp;diner
              <span className="text-green-600 tracking-widest font-black">
                Dash
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-black">
            <div>
              {/* <Footer.Title title="about" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup> */}
            </div>
            <div>
              <Footer.Title title="about" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="https://nerdtech.in">NerdTech</Footer.Link>
                <Footer.Link href="/">DinnerDash</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-green-600" />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-black">
          <Footer.Copyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="text-black"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-black">
            <Footer.Icon href="#" icon={BsFacebook} className="text-black" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-black" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-black" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
