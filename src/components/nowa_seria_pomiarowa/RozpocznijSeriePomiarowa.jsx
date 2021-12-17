import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function RozpocznijSeriePomiarowa() {
    return (
      <div class="pace-done">
        <div id="wrapper">
          <div class="gray-bg">
            <div class="row wrapper border-bottom white-bg page-heading">
              <div class="col-lg-10">
                <h2>Rozpocznij seria pomiarowa</h2>
                <ol class="breadcrumb">
                  <li class="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Home /
                    </NavLink>
                  </li>
                  <li class="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Formularze /
                    </NavLink>
                  </li>
                  <li class="nav-link">
                    <NavLink className="navbar-link" to="/">
                    Trwanie serii pomiarowej /
                    </NavLink>
                  </li>
                </ol>
              </div>
              <div class="col-lg-2">
              </div>
            </div>
            <div class="wrapper wrapper-content animated fadeInRight">
              <div class="row">
                 <div class="col-lg-12">
                   <div class="ibox ">
                     <div class="ibox-title">
                       <h5>Rozpocznij serie pomiarową <small> Dane serii pomiarowej </small></h5>
                       <div class="ibox-tools">
                         <a class="collapse-link">
                           <i class="fa fa-chevron-up"></i>
                         </a>
                         <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                           <i class="fa fa-wrench"></i>
                         </a>
                         <ul class="dropdown-menu dropdown-user">
                           <li><a href="#" class="dropdown-item">Config option 1</a>
                           </li>
                           <li><a href="#" class="dropdown-item">Config option 2</a>
                           </li>
                         </ul>
                         <a class="close-link">
                           <i class="fa fa-times"></i>
                         </a>
                       </div>
                     </div>
                     <div class="ibox-content">
                       <form method="get">
                         <div class="form-group  row"><label class="col-sm-2 col-form-label">Nazwa serii pomiarowej</label>
                           <div class="col-sm-10"><input type="text" class="form-control"/></div>
                         </div>
                         <div class="form-group row">
                           <label class="col-sm-2 col-form-label">Opis badanej substancji</label>
                           <div class="col-sm-10">
                             <input type="text" class="form-control"/> 
                             <span class="form-text m-b-none">Opis powinien zawierać dane na temat ważonego przedmiotu.</span>
                           </div>
                         </div>
                         <div class="form-group row">
                           <div class="col-sm-4 col-sm-offset-2">
                             <Link to="/">
                               <button class="btn btn-white btn-sm" type="submit">Anuluj</button>   
                             </Link>
                             <Link to="/trwanie_serii_pomiarowej">
                                <button class="btn btn-primary btn-sm" type="submit">Zapisz opis serii i zacznij pomiary</button>
                              </Link>
                           </div>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
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