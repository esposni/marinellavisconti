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
import DataFormMessage from"components/DataFormMessage.js";
import Conduttori from "./Conduttori"

export default function FormazionePage() {

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
        <PageHeader title="Trovare l'innocenza in ogni forma" image="ciotola.jpeg" ifdesc={true} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title" style={{color:"#dbbb4b"}}>Formazione in mindfulness transpersonale e in relazione</h2>
                <img id="small-logo" src={require("assets/img/logo1.png")} alt=""/><br/>
                <img id="small-logo-text" src={require("assets/img/logo-text.jpeg")} alt=""/>
                <h2 className="title" style={{color:"#dbbb4b"}}>Pratiche contemplative quotidiane per cuori CORaggiosi</h2>
                <h2 className="title" style={{color:"#dbbb4b"}}>Ritiri - laboratori  di ricerca interiore</h2>
                <p>“Essere qui tutto il tempo con schiettezza e tenerezza....Puoi farlo....” C. Trungpa
</p><h5 align="left">


Si tratta di un percorso del cuore che ha come finalità il celebrare la Vita permettendo alla nostra natura sacra di esprimersi attraverso il coraggio del cuore, il quale sceglie di esserci nel momento presente, in ogni circostanza, lasciando andare la paura, i pregiudizi e le convenzioni che oscurano la nostra vera natura e riconosce che la festa della vita è proprio qui, ora, e in ogni circostanza.



È questa l’audacia:

</h5>
<p>
“Per avere luce bisogna farsi crepa,

Spaccarsi,

Sminuzzarsi,

Offrire.”



Chandra Livia Candiani</p>
<h5 align="left">
Trovare la profondità per trovare le nostre condizioni, coltivare la Presenza in tutte le sue forme, per il mio beneficio e per il beneficio degli esseri. Imparare a coltivare ciò che mi fa attraversare le inondazioni della vita, riconoscendo ciò che mi fa bene nel mezzo delle condizioni e sapendo che non possiamo riporre la fiducia nella forma, ma neppure gettarla via senza averla esplorata. Forma e saggezza sono parte della nostra Natura e il viaggio della vita è esplorarle.
</h5>
<h5 align="left">Cercheremo insieme un modo in cui incontrare le circostanze della vita, coltivando le perfezioni del cuore (generosità, moralità, pazienza, energia, concentrazione, saggezza) che sostengono e supportano gli stati illimitati del cuore che, nella tradizione delle pratiche buddhiste sono parte di ogni essere umano.

Ci concentreremo sulle tempeste interiori dal momento che non siamo in grado di controllare quelle esterne nella convinzione che nella  tradizione buddhista, le condizioni interiori si possono lasciare andare, perché rendono la vita più difficile di quello che è.</h5>
<h5 align="left">Ci accosteremo alle qualità del cuore a partire dagli insegnamenti buddhisti e da quello che  comprendiamo. Trattandosi di qualità intrinseche,  possiamo conoscerle senza bisogno di teorie, infatti si possono comprendere gli insegnamenti solo dopo averli realizzati concretamente. La nostra natura più profonda è intrinsecamente etica e se siamo nel momento presente le nostre qualità sorgono spontaneamente. 
<br/>Useremo l’approccio della Core Process Psychotherapy in particolare per tutti quegli aspetti del percorso in cui si lavorerà in relazione e diverse pratiche contemplative ed espressive dentro la cornice della consapevolezza in azione, convinti che, allenare la dimensione analogica, faciliti il lasciare andare i condizionamenti che oscurano la nostra vera natura.</h5>
<h5 align="left">Alleneremo il coraggio del cuore attraverso la  spontaneità, la sacralità e l’intuizione nelle varie forme espressive e attraverso differenti pratiche Contemplative.

Lotteremo per le condizioni che oscurano il nostro conoscere e la nostra libertà come esseri umani con compassione e chiarezza.</h5>

<h2 className="title" style={{color:"#dbbb4b"}}>REQUISITI DI PARTECIPAZIONE </h2>
<h5 align="left">Questo percorso è aperto a tutti i ricercatori spirituali, in particolare psicoterapeuti, operatori della salute, insegnanti, meditanti che abbiano una regolare pratica e abbiano già fatto un significativo lavoro su di sé, abbiano familiarità con il lavoro  in gruppo e con la pratica del silenzio  e  desiderano offrire la propria autenticità alla vita nella consapevolezza della sacralità di ogni singola espressività e nella consapevolezza che tutte le manifestazioni dell’essere originano dalla stessa Sorgente che accoglie e sostiene</h5>
<h5 align="left">Nota Bene: L’iscrizione al percorso è soggetta a colloquio conoscitivo</h5>
<p>È possibile  partecipare ad un singolo incontro, a un gruppo di incontri o  abbracciare l’intero percorso nella consapevolezza che la pratica del cuore è ospitante...ma verrà data precedenza di partecipazione a coloro che seguono l’intero percorso.</p>
<h2 className="title" style={{color:"#dbbb4b"}}>STRUTTURA DELLA SCUOLA </h2>
<h5 align="left">Il percorso  che inizia a dicembre 2020 e termina nel 2025  è suddiviso in moduli di tre o quattro giorni e prevede anche  due ritiri che saranno il  primo di 7 giorni nel 2021  e il secondo finale di 7/10 giorni da definire nel 2025.</h5>
<h5 align="left">In tutto 14 moduli, di cui due  di 4 giorni e dieci di 3  giorni per un totale di 38 giorni di formazione più un ritiro  di 7 giorni  volto a sostenere e approfondire il percorso con <strong>Anushka Fernandopulle Insegnante di Vipassana e Heartfulness dello Spirit Rock Meditation Center di San Francisco</strong> con cui sono previste  5 giornate di pratica Vipassana e due giornate  di pratiche  heartfulness  e colloqui individualizzati per gli allievi della scuola e  infine un ritiro laboratorio finale (da definire rispetto a tempi date e costi)  in  un luogo dal  forte impatto energetico e naturalistico in cui tutte le pratiche verranno coltivate contemporaneamente con l’intento di </h5>
<p> “non conoscere molte cose, ma mettere molte cose in contatto, uno dei primi gradini dello spirito creativo.....”.       H. Von Hofmannsthal</p>
<h5 align="left">Ogni seminario si svilupperà nel momento presente all’interno di un campo che prevederà quattro momenti  fondanti:




<br/>
<br/>
L’amore che si prende cura<br/>

L’amore che risponde al dolore<br/>

L’amore che apprezza e si delizia <br/>

L’amore che permette</h5>
<h5 align="left">Il gruppo sosterrà il processo.<br/><br/>
Durante il percorso  è suggerita la frequentazione di almeno un ritiro all’anno (verrà proposta una lista di ritiri all’inizio di ogni anno) oltre ai due previsti  all’interno del percorso volti a consolidare la pratica.</h5>
{/* ------------------------------------------------------------- */}

<h2 className="title" style={{color:"#dbbb4b"}}>RITIRO DI VIPASSANA E HEARTFULNESS CON ANUSHKA FERNANDOPULLE </h2>
<h3 align="center" className="bold" >MINDFULNESS E HEARTFULNESS PER LA SAGGEZZA E LA
LIBERTA'</h3>
<h5 align="center"><strong>Eremo di Montecastello (Bs)
1-5 ottobre 2021</strong><br/><br/></h5>
<h5 align="left"><strong>Prerequisiti: Questo ritiro è aperto ai praticanti esperti e agli allievi
della Breaveheartfulness School</strong>  ed implica una certa qualità di
impegno: la capacità di sostenere il silenzio, una pratica intensa e
di tollerare di non mangiare più di due volte al giorno.</h5>
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
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/evento-7" tag={Link}
                    target="_blank"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
<h2 className="title" style={{color:"#dbbb4b"}}>WORKSHOP CON ANUSHKA FERNANDOPULLE</h2>
<h3 align="center" className="bold" >UN SENTIERO RADICALE DI ADDESTRAMENTO MENTALE</h3>
<h5 align="center"><strong>Eremo di Montecastello (Bs)
7 ottobre 2021</strong><br/><br/></h5>
<h5 align="left"><strong>Prerequisiti</strong>: Possono partecipare gli allievi della scuola e praticanti esperti dopo un colloquio di conoscenza. Per informazioni scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a> </h5>
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
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/evento-8" tag={Link}
                    target="_blank"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
<h2 className="title" style={{color:"#dbbb4b"}}>COACHING DI UNA GIORNATA CON ANUSHKA FERNANDOPULLE</h2>
<h5 align="center"><strong>Eremo di Montecastello (Bs) 8 ottobre 2021</strong><br/><br/></h5>
<h5 align="left"><strong>Prerequisiti</strong>: Possono partecipare gli allievi della scuola e praticanti esperti dopo un colloquio di conoscenza. Per informazioni scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a> </h5>
<h5 align="left">Un'opportunità per continuare ad approfondire la pratica
attraverso
istruzioni con lavori in piccoli gruppi e attraverso domande e
risposte.
Avrete un'opportunità di ricevere coaching e una guida di
orientamento
per la pratica e l'esperienza individuale.</h5>
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/evento-9" tag={Link}
                    target="_blank"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
{/* ------------------------------------------------------------- */}

<h2 className="title" style={{color:"#dbbb4b"}}> DATE E LUOGO</h2>
<h5 align="left">Ogni modulo si svolgerà, se di quattro giorni, dal giovedì alle 14.30 alla domenica alle ore 13.00 o se di tre giorni, dal venerdì alle 14.30 alla domenica  alle ore 13.00 presso il Centro D’Ompio a Pettenasco (NO).

Il ritiro dall'1 al 5 ottobre 2021 e le giornate di Heartfulness dal 7 all’8 ottobre saranno presso l’Eremo di Montecastello (BS).

Il ritiro finale è da definire.</h5>  
<h5 align="left">1 modulo 11-13 dicembre 2020: Quando lo Spazio si fa Sacro...Marinella Visconti e Simone Spina    </h5>
<h5 align="left">2 modulo 4-7 marzo 2021: Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Prima parte.    Marinella Visconti e Sanda Stojkovich </h5>
<h5 align="left">3 modulo 1-8 ottobre 2021 <strong>Ritiro di Vipassana e  Heartfulness</strong> 1-5 ottobre e 7-8 ottobre<strong> pratiche di  Heartfulness e colloqui individualizzati con Anushka Fernandopulle</strong>  presso eremo di Montecastello(BS)</h5>
<h5 align="left">4 modulo 9-12 dicembre 2021 : Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Seconda parte.    Marinella Visconti e Sanda Stojkovich </h5>             
<h5 align="left">5 modulo 8-10 aprile 2022: Allenare il coraggio del cuore con l’audacia della espressività. Marinella Visconti e Dafna Moscati</h5>
<h5 align="left">6 modulo 23-25 settembre 2022:  Allenare il coraggio del cuore con l’audacia della danza contemplativa.   Marinella Visconti e Clarisse Zaccarino</h5>
<h5 align="left">7 modulo 2- 4 dicembre 2022 : Allenare il coraggio del cuore con l’audacia del Kum Nye.   Marinella Visconti e Marialuisa Carenzi

</h5>
<h5 align="left">8  modulo 24-26 marzo 2023: Allenare il coraggio del cuore con l’audacia delle vibrazioni armoniche. Marinella Visconti e Elsa Chiesa</h5>
<h5 align="left">9 modulo 22-24 settembre 2023: Allenare il coraggio del cuore con l’audacia della fluid awareness.   Marinella Visconti e Federica Gonzati</h5>
<h5 align="left">10 modulo 1-3 dicembre 2023 : Allenare il coraggio del cuore con l’audacia del Qi Gong.     Marinella Visconti e Paolo Testa</h5>
<h5 align="left">11 modulo 22-24 marzo 2024: Allenare il coraggio del cuore con l’audacia della poesia.   Marinella Visconti e Roberta Peano </h5>
<h5 align="left">12 modulo 20-22 settembre 2024: Allenare il coraggio del cuore con l’audacia del movimento.   Marinella Visconti e Gemma D'Alessandro</h5>
<h5 align="left">13 modulo 12-15 dicembre 2024: Allenare il coraggio del cuore con l'audacia della creazione. Marinella Visconti e Valeria Giunta  </h5>
<h5 align="left">14 modulo 2025: RITIRO LABORATORIO FINALE IN LUOGO A FORTE IMPATTO NATURALISTICO SPIRITUALE DA DEFINIRE</h5>

<h5 align="left"><strong>PER INFO E ISCRIZIONI CONTATTARE</strong><br/><a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a></h5>

              </Col>
            </Row>
          
          </Container>
        </div>
      
 {/* Conduttori ------------------------------------------------------------- */}
      <Conduttori school={true}/>
       
{/* Luogo ------------------------------------------------------------- */}
        <div className="section section-team text-center">
          <Container>
          <br/>
            <h2 className="title" style={{color:"#dbbb4b"}}>Costi</h2>
            
            <h5 align="left">Il costo del percorso quadriennale  è di 1200 euro l’anno  divisibile in tre rate annuali da 400 euro, più la tessera associativa di 25 euro da rinnovare ogni anno. Il  costo comprende i costi del ritiro di ottobre  2021 e le due giornate di Heartfulness e i colloqui individualizzati con Anushka Fernandopulle. <strong>Per chi si iscrive entro il 31 ottobre 2020 il costo del primo anno è di 1000 euro.</strong></h5>
            <h5 align="left">La quota non comprende il ritiro finale (modulo 14) da definire sia rispetto alla meta che ai tempi e ai costi di formazione e il   costo per vitto e alloggio  da pagare presso il Centro D’Ompio per i seminari della scuola  e il costo di vitto e alloggio per l’eremo di Montecastello che ospiterà  il  ritiro.</h5>
            <h5 align="left">I pagamenti dovranno essere effettuati tramite bonifico bancario a:</h5>
            <h5 align="left">BANCA CREVAL CONTO NONPROFITa</h5>
            <h5 align="left">IBAN IT06W0521610901000000001859</h5>
            <h5 align="left">BIC BPCVIT2S</h5>
            <h5 align="left">Causale: cognome e nome del partecipante, nome dell'evento, conduttore/i</h5>
      
            <h2 className="title" style={{color:"#dbbb4b"}}>Sede dei Ritiri/Laboratori</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/centro_dompio.jpg")}
                    ></img>
                    <h4 className="title">CENTRO D’OMPIO</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Pratolungo, 47 28028 Pettenasco (NO)<br/>

Telefono 0323888967<br/>

<br/>
                  </div>
                </Col>

                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eremo.png")}
                    ></img>
                    <h4 className="title">Eremo di Montecastello</h4>
                   
                    25080 Montecastello (BS)<br/>

                    {/* <p className="category text-info">Model</p> */}
                 
                  </div>
                </Col>
              
              </Row>
            </div>
          </Container>
          <DataFormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}