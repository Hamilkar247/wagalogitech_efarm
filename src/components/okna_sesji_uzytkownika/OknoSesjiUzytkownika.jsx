import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
import data from "../data.jsx";
import Table from "../datatable_react_wagalogitech.jsx";

import "./stylesFilterTable.css"

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
    <div className="pace-done">
      <div id="wrapper">
        <div className="gray-bg">
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="ibox">
              <div className="ibox-title">
                <div id="col-lg-10">
                  <h1>Sesje użytkownika MIEJSCE NA LOGIN UZYTKOWNIKA</h1>
                </div>
              </div>
              <div className="ibox-content">
                <div className="text-center wrapper wrapper-content animated fadeInRight">
                  {/* <div className="col-lg-17 col-lg-14 col-lg-11 col-lg-8 col-lg-5"> */}
                  <Table data={data} click={clickhandler} />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OknoSesjiUzytkownika;