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
        <PageHeader image="orecchio.jpeg" title="Guarire il mondo significa guarire te stesso" ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/gruppi_solidali.JPG")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>{`Gruppi solidali di Ascolto Profondo "da essere a essere"`} </h2>
                <h5 align="left">Gruppi solidali di ascolto profondo “essere ad essere”. 

I gruppi sono rivolti a psicoterapeuti, medici, educatori e ricercatori spirituali che abbiano già fatto  un lavoro su di sé, che abbiano una pratica contemplativa e/o conoscano la mindfulness e/o la mindfulness in relazione. </h5>
                <h5 align="left">È uno spazio di pratica per coltivare Presenza e Consapevolezza indispensabili per trasformare la sofferenza e utili se profondamente radicati nella vita.
Quando c’è Presenza lo spazio si fa sacro e sicuro e le storie individuali diventano quelle di tutti, siamo nell’indifferenziato e ci incontriamo nella sorgente e gli schemi individuali si resettano. Possiamo ricordarci continuamente Chi Siamo e Incarniamo ciò di cui parliamo, abitando l’esperienza, indispensabile premessa per guarire.
Coltivare lo spazio sostenuto dalle migliori qualità del cuore e rallentare ci consentirà di non scavalcare l’esperienza per quanto questa possa essere dolorosa.
Ci addestriamo nei confronti di noi stessi e degli altri, lasciandoci accarezzare dal respiro, lasciandoci toccare dalla vita. La carezza sarà presente come metodo per accogliere se impariamo a seguire il flusso.</h5>
                <h5 align="left">L'intento è <strong>sostenere chi sostiene</strong> per contribuire a creare un gruppo di persone che possono contribuire a creare le condizioni di un benessere più ampio nella comunità.

Una volta al mese da novembre a giugno  ogni primo mercoledì dalle 12.00 alle 14. Massimo 12 persone.

Gli incontri sono <strong>ad offerta libera</strong> e le offerte verranno impiegate per il sostegno al progetto “Braveheartfulness School" progetto formativo volto a sostenere la formazione di coloro che hanno motivazione per creare le  condizioni di un benessere più ampio nella comunità:  “piccoli bodhisattva crescono” </h5>
<h5 align="left">E’ richiesto un colloquio preliminare per accedere al gruppo.</h5>
              
<h5 align="left">Chi fosse interessato può scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a>  </h5>
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

