/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
import PsicoterapiaPage from "views/examples/PsicoterapiaPage.js";
import FormazionePage from "views/examples/FormazionePage";
import FormazioneAvanzataPage from "views/examples/FormazioneAvanzataPage";
import PraticaServPage from "views/examples/PraticaServPage";
import CraniosacralePage from "views/examples/CraniosacralePage";
import RitiriPage from "views/examples/RitiriPage";
import ProfilePage from "views/examples/ProfilePage.js";
import ConsapevolPage from "views/examples/ConsapevolPage";
import PremessaPage from "views/examples/Premessa";
import FormazioneEvents from "views/examples/FormazioneEvents";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/formazione"
          render={props => <FormazionePage {...props} />}
        />
        <Route
          path="/formazione-avanzata"
          render={props => <FormazioneAvanzataPage {...props} />}
        />
         <Route
          path="/pratica-di-servizio"
          render={props => <PraticaServPage {...props} />}
        />
         <Route
          path="/consapevolezza"
          render={props => <ConsapevolPage {...props} />}
        />
         <Route
          path="/formazione-events"
          render={props => <FormazioneEvents {...props} />}
        />
           <Route
          path="/premessa"
          render={props => <PremessaPage {...props} />}
        />
         <Route
          path="/craniosacrale"
          render={props => <CraniosacralePage {...props} />}
        />
         <Route
          path="/ritiri"
          render={props => <RitiriPage {...props} />}
        />
        <Route
          path="/psicoterapia"
          render={props => <PsicoterapiaPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        {/* <Route path="/login-page" render={props => <LoginPage {...props} />} /> */}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
