import React from "react";
import ReactDom from "react-dom";
import DataTable from "react-data-table-component";
import oknopomiar_dane from "./oknopomiar_dane";
import oknoseriipomiarowych_dane from "./oknoseriipomiarowych_dane";

function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }
  
  function toPages(pages) {
    const results = [];
  
    for (let i = 1; i < pages; i++) {
      results.push(i);
    }
  
    return results;
  }
  
  const columns = [
    {
      name: "Wartość",
      selector: (row) => row.wartosc,
      sortable: true
    },
    {
      name: "Etykieta",
      selector: (row) => row.etykieta,
      sortable: true
    },
    {
      name: "Data",
      selector: (row) => row.data,
      sortable: true
    },
    {
      name: "Ważny",
      selector: (row) => row.wazny,
      sortable: true
    }
  ];
  
  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };
  
    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };
  
    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };
  
    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;
  
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Poprzedni
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";
  
            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Następny
            </button>
          </li>
        </ul>
      </nav>
    );
  };

const BootyCheckBox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
     onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

function TrwanieSeriiPomiarowej() {
    return (
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen animated fadeInDown"></div>
        <div className="container">     
          <div id="trwa_seria_pomiarowa">  
            Trwa seria pomiarowa. MIEJSCE NA NAZWE SERII POMIAROWEJ
          </div>            
          <div className="row align-items-center my-5">
            <div className="col-lg-11 col-lg-9 col-lg-7 col-lg-5">
              <div> Zakończ serie pomiarową _ Zatrzymaj serie pomiarową _ Dodaj pomiar ręcznie _ Exportuj pomiary </div>
              <DataTable
                  title="Zmierzone wartości"
                  columns={columns}
                  data={oknoseriipomiarowych_dane}
                  defaultSortFieldID={1}
                  pagination
                  paginationComponent={BootyPagination}
                  selectableRows
                  selectableRowsComponent={BootyCheckBox}
              />
            </div>
          </div>
          <script src="components/ekranglowny.css"></script>
        </div>
      </div>
    )
}

export default TrwanieSeriiPomiarowej;