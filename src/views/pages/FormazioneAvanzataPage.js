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
import DataFormMessage from "components/DataFormMessage.js"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function FormazioneAvanzataPage() {
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
        <PageHeader image="ciotola.jpeg" title="Formazione in mindfulness transpersonale e in relazione avanzata" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">PERCORSO IN OTTO SIGILLI DI MINDFULNESS TRANSPERSONALE</h2>
                <h2 align="center"><strong>Edizione 2019/2021</strong></h2>
                <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/ritiri/8sigilli.jpg")}
                    ></img><br/><br/>
              <h5 align="left"><strong>Il gruppo in partenza è al completo. Il prossimo percorso inizierà probabilmente a dicembre 2021, si accettano sin da ora preiscrizioni. Al massimo ogni gruppo è composto da 12 persone.</strong> </h5>
                <h5 align="left">IL SENTIERO DELLA RIVELAZIONE DIRETTA ATTRAVERSO LA PERCEZIONE INNOCENTE. RICONNETTERSI ALLA PROPRIA IDENTITÀ COSMICA INCARNANDO IL CUORE TRASCENDENTE</h5>
                <h5 align="left">
              Come ricordava lo psichiatra RD Laing, il peggior danno che un essere umano possa subire è la distruzione della capacità di accogliere ed onorare la propria esperienza unica ed irripetibile. Esso ha come conseguenza a livello interpersonale la perdita dei confini e dell’identità individuale in relazione, mentre a livello transpersonale esita nella disconnessione dalla propria Natura Eterna. Tale condizione è il principale effetto degli eventi traumatici acuti o cronici vissuti in prima persona, ma può essere anche trasmessa a livello trans-generazionale ed essere alimentata da una realtà consensuale che promuove la disconnessione da sé.
</h5>  
<h5 align="left"> La Psicoterapia Contemplativa, o Mindfulness-based, che ha introdotto le pratiche Buddhiste di Consapevolezza nella relazione psicoterapica, rappresenta un valido approccio terapeutico a tale condizione di disconnessione da sé che è alla base di ogni disturbo psichico. Attraverso il lavoro con il campo di contenimento Psico-Spirituale pervaso dalle Energie del Cuore e con la mente subliminale, essa onora la natura processuale del Sè, enfatizzando la relazione Essere ad Essere in connessione con la Sorgente.</h5>
<h5 align="left">Il modo in cui gli insegnamenti del Buddha vengono utilizzati   è estremamente pratico ed incarnato in questo senso la pratica del Dharma rappresenta un progetto etico ed è la pratica dell’umano fiorire. Il pieno fiorire richiede qualcosa di più del semplice obbedire a regole e norme implica la capacità di rispondere alla situazione presente non facendo la cosa giusta ma ciò che è più amorevole fare. Ogni situazione chiede risposte specifiche ed è molto difficile…è necessario abbracciarne l’unicità e la diversità. Le sfide della vita secondo questa pratica vengono affrontate attraverso l’etica del rischio, l’etica situazionale che enfatizza l’ambiguità e non cerca la verità ma ciò che è più amorevole fare. Il Dharma così inteso diviene cura, il come trovare un modo di vivere senza avere opinioni e il Dharma compreso è quello in cui gli insegnamenti vengono messi in pratica, sono incarnati e non si ha più bisogno di credenze…</h5>
<h5 align="left">In questo senso l’Ottuplice Nobile Sentiero diviene un luogo in cui le domande possono trovare frutto e ha a che fare con l’abbracciare in modo radicale la vita e ci porta all’evoluzione usando mezzi abili. Coltivare l’ottuplice nobile sentiero significa diventare astuti nell’accorgersi dello spazio non reattivo e non mosso dall’avidità/attaccamento.

</h5>
<h5 align="left">Nell’ottuplice nobile sentiero quando le diverse energie del nostro corpo mente trovano unità e l’attenzione è unificata sorge la Presenza la persona entra nel flusso e terminano gli ostacoli.

Quando siamo nella Presenza, nella non reattività rispondiamo dall’aspetto più profondo della nostra mentecuore alla vita intorno a noi.

</h5>
<h5 align="left">E in questo senso per il Buddha la pratica è una forma di terapia. L’enfasi non è trovare le risposte ma imparare a fare le domande sempre più in profondità. La pratica dell’ottuplice Nobile sentiero si estende ad ogni ambito dell’umanità: dal modo in cui vedere il mondo a quello in cui rispondere attraverso l’immaginazione, le parole e il lavoro, al modo in cui in cui esso informa la vita e protegge  l’ entusiasmo, la consapevolezza e il raccoglimento.</h5>
<h5 align="left">Tuttavia, anche le più antiche gnosi proprie della Medicina Ancestrale, oggi più comunemente note come Shamanesimo, affrontano la condizione di disconnessione patologica da sé attraverso il sentiero della rivelazione diretta, volto a reclamare la capacità innata di connetterci, accogliere ed onorare la nostra unica ed irripetibile esperienza, incarnata e trascendente, senza altri maestri che la nostra Anima nelle sue infinite dimensioni e manifestazioni. Ciò avviene imparando a portare consapevolezza al nostro Processo Creativo Sacro, attraverso il quale sogniamo noi stessi nella realtà mentre da essa veniamo sognati. Solamente imparando a fluire con la nostra innata potenza creativa possiamo davvero diventare canali di consapevolezza, attraverso i quali l’energia onnipervasiva del Campo Unificato può agire nella dimensione incarnata attraverso il nostro corpo fisico, rendendolo medicina vivente per noi, per la Tribù, per la Terra e per il Cosmo con cui siamo in risonanza quantica.</h5>
<h5 align="left">Affinché il divino si incarni ed agisca attraverso di noi portando guarigione, è necessario lavorare duramente per essere impeccabili, per quanto possibile liberi dai condizionamenti e dagli inquinanti che ci spingono a dismettere il nostro sogno personale ponendo il nostro Processo Creativo Sacro al servizio di sogni sognati da altri e traslandoci così sul lato inutile dell’esistenza.</h5>
<h5 align="left">Il processo di guarigione shamanico, relazionale per eccellenza, consiste nel prendere per risonanza su di sè la sofferenza dell’altro accogliendola in consapevolezza e guarendola in noi stessi al fine di guarire per estensione l’altro. Ci liberiamo dai condizionamenti sviluppando l’intento di lasciarci guidare dal nostro Sè Eterno verso l’Integrità, riverberandola poi nella relazione terapeutica attraverso i veli creati dal Trauma. È questo Intento che apre tutte i portali e da accesso a tutte le soglie trans-dimensionali ed è incarnando questo Intento come persone e guaritori al massimo grado possibile che gli altri guariscono nella relazione con noi come naturale conseguenza, risuonando con la potenza intatta del nostro Processo Creativo Sacro. Tuttavia non è sufficiente l’Intento di arrendersi al proprio Sé Superiore se prima non si conoscono bene i condizionamenti traumatici che hanno generato il velo della nostra Persona, legati alle vicende di questa vita. Occorre infatti recuperare la magia della Percezione Innocente, riconnettendoci al nostro Soul Child che si arrende con meraviglia all’eco dell’Eternità correndovi incontro con passo leggero, mentre riconosce e riflette la regalità e maestosità degli altri esseri attraverso l’esperienza diretta delle loro Anime eterne. E per recuperare tale innocenza occorre aver sufficientemente integrato l’energia dell’abuso avendo guardato come essa ci abbia insegnato ad abusare di noi stessi per anestetizzare il dolore originale e sedare lo struggimento per l’integrità perduta. La sintesi evolutiva che deriva dal processo psicoterapico shamanico conduce alla riconnessione con la propria Identità Cosmica lasciando respiro all’Anima come entità trans-dimensionale, parte integrante dell’Infinito, attraverso la percezione dei suoi echi più vasti. Tale processo è fonte di guarigione perché allineato con il processo relazionale karmico che tende ad includere ogni cosa. Percepire l’essenza relazionale multiforme dell’Anima significa percepire ed integrare più parti in ombra e conseguentemente più Luce partecipando consapevolmente alla vastità e sacralità del processo creativo individuale, frattale, del processo creativo cosmico e diretta manifestazione di esso.</h5>
<h5 align="left">Paradossalmente, questo importante approccio terapeutico che oggi suscita un nuovo grande interesse in quanto armonizza perfettamente con le più recenti scoperte della Fisica Quantistica, è risorto in modo disgiunto dalla Psicologia Contemplativa, pur essendo lo shamanesimo ancestrale basato proprio sulla consapevolezza della nostra multi-dimensionalità e sulla riconnessione al divino che è in noi, raggiunta attraverso un delicato, profondo lavoro personale in relazione continuativa con un facilitatore che aiuta l’altro a scoprire ciò che già sa, non attribuendosene né accettandone il merito e non alimentando la dipendenza relazionale. Inoltre, uno dei maggiori punti di contatto tra l’approccio contemplativo e quello shamanico è l’importanza di consentire al sistema Mente- Corpo Fisico – Corpo Energetico di rallentare portando consapevolezza alle pause tra i cicli del processo interno, poiché è proprio nelle pause che risiedono i portali che immettono nella dimensione della realtà non ordinaria.</h5>
<h5 align="left"><strong>Date</strong><br/>8 moduli (24 giorni di formazione) a cui aggiungere un ritiro annuale in UK facoltativo (tra giugno
e settembre)

</h5>
<h5 align="left">Sigillo 1: Lo spazio sacro come Soglia, 15 – 17 novembre 2019</h5>
<h5 align="left">Sigillo 2: Dare forma all’Intuizione,  7 – 9 febbraio 2020</h5>
<h5 align="left">Sigillo 3: Arrendersi al Grande Mistero della Sorgente, 15 – 17 maggio 2020</h5>
<h5 align="left">Sigillo 4: Risvegliarsi nella realtà di sogno e disperdere il Sobillatore, 27 – 29 novembre 2020</h5>
<h5 align="left">Sigillo 5: Danzare con L’Ombra, 6 – 8 febbraio 2021</h5>
<h5 align="left">Sigillo 6: Maschile e Femminile Sacri, 14 – 16 maggio 2021</h5>
<h5 align="left">Sigillo 7: Morte e Rinascita, 12 – 14 novembre 2021</h5>
<h5 align="left">Sigillo 8: Incarnare il Cuore Trascendente, 4 – 6 febbraio 2022</h5>
<h5 align="left"><strong>Requisiti di partecipazione</strong><br/>Il percorso è aperto a psicologi, psicoterapeuti, psichiatri, counselor e operatori della salute con
almeno 5 anni di esperienza clinica che soddisfino i seguenti requisiti:<br/>
– Avere una pratica contemplativa già stabilita<br/>
– Aver già fatto un significativo lavoro su di sé, idealmente attraverso una psicoterapia personale<br/>

L’iscrizione prevede in ogni caso un colloquio preliminare.

</h5>

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
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    to="/profile-page" tag={Link}
                    target="_blank"
                    size="sm"
                  >Curriculum
                    </Button>  
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
                    to="/simone-spina" tag={Link}
                    target="_blank"
                    size="sm"
                  >Curriculum
                    </Button>  
                  </div>
                </Col>   
              </Row>
            </div>
            <h2 className="">Costi</h2>
            
            <h5 align="left">Costo dell’intero percorso 2400 euro (ratealizzabili) più 25 euro di tessera sostenitore annuale dell’Associazione Mudita.</h5>
        
            <h5 align="left">Ecco le coordinate bancarie per il bonifico:</h5>
            <h5 align="left">Associazione Mudita c/o Intesa San Paolo spa</h5>
            <h5 align="left">Iban IT83 E030 6909 6061 0000 0128 339</h5>
            <h5 align="left">Bic BCITITMM (per i bonifici dall'estero)</h5>
            <h5 align="left">Causale: Cognome e Nome del partecipante- Percorso in Otto Sigilli di Mindfulness Transpersonale – Marinella Visconti e Simone Spina</h5>
      
        
<h3 align="left"><strong>La prossima edizione inizierà probabilmente a dicembre 2021, si accettano sin da ora preiscrizioni. Al massimo ogni gruppo è composto da 12 persone.</strong></h3>

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
                      src={require("assets/img/centro_dompio.jpg")}
                    ></img>
                    <h4 className="title">CENTRO D’OMPIO</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Pratolungo, 47 28028 Pettenasco (NO)<br/>

Telefono 0323888967<br/>Costo vitto e alloggio dal venerdì sera alla domenica a pranzo:
Camera doppia 166 euro vista lago, 156 euro vista bosco.
Camera multipla 136 euro.

<br/>
{/* <h6 align="left">Costo vitto e alloggio da pagare in loco  dal venerdì sera alla domenica a pranzo:<br/>

Camera doppia 166 euro vista lago, 156 euro vista bosco.<br/>

Camera multipla 136 euro.
                    </h6> */}
                  </div>
                </Col>
              
              </Row>
            </div>
          </Container>
        </div>
        <DataFormMessage/>
        
        <DefaultFooter />
      </div>
    </>
  );
}

