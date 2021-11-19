import React from "react";
//import ReactDOM from 'react-dom';
import JqxDataTable from 'jqwidgets-react/react_jqxdatatable.js';

function Ekranglowny() {
    return 
         let source = 
         {
             localdata: generatedata(85),
             datatype: "array",
             datafields:
             [
                 { name: 'firstname', type: 'string' },
                 { name: 'lastname', type: 'string' },
                 { name: 'productname', type: 'string' },
                 { name: 'quantity', type: 'number' },
                 { name: 'price', type: 'number' },
                 { name: 'total', type: 'number' }
             ]
         };
         let dataAdapter = new $.jqx.dataAdapter(this.source);
      
         let columns = 
         [
             { text: 'Name', dataField: 'firstname', width: 200 },
             { text: 'Last Name', dataField: 'lastname', width: 200 },
             { text: 'Product', editable: false, dataField: 'productname', width: 180 },
             { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsAlign: 'right' },
             { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
             { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
         ];
         return (
             <JqxDataTable 
                 source={dataAdapter} sortable={true}
                 pageable={true} columns={columns}
              />
         )
}

export default Ekranglowny;
