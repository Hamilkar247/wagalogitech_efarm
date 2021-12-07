import React, { useEffect, useState} from "react";
import Table from "./datatable_react_wagalogitech.jsx";
import dane_sesji_uzytkownika from "./dane_sesji_uzytkownika";
import "./stylesFilterTable.css"

const list_of_columns = [
   {
     name: "czas trwania sesji",
     selector: "czas_trwania_sesji",
     sortable: true,
     hide: "sm"
   },
   {
     name: "czas rozpoczecia sesji",
     selector: "czas_rozpoczecia_sesji",
     sortable: true,
     hide: "sm"
   },
   {
    name: "czas zakończenia sesji",
    selector: "czas_zakonczenia_sesji",
    sortable: true,
    hide: "sm"
  },
  // {
  //   name: "Buttons",
  //   button: true,
  //   cell: row =>
  //     row.showButtons ? (
  //       <>
  //         <button
  //           onClick={() => click(row.name)}
  //           style={{ marginRight: "5px" }}
  //         >
  //           Edit
  //         </button>
  //         <button onClick={() => props.click(row.name)}>Delete</button>
  //       </>
  //     ) : null
  // }
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
                  <Table columns={list_of_columns} data={dane_sesji_uzytkownika} click={clickhandler} />
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