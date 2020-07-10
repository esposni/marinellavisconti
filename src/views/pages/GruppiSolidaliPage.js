import React from "react";

// reactstrap components
import {
 
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
// import AlertDialogSlide from "components/PopUpButton.js";

export default function GruppiSolidaliPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader image="orecchio.jpeg" title={`Attivismo contemplativo: gruppi solidali di Ascolto Profondo "da essere a essere"`} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              {/* <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/distance_healing.jpg")}
                    ></img><br/><br/> */}
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">{`Attivismo contemplativo: gruppi solidali di Ascolto Profondo "da essere a essere"`} </h2>
                <h5 align="left">Gruppi solidali di ascolto profondo “essere ad essere” 

I gruppi sono rivolti a psicoterapeuti, medici, educatori e ricercatori spirituali che abbiano già fatto  un lavoro su di sé </h5>
                <h5 align="left">Attivismo contemplativo: sostenere chi sostiene per contribuire a creare un gruppo di persone che possono contribuire a creare le condizioni di un benessere più ampio nella comunità.

Una volta al mese da ottobre a giugno  ogni primo mercoledì dalle 12.00 alle 14. Massimo 12 persone.

Gli incontri sono ad offerta libera e le offerte verranno impiegate per il sostegno al progetto “Braveheartfulness School progetto formativo volto a sostenere la formazione di coloro che hanno motivazione per creare le  condizioni di un benessere più ampio nella comunità  “piccoli bodhisattva  crescono” </h5>

              
              
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Dove trovarmi</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio-milano.jpg")}
                    ></img>
                    <h4 className="title">Centro Mindfulness Milano</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Cenisio, 5 <br/>
                    Per contattarmi: 338 2331754
                    
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio2.png")}
                    ></img>
                    <h4 className="title">Studio privato</h4>
                  
                    Via Auguadri 22 Como
               
                   
                  </div>
                </Col>
               
              </Row>
            </div>
          </Container>
        </div>
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

