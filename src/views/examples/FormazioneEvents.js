import React from "react";

// reactstrap components
import {
  // Button,
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import FormazionePageHeader from "components/Headers/FormazionePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import AlertDialogSlide from "components/PopUpButton.js";
import DataFormMessage from"components/DataFormMessage.js";

export default function FormazioneEvents() {

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
        <FormazionePageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <img id="small-logo" src={require("assets/img/logo1.png")} alt=""/><br/>
                <img id="small-logo-text" src={require("assets/img/logo-text.jpeg")} alt=""/>
                {/* <Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione" tag={Link}
                    size="sm"
                  >Torna alla pagina della formazione
                    </Button>   */}
                <h2 className="title">Eventi</h2><br/>
                {/* ------------------------------------------------------------- */}
                <h2 className="">Lo spazio sacro come soglia</h2>
                <h5 align="center"><strong>Marinella Visconti e Simone Spina</strong><br/><br/></h5>
                <hr></hr>
                <img
                      alt="..."
                      src={require("assets/img/eremo-an.png")}
                    ></img>
                <br/>
                <br/>
                <br/>
                <h2 className="">RITIRO DI VIPASSANA E HEARTFULNESS CON ANUSHKA FERNANDOPULLE </h2>
<h3 align="center" className="bold" >MINDFULNESS E HEARTFULNESS PER LA SAGGEZZA E LA
LIBERTA'</h3>

<h5 align="center"><strong>Eremo di Montecastello (Bs)
1-5 ottobre 2021</strong><br/><br/></h5>
<h5 align="left">In questo ritiro esploreremo il profondo ben-essere che si rende
disponibile nell'investigazione del Dharma attraverso la nostra
personale esperienza.
Praticheremo la meditazione della visione profonda (Insight
Meditation /
Vipassana), camminando, mangiando e svolgendo attività
quotidiane.
Accederemo ad un ritiro contemplativo buddhista, semplificando le
nostre
vite, lasciando andare lettura, scrittura, apparecchi elettronici,
attività sessuale, sostanze ad uso ricreativo/alcool per aiutare la
nostra mente-cuore a trovare quiete e stabilità. Impareremo a
riconoscerci come parte integrante della natura e a vedere la felicità
possibile.</h5>
<h5 align="left"><strong>Prerequisiti:</strong> Questo ritiro è aperto ai praticanti esperti e agli allievi
della Breaveheartfulness School ed implica una certa qualità di
impegno: la capacità di sostenere il silenzio, una pratica intensa e
di tollerare di non mangiare più di due volte al giorno.</h5>
<h5 align="left"><strong>Per procedere alle pre iscrizioni è necessario scrivere a
segreteria@associazionemudita.org ti verrà inviato un
questionario che permetterà di conoscere meglio la tua
esperienza di pratica e le condizioni di salute.</strong></h5>
<h5 align="left"><strong>Costi:</strong> l’iscrizione del ritiro, possibile dopo la verifica dei prerequisiti,
è formalizzata con il versamento di 85 euro per spese organizzative

più 25 euro di tessera associativa da versare all’Associazione
Mudita.</h5>
<h5 align="left"><strong>Il ritiro come da tradizione è ad offerta libera sia per quanto
concerne gli insegnamenti che per la traduzione.</strong></h5>
<h5 align="left"><strong>Costo vitto e alloggio:</strong>
Eremo di Montecastello (Bs) vitto e alloggio 60 euro al giorno in
camera individuale con bagno.</h5>


<hr></hr>
{/* ------------------------------------------------------------- */}
<img
                      alt="..."
                      src={require("assets/img/eremo-an.png")}
                    ></img>
                <br/>
                <br/>
                <br/>
<h2 className="">WORKSHOP CON ANUSHKA FERNANDOPULLE</h2>
<h3 align="center" className="bold" >UN SENTIERO RADICALE DI ADDESTRAMENTO MENTALE</h3>
<h5 align="center"><strong>Eremo di Montecastello (Bs)
7 ottobre 2021</strong><br/><br/></h5>
<h5 align="left">In questo workshop coltiveremo la consapevolezza quale strumento
per
riconoscere che cosa sta avvenendo a livello di mente, emozioni e
corpo.
Le pratiche che svolgeremo sono basate sulla Mindfulness buddista
e
potrà essere di aiuto nello sviluppare maggiore consapevolezza di
sè,
intelligenza emotiva, una più profonda intuizione e ascolto non
giudicante.
Apprenderemo degli esercizi da portare nella vita quotidiana e nel
lavoro.</h5>

<h2 className="">COACHING DI UNA GIORNATA CON ANUSHKA FERNANDOPULLE</h2>
<h5 align="center"><strong>Eremo di Montecastello (Bs) 8 ottobre 2021</strong><br/><br/></h5>
<h5 align="left">Un'opportunità per continuare ad approfondire la pratica
attraverso
istruzioni con lavori in piccoli gruppi e attraverso domande e
risposte.
Avrete un'opportunità di ricevere coaching e una guida di
orientamento
per la pratica e l'esperienza individuale.</h5>
<h5 align="left">Le giornate di Heartfulness dal 7 all’8 ottobre saranno presso
l’eremo di Montecastello (bs).</h5>
<h5 align="left"><strong>Costo:</strong> vitto e alloggio camera singola con bagno 60 euro al giorno.
La quota delle due giornate è compresa nel costo annuale della
scuola.</h5>
<h5 align="left">Per coloro che non frequentano la scuola ma solo un modulo o
parte del percorso la quota di partecipazione è di 550 euro.</h5>
<hr></hr>
<h2 className=""><strong>Costi</strong></h2>
            
            <h5 align="left">Ecco le coordinate bancarie per il bonifico:</h5>
            <h5 align="left">Associazione Mudita c/o Intesa San Paolo spa</h5>
            <h5 align="left">Iban IT83 E030 6909 6061 0000 0128 339</h5>
            <h5 align="left">Bic BCITITMM (per i bonifici dall'estero)</h5>
            <h5 align="left">Causale: Cognome e Nome del partecipante – Iscrizione ritiro con Anushka
Fernandopulle</h5>
              </Col>
            </Row>
{/* ------------------------------------------------------------- */}
          </Container>
          <DataFormMessage/>
        </div>
     
        <DefaultFooter />
      </div>
    </>
  );
}