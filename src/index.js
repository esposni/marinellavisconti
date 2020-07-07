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

import data from "assets/data_events.json"
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LoginPage from "views/examples/LoginPage.js";
import PsicoterapiaPage from "views/pages/PsicoterapiaPage.js";
import FormazionePage from "views/pages/FormazionePage";
import FormazioneAvanzataPage from "views/pages/FormazioneAvanzataPage";
import PraticaServPage from "views/pages/PraticaServPage";
import CraniosacralePage from "views/pages/CraniosacralePage";
import RitiriPage from "views/pages/RitiriPage";
import RitiriVipassanaPage from "views/pages/RitiriVipassanaPage";
import ProfilePage from "views/pages/ProfilePage.js";
import ConsapevolPage from "views/pages/ConsapevolPage";
import PremessaPage from "views/pages/Premessa";
import FormazioneEvents from "views/pages/FormazioneEvents";
import EventiCentroPage from "views/pages/EventiCentroPage";
import EventoPage from "views/pages/Evento";

// let text_event1=`Il Campo, lo spazio sacro è originato da forze dentro e fuori da noi più dalla quiete da cui originano.
// Le forze che agiscono nel campo precedono la genetica e sono espressione della Matrice che ordina la vita stessa e questo è un punto di vista che contempla il mistero.
// Se coltiviamo Presenza lo spazio diventa Sacro e nulla può accadere di pericoloso....i condizionamenti si resettano, le nostre storie individuali diventano quelle di tutti.....siamo nell’indifferenziato....ci incontriamo nella stessa radura...sacro e ordinario co emergono. La pratica nella vita è condivisa.... Il nostro risveglio è in relazione....il materiale che sorge nel lavoro in relazione dà forma al gruppo e parte del processo è scegliere cosa nutrire e cosa no.. Più ci sentiamo al sicuro, più andiamo in profondità e il modo in cui generiamo sicurezza pulisce lo spazio e lo rende onesto, nudo...
// Ognuno incontra la propria sofferenza..... è un lavoro enorme significa chiedersi chi siamo sinceramente e prendersi la responsabilità della natura della sofferenza e dei nostri processi. La guarigione può avvenire nel presente ed è relazionale....il campo è una rappresentazione della compassione in azione.....Lo spazio non è mai vuoto, è una soglia tra ciò che è noto è ciò che non è noto o ignoto, è consapevolezza e guarigione.
// `

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
          path="/evento-1"
          render={props => 
          <EventoPage title={data[0].title}
          conduttori={data[0].conduttori}
          date={data[0].date}
          image={data[0].image}
          text={data[0].text} {...props} />}
        />
         <Route
          path="/formazione-events"
          render={props => <FormazioneEvents {...props} />}
        />
         <Route
          path="/eventi-centro"
          render={props => <EventiCentroPage {...props} />}
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
          path="/ritiri-vipassana"
          render={props => <RitiriVipassanaPage {...props} />}
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
