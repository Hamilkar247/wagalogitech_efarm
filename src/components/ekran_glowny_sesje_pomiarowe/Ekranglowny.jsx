import React from "react";
import ReactDom from "react-dom";
import DataTable from "react-data-table-component";
import seriipomiarowych_dane from "./seriipomiarowe_dane";
import { Link } from 'react-router-dom';
//import "../bootstrap"
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "components/ekranglowny.css"

//import ReactDOM from 'react-dom';
//import JqxDataTable from 'jqwidgets-react/react_jqxdatatable.js';

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
      name: "Nazwa serii pomiarowej",
      selector: (row) => row.nazwa_serii,
      sortable: true
    },
    {
      name: "Czas rozpoczęcia serii pomiaru",
      selector: (row) => row.start_serii,
      sortable: true
    },
    {
      name: "Czas zakończenie serii pomiaru",
      selector: (row) => row.koniec_serii,
      sortable: true
    },
    {
      name: "Liczba pomiarów",
      selector: (row) => row.liczba_pomiarow,
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
              Previous
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
              Next
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

function Ekranglowny() {
    return (
      /* Ekranglowny.jsx - początek */
      <div class="gray-bg">
        <div className="EkranGlowny">
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row align-items-center my-5">
              <Link to="/rozpocznij_serie_pomiarowa">
                <button type="submit" className="btn btn-primary block m-b">Nowa seria pomiarowa</button>
              </Link>
              <div className="col-lg-15 col-lg-13 col-lg-11 col-lg-7 col-lg-5 col-lg-3">
                <DataTable
                  title="Serie Pomiarowe"
                  columns={columns}
                  data={seriipomiarowych_dane}
                  defaultSortFieldID={1}
                  pagination
                  paginationComponent={BootyPagination}
                  selectableRows
                  selectableRowsComponent={BootyCheckBox}
              />
              </div>
            </div>
          </div>
          <script src="components/ekranglowny.css"></script>
          <script src="components/inspinia/js/jquery-3.1.1.min.js"></script>
          <script src="components/inspinia/js/popper.min.js"></script>
          <script src="components/inspinia/js/bootstrap.js"></script>
          <script src="components/inspinia/js/app.js" type="text/javascript"></script>
        </div>  
      </div>
    ) 
}

export default Ekranglowny;
