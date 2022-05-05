import React, { useEffect, useMemo, useReducer, useState } from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  useRowSelect,
} from "react-table/dist/react-table.development";
import { itemReducer } from "../reducers/itemReducer";
import { BiSearch } from "react-icons/bi";
import { COLUMNS } from "./COLUMN";
import { MOCK_DATA } from "./MOCK_DATA";
import { Checkbox } from "./checkBox";

const TableContent = ({
  items,
  filter,
  setFilter,
  setItemName,
  setItemCode,
  setSellPrice,
  setPurchasePrice,
  setUnit,
  setDate,
  setEditId,
  edata,
  setEdata,
  onRowClick,
  eData
}) => {
  //const data = useMemo(() => MOCK_DATA, []);
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
              <Checkbox onClick={onRowClick(eData.id)} {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );


   
    if(selectedFlatRows!=""){
      console.log(selectedFlatRows[0].original)
      setEdata(selectedFlatRows[0].original)

      //console.log(eData.item_name, eData.item_code)
    }
    
  // console.log(selectedFlatRows.length)
  //   useEffect(() => {
    
  //     if(selectedFlatRows.length === 1){
  //       setEdata(selectedFlatRows[0].values)
  //     console.log(eData)
  //     }
  //   },[selectedFlatRows])

  // if(selectedFlatRows.length === 1){
  //   console.log( selectedFlatRows[0].values )
  //   setEdata(selectedFlatRows[0].values)

  //   // setItemName("")
  //   // setItemCode("")
  //   // setSellPrice("")
  //   // setPurchasePrice("")
  //   // setUnit("")
  //   // setDate("")

  // //  console.log(selectedFlatRows[0].values.item_name)
  //   setItemName(selectedFlatRows[0].values.item_name)
  //  // console.log(selectedFlatRows[0].values.item_code)
  //   setItemCode(selectedFlatRows[0].values.item_code)
  //  // console.log(selectedFlatRows[0].values.selling_price)
  //   setSellPrice(selectedFlatRows[0].values.selling_price)
  //  // console.log(selectedFlatRows[0].values.purchase_price)
  //   setPurchasePrice(selectedFlatRows[0].values.purchase_price)
  //  // console.log(selectedFlatRows[0].values.unit)
  //   setUnit(selectedFlatRows[0].values.unit)
  //  // console.log(selectedFlatRows[0].values.date)
  //   setDate(selectedFlatRows[0].values.date)
  // }

  const setSearch = (e) => {
    const z = e.target.value;
    setGlobalFilter(z);
    setFilter(z);
  };
  const { globalFilter } = state;
  //console.log(filter)

  return (
    <>
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
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
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
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};

export default TableContent;
