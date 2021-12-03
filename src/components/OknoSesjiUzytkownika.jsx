import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import data from "./data.jsx";
import Table from "./DataTable.jsx";

import "./stylesFilterTable.css"

// const columns = [
//     {
//         name: 'Title',
//         selector: row => row.title,
//         filterable: true,
//     },
//     {
//         name: 'Year',
//         selector: row => row.year,
//         filterable: true,
//     },
// ];

// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
//     {
//       id: 1,
//       title: 'Beetlejuice',
//       year: '1988',
//   },
//   {
//       id: 2,
//       title: 'Ghostbusters',
//       year: '1984',
//   },
//   {
//     id: 1,
//     title: 'Beetlejuice',
//     year: '1988',
//   },
//   {
//     id: 2,
//     title: 'Ghostbusters',
//     year: '1984',
//   },
//   {
//     id: 1,
//     title: 'Beetlejuice',
//     year: '1988',
//   },
//   {
//     id: 2,
//     title: 'Ghostbusters',
//     year: '1984',
//   }
// ]


const users = [
  {
    id: 1,
    name: 'Hamilkar',
    email: 'hamilkar@wiecznakartagina.qrt',
    address: 'Kartagina 22-100'
  },
  {
    id: 2,
    name: 'Hazdrubal',
    email: 'hazdrubal@wiecznakartagina.qrt',
    address: 'Kartagina 22-100'
  },
  {
    id: 3,
    name: 'Hannibal',
    email: 'hannibal@wiecznakartagina.qrt',
    address: 'Kartagina 22-100'
  },
  {
    id: 4,
    name: 'Hamilkar',
    email: 'hamilkar@wiecznakartagina.qrt',
    address: 'Kartagina 22-100'
  }
]

const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true
  },
  {
    name: "Imię",
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true
  }
]


function OknoSesjiUzytkownika() {
  const clickhandler = name => console.log("delete", name);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Table data={data} click={clickhandler} />
    </div>
  );
};

export default OknoSesjiUzytkownika;