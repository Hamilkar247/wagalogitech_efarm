import React from "react";

function Rejestruj() {
    return (
      <body class="gray-bg"> 
        <div class="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h1 class="logo-name">IN+</h1>
            </div>
            <h3>Zarejestruj w Waga+</h3>
            <p>Stwórz konto.</p>
            <form class="m-t" role="form" action="xyz.html">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Login" required=""/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" required=""/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Hasło" required=""/>
              </div>
              <div class="form-group">
                <div class="checkbox i-checks"><label> <div class="icheckbox_square-green" style={{position: "relative"}}><input type="checkbox" style={{position: "absolute", opacity: "0"}}/><ins class="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255) none repeat scroll 0% 0%", border: "0px none", opacity: "0"}}></ins></div><i></i> Akceptuje warunki i zasady </label></div>
              </div>
              <button type="submit" class="btn btn-primary block full-width m-b">Rejestruj</button>
              <p class="text-muted text-center"><small>Masz już konto?</small></p>
              <a class="btn btn-sm btn-white btn-block" href="http://webapplayers.com/inspinia_admin-v2.9.4/login.html">Login</a>
            </form>
            <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
          </div>
        </div>

        <script src="inspinia/jquery-3.js"></script>
        <script src="inspinia/popper.js"></script>
        <script src="inspinia/bootstrap.js"></script>
        <script src="inspinia/icheck.js"></script>
      </body>
    );
}

export default Rejestruj;
