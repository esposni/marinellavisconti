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
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
import DonazioneButton from "views/pages/Donazione"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function PraticaContemplativaPage() {
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
        <PageHeader image="orecchio.jpeg" title={`Siate lì tutto il tempo con la vostra schiettezza e tenerezza...`}ifdesc={true} />
        <div className="section section-about-us">
          <Container>
            <Row>
            <Col className="" md="4">

              <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/pratica_contemplativa.png")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">La pratica contemplativa nella vita quotidiana</h2>
                <h5 align="center">Condotto da Marinella Visconti</h5>
              <h5 align="left">
              Essere consapevoli vuol dire essere qui, pienamente coscienti….ti rapporti direttamente alla situazione attuale, e ciò è precisamente tutto ciò che concerne la meditazione…semplicemente essere qui, comportandosi con molta accuratezza, completamente in relazione con il presente, senza riserve….C. Trungpa
</h5>  

<h2 className="title">Incontri di pratica online di gruppo in diretta streaming </h2>
<h5 align="left">Tutti i lunedì dalle 08:30 alle 09:10<br/> Tutti i giovedì dalle dalle 18:00 alle 18:40.</h5>
<h5 align="left">La partecipazione è libera. Chi fosse interessato è pregato di contattare Marinella al 338-2331754 oppure via email scrivendo a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a>  </h5>   
     <DonazioneButton text={true}/>         
              </Col>
            </Row>
            </Container>
        </div>
        
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
            <Conduttore id={utenti[0].id}
                    img={utenti[0].img}
                    name={utenti[0].name}
                    desc={utenti[0].desc}
                    self={utenti[0].self}
                    link={utenti[0].link}
                    />
            </Row>
          </Container>
        </div>
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

