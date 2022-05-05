import React from "react";

const Top = () => {
  return (
    <>
      <div className="h-14 border-b-2 border-gray-200 font-sanspro text-gray-700 text-lg font-extrabold flex flex-row pl-5  items-center">
        <div className="">Phone Number</div>
        <div className="absolute right-5 cursor-pointer">Logout</div>
      </div>
      <div className="h-14 border-b-2  border-gray-200 font-sanspro text-gray-700 text-lg font-extrabold grid grid-cols-5 pl-5 items-center">
        <div className="col-span-3">Items</div>
        <div className="border-l-2 h-14  border-gray-200 col-span-2 left pl-5 cursor-pointer flex  items-center">
          Create/Edit items
        </div>
      </div>
    </>
  );
};

export default Top;
