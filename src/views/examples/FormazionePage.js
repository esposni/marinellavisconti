import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import FormazionePageHeader from "components/Headers/FormazionePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function PsicoterapiaPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
                <h2 className="title">La pratica contemplativa quotidiana del cuore coraggioso.</h2>
                <h2 className="">Ritiri - laboratori  di ricerca interiore</h2>
                <p>“Essere qui tutto il tempo con schiettezza e tenerezza....Puoi farlo....” C. Trungpa
</p><h5 align="left">


Si tratta di un percorso del cuore che ha come finalità celebrare la vita permettendo alla nostra natura sacra di esprimersi attraverso il coraggio del cuore che sceglie di esserci nel momento presente in ogni circostanza lasciando andare la paura, i pregiudizi e le convenzioni che oscurano la nostra vera natura e riconosce che la festa della vita è qui nel momento presente e in ogni circostanza.



È questa l’audacia:

</h5>
<p>
“Per avere luce bisogna farsi crepa,

Spaccarsi,

Sminuzzarsi,

Offrire.”



Chandra Livia Candiani</p>
<h5 align="left">
Trovare la profondità per trovare le nostre condizioni, coltivare la Presenza in tutte le sue forme per il mio beneficio e per il beneficio degli esseri. Imparare a coltivare cosa mi fa attraversare le inondazioni della vita riconoscendo ciò che mi fa bene nel mezzo delle condizioni e sapendo che non possiamo riporre la fiducia nella forma ma neppure gettarla via senza esplorarla. Forma e saggezza sono parte della nostra Natura e il viaggio della vita è esplorarle.
</h5>
<h5 align="left">Cercheremo insieme un modo in cui incontrare le circostanze della vita coltivando le perfezioni del cuore (generosità, moralità, pazienza, energia, concentrazione, saggezza) che sostengono e supportano gli stati illimitati del cuore che nella tradizione delle pratiche buddhiste sono parte di ogni essere umano.

Ci concentreremo sulle tempeste interiori poiché quelle esterne non siamo in grado di controllarle  nella convinzione che nella  tradizione buddhista le condizioni interiori si possono lasciare andare perché rendono la vita più difficile di quello che è.</h5>
<h5 align="left">Ci accosteremo alle qualità del cuore a partire dagli insegnamenti buddhisti e da quello che  comprendiamo. Trattandosi di qualità intrinseche  possiamo conoscerle senza bisogno di teorie infatti si possono comprendere gli insegnamenti solo dopo averli realizzati concretamente. La nostra natura più profonda è intrinsecamente etica e se siamo nel momento presente le nostre qualità sorgono spontaneamente. Useremo l’approccio della Core Process Psychotherapy in particolare per tutti quegli aspetti del percorso in cui si lavorerà in relazione e diverse pratiche contemplative ed espressive dentro la cornice della consapevolezza in azione convinti che allenare la dimensione analogica faciliti il lasciare andare i condizionamenti che oscurano la nostra vera natura.</h5>
<h5 align="left">Alleneremo il coraggio del cuore attraverso la  spontaneità, la sacralità e l’intuizione nelle varie forme espressive e attraverso differenti pratiche Contemplative.

Lotteremo per le condizioni che oscurano il nostro conoscere e la nostra libertà come esseri umani con compassione e chiarezza.</h5>

<h2 className="">REQUISITI DI PARTECIPAZIONE </h2>
<h5 align="left">Questo percorso è aperto a tutti i ricercatori spirituali, in particolare psicoterapeuti, operatori della salute, insegnanti, meditanti che abbiano una regolare pratica e abbiano già fatto un significativo lavoro su di sé, abbiano familiarità con il lavoro  in gruppo e con la pratica del silenzio  e  desiderano offrire la propria autenticità alla vita nella consapevolezza della sacralità di ogni singola espressività e nella consapevolezza che tutte le manifestazioni dell’essere originano dalla stessa Sorgente che accoglie e sostiene</h5>
<h5 align="left">Nota Bene: L’iscrizione al percorso è soggetta a colloquio conoscitivo</h5>
<p>È possibile  partecipare ad un singolo incontro, a un gruppo di incontri o  abbracciare l’intero percorso nella consapevolezza che la pratica del cuore è ospitante...ma verrà data precedenza di partecipazione a coloro che seguono l’intero percorso.

