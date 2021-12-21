import React from "react";
import ReactDom from "react-dom";
import DataTable from "react-data-table-component";
import trwajaca_sesja_dane from "../folder_danych/trwajaca_sesja_dane";
import Table from "../komponenty_ui/datatable_react_wagalogitech";
import { NavLink } from "react-router-dom";
import ArkuszDanychComponent from "../arkusz_danych/ArkuszDanychComponent";

// function getNumberOfPages(rowCount, rowsPerPage) {
//     return Math.ceil(rowCount / rowsPerPage);
//   }
  
// function toPages(pages) {
//   const results = [];

//   for (let i = 1; i < pages; i++) {
//     results.push(i);
//   }

//   return results;
// }
  
// const list_of_columns = [
//   {
//     name: "Wartość",
//     selector: (row) => row.wartosc,
//     sortable: true
//   },
//   {
//     name: "Etykieta",
//     selector: (row) => row.etykieta,
//       sortable: true
//   },
//   {
//     name: "Data",
//     selector: (row) => row.data,
//     sortable: true
//   },
//   {
//     name: "Ważny",
//     selector: (row) => row.wazny,
//       sortable: true
//     }
// ];

// // RDT exposes the following internal pagination properties
// const BootyPagination = ({
//   rowsPerPage,
//   rowCount,
//   onChangePage,
//   onChangeRowsPerPage, // available but not used here
//   currentPage
//   }) => {
//   const handleBackButtonClick = () => {
//     onChangePage(currentPage - 1);
//   };

//   const handleNextButtonClick = () => {
//     onChangePage(currentPage + 1);
//   };

//   const handlePageNumber = (e) => {
//     onChangePage(Number(e.target.value));
//   };

//   const pages = getNumberOfPages(rowCount, rowsPerPage);
//   const pageItems = toPages(pages);
//   const nextDisabled = currentPage === pageItems.length;
//   const previosDisabled = currentPage === 1;

//   return (
//       <nav>
//         <ul className="pagination">
//           <li className="page-item">
//             <button
//               className="page-link"
//               onClick={handleBackButtonClick}
//               disabled={previosDisabled}
//               aria-disabled={previosDisabled}
//               aria-label="previous page"
//             >
//               Poprzedni
//             </button>
//           </li>
//           {pageItems.map((page) => {
//             const className =
//               page === currentPage ? "page-item active" : "page-item";
  
//             return (
//               <li key={page} className={className}>
//                 <button
//                   className="page-link"
//                   onClick={handlePageNumber}
//                   value={page}
//                 >
//                   {page}
//                 </button>
//               </li>
//           );
//         })}
//         <li className="page-item">
//           <button
//             className="page-link"
//             onClick={handleNextButtonClick}
//             disabled={nextDisabled}
//             aria-disabled={nextDisabled}
//           aria-label="next page"
//           >
//             Następny
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const BootyCheckBox = React.forwardRef(({ onClick, ...rest }, ref) => (
//     <div className="form-check">
//       <input
//         htmlFor="booty-check"
//         type="checkbox"
//         className="form-check-input"
//         ref={ref}
//      onClick={onClick}
//       {...rest}
//     />
//     <label className="form-check-label" id="booty-check" />
//   </div>
// ));

function List_of_buttons() {
    return (
    <div id="przyciski">
      {/* <Link> */}
      <button type="button" className="btn btn-w-m btn-warning">Zakończ serie pomiarową</button>
      {/* </Link> */}
      {/* <Link> */}
      <button type="button" className="btn btn-w-m btn-primary">Zatrzymaj serie pomiarową</button>
      {/* </Link> */}
      {/* <Link> */}
      <button type="button" className="btn btn-w-m btn-danger">Dodaj pomiar ręcznie</button>
      {/* </Link> */}
      {/* <Link> */}
      <button type="button" className="btn btn-w-m btn-success">Eksportuj pomiary</button>
      {/* </Link> */}
    </div>
    );
};

//const Elementtt = <h1>Ahoj_test</h1>

function TrwanieSeriiPomiarowej() {

    // const clickhandler = name => console.log("delete", name);
    //const list_of_buttons=

    return (
      <div className="pace-done">
        <div id="wrapper">
          <div className="ahoj">
            <ArkuszDanychComponent></ArkuszDanychComponent>
          </div>
          <div className="gray-bg">
            <div className="row wrapper border-bottom white-bg page-heading">     
              <div className="col-lg-10">
                <h2>Trwająca seria pomiarową <small> Dane serii pomiarowej </small></h2>
                 <div className="ibox-tools">
                   <a className="collapse-link">
                     <i className="fa fa-chevron-up"></i>
                   </a>
                   <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                     <i className="fa fa-wrench"></i>
                   </a>
                   <ul className="dropdown-menu dropdown-user">
                     <li><a href="#" className="dropdown-item">Config option 1</a>
                     </li>
                     <li><a href="#" className="dropdown-item">Config option 2</a>
                     </li>
                   </ul>
                   <a className="close-link">
                     <i className="fa fa-times"></i>
                   </a>
                 </div>
                Trwa seria pomiarowa. MIEJSCE NA NAZWE SERII POMIAROWEJ
                <ol className="breadcrumb">
                  <li className="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Home /
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Formularze /
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Trwanie serii pomiarowej /
                    </NavLink>
                  </li>
                </ol>
              </div>
            </div>            
            <div className="wrapper wrapper-content animated fadeInRight">
              <div className="col-lg-11 col-lg-9 col-lg-7 col-lg-5">
                <div> 
                  <List_of_buttons />
                  {/* <DataTable */}
                  {/* //  title="Zmierzone wartości"
                    columns={columns}
                    data={dane}
                    defaultSortFieldID={1}
                    pagination
                    paginationComponent={BootyPagination}
                    selectableRows
                    selectableRowsComponent={BootyCheckBox}
                  > */}
                  {/* <Table columns={list_of_columns} data={trwajaca_sesja_dane} click={clickhandler} /> */}
                </div>
              </div>  
            </div>
        </div>
        <script src="components/ekranglowny.css"></script>
              {/*<!-- Mainly scripts -->*/}
              <script src="/components/inspinia/jquery-3.js"></script>
              <script src="/components/inspinia/popper.js"></script>
              <script src="/components/inspinia/bootstrap.js"></script>
              <script src="/components/inspinia/jquery_002.js"></script>
              <script src="/components/inspinia/jquery.js"></script>
              {/*<!-- Custom and plugin javascript -->*/}
              <script src="/components/inspinia/inspinia.js"></script>
              <script src="/components/inspinia/pace.js"></script>
              <script src="/components/inspinia/icheck.js"></script>
      </div>
      </div>
    )
}

export default TrwanieSeriiPomiarowej;