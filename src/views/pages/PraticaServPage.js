import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
import Quest1 from "components/Quest1"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function PraticaServPage() {
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
        
        <PageHeader title="C'è una voce che non usa le parole. Ascolta" image="ciotola.jpeg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <div align="center">
            <img
                alt="..."
                className=""
                style={{width:"20.5em",height:"20.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
            </div>
              <h2 className="title">Attivismo contemplativo</h2>
              <h5 align="left">Compiere un gesto amichevole, offrire un servizio o prestare attenzione, ascoltare profondamente sono offerte che in alcune situazioni possono essere più importanti di oggetti materiali. Uno dei benefici a lungo termine è che attraverso la generosità cominciamo a rendere felici i rapporti.</h5>
              <h5 align="left">Il senso di sviluppare una connessione attraverso i valori conduce ad un’apertura del cuore, perché condividiamo con gli altri e ci sosteniamo a vicenda.</h5>
              <h5 align="left">Intuire la bellezza di fare un’offerta spontaneamente manda all’aria la mente giudicante dell’uguale, giusto, meritevole. Si dice infatti che il più elevato tipo di dana (dono) si abbia allorché una persona degna da qualcosa a un’altra persona degna.</h5>
              <h5 align="left">È importante coltivare il dare alle persone sagge, perché sostiene chi può a sua volta sostenere molti altri .
Così i saggi entrano a far parte del nostro tempio di consapevolezza e sostengono la nostra coscienza.</h5>
              <h5 align="left">La generosità è parte essenziale della pratica. È il primo dei sei atteggiamenti di vasta portata (paramita) del bodhisattva.</h5>
              <h5 align="left">Il vero spirito del dare non è diretto verso gli altri, ma anche verso sé stessi.</h5>
              <h5 align="left">L’idea è quella di mettere in contatto chi ha la possibilità di donare con chi si trova nella possibilità di ricevere e ha prioritariamente l’intento di SOSTENERE CHI SOSTIENE.</h5>
              <h5 align="left">L'intento principale della pratica di servizio è sviluppare la cura e la sollecitudine. Il termine è spesso usato come sinonimo di attenzione-consapevolezza.
L'autentica consapevolezza è animata da sollecitudine e cura.
L'attenzione contemplativa per essere trasformante,deve esprimere l'abilità di incontrare qualunque cosa emerge di momento in momento con totale presenza e cuore aperto.
La cura ci consente di osservare la propria mente nel bel mezzo del turbamento lasciando spazio alla nascita di qualità fondamentali come la saggezza.</h5>
<h2 className="title"> Sostenere chi sostiene</h2>
<p className="category" align="left" style={{color:"black"}}><strong>Sono benvenuti e invitati a partecipare e a contribuire al<p className="category" style={{color:"gold",fontSize:"2.0em",margin:"0px"}} align="center">Progetto Pien<i className="fas fa-heart"></i>Essere</p> sostenendo chi sostiene tutti coloro che si sono formati in modo continuativo nell’Associazione Mudita alla
Mindfulness in relazione avanzata in questi ultimi 15 anni, sono invitati a contribuire coloro che conoscono la Mindfulness in relazione e transpersonale, gli insegnanti di Dharma, gli insegnanti di pratiche corporee di consapevolezza e tutti coloro che attraverso la loro professione cercano di incarnare il Dharma.
Prerequisito fondamentale è aver fatto un significativo lavoro su di sé, avere una regolare pratica e sentire una motivazione profonda a donare e a donarsi.</strong>
</p>
<h5>Chi fosse interessato può scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a> e compilare il Questionario sotto:
          </h5>

{/* Questionario */}
<Quest1/>
<hr></hr>
                <h2 className="title">LA PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA</h2>
                <h5 align="center">Condotto da Marinella Visconti</h5>
              <h5 align="left">
              Essere consapevoli vuol dire essere qui, pienamente coscienti….ti rapporti direttamente alla situazione attuale, e ciò è precisamente tutto ciò che concerne la meditazione…semplicemente essere qui, comportandosi con molta accuratezza, completamente in relazione con il presente, senza riserve….C. Trungpa
</h5>  
<h5 align="left">Siate li tutto il tempo con la vostra schiettezza e tenerezza...  C. Trungpa</h5>

<h5><strong>Il gruppo di PRATICA CONTEMPLATIVA NELLA VITA QUOTIDIANA con Marinella Visconti continua tutti i lunedì dalle 08:30 alle 09:10,  tutti i giovedì dalle 12.30 alle 13.30 e dalle 18:00 alle 18:40 in diretta streaming . La partecipazione è libera. Chi fosse interessato è pregato di contattare Marinella al 338-2331754 oppure via email scrivendo a <a href="mailto:mariv9162@gmail.com">mariv9162@gmail.com</a>  o <a href="mailto:marinellavisconti@outlook.it">marinellavisconti@outlook.it</a> 
<br/><br/>
Lunedì dalle 08:30 alle 09:10<br/>
Giovedì dalle 12:30 alle 13:30
e dalle 18:00 alle 18:40</strong></h5>

<h3 align="center" className="bold" >Milano</h3>
<h3 align="center" className="bold" >Entrata libera</h3>
<h5 align="left">
Da settembre 2020 il giovedì dalle 12:30 alle 13:30 presso il Centro Mindfulness Milano, Via Cenisio, 5.
</h5>

<br/>
<h5 align="left">Per informazioni e iscrizioni scrivere a <a href = "mailto: marinellavisconti@outlook.it"> marinellavisconti@outlook.it</a> </h5>
<br/>


<h2 className="title">Coordinamento traduzioni testi di DHARMA dall'inglese all'italiano</h2> 
<h5 align="left">Da distribuire in centri di ritiri e presso il Centro Mindfulness Milano ad offerta libera.
L'offerta  raccolta attraverso la distribuzione gratuita dei testi di Dharma tradotti sarà devoluta a sostegno del centro di ritiri Theravada Cittaviveka(<a href="http://www.cittaviveka.org">http://www.cittaviveka.org</a>) in inghilterra.</h5>
<h5 align="left">N.B. Si raccolgono adesioni di volontari disponibii a tradurre testi dall'inglese all'italiano</h5>
<h5 align="left">Potete scrivere a <a href = "mailto: marinellavisconti@outlook.it"> marinellavisconti@outlook.it</a> </h5>
<h5 align="left">Attualmente stiamo traducendo alcuni testi di Ajahn Sucitto.</h5>


<h2 className="">ORGANIZZAZIONE DI RITIRI ED EVENTI</h2>
<h5 align="left">Le Paramita con Ajahn Sucitto 15 Marzo 2021 - 25 Marzo 2021</h5>
                <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/le-paramita-con-ajahn-sucitto/"
                    
                    size="sm"
                  >Ulteriori informazioni
                    </Button>  <br/>
<h5 align="left">Ritiro di Mindfulness e heartfulness ottobre 2021</h5>
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione" tag={Link}
                    
                    size="sm"
                  >Ulteriori informazioni
                    </Button> <br/>
                  
              </Col>
            </Row>
          
          </Container>
        </div>
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

