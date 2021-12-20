import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  ColumnsDirective,
  RangesDirective,
  RangeDirective
} from "@syncfusion/ej2-react-spreadsheet";
import {
  RowsDirective,
  RowDirective,
  CellsDirective,
  CellDirective,
  ColumnDirective
} from "@syncfusion/ej2-react-spreadsheet";
// import "./styles.css";
// import { freezePaneData } from "./data.js";

function PrzykladowyArkuszDanych() {
    const [freezeRowCount, setCount] = useState(1);
    const cellStyle = {
      fontSize: "12pt",
      fontWeight: "bold",
      textAlign: "center",
      verticalAlign: "middle"
    };
  
    const bold = { fontWeight: "bold" };
    return (
      <>
        <div className="control-section spreadsheet-control">
          <SpreadsheetComponent>
          </SpreadsheetComponent>
        </div>
      </>
    )
}

export default PrzykladowyArkuszDanych;