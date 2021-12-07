import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
      <div className="gray-bg">  
        <div className="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h2 className="logo-name">Waga+</h2>
            </div>
            <h3>Witaj w Wagalogitech</h3>
              <p>Zaloguj się</p>
              <form className="m-t" role="form" action="xyz.html">
                <div className ="form-group">
                  <input type="email" className="form-control" placeholder="Username" required=""/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" required=""/>
                </div>
                <Link to="/ekran_glowny">
                <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                </Link>
                <a href="#"><small>Zapomniałeś hasła?</small></a>
                <p className="text-muted text-center"><small>Nie masz konta??</small></p>
                <a className="btn btn-sm btn-white btn-block" href="http://webapplayers.com/inspinia_admin-v2.8/register.html">Stwórz konto</a>
             </form>
             <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
          </div>
        </div>
        <script src="components/inspinia/js/jquery-3.1.1.min.js"></script>
        <script src="components/inspinia/js/popper.min.js"></script>
        <script src="components/inspinia/js/bootstrap.js"></script>
        <script src="components/inspinia/js/app.js" type="text/javascript"></script>
      </div>
    );
}

export default Login;
