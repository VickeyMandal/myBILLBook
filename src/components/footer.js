import React from "react";
import { BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";
import { RiChat1Line, RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai"
import { GrFacebookOption } from "react-icons/gr"

const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 font-sanspro px-20 h-52 mt-12 ">
      <div className="col-start-1 col-end-2  w-96">
        <div className="flex flex-col space-y-3">
          <p className="font-bold text-billOrange text-xl">Get in touch</p>
          <p className="text-md">help@flobiz.in</p>
          <p className="text-2xl">+91 74004 17400</p>
        </div>
        <div className="flex flex-row space-x-3 mt-4">
          <div className="bg-whatsappfade h-10 w-40 flex flex-row p-2 rounded-sm">
            <div className="pt-[.15rem] ml-1 mr-2">
              <BsWhatsapp color="#269687" />
            </div>
            <p className="font-bold text-sm text-center text-whatsapp">
              WhatApp with us
            </p>
          </div>
          <div className="bg-chatfade h-10 w-40 flex flex-row p-2 rounded-sm">
            <div className="ml-1 mr-2">
              <RiChat1Line color="#7bacff" size="1.3rem" />
            </div>
            <p className="font-bold text-sm text-center text-chat">
              Chat with us
            </p>
          </div>
        </div>
      </div>
      <div className="ml-32 space-y-3">
        <p className="font-bold text-billOrange text-xl ">Information</p>
        <p>Refund Policy</p>
        <p className="text-billOrange">Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div className="ml-10 mt-11 space-y-3">
        <p>FAQ's</p>
        <p>Pricing</p>
        <p>FloBix Business Group</p>
        <p>Blogs</p>
      </div>
      <div className="col-start-4 -ml-10 col-end-7 col-span-2 flex flex-col items-start">
        <div className="font-bold text-billOrange text-xl ">Follow us</div>
        <div className="flex flex-row space-x-3 mt-2">
            <div className="bg-white h-11 w-11 rounded-full drop-shadow-md flex justify-center items-center">
            <AiFillYoutube color="#FF0100" size="1.5rem"/>
            </div>
            <div className="bg-white h-11 w-11 rounded-full drop-shadow-md flex justify-center items-center">
            <GrFacebookOption color="#5878BC" size="1.5rem"/>
            </div>
            <div className="bg-white h-11 w-11 rounded-full drop-shadow-md flex justify-center items-center">
            <BsInstagram color="#DE4577" size="1.5rem"/>
            </div>
            <div className="bg-white h-11 w-11 rounded-full drop-shadow-md flex justify-center items-center">
            <BsTwitter color="#1EA0F1" size="1.5rem"/>
            </div>
            <div className="bg-white h-11 w-11 rounded-full drop-shadow-md flex justify-center items-center">
            <RiLinkedinFill color="#1479AA" size="1.5rem"/>
            </div>
        </div>
        <div className="font-bold mt-5 text-gray-700">
            FloBooks is a product by <u className="text-purple-500">Flobiz</u>
        </div>
      </div>
    </div>
  );
};

export default Footer;
