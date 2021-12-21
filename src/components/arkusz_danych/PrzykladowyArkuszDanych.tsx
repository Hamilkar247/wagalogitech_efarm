import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
// import {
//   SpreadsheetComponent,
//   SheetsDirective,
//   SheetDirective,
//   ColumnsDirective,
//   RangesDirective,
//   RangeDirective
// } from "@syncfusion/ej2-react-spreadsheet";
// import {
//   RowsDirective,
//   RowDirective,
//   CellsDirective,
//   CellDirective,
//   ColumnDirective
// } from "@syncfusion/ej2-react-spreadsheet"; 
import "./styles.css";
// import { freezePaneData } from "./data.js";

function PrzykladowyArkuszDanych() {
    // const [freezeRowCount, setCount] = useState(1);
    // const cellStyle = {
    //   fontSize: "12pt",
    //   fontWeight: "bold",
    //   textAlign: "center",
    //   verticalAlign: "middle"
    // };
  
    // const bold = { fontWeight: "bold" };
    return (
      <>
        <div className="App">
          <SpreadsheetComponent>
          </SpreadsheetComponent>
        </div>
      </>
    )
}

export default PrzykladowyArkuszDanych;