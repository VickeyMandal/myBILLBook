import React, { useState, useEffect, useReducer, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import Form from "./form";
import { itemReducer } from "../reducers/itemReducer";
import TableContent from "./tableContent";
import { COLUMNS } from "./COLUMN";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useRowSelect,
} from "react-table/dist/react-table.development";
import { Checkbox } from "./checkBox";

const Table = () => {
  const [id, setId] = useState("");
  const [item_name, setItemName] = useState("Enter item Name");
  const [item_code, setItemCode] = useState("Enter Item code");
  const [selling_price, setSellPrice] = useState("₹ 0");
  const [purchase_price, setPurchasePrice] = useState("₹ 0");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState("");
  const [eData, setEdata] = useState("");
  const [editT, setEditT] = useState(true);
  const [toggleSave, setToggleSave] = useState(true);
  

  //console.log(item_name, item_code, selling_price, purchase_price, unit, date);
  //console.log(eData)
  const [items, dispatch, setItems] = useReducer(itemReducer, [], () => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //console.log(items[0].id)

  const removeDuplicates = (i) => {
    //console.log(key)
    var seen = []
    seen = i.filter(
      (thing, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.item_code === thing.item_code && t.item_name === thing.item_name
        )
    );
    //console.log(seen)
    //localStorage.removeItem("items")
   var  x = [];
   x = JSON.parse(localStorage.getItem('items'));
   //console.log(x)
   x.splice(0,x.length)
   //console.log(x)
   x.push(seen)
   //localStorage.removeItem("items")
   //setItems(x)
   localStorage.setItem("items", JSON.stringify(x[0]))
   dispatch({
    type: "UPDATE",
    item: {
      seen
    },
  });
   //console.log(localStorage.getItem('items'))
   
  //  window.localStorage.removeItem('items');
  //  localStorage.setItem("items", JSON.stringify(seen))
  };

  const onSave = (e) => {
    // e.preventDefault();

    if (item_name != "" && item_code != "") {
      //const id = new Date().getTime().toString();
      dispatch({
        type: "ADD_ITEM",
        item: {
          item_name,
          item_code,
          selling_price,
          purchase_price,
          unit,
          date,
        },
      });
    }
   // console.log(e);
    removeDuplicates(items);
    // const editItem = items.find((elem) => {
    //   return elem.item_code == e.item_code;
    // });
    // const z = editItem.item_code
    // const newData = removeDuplicates(items, z);
    // console.log(newData)
    //localStorage.removeItem("items")
    //localStorage.setItem("items", JSON.stringify(newData));
  };
  const [cc, setcc] = useState(0);

  const onRowClick = () => {
    //setToggleSave(false)
    // setToggleSave(!toggleSave)
    // console.log(editT)
    // let count = 0
    // if (editT && cc==0) {
    //   setcc(1)
    //   console.log("xxxx")
    //   setItemName(eData.item_name);
    //   setItemCode(eData.item_code);
    //   setPurchasePrice(eData.purchase_price)
    // }
    // setEditT(X => !X)
  };

  // const [iName, setIname] = useState("");
  // const [c, setc] = useState("Enter code");
  // const [sp, setsp] = useState("");
  // const [pp, setPP] = useState("");
  // const [u, setu] = useState("");
  // const [d, setd] = useState("");

  // useEffect(() => {
  //   if (eData != "") {
  //     setItemName(eData.item_name);
  //     setc(eData.item_code);
  //   } else if (eData == "") {
  //     setIname("Enter name");
  //   }
  // });

  // const onSave2 = () => {
  //   setItemName(iName);
  //   setItemCode(c);
  //   setPurchasePrice(pp);
  //   setSellPrice(sp);
  //   setUnit(u);
  //   setd(d);
  //   onSave();
  // };

  const onEditSave = () => {};

  const data = useMemo(() => items, []);

  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox
                onChange={onRowClick()}
                {...row.getToggleRowSelectedProps()}
              />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const [eID, setEid] = useState("");

  useEffect(() => {
    if (selectedFlatRows != "") {
      //console.log(selectedFlatRows[0].original);
      setEdata(selectedFlatRows[0].original);
      setEid(selectedFlatRows[0].original.item_code);
      //setToggleSave(X=>!X)
      setToggleSave(!toggleSave);
      const a = selectedFlatRows[0].original.item_name;
      const b = selectedFlatRows[0].original.item_code;
      const c = selectedFlatRows[0].original.purchase_price;
      const d = selectedFlatRows[0].original.selling_price;
      const e = selectedFlatRows[0].original.unit;
      const f = selectedFlatRows[0].original.date;
      setItemName(a);
      setItemCode(b);
      setPurchasePrice(c);
      setSellPrice(d);
      setUnit(e);
      setDate(f);
     // console.log(toggleSave);
      // editMyData(selectedFlatRows[0].original.id)
      //setItemName(eData.item_name)
      //console.log(eData.id)
    }
  }, [selectedFlatRows]);

  //console.log(eID);

  const editMyData = (eID) => {
    //console.log(eID);
    const editItem = items.find((elem) => {
      return elem.item_code == eID;
    });

    if (editItem != "") {
      // onSave({item_name,item_code,purchase_price,selling_price,unit,date});
      editItem.item_name = item_name;
      editItem.item_code = item_code;
      editItem.selling_price = selling_price;
      editItem.purchase_price = purchase_price;
      editItem.unit = unit;
      editItem.date = date;
    }

    const data = items.filter((obj, pos, arr) => {
      return (
        arr.map((mapObj) => mapObj.item_code).indexOf(obj.item_code) == pos
      );
    });
    localStorage.setItem("items", JSON.stringify(data));
    // setItemName(editItem.item_name)
    //console.log(editItem);
    //console.log(id);
    onSave(editItem);
    setItemName("");
    setItemCode("");
    setSellPrice("");
    setPurchasePrice("");
    setUnit("");
    setDate("");
    // let data = JSON.parse(localStorage.getItem("items")) || [],
    //   isExist =
    //     data.findIndex((obj) => {
    //       // Compare all keys here to validate "uniqueness"
    //       // You can add many keys as you like
    //       return obj == editItem;
    //     }) != -1;

    // if (isExist) {
    //   editItem.item_name = item_name
    //   data.push(editItem);
    //   localStorage.setItem("items", JSON.stringify(data));

    // }
  };

  const setSearch = (e) => {
    const z = e.target.value;
    setGlobalFilter(z);
    setFilter(z);
  };
  const { globalFilter } = state;
  //console.log(filter)

  let save_update;

  if (toggleSave) {
    save_update = (
      <button
        onClick={onSave}
        className="bg-purple w-full h-10 rounded-md text-white hover:bg-darkpurple"
      >
        Save
      </button>
    );
  } else {
    save_update = (
      <button
        onClick={() => editMyData(eID)}
        className="bg-purple w-full h-10 rounded-md text-white hover:bg-darkpurple"
      >
        Update
      </button>
    );
  }

  //console.log(eData)

  return (
    <div className="h-14 font-sanspro text-gray-700 text-lg font-extrabold grid grid-cols-5">
      <div className="col-span-3 px-5">
        <div className="">
          {/* <TableContent
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
          /> */}

          <div className="my-4 h-9 flex flex-row ">
            <div className="h-full w-10 flex border-y-2 border-l-2 rounded-l-md items-center justify-center">
              <BiSearch size="1.4rem" color="#9CA3AF" />
            </div>
            <input
              className="h-full pl-3 border-y-2 border-r-2 border-gray-200 w-52 rounded-r-md text-sm"
              type="text"
              name="search"
              value={filter || ""}
              onChange={(e) => setSearch(e)}
            />
          </div>
          <table
            className="w-full text-sm font-medium border-[1px] border-gray-200 text-left"
            {...getTableProps()}
          >
            <thead className="h-10 bg-gray-100 text-gray-500 ">
              {headerGroups.map((headerGroups) => (
                <tr
                  className="border-b-[1px] border-gray-200"
                  {...headerGroups.getHeaderGroupProps()}
                >
                  {headerGroups.headers.map((column) => (
                    <th
                      className="pl-5 font-semibold"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}{" "}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "🔽"
                            : "🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="h-10 border-b-[1px] border-gray-200 hover:bg-slate-200"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td className="pl-5" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <pre>
            <code>
              {/* {JSON.stringify(
                {
                  selectedFlatRows: selectedFlatRows.map((row) => row.original),
                },
                null,
                2
              )} */}
            </code>
          </pre>
        </div>
      </div>
      <div className="col-span-2">
        {/* <Form
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
          /> */}

        <div className="border-l-2 h-screen ml-2 border-gray-200 col-span-2  p-5  flex justify-between">
          <div className="flex flex-col  w-full text-sm">
            <div className=" flex flex-row w-full space-x-3 justify-evenly">
              <div className="flex flex-col w-full">
                <div>Item Name *</div>
                <div>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    value={item_name}
                    maxLength="15"
                    name="otp"
                    className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div>Item Code *</div>
                <div>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    value={item_code}
                    maxLength="15"
                    name="otp"
                    className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                    onChange={(e) => setItemCode(e.target.value)}
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
                    value={selling_price}
                    maxLength="15"
                    name="otp"
                    className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                    onChange={(e) => setSellPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div>Purchase Price</div>
                <div>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    value={purchase_price}
                    maxLength="15"
                    name="otp"
                    className="h-10 w-full p-2 rounded-md border-[1px] border-solid border-slate-200 mt-2"
                    onChange={(e) => setPurchasePrice(e.target.value)}
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
                    onChange={(e) => setUnit(e.target.value)}
                    value={unit}
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
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">{save_update}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
