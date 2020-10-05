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
// import FormMessage from"components/FormMessage.js";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
import DonazioneButton from "views/pages/Donazione"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function PercorsoCrescitaPage() {
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
        <PageHeader image="orecchio.jpeg" title={`Sei abbastanza semplicemente nel tuo Essere...`} ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
            <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/gruppi_individuali.JPG")}
                    ></img><br/><br/>
              <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title" style={{color:"#dbbb4b"}}> Percorsi di crescita psico-spirituale inviduale e di coppia</h2>
                <h5 align="center">Condotto da Marinella Visconti</h5>
                <h5 align="center">Mostrare la ferita è il primo passo verso la leggerezza e la cura di sé.</h5>
                <h5 align="center">Siddharta si abbandona alla confessione con l’amico :</h5>
                <h5 align="center">“Mostrare la ferita a questo ascoltatore era lo stesso che lavarla al fiume, finché diventasse fredda e una sola cosa con il fiume”. Il fiume fatto di lui stesso e di tutti gli uomini in cammino, l’acqua corrente in cui tutte le voci si mescolano: gioia, rancore, pietà, odio, compassione. E l’amico saggio assorbe la confessione di Siddharta “come un albero con la pioggia.”</h5>
                <h5 align="center">Guarire è un talento, può essere una scalata autonoma, oppure una cordata fra due compagni di viaggio in cui uno conosce le regole e tende la mano all’altro....</h5>
                <h5 align="left">I percorsi individuali di coppia sono rivolti in particolare agli psicoterapeuti, medici, operatori della salute, ricercatori spirituali che abbiano già fatto un significativo lavoro su di se e che abbiano una regolare pratica di consapevolezza.</h5>
                <h5 align="left">Per informazioni e appuntamenti scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
                <DonazioneButton desc={true}  offerta={true}/ >
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
        {/* <FormMessage/> */}
        <DefaultFooter />
      </div>
    </>
  );
}

