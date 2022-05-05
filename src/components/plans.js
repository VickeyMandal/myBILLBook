import React from "react";
import MONEY from "../assests/money.png";
import { BiDevices } from "react-icons/bi";
import { BsCheck, BsCheckAll } from "react-icons/bs";
import silvercrown from "../assests/silvercrown.svg";
import goldcrown from "../assests/goldcrown.svg";
import diamondcrown from "../assests/diamondcrown.svg";

const Plans = () => {
  return (
    <>
      <div className="px-20 h-[38rem] ">
        <div className="grid grid-cols-3 py-10">
          <div className="col-span-2 text-[2.2rem]">
            <p>Now try all benefits of myBillBook app</p>
            <p className="font-bold text-billOrange">Free for 14 days</p>
          </div>
          <div className="grid place-content-end">
            <img className="h-20 " src={MONEY} alt="MONEY" />
          </div>
          
        </div>
        
        <div className="grid grid-cols-3 gap-4 h-20 font-sanspro">
          <div className="border-2 border-slate-200 h-[24rem] rounded-md ">
            <div>
              <div className="p-4">
                <img src={silvercrown} className="h-8" />

                <p className="font-bold text-gray-700 pt-4 font-poppins">
                  Silver Plan
                </p>
                <div className="flex space-x-1">
                  <p className="text-crossed line-through text-xs font-semibold pt-3 text-slate-600">
                    ₹ 1299
                  </p>
                  <p className="text-2xl font-semibold text-silver">₹</p>
                  <p className="text-2xl font-extrabold font-poppins text-silver">
                    {" "}
                    799
                  </p>
                  <p className="text-xs pt-3 font-semibold">/ year</p>
                </div>
              </div>
            </div>
            <div className="h-12 bg-fadesilver grid justify-center items-center">
              <div className="flex flex-row space-x-1">
                <div>
                  <BiDevices color="#485EB0" size="1.5rem" />
                </div>
                <p className="text-silver font-bold">Mobile + Desktop</p>
              </div>
            </div>
            <div className="font-semibold text-sm text-gray-400 p-5 pt-8 space-y-1">
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>Unlimited Stock Adjustments</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>GST Report, Profits & Loss Report</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>Remove MyBillBook logo from Invoice</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>Only Mobile device supported</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>+ 5 more features</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gold bg-fadegold2 h-[24rem] rounded-md ">

          <div className="grid place-content-center ">
            <div className="bg-mostpopular ml-64 -mt-3 absolute text-white font-bold drop-shadow-md text-xs py-1 w-28 text-center rounded-2xl font-sanspro justify-center items-center">
              Most Popular
            </div>
          </div>

            <div>
              <div className="p-4">
                <img src={goldcrown} className="h-8" />

                <p className="font-bold text-gray-700 pt-4 font-poppins">
                  Gold Plan
                </p>
                <div className="flex space-x-1">
                  <p className="text-crossed line-through text-xs font-semibold pt-3 text-slate-600">
                    ₹ 2599
                  </p>
                  <p className="text-2xl font-semibold text-gold">₹</p>
                  <p className="text-2xl font-extrabold font-poppins text-gold">
                    {" "}
                    1799
                  </p>
                  <p className="text-xs pt-3 font-semibold">/ year</p>
                </div>
              </div>
            </div>
            <div className="h-12 bg-fadegold grid justify-center items-center">
              <div className="flex flex-row space-x-1">
                <div>
                  <BiDevices color="#dba249" size="1.5rem" />
                </div>
                <p className="text-gold font-bold">Mobile + Desktop</p>
              </div>
            </div>
            <div className="font-semibold text-sm text-gray-400 p-5 pt-8 space-y-1">
              <div className="flex space-x-1">
                <BsCheckAll size={"1.5rem"} color={"#25D366"} />
                <p>All Silver Features</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>
                  Add <b>upto 5 staff</b> to My BillBook
                </p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>Unlimited Mobile + Desktop Logins</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-200 h-[24rem] rounded-md  ">
            <div>
              <div className="p-4">
                <img src={diamondcrown} className="h-8" />

                <p className="font-bold text-gray-700 pt-4 font-poppins">
                  Diamond Plan
                </p>
                <div className="flex space-x-1">
                  <p className="text-crossed line-through text-xs font-semibold pt-3 text-slate-600">
                    ₹ 4599
                  </p>
                  <p className="text-2xl font-semibold text-diamond">₹</p>
                  <p className="text-2xl font-extrabold font-poppins text-diamond">
                    {" "}
                    3500
                  </p>
                  <p className="text-xs pt-3 font-semibold">/ year</p>
                </div>
              </div>
            </div>
            <div className="h-12 bg-fadediamond grid justify-center items-center">
              <div className="flex flex-row space-x-1">
                <div>
                  <BiDevices color="#DB631A" size="1.5rem" />
                </div>
                <p className="text-diamond font-bold">Mobile + Desktop</p>
              </div>
            </div>
            <div className="font-semibold text-sm text-gray-400 p-5 pt-8 space-y-1">
              <div className="flex space-x-1">
                <BsCheckAll size={"1.5rem"} color={"#25D366"} />
                <p>All Gold Features</p>
              </div>
              <div className="flex space-x-1">
                <BsCheck size={"1.5rem"} color={"#25D366"} />
                <p>
                  Add <b>unlimited staff</b> to My BillBook
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
