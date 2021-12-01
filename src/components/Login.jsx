import React from "react";

function Login() {
    return (
      <body class="gray-bg">  
        <div class="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h2 class="logo-name">Waga+</h2>
            </div>
            <h3>Witaj w Wagalogitech</h3>
              <p>Zaloguj się</p>
              <form class="m-t" role="form" action="xyz.html">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Username" required=""/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" required=""/>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Login</button>
                <a href="#"><small>Zapomniałeś hasła?</small></a>
                <p class="text-muted text-center"><small>Nie masz konta??</small></p>
                <a class="btn btn-sm btn-white btn-block" href="http://webapplayers.com/inspinia_admin-v2.8/register.html">Create an account</a>
             </form>
             <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
          </div>
        </div>
        <script src="components/inspinia/js/jquery-3.1.1.min.js"></script>
        <script src="components/inspinia/js/popper.min.js"></script>
        <script src="components/inspinia/js/bootstrap.js"></script>
        <script src="components/inspinia/js/app.js" type="text/javascript"></script>
      </body>
    );
}

export default Login;
