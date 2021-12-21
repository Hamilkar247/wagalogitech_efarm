import React, { useMemo, useState } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

// const Table = props => {
//   const columns = []
//   columns.push.apply(
//     columns,
//     [
//       props.columns,
//       {
//         name: "Buttons",
//         button: true,
//         cell: row =>
//           row.showButtons ? (
//             <>
//               <button
//                 onClick={() => columns.click(row.czas_trwania_sesji)}
//                 style={{ marginRight: "5px" }}
//               >
//                 Edytuj
//               </button>
//               <button onClick={() => columns.click(row.czas_trwania_sesji)}>Usuń</button>
//             </>
//           ) : null
//       }
//     ]
//   )

//   const [filterText, setFilterText] = React.useState("");
//   const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
//     false
//   );
  
//   const filteredItems = props.data.filter(
//     item =>
//       JSON.stringify(item)
//         .toLowerCase()
//         .indexOf(filterText.toLowerCase()) !== -1
//   );
  

//   const subHeaderComponent = useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };
  
//     return (
//       <FilterComponent
//         onFilter={e => setFilterText(e.target.value)}
//         onClear={handleClear}
//         filterText={filterText}
//       />
//     );
//   }, [filterText, resetPaginationToggle]);


//   function convertArrayOfObjectsToCSV(array) {
//     let result;

//     const columnDelimiter = ',';
//     const lineDelimiter = '\n';
//     const keys = Object.keys(props.data[0])

//     result = '';
//     result += keys.join(columnDelimiter)
    
//     array.forEach(item => {
//           let ctr = 0;
//           keys.forEach(key =>{
//               if (ctr > 0) result += columnDelimiter;

//               result += item[key];

//               ctr++;
//           });
//           result += lineDelimiter;
//     });

//     return result;
//   }

//   function downloadCSV(array) {
//     const link = document.createElement('a');
//     let csv = convertArrayOfObjectsToCSV(array);
//     if (csv == null) return;

//     const filename = "export.csv";

//     if (!csv.match(/^data:text\/csv/i)) {
//       csv = `data:text/csv;charset=utf-8,${csv}`;
//     }

//     link.setAttribute('href', encodeURI(csv));
//     link.setAttribute('download', filename);
//     link.click();
//   }

//   const Export = ({ onExport }) => <button type="button" class="btn btn-w-m btn-success" onClick ={e=> onExport(e.target.value)}>Eksportuj pomiary</button>

//   //const ExportCSV = () => {
//   const ExportCSV = React.useMemo(() => <Export onExport={() => downloadCSV(props.data)} />, []);
//   //}
//   //  = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
 
  // return (
  //   <DataTable
  //     title="Sesje Uzytkownika"
      // columns={props.columns}
      // data={filteredItems}
      // actions={ExportCSV}
      // expandableRows
      // defaultSortField="name"
      // stripped
      // pagination
      // subHeader
      // subHeaderComponent={subHeaderComponent}
//     />
//   );
// };
function Table() {
  return (
    <>

    </>
  )
}

export default Table;
