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

export default function SanghaPage() {
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
        <PageHeader image="orecchio.jpeg" title="" ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                      style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/sangha.JPG")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title" style={{color:"#dbbb4b"}}>Sangha cittadini e regionali <br/>Online e residenziali</h2>
              
                <h5 align="left"><strong>Abitare noi stessi e la natura (la nostra origine) con le mani, il cuore e la consapevolezza.</strong></h5> 
                <h5 align="left"><strong>Piccolo Sangha di pratica meditativa di consapevolezza condivisa. Con Sanda Stojkovic</strong></h5>
                <h5 align="left">Incontri di mezza giornata/giornata intera, un sabato ogni due mesi, per coltivare la presenza, attraverso tutti i sensi e in stretta relazione con la natura, in un modo che permette, accoglie e sostiene. </h5>
                <h5 align="left">Perché è nella presenza che riusciamo ad ascoltarci, noi stesse/i e gli altri, attingere alla nostra saggezza, rigenerarci  e relazionarci con il mondo in profondità. </h5>
                <h5 align="left">Riconnettersi con quello che ci nutre e ci fa crescere nella nostra unicità.  Riconnettersi con la natura attraverso i sensi e luoghi, e con gli altri in un modo autentico e creativo.</h5>
                <h5 align="left">Aprirsi attraverso le nostre mani verso il nuovo, ogni volta, a sorpresa,  la mattina sarà proposta una attività manuale.</h5>
                <h5 align="left">Gli incontri sono rivolti sia alle persone che non hanno nessuna esperienza nella pratica meditativa, che ai praticanti con esperienza. </h5>
                <h5 align="left">La proposta attinge all’approccio Core Process, ed è proposto basandosi sulla mia pluriennale formazione con le docenti del Karuna Institute ( Anne Overzee e Deirdre Gordon) e la mia personale pratica nella vita quotidiana immersa nella natura.</h5>
                <h5 align="left">Per chi è completamente nuova/o ad una proposta del genere, ecco una semplice descrizione su cosa e come faremo.... Ci sediamo in cerchio (ognuna nella modalità comoda personale... su un cuscino, sedia…), senza telefonini (!!!), ci saranno tempi di silenzio ( sedute o movimento, a volte guidati e a volte no), ascolto delle proprie sensazioni corporee, del respiro,  dei nostri pensieri, immagini, emozioni… Tempi per esplorazione  del nostro incontro con gli elementi della natura, negli ambienti del bosco, ruscello, prato, attraverso tutti i sensi. Ci saranno tempi per condivisione (verbali e non) di ciò che abbiamo voglia di condividere. La mattina sarà proposta una attività manuale a sorpresa, che non richiede delle competenze particolari. </h5>
                <h5 align="left"><strong>I TEMPI</strong></h5>
                <h5 align="left">Gli incontri si tengono una volta ogni due mesi, di sabato. Sono composti di due parti:</h5>
                <ul align="left">
                  <li>La prima parte, la mattina (10- 12) attività manuale a sorpresa, a volte offerta da facilitatori esterni. </li>
                  <li>La seconda parte (15-19), la pratica di meditazione di consapevolezza, seduta e camminata (nel bosco), la condivisione.
</li>                
                </ul>
                <h5 align="left">Si può venire anche solo ad alcuni incontri.







Per chi non viene da vicino (o per chi ha semplicemente la possibilità e voglia), c'è la possibilità  per un numero limitato di persone di pernottare, previo accordo.

</h5>
                <h5 align="left"><strong>IL LUOGO </strong></h5>
                <h5 align="left">Un luogo isolato, immerso nella natura, fra i boschi e i prati della bellissima Sabina, provincia di Rieti, circa 80 km da Roma</h5>
                
                <h5 align="left">Per chi non è mai stato manderò istruzioni precise… il navigatore qui di solito fallisce e vi porta a fare strade avventurose. </h5>
                <h5 align="left"><strong>I COSTI </strong></h5>
                <h5 align="left">Il contributo è basato sulla economia del dono,



( per sostenere la proposta e questo luogo che vuole offrire la sua ricchezza e bellezza anche agli altri.) Cioè - una offerta libera in base alle vostre attuali e reali possibilità. 

</h5>
                <h5 align="left"><strong>COSA PORTARE?</strong></h5>
                <ul align="left">
                  <li>Uno o due cuscini su cui vi trovate comode a sedervi (se li avete). </li>
                  <li>Una coperta o tessuto. </li>
                  <li>Abiti comodi, per dentro e fuori, scarpe adatte ai sentieri nel bosco.</li>
                  <li>Un pranzo a sacco e uno spuntino.</li>
                  <li>Un quaderno e penna per scrivere.</li>
                </ul>
                <h5 align="left"><strong>PRENOTAZIONE OBBLIGATORIA</strong></h5>
                <h5 align="left">Per info e prenotazione: <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>
                <DonazioneButton desc={true}  offerta={false}/>
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
            <Conduttore id={utenti[3].id}
                    img={utenti[3].img}
                    name={utenti[3].name}
                    desc={utenti[3].desc}
                    self={utenti[3].self}
                    link={utenti[3].link}
                    />
            </Row>
          </Container>
        </div>
        {/* <div className="section section-team text-center">
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
                    <p className="category text-info">Model</p>
                   
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
        </div> */}
        {/* <FormMessage/> */}
        <DefaultFooter />
      </div>
    </>
  );
}

