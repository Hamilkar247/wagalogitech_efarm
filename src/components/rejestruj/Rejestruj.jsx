import React from "react";

function Rejestruj() {
    return (
      <div className="gray-bg"> 
        <div className="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h2 className="logo-name">Waga+</h2>
            </div>
            <h3>Zarejestruj w Waga+</h3>
            <p>Stwórz konto.</p>
            <form className="m-t" role="form" action="xyz.html">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Login" required=""/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required=""/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Hasło" required=""/>
              </div>
              <div className="form-group">
                <div className="checkbox i-checks"><label> <div class="icheckbox_square-green" style={{position: "relative"}}><input type="checkbox" style={{position: "absolute", opacity: "0"}}/><ins class="iCheck-helper" style={{ position: "absolute", top: "0%", left: "0%", display: "block", width: "100%", height: "100%", margin: "0px", padding: "0px", background: "rgb(255, 255, 255) none repeat scroll 0% 0%", border: "0px none", opacity: "0"}}></ins></div><i></i> Akceptuje warunki i zasady </label></div>
              </div>
              <button type="submit" className="btn btn-primary block full-width m-b">Rejestruj</button>
              <p className="text-muted text-center"><small>Masz już konto?</small></p>
              <a className="btn btn-sm btn-white btn-block" href="http://webapplayers.com/inspinia_admin-v2.9.4/login.html">Zaloguj się</a>
            </form>
            <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 © 2014</small> </p>
          </div>
        </div>

        <script src="inspinia/jquery-3.js"></script>
        <script src="inspinia/popper.js"></script>
        <script src="inspinia/bootstrap.js"></script>
        <script src="inspinia/icheck.js"></script>
      </div>
    );
}

export default Rejestruj;
