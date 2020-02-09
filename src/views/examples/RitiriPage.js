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
import RitiriPageHeader from "components/Headers/RitiriPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
import AlertDialogSlide from "components/PopUpButton.js";



// import AlertDialogSlide from "components/PopUpButton.js";

export default function RitiriPage() {

  let marialuisa_curriculum=`Marialuisa Carenzi, Psicologa e Psicoterapeuta della Gestalt, con esperienza ventennale, ha approfondito la formazione con approcci terapeutici corporei in Bioenergetica, Danzaterapia, Espressione Corporea, Expression  Primitive, Lomi (terapia corporea gestaltica)e approcci energetici con l’uso di cristalli, suono e tocco.

  Da più di dieci anni anni pratica Meditazione Vipassana sotto la guida di Maestri di Dharma come Ven. Banthe Sujiva, Ven. Banthe Bodhidhamma, Ven. Virahani, Nanni De Ambrogio, James Low, Stephen Batchelor, Ajahn Sucitto
  
  Parallelamente a ciò, da più di dieci anni approfondisce la pratica contemplativa in relazione e la mindfulness in relazione con Anne Overzee e Deirdre Gordon, Psicoterapeute Core Process e insegnanti senior del Karuna Institute (UK) che integra modelli psicoterapeutici occidentali con la psicologia buddista e pratiche di mindfulness; e frequenta il Foundation Training in Kum Nye con Maura Sills, Psicoterapeuta Core Process e fondatrice del Karuna Institute (UK)`;

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
        <RitiriPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">Ritiri Laboratori</h2>
                <h5 align="left">Ritiro laboratorio ad offerta libera presso il B&B Creatività Natura e Salute dal 27 al 29 marzo 2020</h5>
                <hr></hr>
                <h2 className="">Allenare il coraggio del cuore con l’audacia dell’espressione </h2>
                <h5 align="center"><strong>Marinella Visconti e Dafna Moscati</strong><br/><br/></h5>
                <h5 align="center"><strong>22 Febbraio 10:00 - 23 Febbraio 17:00</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/allenare.jpg")}
                    ></img><br/><br/>

<h5 align="left">Ognuno di noi porta in sé un capolavoro nascosto, però siamo d’intralcio…spostiamoci, e il capolavoro verrà alla luce…forse la più grande tragedia della nostra vita è che la libertà è possibile eppure ogni giorno ascoltiamo una voce  che ci tiene piccoli..</h5>
<h5 align="left">SCOPRIRE la verità è arduo e ci chiede l’audacia del cuore tornando ad essere fanciulli e fidandoci delle braccia terapeutiche della vita</h5>
<h5 align="left">Alcuni degli strumenti espressivi che ci accompagneranno in questo viaggio di ‘allenamento’ all’audacia e alla pratica contemplativa quotidiana del cuore coraggioso saranno l’Arte Intuitiva, la Performance e gli Atti Evolutivi. Queste pratiche di Arte Interattiva saranno facilitate e guidate da Dafna Moscati che le propone da molti anni come potenti e semplici modalità di autoindagine.</h5>
<h5 align="left">Ciò che accomuna questi strumenti è la possibilità di permetterci di immergerci con immediatezza nella pura Presenza e al tempo stesso fare quel passo ‘oltre la zona di comfort’ verso l’investigazione profonda che ci riconduce con naturalezza all’Essenza di quello spazio di puro Amore e di pieno potenziale infinito.</h5>
<h5 align="left">Cosa c’è oltre la paura, oltre la comodità, oltre la vergogna, oltre il conosciuto?</h5>
<h5 align="left">Cosa ti aspetta oltre i soliti conflitti, oltre le solite dinamiche relazionali?</h5>
<h5 align="left">Quando è stata l’ultima volta che hai fatto qualcosa di nuovo?</h5>
<h5 align="left">Ogni partecipante sarà accompagnato ed ispirato nella creazione e nell’esperienza diretta di nuove opere espressive partendo dalle proprie ‘domande’ e da tutto ciò che vuole essere esplorato nel momento.
Un’altro elemento chiave di queste pratiche è l’incontro con l’Altro come nostro specchio.</h5>
<h5 align="left">Cosa mi spaventa nel contatto con l’altro?</h5>
<h5 align="left">Mi incuriosisce, mi attira o mi chiudo e mi vergogno?</h5>
<h5 align="left">Per arrivare fino al cuore in cui L’altro è semplicemente quel te che devi ancora incontrare.</h5>
<h5 align="left">“Una mente e un cuore che si sono allargati grazie ad una nuova esperienza di Audacia non possono più tornare alle loro vecchie dimensioni”</h5>
<h5 align="left"><strong>DATA E LUOGO</strong><br/> Il corso si terrà il 22 – 23  febbraio 2020 dalle 10 alle 17 presso il Centro Mindfulness Milano in Via Cenisio 5.</h5>
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


<Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/event/allenare-il-coraggio-del-cuore-con-laudacia-dellespressione-marinella-visconti-e-dafna-moscati/"
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  



 {/* ------------------------------------------------------------- */}
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
  
                <h2 className="">Quando lo Spazio si fa Sacro</h2>
                <h5 align="center"><strong>Marinella Visconti e Simone Spina</strong><br/><br/></h5>
                <h5 align="center"><strong>10-13 Dicembre 2020</strong><br/></h5>
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

