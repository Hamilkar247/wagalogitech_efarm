import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function RozpocznijSeriePomiarowa() {
    return (
      <div className="pace-done">
        <div id="wrapper">
          {/* <div className="gray-bg">
            <div className="row wrapper border-bottom white-bg page-heading">
              <div className="col-lg-10">
                <h2>Rozpocznij seria pomiarowa</h2>
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
              <div className="col-lg-2">
              </div>
            </div>
            <div className="wrapper wrapper-content animated fadeInRight">
              <div className="row">
                 <div className="col-lg-12">
                   <div className="ibox ">
                     <div className="ibox-title">
                       <h5>Rozpocznij serie pomiarową <small> Dane serii pomiarowej </small></h5>
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
                     </div>
                     <div className="ibox-content">
                       <form method="get">
                         <div className="form-group  row"><label className="col-sm-2 col-form-label">Nazwa serii pomiarowej</label>
                           <div className="col-sm-10"><input type="text" className="form-control"/></div>
                         </div>
                         <div className="form-group row">
                           <label className="col-sm-2 col-form-label">Opis badanej substancji</label>
                           <div className="col-sm-10">
                             <input type="text" className="form-control"/> 
                             <span className="form-text m-b-none">Opis powinien zawierać dane na temat ważonego przedmiotu.</span>
                           </div>
                         </div>
                         <div className="form-group row">
                           <div className="col-sm-4 col-sm-offset-2">
                             <Link to="/">
                               <button className="btn btn-white btn-sm" type="submit">Anuluj</button>   
                             </Link>
                             <Link to="/trwanie_serii_pomiarowej">
                                <button className="btn btn-primary btn-sm" type="submit">Zapisz opis serii i zacznij pomiary</button>
                              </Link>
                           </div>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div> */}
         </div>
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
    )
}

export default RozpocznijSeriePomiarowa;