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
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import AlertDialogSlide from "components/PopUpButton.js";
import DataFormMessage from"components/DataFormMessage.js";

export default function RitiriVipassanaPage() {

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
        <PageHeader image="ciotola.jpeg" 
        title="Ritiri Vipassana" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                
                {/* <Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione" tag={Link}
                    size="sm"
                  >Torna alla pagina della formazione
                    </Button>   */}
                
                {/* ------------------------------------------------------------- */}
                <h2 ><strong>Ritiro di Vipassana</strong><br/><strong>Ajahn Sucitto</strong> </h2>
                <img
                      alt="..."
                      src={require("assets/img/sucitto.png")}
                    ></img>
               <br/><br/>
                <h2 className="">Mantenere un buon cuore incontrando la sofferenza</h2>
               


<h5 align="center"><strong>Centro d’Ompio Pettenasco
dal 15 marzo sera al 25 marzo pranzo 2021</strong><br/><br/></h5>
<h5 align="left">Il ritiro prevede solo come da tradizione theravada la colazione e il pasto prima di mezzogiorno. Alla sera sono previste solo tisane. I partecipanti devono potersi trovare a proprio agio nel silenzio e nella consumazione di un unico pasto al giorno. </h5>
<h5 align="left"><strong>DATA</strong> Dal 15 sera al 25 marzo pranzo 2021 presso il centro d’Ompio – via Pratolungo 47, Pratolungo 28028 Pettenasco (NO).  Orario da definire in prossimità del ritiro</h5>
<h5 align="left"><strong>COSTO</strong>Rimborso spese 75 euro più 25 euro di tessera sostenitore Associazione Mudita  da versare al momento dell’iscrizione. Questa quota servirà a coprire le spese organizzative e non è rimborsabile. Il pagamento dovrà essere effettuato tramite bonifico bancario a : Associazione Mudita c/o Banca Prossima Iban: IT 30I0335901600100000128339 BIC code : BCITITMX Causale: Cognome e Nome del partecipante – iscrizione al ritiro con Ajahn Sucitto.
Per l’insegnante e la traduttice è prevista un’offerta libera.</h5>
<h5 align="left"><strong>BIOGRAFIA DEL CONDUTTORE</strong> Ajahn Sucitto è nato a Londra nel 1949, AjahnSucitto e’ diventato un bhikkhu in Tailandia nel 1976. Si è formato con Ajahn Sumedho, al suo ritorno in Gran Bretagna nel 1979. Dal 1981 tiene ritiri, con insegnamenti in Gran Bretagna e all’estero. Molti dei suoi libri, podcast, file audio e CD sono gratuitamente accessibili nei sotto elencati siti web:<br/>

<a href="www.ajahnsucitto.org">www.ajahnsucitto.org</a><br/>

<a href="www.dharmaseed.org ">www.dharmaseed.org </a><br/>
<a href="www.forestsangha.org">www.forestsangha.org</a><br/>
</h5>
<h5 align="left"><strong>PER INFO E ISCRIZIONI CONTATTARE</strong> <a href="mailto:ritirosucitto@gmail.com">ritirosucitto@gmail.com</a></h5>

<hr></hr>

                {/* ------------------------------------------------------------- */}
             
              
                <h2 className="">RITIRO DI VIPASSANA E HEARTFULNESS  ANUSHKA FERNANDOPULLE </h2>
                <img
                      alt="..."
                      src={require("assets/img/eremo-an.png")}
                    ></img>
                <br/>
                <br/>
                <br/>
                <img id="small-logo" src={require("assets/img/logo1.png")} alt=""/><br/>
                <img id="small-logo-text" src={require("assets/img/logo-text.jpeg")} alt=""/>
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
<h5 align="left"><strong>Prerequisiti: Questo ritiro è aperto ai praticanti esperti e agli allievi
della Breaveheartfulness School</strong>  ed implica una certa qualità di
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

 <h2 className="title"> ANUSHKA FERNANDOPULLE <br/> WORKSHOP: UN SENTIERO RADICALE DI ADDESTRAMENTO MENTALE</h2>
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

<h2 className="title"> ANUSHKA FERNANDOPULLE <br/> GIORNATA DI COACHING INDIVIDUALE</h2>
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