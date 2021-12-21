import React from "react";

function Pusta_Strona() {
  return (
    <body>
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-9">
          <h2>Pusta strona</h2>
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Ahoj </a>
            </li>
            <li className="active">
              <strong>Breadcrumb</strong>
            </li>
          </ol>
        </div>
        <div className="col-lg-3">
          <div className="title-action">
            <a href="" className="btn btn-primary">Ahoj </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="wrapper wrapper-content">
          </div>
        </div>
      </div>        
    </body>         
  )
}

export default Pusta_Strona;

