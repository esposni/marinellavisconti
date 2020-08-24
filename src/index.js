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
import utenti from "assets/utenti.json"
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
import EventoPage from "views/pages/EventoPage";
import DistanceHealingPage from "views/pages/DistanceHealingPage"
import GruppiSolidaliPage from "views/pages/GruppiSolidaliPage"
import CorpoCiboPage from "views/pages/CorpoCiboiPage"
import PraticaContemplativaPage from "views/pages/PraticaContemplativaPage"
import PercorsoCrescitaPage from "views/pages/PercorsoCrescitaPage"
import RilassamentoYogaPage from "views/pages/RilassamentoYogaPage"
import TraduzioniTestiPage from "views/pages/TraduzioniTestiPage"
import CuoreCuraPage from "views/pages/CuoreCuraPage"

import HomePage from "views/pages/HomePage"
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
          path="/percorso-crescita"
          render={props => <PercorsoCrescitaPage {...props} />}
        />
        
         <Route
          path="/corpo-cibo"
          render={props => <CorpoCiboPage {...props} />}
        />
        <Route
          path="/cuore-cura"
          render={props => <CuoreCuraPage {...props} />}
        />
         <Route
          path="/traduzione-testi"
          render={props => <TraduzioniTestiPage {...props} />}
        />

         <Route
          path="/rilassamento-yoga"
          render={props => <RilassamentoYogaPage {...props} />}
        />
          <Route
          path="/progetto"
          render={props => <HomePage {...props} />}
        />
        <Route
          path="/distance-healing"
          render={props => <DistanceHealingPage {...props} />}
        />
         <Route
          path="/gruppi-solidali"
          render={props => <GruppiSolidaliPage {...props} />}
        />
        <Route
          path="/pratica-contemplativa"
          render={props => <PraticaContemplativaPage {...props} />}
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
        

        {data.map( (el)=>{
          return  <Route
          key={el.id} 
          path={"/evento-"+el.id}
          render={props => 
          <EventoPage title={el.title}
          conduttori={el.conduttori}
          date={el.date}
          data_luogo={el.data_luogo}
          image={el.image}
          text={el.text}
          costo={el.costo}
          contatto={el.contatto}
          prerequisiti={el.prerequisiti}
          school={el.school}
          offerta_libera={el.offerta_libera}
          vitto_alloggio={el.vitto_alloggio}
          cit={el.cit}
          users={el.users}
          more_info={el.more_info}
          type={el.type} {...props} />}
          />
        })}

        {utenti.map((el)=>{
          return  <Route
          key={el.id} 
          path={"/"+el.link}
          render={props => 
          <ProfilePage name={el.name}
          desc={el.desc}
          img={el.img}
          school={el.school}
          text={el.curriculum}
           {...props} />}
          />
        })}
         
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
          render={props => <PsicoterapiaPage online={false} {...props} />}
        />

          <Route
          path="/psicoterapia-online"
          render={props => <PsicoterapiaPage online={true} {...props} />}
        />
       
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