Il numero massimo di partecipanti per modulo è 16 persone.</p>
<h2 className="">STRUTTURA DELLA SCUOLA </h2>
<h5 align="left">Il percorso  quadriennale è suddiviso in tre moduli l’anno.

Prevede  14  moduli, di cui quattro  di 4 giorni e gli altri di tre giorni per un totale di 46 giorni di formazione più un ritiro  di 7 giorni  volto a sostenere e approfondire il percorso con un insegnante di Vipassana e Heartfulness dello Spirit Rock Center Anushka  Fernandopulle con cui sono previste  due giornate di pratiche  heartfulness  e colloqui individualizzati per gli allievi della scuola.

infine un ritiro laboratorio finale (da definire rispetto a tempi date e costi nel 2025)  in  un luogo dal  forte impatto energetico e naturalistico in cui tutte le pratiche verranno coltivate contemporaneamente con l’intento di</h5>

<p> “non conoscere molte cose, ma mettere molte cose in contatto, uno dei primi gradini dello spirito creativo.....”.       H. Von Hofmannsthal</p>
<h5 align="left">Ogni seminario si svilupperà nel momento presente all’interno di un campo che prevederà quattro momenti  fondanti:


<br/>
L’amore che si prende cura<br/>

L’amore che risponde al dolore<br/>

L’amore che apprezza e si delizia <br/>

L’amore che permette</h5>
<h5 align="left">Il gruppo sosterrà il processo.



Durante il percorso  è suggerita la frequentazione di almeno un ritiro all’anno (verrà comunicato e suggerito un ritiro all’interno di una lista fornita all’inizio di ogni anno) oltre a quello previsto all’interno del percorso volto a consolidare la pratica.</h5>
               
<h2 className=""> DATE E LUOGO</h2>
<h5 align="left">Ogni modulo si svolgerà, se di quattro giorni, dal giovedì alle 14.30 alla domenica alle ore 13.00 o se di tre giorni, dal venerdì alle 14.30 alla domenica  alle ore 13.00 presso il Centro D’Ompio a Pettenasco (NO)</h5>  
<h5 align="left">1 modulo 10-13 dicembre 2020: Lo spazio sacro come soglia...Marinella Visconti e Simone Spina    </h5>
<h5 align="left">2 modulo 4-7 marzo 2021: Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Prima parte.    Marinella Visconti e Sanda Stojkovich </h5>
<h5 align="left">3 modulo 1-7 ottobre 2021 Ritiro di Vipassana 1-5 ottobre e 6-7 ottobre pratiche di  heartfulness e colloqui individualizzati con Anushka Fernandopulle</h5>
<h5 align="left">4 modulo 9-12 dicembre 2021 : Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Seconda parte.    Marinella Visconti e Sanda Stojkovich </h5>             
<h5 align="left">5 modulo 8-10 aprile 2022: Allenare il coraggio del cuore con l’audacia della espressività. Marinella Visconti e Dafna Moscati</h5>
<h5 align="left">6 modulo 23-25 settembre 2022:  Allenare il coraggio del cuore con l’audacia della danza contemplativa.   Marinella Visconti e Clarisse Zaccarino</h5>
<h5 align="left">7 modulo 2- 4 dicembre 2022 : Allenare il coraggio del cuore con l’audacia del Kum Nye.   Marinella Visconti e Marialuisa Carenzi

