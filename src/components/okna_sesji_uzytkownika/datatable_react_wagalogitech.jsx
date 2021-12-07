import React, { useMemo, useState } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = props => {
  const columns = []
  columns.push.apply(
    columns,
    [
      props.columns,
      {
        name: "Buttons",
        button: true,
        cell: row =>
          row.showButtons ? (
            <>
              <button
                onClick={() => columns.click(row.czas_trwania_sesji)}
                style={{ marginRight: "5px" }}
              >
                Edytuj
              </button>
              <button onClick={() => columns.click(row.czas_trwania_sesji)}>Usuń</button>
            </>
          ) : null
      }
    ]
  )
  // const columns = [
  //   props.columns,
  //   // {
  //   //   name: "Buttons",
  //   //   button: true,
  //   //   cell: row =>
  //   //     row.showButtons ? (
  //   //       <>
  //   //         <button
  //   //           onClick={() => props.click(row.name)}
  //   //           style={{ marginRight: "5px" }}
  //   //         >
  //   //           Edit
  //   //         </button>
  //   //         <button onClick={() => props.click(row.name)}>Delete</button>
  //   //       </>
  //   //     ) : null
  //   // }
  // ]

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );
  
  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
  
    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  
  return (
    <DataTable
      title="Sesje Uzytkownika"
      columns={props.columns}
      data={filteredItems}
      expandableRows
      defaultSortField="name"
      stripped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
