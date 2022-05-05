import React, { useState, useEffect } from "react";
import LoginForm from "./form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { stringify } from "postcss";
const Hero = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [click, setClick] = useState(false);
  const [res, setRes] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    //window.alert()
    if (res.status == 200) {
      navigate("/mybillbook");
    }
  };

  const onSendcode = () => {
    //window.alert()
    setClick(true);
    //console.log(res);
    localStorage.setItem('phone', phoneNumber);

    if (res == 200) {
      navigate("/mybillbook");
    }
  };

  //Opt is not receiving so when response is ok i'm just navigating to the next page
  useEffect(async () => {
    if (phoneNumber != "") {
      var myData = new FormData();
      myData.append("mobile_number", phoneNumber);
      await axios({
        method: "post",
        url: "https://niobooks.in/api/web/request_otp",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Client: "web",
        },
        data: myData,
      })
        .then((res) => {
          //console.log(res.status);
          setRes(res.status);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [phoneNumber]);

  const onPhoneChange = (e) => {
    const z = e.target.value;
    setPhoneNumber(z);
  };

  const onOTPChange = (e) => {
    const z = e.target.value;
    setOtp(z);
  };

  //console.log(phoneNumber);
  //console.log(otp)

  return (
    <>
      <div className="h-[38.89rem] w-full bg-cream flex flex-row">
        <div className="w-[46rem] h-max pr-12 ">
          <div className="w-max inset-x-1 mx-[4.5rem] pt-36 text-slate-900">
            <div className="text-xl md2:text-4xl font-bold flex flex-nowrap ">
              <p>Simple GST Billing</p>
              <p className="font-thin ml-1 mr-1"> &</p>
              <p>Stock Management</p>
            </div>
            <div>
              <p className="text-3xl md2:text-4xl font-medium">
                software for your business
              </p>
            </div>
            <div className="mt-5 text-2xl text-slate-600 font-sanspro font-bold">
              <p>Atma Nirbhar Vyapaari bane</p>
            </div>
            <div className="flex flex-row space-x-10 mt-52 font-sanspro font-semibold">
              <div>
                <p>Made with ❤️ in India</p>
              </div>
              <div>
                <p>ISO Certified</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[7rem] right-16">
          <LoginForm
            onLogin={onLogin}
            onSendcode={onSendcode}
            click={click}
            setClick={setClick}
            setPhoneNumber={setPhoneNumber}
            otp={otp}
            onOTPChange={onOTPChange}
            phoneNumber={phoneNumber}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
