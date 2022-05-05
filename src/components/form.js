import React, { useState } from "react";

const LoginForm = ({
  onLogin,
  onSendcode,
  otp,
  click,
  setPhoneNumber,
  onOTPChange,
  phoneNumber,
}) => {

 // console.log(otp.length);
  //console.log(click);
  let button;
  const phno = (e) => {
      const z = e.target.value;
      if(z.length==10){
        setPhoneNumber(z)
      }
  }

  if (phoneNumber.length != 11) {
    button = (


      <button
        onClick={onSendcode(phoneNumber)}
        className="bg-buttonColor cursor-pointer h-10 rounded-md mt-12 font-medium "
      >
        SendCode
      </button>
    );
  } else {
    if (click == true && otp.length == 6) {
      button = (
        <button
          onClick={onLogin}
          className="bg-buttonColor cursor-pointer h-10 rounded-md mt-12 font-medium hover:text-slate-700 hover:bg-orange-400"
        >
          Login
        </button>
      );
    } else {
      button = (
        <button
          onClick={onLogin}
          disabled
          className="bg-gray-400 h-10 rounded-md mt-12 font-medium"
        >
          Login
        </button>
      );
    }
  }

  return (
    <div className="h-[30rem] w-[26rem] bg-white  rounded-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] p-5">
      <div className="pt-10 pb-10 flex flex-col font-sanspro p-7">
        <p className="text-2xl font-medium">Login to myBillBook</p>
        <p className="text-sm font-medium text-slate-400 mt-9">
          Enter Mobile Number
        </p>
        <div className="flex flex-row ">
          <div className="bg-gray-200 w-[3.5rem] h-12 flex justify-center items-center text-gray-600 rounded-l-md border-2 border-solid border-slate-200 mt-3">
            + 91
          </div>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}*"
          placeholder={"Enter Your Mobile Number"}
          maxLength="10"
          name="phonenumber"
          className="h-12 w-full p-2 rounded-r-md border-2 border-solid border-slate-200 mt-3"
          onChange={(e) => phno(e)}
        ></input>
        </div>
        <p className="text-sm font-medium text-slate-400 mt-6">Enter OTP</p>
        <input
          type="tel"
          pattern="[0-9]*"
          placeholder={"One Time Password"}
          maxLength="6"
          name="otp"
          className="h-12 p-2 rounded-md border-2 border-solid border-slate-200 mt-3"
          onChange={(e) => onOTPChange(e)}
        ></input>
        {button}
      </div>
    </div>
  );
};

export default LoginForm;
