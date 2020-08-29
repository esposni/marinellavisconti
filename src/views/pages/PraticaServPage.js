import React from "react";

// reactstrap components
import {
  Button,
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
import Quest1 from "components/Quest1"
import PopUpButton from"components/PopUpButton";


let textbutton1=`Progetto Pien💛Essere nutre un SOGNO....Poter disporre di uno spazio gratuito in un luogo sacro o da risacralizzare dove sviluppare l’interesse verso le pratiche contemplative e dove dare un
contributo al sorgere di una cultura che contribuisca a far nascere un nuovo stile di vita salutare caratterizzato dal restituire bellezza, pienezza e saggezza del vivere nel qui e ora....come sostenuto dalle antiche tradizioni sapienziali e spirituali e come oggi ampiamente dimostrato dagli studi scientifici sugli effetti della Mindfulness e della meditazione sul benessere delle persone in differenti contesti di osservazione.
Il desiderio più ambizioso, sarebbe di portare la pratica contemplativa in spazi che in passato sono stati utilizzati per pratiche spirituali e che attualmente hanno una nuova destinazione come ex conventi, chiese sconsacrate...nella convinzione che questi spazi conservino la memoria del Silenzio che ha caratterizzato i processi trasformativi e di guarigione di tante persone e nella convinzione che far rivivere i luoghi del passato sia espressione di gentilezza, cura e rispetto di tutto il lavoro materiale e spirituale che è stato dedicato a quel particolare luogo.
L’intento è di offrire esperienze personali e il frutto della pratica a coloro che saranno interessati e che desidereranno partecipare agli incontri che saranno ad entrata libera o eventualmente nella forma dell’offerta libera come nelle antiche tradizioni spirituali.
La pratica di servizio consente di sviluppare cura e sollecitudine. E la cura consente di osservare la nostra mente nel bel mezzo dei turbamenti lasciando spazio alla nascita di qualità fondamentali come la saggezza.
Cura, sollecitudine, saggezza sono Valori che possono contribuire ad aumentare un senso di interconnessione e di condivisione che ci auguriamo facciano il bene della Comunità.
Grati per l’attenzione...
`
let textbutton2=`
Ti ringraziamo per il tuo supporto al Progetto Pien💛 Essere e per la raccolta fondi per le borse di
studio per coloro che intendono formarsi nella Braveheartfulness School, progetto orientato a sostenere...“piccoli bodhisattva crescono”...” e per tutti i progetti orientati a sostenere chi sostiene`

let textbutton3=`
Se desideri iscriverti all’Associazione Progetto Pien💛Essere puoi compilare il questionario sotto e versare euro 25 di tessera sostenitore a:\n
 Progetto Pien💛Essere  \n
 Banca\n
  IBAN`
export default function PraticaServPage() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => { 
    if(showResults===false){
      setShowResults(true)
    }else{
      setShowResults(false)
    }
  }


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
        
        <PageHeader title="C'è una voce che non usa le parole. Ascolta" image="ciotola.jpeg" ifdesc={true} />
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
              <h2 className="title"  style={{color:"#dbbb4b"}}>Attivismo contemplativo</h2>
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
<h5 align="left">
Sono benvenuti e invitati a partecipare e a contribuire al Progetto Pien<i style={{color:"#dbbb4b"}}className="fas fa-heart"></i>Essere, sostenendo chi sostiene  tutti coloro che si sono formati in modo continuativo nell’Associazione Mudita alla Mindfulness in relazione avanzata in questi ultimi 15 anni, sono invitati a contribuire coloro che conoscono la Mindfulness in relazione e transpersonale, gli insegnanti di Dharma, gli insegnanti di pratiche corporee di consapevolezza e tutti coloro che attraverso la loro professione cercano di incarnare il  Dharma.<br/> <br/>

Prerequisito fondamentale è aver fatto un significativo lavoro su di sé, avere una regolare pratica e sentire una motivazione profonda a donare e a donarsi.</h5>
<h5>Chi fosse interessato può scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a> e compilare il Questionario sotto:
          </h5>

{/* Questionario */}
<Button 
block
className="btn-round"
color="info"
size="lg"
onClick={onClick}> <img
alt="..."
className=""
style={{width:"3.5em",height:"3.5em",marginRight:"20px"}}
src={require("assets/img/marinella5.jpg")}
></img>Compila il questionario</Button>
{ showResults ?  <Quest1/> : null }
<div>
        <h5 align="center">Progetto pienessere nutre un sogno </h5>
        <PopUpButton title="Sogno" content={textbutton1}/>
        </div>
        <div>
        <h5 align="center">Se desideri fare una donazione per favore clicca il bottone sottostante</h5>
        <PopUpButton title="Donazione" content={textbutton2}/>
        </div>
        <div>
        <h5 align="center">Se vuoi iscriverti alla all’Associazione</h5>
        <PopUpButton title="Iscrizione all'associazione" content={textbutton3}/>
        </div>

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