</h5>
<h5 align="left">8  modulo 24-26 marzo 2023: Allenare il coraggio del cuore con l’audacia delle vibrazioni armoniche. Marinella Visconti e Elsa Chiesa</h5>
<h5 align="left">9 modulo 21-24 settembre 2023: Allenare il coraggio del cuore con l’audacia della fluid awareness.   Marinella Visconti e Federica Gonzati</h5>
<h5 align="left">10 modulo 1-3 dicembre 2023 : Allenare il coraggio del cuore con l’audacia del Qi Gong.     Marinella Visconti e Paolo Testa</h5>
<h5 align="left">11  modulo 24-26 marzo 2024: Allenare il coraggio del cuore con l’audacia della poesia.   Marinella Visconti e Giovanna Santoro </h5>
<h5 align="left">12 modulo 22-24 settembre 2024: Allenare il coraggio del cuore con l’audacia della creazione.   Marinella Visconti e Valeria Giunta</h5>
<h5 align="left"> 13 modulo 14-17 dicembre 2024 Allenare il coraggio del cuore con l’audacia della Presenza...il cuore trascendente. Marinella Visconti e Simone Spina </h5>
<h5 align="left">14 modulo: RITIRO LABORATORIO FINALE IN LUOGO A FORTE IMPATTO NATURALISTICO SPIRITUALE DA DEFINIRE</h5>


              </Col>
            </Row>
          
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">CONDUTTORI</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Marinella Visconti </h4>
                    <p className="category text-info">Psicoterapeuta ad orientamento contemplativo </p>    
                  </div>
                </Col>      
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                     
                      src={require("assets/img/simone-spina.png")}
                    ></img>
                    <h4 className="title">Simone Spina  </h4>
                    <p className="category text-info">Psichiatra Psicoterapeuta ad orientamento transpersonale </p>  
                    <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/simone-spina/"
                    
                    size="sm"
                  >
                      Curriculum
                    </Button>  
                  </div>
                </Col>   
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Anushka Fernandopulle </h4>
                    {/* <p className="category text-info">Psicoterapeuta ad orientamento contemplativo </p>     */}
                  </div>
                </Col>   
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Sanda Stojkovich </h4>
                    <p className="category text-info">Psicologa Educatrice peri natale  </p>    
                  </div>
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Dafna Moscati Regista </h4>
                    <p className="category text-info"> Performer Ricercatrice arte espressiva contemplativa  </p>    
                  </div>
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Clarisse Zaccarino </h4>
                    <p className="category text-info"> Psicoterapeuta ad orientamento contemplativo -  danza contemplativa</p>    
                  </div>
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Marialuisa Carenzi  </h4>
                    <p className="category text-info"> Psicoterapeuta ad orientamento contemplativo -

Kum Nye </p>    
                  </div>
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Elsa Chiesa</h4>
                    <p className="category text-info"> Mindfulness Counselor- la pratica contemplativa e la bio musica</p>    
                  </div>
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Federica Gonzati </h4>
                    <p className="category text-info">  Psicologa - insegnante  yoga operatore Craniosacrale biodinamico </p>    
                  </div>
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Paolo Testa </h4>
                    <p className="category text-info">  Psicoterapeuta ad orientamento transpersonale e contemplativo Qi Gong </p>    
                  </div>
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Giovanna Santoro</h4>
                    <p className="category text-info">  Mindfulness counselor la pratica contemplativa e la poesia</p>    
                  </div>
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marinella.png")}
                    ></img>
                    <h4 className="title">Valeria Giunta </h4>
                    <p className="category text-info"> Arteterapeuta - la  pratica  contemplativa del mandala</p>    
                  </div>
                </Col> 
              </Row>
            </div>
            <h2 className="">Costi</h2>
            
            <h5 align="left">Il costo del percorso è di 1400  euro l’anno più 25 euro di tessera associativa annuale da rinnovare ogni anno divisibile in quattro rate annuali. (l’ultimo anno la quota è di 1355 euro. il costo comprende il rimborso spese del ritiro dell’ottobre 2021 con Anushka Fernandopulle)

Costo totale euro 5355.</h5>
            <h5 align="left">La quota non comprende le due giornate di heartfulness di ottobre 2021, il ritiro finale da definire 

e il costo per vitto e alloggio è da pagare presso il Centro D’Ompio.</h5>
            <h5 align="left">Ecco le coordinate bancarie per il bonifico:</h5>
            <h5 align="left">Associazione Mudita c/o Intesa San Paolo spa</h5>
            <h5 align="left">Iban IT83 E030 6909 6061 0000 0128 339</h5>
            <h5 align="left">Bic BCITITMM (per i bonifici dall'estero)</h5>
            <h5 align="left">Causale: Cognome e Nome del partecipante – Iscrizione brave heartfulness School o modulo n.    Brave heartfulness school</h5>
      

          </Container>
        </div>
       
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Sede dei Ritiri/Laboratori</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio-milano.jpg")}
                    ></img>
                    <h4 className="title">CENTRO D’OMPIO</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Pratolungo, 47 28028 Pettenasco (NO)<br/>

Telefono 0323888967<br/>

<br/>
<h6 align="left">Costo vitto e alloggio da pagare in loco  dal venerdì sera alla domenica a pranzo:<br/>

Camera doppia 166 euro vista lago, 156 euro vista bosco.<br/>

Camera multipla 136 euro.
                    </h6>
                  </div>
                </Col>
              
              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Scrivimi</h2>
            {/* <p className="description">Your project is very important to us.</p> */}
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome Cognome..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Scrivi il messaggio..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Invia
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default PsicoterapiaPage;
