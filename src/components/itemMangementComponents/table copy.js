import React, { useState, useEffect, useReducer } from "react";
import { BiSearch } from "react-icons/bi";
import Form from "./form";
import { itemReducer } from "../reducers/itemReducer";
import TableContent from "./tableContent";

const Table = () => {
  const [id, setId] = useState("");
  const [item_name, setItemName] = useState("");
  const [item_code, setItemCode] = useState("");
  const [selling_price, setSellPrice] = useState("0");
  const [purchase_price, setPurchasePrice] = useState("0");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");
  const [filter,setFilter] = useState("");
  const [editId, setEditId] = useState("");
  const [eData, setEdata] = useState("");
  const [toggleSave, setToggleSave] = useState(true)

 // console.log(item_name, item_code, selling_price, purchase_price, unit, date);
  //console.log(eData)
  const [items, dispatch] = useReducer(itemReducer, [], () => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
      localStorage.setItem('items',JSON.stringify(items))
  },[items])

  //console.log(items)


  // const editMyData = (id) =>{
  //   console.log(id)
  //     const editItem = items.find((elem) => {
  //         return elem.id === id
  //     })
  //     setToggleSave(false)
  //     //setItemName(editItem.item_name)
  //     console.log(editItem)
  //     console.log(id)
  // }
  
  const onSave = (e) => {
    e.preventDefault();
    if(item_name!="" && item_code!=""){
      const id = new Date().getTime().toString()
      dispatch({
        type: "ADD_ITEM",
        item: {
          id,
          item_name,
          item_code,
          selling_price,
          purchase_price,
          unit,
          date,
        },
      });
    }
    
  };

  const onRowClick = (idx) => { 
    //console.log(idx)
   // setEditId(idx)
   //editMyData(idx)
  }

 
  
    //console.log(eData)


  return (
    <div className="h-14 font-sanspro text-gray-700 text-lg font-extrabold grid grid-cols-5">
      <div className="col-span-3 px-5">
       
        <div className="">
          <TableContent
          items={items}
            filter={filter}
            setFilter={setFilter}
            setItemName={setItemName}
            setItemCode={setItemCode}
            setSellPrice={setSellPrice}
            setPurchasePrice={setPurchasePrice}
            setUnit={setUnit}
            setDate={setDate}
            setEditId={setEditId}
            editId={editId}
            setEdata={setEdata}
            onRowClick={onRowClick}
            eData={eData}
          />
        </div>
      </div>
        <div className="col-span-2">
          <Form
            item_name={item_name}
            item_code={item_code}
            selling_price={selling_price}
            purchase_price={purchase_price}
            unit={unit}
            date={date}
            setItemName={setItemName}
            setItemCode={setItemCode}
            setSellPrice={setSellPrice}
            setPurchasePrice={setPurchasePrice}
            setUnit={setUnit}
            setDate={setDate}
            onSave={onSave}
            setEditId={setEditId}
            editId={editId}
            eData ={eData}
            dispatch={dispatch}
            toggleSave={toggleSave}
          />
        </div>


     

    </div>
  );
};

export default Table;
