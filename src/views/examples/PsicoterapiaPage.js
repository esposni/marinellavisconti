import React from "react";

// reactstrap components
import {
  // Button,

  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PsicoPageHeader from "components/Headers/PsicoPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

function PsicoterapiaPage() {

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
        <PsicoPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                {/* <h2 className="title">Who we are?</h2> */}
                <h5 align="left">
                 
Iniziare una psicoterapia significa innanzitutto fare un passo indietro dal mondo quotidiano, per poter andare più in profondità nel nostro percorso di ricerca di benessere e di un modo più consapevole di affrontare la vita.
La pratica della consapevolezza crea le condizioni nella nostra vita perché le cose possano funzionare e crea le condizioni per diventare la persona che aspiriamo ad essere.
Come gli artigiani che prendono il materiale grezzo e lo trasformano in qualcosa di bello la psicoterapia contemplativa ci porta a diventare artigiani di noi stessi immaginando per noi possibilità ancora non pensate e rispondendo in modo appropriato, compassionevole e saggio alla sofferenza della vita fiorendo nella nostra umanità.
Per questo è possibile allenarci attraverso quattro apprendimenti fondamentali:
 <br/>
Abbracciando le esperienze, cioè dicendo si a quel che ci succede, alla vita in quanto tale.
Comprendere cioè senza avidità, odio e confusione, ovvero accettare la totalità dell’esperienza in modo non reattivo.
 
Lasciandole andare cioè lasciando andare la reattività, divenendo consapevoli di come reagiamo
 
Fermandoci per osservare il fermarsi, imparando a interrompere le reazioni, in molti sensi, non solo per quanto riguarda le azioni pratiche
 
Agendo con attenzione e consapevolezza
 
Tutto ciò che riguarda l’umanità è un mistero e può essere solo abbracciato <br/> 

Possiamo coltivare il nostro sé così come il contadino coltiva il proprio campo. E la sofferenza non è qualcosa da allontanare come un problema ma piuttosto  qualcosa da accettare come un mistero..

L’intento è coltivare uno spazio di solitudine interiore che ci fa recuperare la nostra integrità e coltivare un’autonomia interiore, con il fine di rispondere al mondo con chiarezza, libertà e cura.

Appena riconosciamo le emozioni che ci abitano esse smettono di essere ostacoli e diventano strumenti che aiutano il nostro cammino mantenendo uno stato contemplativo.

La psicoterapia contemplativa ci porta ad una radicale accettazione di sé per poi interagire meglio con gli altri....

<br/>Coltiviamo lo spazio cioè un’assenza di resistenza, di impedimenti...che ci impediscono di essere in movimento.

La pratica psicoterapica è uno strumento per creare una solitudine in noi, uno spazio senza ostacoli che permetta al sentiero della vita di fiorire.

La pratica principale consiste nella capacità di sperimentare la vita come una domanda, che porta perplessità e curiosità. 

<br/>Cos’è questo?

Una domanda da porre con la totalità del proprio corpo, coi pori della propria pelle e il midollo delle proprie ossa.

In particolare sviluppare quella capacità negativa di stare con i propri dubbi, le proprie incertezze, senza reagire a opinioni e fatti.

È levandosi di scena che la creatività sorge....


                </h5>
<h2 className="">Per approfondire alcuni elementi della pratica psicoterapica contemplativa</h2>
<h5 align="left"><strong>Presenza</strong><br/>
Il punto di partenza è quello della presenza e dell’essere. Il Buddha in Pali usava il termine sati, abitualmente tradotto con consapevolezza (mindfulness). Nel suo significato più ampio, sati è uno stato di presenza inclusiva, uno stato spazioso di risveglio.
L’intenzione primaria è quella di stabilirsi nel proprio orientamento all’essere e alla Sorgente, di entrare in questo stato di presenza, e di orientarsi al cliente o alla persona che abbiamo davanti da questo terreno. Il ruolo primario del terapeuta è proprio quello di essere presente e di sostenere uno spazio di consapevolezza e un campo relazionale tranquillo dove il processo del cliente si possa dispiegare.</h5>
<h5 align="left"><strong>Campo di contenimento</strong><br/>
Quando il terapeuta si orienta al cliente e al suo processo emergente diviene suo ruolo anche mantenere l’apertura verso la Sorgente. Nella Psicoterapia Core Process, quest’intenzione è sostenuta da un orientamento a quelli che nelle scritture Buddiste sono chiamati i Brahma Vihara. Nella pratica di consapevolezza buddista quando l’autocentratura viene veramente lasciata cadere, anche temporaneamente, i Brahma Vihara, ovvero gli stati illimitati della coscienza, sorgono spontaneamente. Si tratta di stati intrinseci di equanimità e presenza, amorevole gentilezza, compassione e gioia. Classicamente sono descritti come quattro stati interconnessi di equanimità (apertura, spaziosità, calma e chiarezza), compassione (il conoscere lo stato di un altro attraverso l’interconnessione e l’essere mossi dall’interessere ad alleviare la sofferenza; la diretta sensazione che “la tua sofferenza è anche la mia”), amorevole gentilezza (uno stato di interconnessione a cuore aperto) e gioia empatica (gioia-in-relazione agli altri).
Il secondo aspetto dell’ambiente di contenimento si relaziona all’asse essere-essere. L’intenzione primaria del terapeuta è nuovamente quella di orientarsi al suo essere e, attraverso la risonanza, aiutare il cliente a stabilirsi in uno stato di co-presenza fino a quando il suo essere emerge spontaneamente (Laing, 1976). Quando il terapeuta si stabilisce nel suo stato di presenza, si crea una risonanza per cui il cliente comincia a stabilirsi nel suo essere, a sviluppare l’abilità di essere presente, e ad essere testimone del suo processo emergente.</h5>
<h5 align="left"><strong>Alcune intenzioni:</strong><br/>

Il terapeuta sostiene un campo di presenza sintonico, olistico e ricettivo e un campo di ascolto non giudicante e non interpretativo.
Viene generato un campo unificato di co-presenza all’interno del quale le informazioni vengono scambiate a livelli sottili ed energetici. Il terapeuta diventa consapevole delle forme non verbali, tonali, e/o energetiche di comunicazione subliminale.
La consapevolezza del terapeuta ed il processo del cliente co-emergono e sono interconnessi. Il terapeuta riceve l’impatto dell’esperienza del cliente, non è separato dalla natura della sua sofferenza, però non l’assume nè si identifica con essa.
Ci sono molte pratiche contemplative che possono supportare la coltivazione di una presenza terapeutica e che possono ancorare il terapeuta al suo stato dell’essere.</h5>
<h5 align="left"><strong>La mente subliminale</strong><br/>
Quando il terapeuta entra in uno stato di presenza, e il campo relazionale si stabilisce e si approfondisce, la comunicazione avviene su molti livelli.
Può anche apparire che la comunicazione avvenga subliminalmente, da mente-a-mente, da cuore-a-cuore. Maura Sills chiama questo stato di risonanza e di diretta conoscenza empatica mente subliminale.
La fisica quantistica supporta l’idea che l’osservatore e l’osservato non siano separati, e che ognuno abbia una relazione diretta e non lineare con l’altro, da campo-a-campo.
In un contesto clinico, questo significa che la conoscenza diretta dell’altro è possibile, e che le intuizioni e le visioni del terapeuta non sono separate dagli stati interiori del cliente e possono essere percepiti attraverso la comunicazione subliminale, da mente a mente, da campo a campo.</h5>
<h5 align="left"><strong>Ricerca incarnata</strong><br/>
Oltre allo stabilire la presenza, a un ambiente di contenimento sicuro, e al risveglio del testimone interiore delineato più sopra, un altro approccio molto utile è il lavoro di focusing di Gendlin. Nel suo libro, Psicoterapia orientata al focusing (Gendlin, 1996), descrive un approccio attraverso cui il terapeuta aiuta il cliente a orientarsi verso il suo mondo interiore attraverso la consapevolezza dell’immediata esperienza incarnata, che Gendlin chiama sensazione sentita. È la sensazione corporea emergente momento-dopo-momento della totalità di qualcosa che è inizialmente non chiaro e al di sotto del livello di consapevolezza di un’emozione formata, di una sensazione, o di un’immagine; eppure le include tutte.
Quando emerge un processo, il cliente impara a stabilirsi nella sensazione fisica che dà, a sostenere consapevolmente la totalità di quello che emerge e a investigare con delicatezza sulla sua natura. Negli insegnamenti buddisti la consapevolezza olistica è un fattore di sati, ed è questo stato di presenza che può sostenere la totalità di qualcosa in un modo morbido e completo.</h5>
              <p>(tradotto e adattato da ‘Being and Becoming’ di F. Sills)</p>
              </Col>
            </Row>
            {/* <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div> */}
          </Container>
          
        </div>

        {/* Luogo ------------------------------------------------------------- */}
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Dove Trovarmi</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio-milano.jpg")}
                    ></img>
                     <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio2.png")}
                      
                    ></img>
                    <h4 className="title">Centro Mindfulness Milano</h4>
                    {/* <p className="category text-info">Model</p> */}
                   
                    Via Cenisio, 5 20154<br/>
           
<br/>

                  </div>
                </Col>

                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio.png")}
                    ></img>
                    <h4 className="title">Studio Privato</h4>
                   
                    Via Auguadri, 22 Como<br/>
                   
                    {/* <p className="category text-info">Model</p> */}
                 
                  </div>
                </Col>
            
              </Row>
              <row>  <p> Per contattarmi: 338 2331754</p>
                      <a href="http://centromindfulnessmilano.com/">Centro Mindfulness Milano</a>
              </row>
            </div>
          </Container>
         
          <FormMessage />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default PsicoterapiaPage;
