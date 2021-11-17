import React from "react";

function Login() {
    return (
      <body class="gray-bg"> 
        <div class="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h1 class="logo-name">IN+</h1>
            </div>
            <h3>Witaj w Wagalogitech</h3>
              <p>Zaloguj się</p>
              <form class="m-t" role="form" action="index.html">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Username" required=""/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password" required=""/>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Login</button>
                <a href="#"><small>Forgot password?</small></a>
                <p class="text-muted text-center"><small>Do not have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="http://webapplayers.com/inspinia_admin-v2.8/register.html">Create an account</a>
             </form>
             <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
          </div>
        </div>
        <script src="src/library/inspinia/js/jquery-3.1.1.min.js"></script>
        <script src="src/library/inspinia/js/popper.min.js"></script>
        <script src="src/library/inspinia/js/bootstrap.js"></script>
        <script src="INSPINIA%20|%20Login_pliki/app.js" type="text/javascript"></script>
      </body>
    );
}

export default Login;
