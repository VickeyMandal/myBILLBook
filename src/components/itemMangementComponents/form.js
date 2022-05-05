import React, { useState, useEffect, useReducer } from "react";
import { itemReducer } from "../reducers/itemReducer";

const Form = ({
  item_name,
  item_code,
  selling_price,
  purchase_price,
  unit,
  date,
  setItemName,
  setItemCode,
  setSellPrice,
  setPurchasePrice,
  setUnit,
  setDate,
  setEdit,
  eData,
  dispatch,
  onSave,
  edit,
  toggleSave
}) => {
  //console.log(eData.item_name);

  // const [iName, setIname] = useState("");
  // const [c, setc] = useState("");
  // const [sp, setsp] = useState("");
  // const [pp, setPP] = useState("");
  // const [u, setu] = useState("");
  // const [d, setd] = useState("");
  

  const [iName, setIname] = useState("");
  const [c,setc] = useState("Enter code")
  const [sp,setsp] = useState("")
  const [pp,setPP] = useState("")
  const [u,setu] = useState("")
  const[d,setd] = useState("")



  useEffect(() => {
    if(eData!=""){
      setIname(eData.item_name)
      setc(eData.item_code)
    } else if(eData=="") {
      setIname("Enter name")
    }
  })

  const onSave2 = () => {
    setItemName(iName);
    setItemCode(c);
    setPurchasePrice(pp);
    setSellPrice(sp);
    setUnit(u);
    setd(d);
    onSave();
    

  };

  const onEditSave = () => {

  }

  // const [sRow, setSRow] = useState("");
  return (
    <>
      <div className="border-l-2 h-screen ml-2 border-gray-200 col-span-2  p-5  flex justify-between">
        <div className="flex flex-col  w-full text-sm">
          <div className=" flex flex-row w-full space-x-3 justify-evenly">
            <div className="flex flex-col w-full">
              <div>Item Name *</div>
              <div>
                <input
                  type="tel"
                  pattern="[0-9]*"
                  value={iName}
                  maxLength="15"
                  name="otp"
                  className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setIname(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>Item Code *</div>
              <div>
                <input
                  type="tel"
                  pattern="[0-9]*"
                  value={c}
                  maxLength="15"
                  name="otp"
                  className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setc(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-10 my-5 px-4 flex items-center text-sm ">
            Stock & Pricing details(Optional)
          </div>

          <div className=" flex flex-row w-full space-x-3 justify-evenly">
            <div className="flex flex-col w-full">
              <div>Sales Price</div>
              <div>
                <input
                  type="tel"
                  pattern="[0-9]*"
                  value={sp}
                  maxLength="15"
                  name="otp"
                  className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setsp(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>Purchase Price</div>
              <div>
                <input
                  type="tel"
                  pattern="[0-9]*"
                  value={pp}
                  maxLength="15"
                  name="otp"
                  className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setPP(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-row w-full space-x-3 justify-evenly mt-5">
            <div className="flex flex-col w-full">
              <div>Measuring Unit</div>
              <div>
                <select
                  className="h-10 w-full p-2 text-gray-400 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setu(e.target.value)}
                  value={u}
                >
                  <option>Select Unit</option>
                  <option>PCS</option>
                  <option>BOXES</option>
                  <option>GMS</option>
                  <option>KGS</option>
                  <option>ITR</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>Opening Stock Date</div>
              <div>
                <input
                  type="date"
                  maxLength="15"
                  name="otp"
                  className="h-10 w-full p-2 text-gray-400 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                  onChange={(e) => setd(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
           { toggleSave ?  <button
              onClick={onSave2}
              className="bg-purple w-full h-10 rounded-md text-white hover:bg-darkpurple"
            >
              Save
            </button> : 
               <button
               onClick={onEditSave}
               className="bg-purple w-full h-10 rounded-md text-white hover:bg-darkpurple"
             >
               Update
             </button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
