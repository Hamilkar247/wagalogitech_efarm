import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import seriipomiarowych_dane from "../folder_danych/serie_pomiarowe_dane";

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

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
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

function App() {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <div className="gray-bg">
          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="ibox">
              <div className="ibox-title">
                <div id="col-lg-10">
                  <h1>Ekran główny</h1>
                </div>
              </div>
              <div className="ibox-content">
                <Link to="/nowa_seria_pomiarowa/RozpocznijSeriePomiarow">
                  <button type="submit" className="btn btn-primary block full-width m-b">Rozpocznij nową serie pomiarową</button>
                </Link>
                <div className="serie_pomiarowe">
                  <DataTable
                    title="Serie pomiarowe"
                    columns={columns}
                    data={seriipomiarowych_dane}
                    defaultSortFieldID={1}
                    pagination
                    paginationComponent={BootyPagination}
                    selectableRows
                    selectableRowsComponent={BootyCheckbox}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
