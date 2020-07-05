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
import AlertDialogSlide from "components/PopUpButton.js";



// import AlertDialogSlide from "components/PopUpButton.js";

export default function RitiriPage() {

  let marialuisa_curriculum=`Marialuisa Carenzi, Psicologa e Psicoterapeuta della Gestalt, con esperienza ventennale, ha approfondito la formazione con approcci terapeutici corporei in Bioenergetica, Danzaterapia, Espressione Corporea, Expression  Primitive, Lomi (terapia corporea gestaltica)e approcci energetici con l’uso di cristalli, suono e tocco.

  Da più di dieci anni anni pratica Meditazione Vipassana sotto la guida di Maestri di Dharma come Ven. Banthe Sujiva, Ven. Banthe Bodhidhamma, Ven. Virahani, Nanni De Ambrogio, James Low, Stephen Batchelor, Ajahn Sucitto
  
  Parallelamente a ciò, da più di dieci anni approfondisce la pratica contemplativa in relazione e la mindfulness in relazione con Anne Overzee e Deirdre Gordon, Psicoterapeute Core Process e insegnanti senior del Karuna Institute (UK) che integra modelli psicoterapeutici occidentali con la psicologia buddista e pratiche di mindfulness; e frequenta il Foundation Training in Kum Nye con Maura Sills, Psicoterapeuta Core Process e fondatrice del Karuna Institute (UK)`;

  let sanda_curriculum=`Sanda Stojkovic
Formazione continua in Psicoterapia Core Process, Educatrice Perinatale
- Dopo aver seguito il ​Foundation Course in Core Process Psychotherapy (2005/2006) presso il ​Karuna Institute (UK)​ prosegue con la ​Formazione continua pluriennale nella Psicoterapia Core Process​ con Anne Overzee e Deirdre Gordon, docenti senior del​ Karuna Institute​ (UK).
- Mindfulness Training per la Conduzione di Gruppi con Anne Overzee and Deirdre Gordon (2016/2017)
- Training nella pratica del Kum Nye (in formazione) – Con Maura Sills (​Karuna Institute​) in Italia.
- ​Educatrice perinatale​ certificata da ​MIPA Centro Studi ​(2013/2015), attualmente offre sostegno alle famiglie nel percorso nascita, offre servizi di supporto domiciliare alle madri nei primi mesi dopo il parto, organizza e facilita gruppi di confronto e mutuo aiuto tra mamme.
Da diversi anni partecipa attivamente e collabora con il ​Centro Dorje Ling​ che ospita corsi e ritiri di Meditazione, Yoga e Conoscenza di sé, con gli strumenti laici offerti dalla tradizione buddista tibetana integrati alla psicologia trasformativa occidentale.
Il suo obiettivo professionale risiede nel creare una sintesi tra i differenti approcci e metodi incontrati nel suo percorso di formazione, arricchita dalle esperienze lavorative e di vita, rimanendo in contatto con la natura come parte irrinunciabile dell’essere.
Come praticante di meditazione di consapevolezza, è particolarmente interessata alla pratica non formale nella vita quotidiana e nell’essere genitore.
Nata e cresciuta in Jugoslavia, oggi Serbia, ha vissuto per dieci anni a Gerusalemme, dove si è laureata in Psicologia. Da quindici anni si è trasferita in Sabina (Lazio), dove vive in campagna con la sua famiglia.`;

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
        <PageHeader title="Ritiri Laboratori" image="budda-face.jpeg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Ritiri Laboratori</h2>
               <hr></hr>

                <h2 className="">Prendersi un tempo per coltivare la Grazia, la Gratitudine, la Saggezza e la Forza che ci abitano  </h2>
                <h5 align="center"><strong>Marinella Visconti e Marialuisa Carenzi</strong><br/><br/></h5>
                <h5 align="center"><strong>3 Ottobre 10:00 - 4 Ottobre 13:00</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/prendersi.jpg")}
                    ></img><br/><br/>

              <p>“E Maria se ne andò per il sentiero

che non porta da nessuna parte, come una donna a cui importi

ben poco che le strade finiscano,

dal momento che sa camminare nel cielo…”( Marguerite Yourcenar)</p>
<p>“Queste erano le voci delle donne

che in modo femminile parlano di imparare, insegnare guarire.

Queste voci sono belle, erotiche. provocatorie e dotte.

Esse sono piene di furore, gioia, riso e forza!

(Omifunke,Yyoruba-sacerdotessa della dea Yemaja)</p>
<h5 align="left">Per storia personale o culturale spesso abbiamo sviluppato immagini e possibilità di esistere limitate, ristrette rispetto all’ampiezza e alle sfaccettature variopinte che ci abitano.</h5>
<h5 align="left">Ma ogni essere porta nel ventre la potenza luminosa di una Dea, Sapiente e Creatrice.</h5>
<h5 align="left">In questo seminario ci lasceremo “possedere” dalla Forza Creativa Luminosa che non ha forma né struttura tuttavia da Lei nascono tutte le forme e strutture…energia che dà nutrimento a tutte le cose…ingresso nel Mistero.</h5>
<h5 align="left">La vera creatività che trasforma e guarisce sorge dall’unione col divino col mistico con l’inconoscibile e quando accade, quando ci abbandoniamo ad essa, è gioia per colei che crea e una benedizione per gli altri.</h5>
<h5 align="left">Ritroviamo le nostre radici che affondano e si nutrono in un Sacro Fuoco che non si è mai spento, sorgente del soffio vivificatore e trasformatore.</h5>
<h5 align="left">Contattare le nostre vere radici è risvegliare, ri-membrare il legame antico con la Sorgente di Luce nel profondo e nell’altissimo, che ricolma di Potenza, Forza, Grazia, Guarigione, Bellezza.</h5>
<h5 align="left">Questo seminario è rivolto a tutti coloro che desiderano lavorare in profondità e in autenticità sviluppando un approccio contemplativo e spirituale alla vita.</h5>
<h5 align="left">E’ utile a counselor, psicologi, professionisti della salute, insegnanti, operatori olistici e a tutti coloro che sono interessati a portare la ricerca spirituale nella propria vita e che abbiano una pratica spirituale nella propria vita (meditazione, preghiera, yoga…).</h5>
<h5 align="left"><strong>DATA E LUOGO</strong><br/>Il seminario inizia sabato 3 ottobre alle 10:00 e finisce alle 13:00 di domenica 4 ottobre 2020.
Il corso si svolgerà presso l’Eremo di Montecastello (Brescia).</h5>
<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  

                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/marialuisa.jpg")}
                    ></img>
                    <h4 className="title">Marialuisa Carenzi  </h4>
                    <p className="category text-info"> Psicoterapeuta ad orientamento contemplativo -

Kum Nye </p>    
                  </div>
                  <AlertDialogSlide content={marialuisa_curriculum}/> 
                  
                </Col>  
              </Row>
            </div>
          </Container> <br/>


<Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/prendersi-un-tempo-per-coltivare-la-grazia-la-gratitudine-la-saggezza-e-la-forza-che-ci-abitano-con-marinella-visconti-e-marialuisa-carenzi/"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  


{/* ------------------------------------------------------------- */}
  <hr></hr>
     {/* ------------------------------------------------------------- */}
     
                <h2 className="">Braveheartfulness School – Seminario introduttivo</h2>
                <h5 align="center"><strong>Marinella Visconti</strong><br/><br/></h5>
                <h5 align="center"><strong>7 Novembre 09:30 - 18:00</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/seminario.jpg")}
                    ></img><br/><br/>

<h5 align="left">Si tratta di un percorso del Cuore che ha come finalità il celebrare la Vita permettendo alla nostra natura sacra di esprimersi attraverso il coraggio del cuore che sceglie di esserci nel momento presente, in ogni circostanza lasciando andare la paura, i pregiudizi e le convenzioni che oscurano la nostra vera natura e riconosce che la festa della Vita è proprio qui nel momento presente e in ogni circostanza.
È questa l’audacia: </h5>
  <p>“Per avere luce bisogna farsi crepa,
Spaccarsi,
Sminuzzarsi,
Offrire.”
Chandra Livia Candiani</p>
<h5 align="left"> Ci accosteremo alle qualità del cuore a partire dagli insegnamenti buddhisti e da quello che comprendiamo. La nostra natura più profonda è intrinsecamente etica e se siamo nel momento presente le nostre qualità sorgono spontaneamente. Useremo l’approccio della Core Process Psychotherapy in particolare per tutti quegli aspetti del percorso in cui si lavorerà in relazione e diverse pratiche contemplative ed espressive dentro la cornice della consapevolezza in azione convinti che allenare la dimensione analogica faciliti il lasciare andare i condizionamenti che oscurano la nostra vera natura. Nessun ascolto profondo è possibile se c’è separazione tra mente e cuore….l’ascolto profondo è possibile solo quando le personalità scompaiono e sorge la natura sacra che ci abita…quando incarniamo il silenzio innocente.

La Braveheartfulness School è un percorso aperto a tutti i ricercatori spirituali, in particolare psicoterapeuti, operatori della salute, insegnanti, meditanti che abbiano una regolare pratica e abbiano già fatto un significativo lavoro su di sé, abbiano familiarità con il lavoro in gruppo e con la pratica del silenzio e desiderano offrire la propria autenticità alla vita nella consapevolezza della sacralità di ogni singola espressività e nella consapevolezza che tutte le manifestazioni dell’essere originano dalla stessa Sorgente che accoglie e sostiene</h5>
  <h5 align="left"><strong>DATA E LUOGO</strong><br/> Il seminario si svolgerà il 7 Novembre  2020 presso il Centro d'Ompio Via Pratolungo, 47 Pettenasco (NO) dalle ore 9:30 alle 18:00</h5>
<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
              </Row>
            </div>
          </Container> <br/>


<Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/braveheartfulness-school-seminario-introduttivo/"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  

 {/* ------------------------------------------------------------- */}
 <hr></hr>
 <h2 align="center">Ritiro laboratorio</h2>
                    <h2 className="">Incontrare a cuore aperto il mistero della sofferenza</h2>
                <h5 align="center"><strong>Marinella Visconti</strong><br/><br/></h5>
                <h5 align="center"><strong>8 Novembre 10:00 - 18:00</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/cascata.JPG")}
                    ></img><br/><br/>
<h5 align="left"><strong>Costo per la giornata</strong><br/> Euro 30 da consegnare alla segreteria del centro D'Ompio per pranzo e uso della struttura. Il ritiro come da tradizione orientale è ad offerta libera. </h5>
                <h5 align="left"><strong>DATA E LUOGO</strong><br/> Il seminario si svolgerà il 8 Novembre  2020 presso il Centro d'Ompio Via Pratolungo, 47 Pettenasco (NO) dalle ore 9:30 alle 18:00</h5>
<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
              </Row>
            </div>
          </Container> <br/>

 {/* ------------------------------------------------------------- */}
                <hr></hr>
               
  
                <h2 className="">Quando lo Spazio si fa Sacro</h2>
                <h5 align="center"><strong>Marinella Visconti e Simone Spina</strong><br/><br/></h5>
                <h5 align="center"><strong>11-13 Dicembre 2020</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/arcobaleno.jpg")}
                    ></img><br/><br/>
                    <p>“Ben oltre le idee di giusto e di sbagliato c’è un campo...ti aspetterò laggiù “</p>
<h5 align="left">Il Campo, lo spazio sacro è originato da forze dentro e fuori da noi più dalla quiete da cui
originano. </h5>
<h5 align="left">
Le forze che agiscono nel campo precedono la genetica e sono espressione della Matrice che
ordina la vita stessa e questo è un punto di vista che contempla il mistero.
  </h5>
<h5 align="left">Se coltiviamo Presenza lo spazio diventa Sacro e nulla può accadere di pericoloso....i
condizionamenti si resettano, le nostre storie individuali diventano quelle di tutti.....siamo
nell’indifferenziato....ci incontriamo nella stessa radura...sacro e ordinario co emergono.
La pratica nella vita è condivisa.... Il nostro risveglio è in relazione....il materiale che sorge nel
lavoro in relazione dà forma al gruppo e parte del processo è scegliere cosa nutrire e cosa no..
Più ci sentiamo al sicuro, più andiamo in profondità e il modo in cui generiamo sicurezza pulisce
lo spazio e lo rende onesto, nudo...</h5>
<h5 align="left">Ognuno incontra la propria sofferenza..... è un lavoro enorme significa chiedersi chi siamo
sinceramente e prendersi la responsabilità della natura della sofferenza e dei nostri processi.
La guarigione può avvenire nel presente ed è relazionale....il campo è una rappresentazione della
compassione in azione.....Lo spazio non è mai vuoto, è una soglia tra ciò che è noto è ciò che non
è noto o ignoto, è consapevolezza e guarigione.</h5>
<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    href="http://centromindfulnessmilano.com/myportfolio/simone-spina/"
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                  </div>
                </Col>   
              </Row>
            </div>
          </Container> <br/>


<Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/braveheartfulness-school-pratiche-contemplative-quotidiane-per-cuori-coraggiosi/"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  

                <hr></hr>

 {/* ------------------------------------------------------------- */}
 <h2 className="">CERCARE l’INNOCENZA IN OGNI FORMA.
UN VIAGGIO NELLA PROFONDITÀ DELLA RELAZIONE
ACCOMPAGNATI DALLE PERFEZIONI DEL CUORE</h2>
                <h5 align="center"><strong>Marinella Visconti e Sanda Stojkovich</strong><br/><br/></h5>
                <h5 align="center"><strong>Second modulo 4-7 marzo 2021 (Prima parte) e quarto modulo 9-12 dicembre 2021 (Seconda parte)</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/coltivare.JPG")}
                    ></img><br/><br/>

<h5 align="left">È così facile vedere le cose negli stessi modi nei quali siamo abituati a
vederle, e sentire negli stessi modi nei quali siamo abituati a sentirle,
percorrendo le stesse strade che siamo abituati a percorrere.
C'è qualcosa di confortevole, conosciuto, apparentemente sicuro....
Anche se non pienamente vivo....
Cosa accadrebbe se ci aprissimo alla possibilità di incontrare le
circostanze della vita coltivando le perfezioni del cuore invece che le
abitudini?</h5>
<h5 align="left">Paramitas, le perfezioni del cuore, le nobili qualità, significano : “andare
sull'altra sponda”.
Sono le perfezioni delle qualità che ci portano sull'altra sponda... ma non
è sull’arrivare all'altra sponda che ci focalizziamo....è sul viaggio, che è
unico e di cui possiamo prenderci cura, coltivando le qualità come
strumenti utili per farlo in modo più abile, con gli occhi e i cuori più aperti.</h5>
<h5 align="left">Paramitas, le perfezioni del cuore, le nobili qualità, significano : “andare
sull'altra sponda”.
Sono le perfezioni delle qualità che ci portano sull'altra sponda... ma non
è sull’arrivare all'altra sponda che ci focalizziamo....è sul viaggio, che è
unico e di cui possiamo prenderci cura, coltivando le qualità come
strumenti utili per farlo in modo più abile, con gli occhi e i cuori più aperti.</h5>
<h5 align="left"><strong>DATA E LUOGO</strong><br/> Il seminario si svolgerà il  9-12 dicembre 2021 presso il Centro D'Ompio</h5>
<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                     
                      src={require("assets/img/sanda.jpg")}
                    ></img>
                    <h4 className="title">Sanda Stojkovich </h4>
                    <p className="category text-info">Formzione continua in core process psychotherapy - Educatrice perinatale</p>  
                    <AlertDialogSlide content={sanda_curriculum}/> 
                  </div>
                </Col>   
              </Row>
            </div>
          </Container> <br/>


{/* <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/braveheartfulness-school-seminario-introduttivo/"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>   */}


<hr></hr>

{/* ------------------------------------------------------------- */}
 {/* ------------------------------------------------------------- */}
 <h2 className="">Allenare il coraggio del cuore con l’audacia dell’espressività</h2>
                <h5 align="center"><strong>Marinella Visconti e  Dafna Moscati</strong><br/><br/></h5>
                <h5 align="center"><strong>8-10 aprile 2022</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/allenare.jpg")}
                    ></img><br/><br/>
                  <h5 align="left"> Ognuno di noi porta in sé un capolavoro nascosto, però siamo d’intralcio…spostiamoci, e il capolavoro verrà alla luce…forse la più grande tragedia della nostra vita è che la libertà è possibile eppure ogni giorno ascoltiamo una voce  che ci tiene piccoli..

SCOPRIRE la verità è arduo e ci chiede l’audacia del cuore tornando ad essere fanciulli e fidandoci delle braccia terapeutiche della vita

Alcuni degli strumenti espressivi che ci accompagneranno in questo viaggio di ‘allenamento’ all’audacia e alla pratica contemplativa quotidiana del cuore coraggioso saranno l’Arte Intuitiva, la Performance e gli Atti Evolutivi. Queste pratiche di Arte Interattiva saranno facilitate e guidate da Dafna Moscati che le propone da molti anni come potenti e semplici modalità di autoindagine.
Ciò che accomuna questi strumenti è la possibilità di permetterci di immergerci con immediatezza nella pura Presenza e al tempo stesso fare quel passo ‘oltre la zona di comfort’ verso l’investigazione profonda che ci riconduce con naturalezza all’Essenza di quello spazio di puro Amore e di pieno potenziale infinito.

Cosa c’è oltre la paura, oltre la comodità, oltre la vergogna, oltre il conosciuto?

Cosa ti aspetta oltre i soliti conflitti, oltre le solite dinamiche relazionali?

Quando è stata l’ultima volta che hai fatto qualcosa di nuovo?

Ogni partecipante sarà accompagnato ed ispirato nella creazione e nell’esperienza diretta di nuove opere espressive partendo dalle proprie ‘domande’ e da tutto ciò che vuole essere esplorato nel momento.
Un’altro elemento chiave di queste pratiche è l’incontro con l’Altro come nostro specchio.

Cosa mi spaventa nel contatto con l’altro?

Mi incuriosisce, mi attira o mi chiudo e mi vergogno?
Per arrivare fino al cuore in cui L’altro è semplicemente quel te che devi ancora incontrare.

“Una mente e un cuore che si sono allargati grazie ad una nuova esperienza di Audacia non possono più tornare alle loro vecchie dimensioni”</h5>
<h5 align="left"><strong>DATA E LUOGO</strong><br/> Il corso si terrà il 8-10 aprile 2022 dalle 10 alle 17 presso il Centro Mindfulness Milano in Via Cenisio 5.</h5>

<h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>
          <Container>
          
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
                    
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/dafna.png")}
                    ></img>
                    <h4 className="title">Dafna Moscati </h4>
                    <p className="category text-info"> Performer Ricercatrice arte espressiva contemplativa  </p>    
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="https://www.dafnamoscati.com/biografia-dafna-moscati/"
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
              </Row>
            </div>
          </Container> <br/>







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

