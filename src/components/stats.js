import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="h-40 flex flex-col justify-center items-center">
        <div className="text-billOrange text-4xl font-bold">1,00,000+</div>
        <div className="text-slate-600">Businesses Trust us</div>
      </div>
      <div className="h-40 flex flex-col justify-center items-center">
        <div className="text-billOrange text-4xl font-bold">30,00,000+</div>
        <div className="text-slate-600">Invoices</div>
      </div>
      <div className="h-40 flex flex-col justify-center items-center">
        <div className="text-billOrange text-4xl font-bold">5,000+</div>
        <div className="text-slate-600">Cities & Towns in India</div>
      </div>
      <div className="h-40 flex flex-col justify-center items-center">
        <div className="text-billOrange text-4xl font-bold">
         <div className="flex flex-row"> 4.5
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg></div>
        </div>
        <div className="text-slate-600">Rating on Google Play</div>
      </div>
    </div>
  );
};

export default Stats;
