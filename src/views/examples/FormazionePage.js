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
import FormazionePageHeader from "components/Headers/FormazionePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import AlertDialogSlide from "components/PopUpButton.js";
import DataFormMessage from"components/DataFormMessage.js";

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

  let marialuisa_curriculum=`Marialuisa Carenzi, Psicologa e Psicoterapeuta della Gestalt, con esperienza ventennale, ha approfondito la formazione con approcci terapeutici corporei in Bioenergetica, Danzaterapia, Espressione Corporea, Expression  Primitive, Lomi (terapia corporea gestaltica)e approcci energetici con l’uso di cristalli, suono e tocco.

  Da più di dieci anni anni pratica Meditazione Vipassana sotto la guida di Maestri di Dharma come Ven. Banthe Sujiva, Ven. Banthe Bodhidhamma, Ven. Virahani, Nanni De Ambrogio, James Low, Stephen Batchelor, Ajahn Sucitto
  
  Parallelamente a ciò, da più di dieci anni approfondisce la pratica contemplativa in relazione e la mindfulness in relazione con Anne Overzee e Deirdre Gordon, Psicoterapeute Core Process e insegnanti senior del Karuna Institute (UK) che integra modelli psicoterapeutici occidentali con la psicologia buddista e pratiche di mindfulness; e frequenta il Foundation Training in Kum Nye con Maura Sills, Psicoterapeuta Core Process e fondatrice del Karuna Institute (UK)`;

let valeria_curriculum=`Valeria Giunta 
Dopo una formazione artistica con diploma di pittura all’Accademia di Brera di Milano, credendo nell’arte non solo come ricerca estetica ma anche come possibilità di esprimere parti di sè a volte inespresse, si specializza come Arte terapeuta, alla scuola di formazione quadriennale Art Therapy Italiana e come Supervisore. È  docente in percorsi di formazione professionale di Arte Terapia. Iscritta al registro Professionale Italiano degli arti terapeuti A.P.I.Ar.T.. 
Apre a Milano nel 2000 il Laboratorio delle Arti, L’Artè dove conduce incontri individuali e a piccoli gruppi di arte e arte terapia con bambini, ragazzi e adulti, perché crede che l’arte permetta di comunicare, esprimere emozioni, crescere e vivere a tutte le età più liberi ed autentici, e che ognuno abbia un suo talento da poter scoprire, comunicare e condividere. 
Nella sua ricerca personale e spirituale sente un profondo legame tra la meditazione e l’arte e si avvicina allo yoga, alla Mindfulness, alla meditazione Vipassana con Mario Thanavaro. Ricercatrice in formazione al percorso di ricerca interiore del Filo D’Oro con Daniel Lumera.`;

let federica_curriculum=`Da anni mi occupo di ascolto consapevole del corpo attraverso differenti tecniche di massaggio. Ho approfondito l’approccio Ayurveda con un percorso in Kerala (India) diventando operatore Ayurvedico e di Yoga Therapy. Da circa vent’anni pratico Yoga; ho approfondito la pratica e lo studio dei Testi in India, diplomandomi sia in Ashtanga Yoga Mysore Style che in Hatha Yoga Tradizione Sivananda. I testi di Swami Satyananda Saraswati sono stati parte importante dello studio individuale della Scienza dello Yoga. Nella mia pratica personale orientata all’ascolto del cuore sono molto legata agli insegnamenti di Sri Krishanamacharya. Offro lezioni di Yoga, percorsi di consapevolezza del corpo e del respiro ( Pranayama) e serate di Yoga Nidra.
Sono operatore di Craniosacrale Biodinamica, una volta diplomata in Italia ho iniziato ad approfondire la materia della Biodinamica e temi legati al territorio pre e perinatale con Franklin Sills co.fondatore del Karuna Institute, Cherionna Menzam-Sills. Approfondimenti della pratica Biodinamica con M. Shea e M. Boxhall. Ho frequentato il percorso di Baby Training tenuto da Matthew Appleton ( Core Process Psychoterapist).
Da circa sei anni Cherionna Menzam-Sills è mia mentore per la pratica della Biodinamica, dell’esplorazione del territorio perinatale e soprattutto per l’approfondimento del Continuum Flow. Con Cherionna ho approfondito la pratica del Continuum Flow con ritiri e seminari.
Con l’Associazione Mudita ho frequentato il percorso di Mindfulness in relazione, seminari di Kum Nye e di pratica contemplativa con Anna Overzee e Deirdre Gordon, docenti del Karuna Institute. Attualmente sono studente al secondo anno di PQMA (Post-Qualification MA in Mindfulness Based Psychotarapy Practice) presso il Karuna Institute. Maura Sills, co-fondatrice dell’istituto, è parte del tutors team del mio corso.
Da anni faccio parte di un progetto di ricerca, osservazione etnografica e formazione sulle dinamiche di interazione e comunicazione nei mondi sanitari che ha coinvolto tra gli altri l’Università degli Studi di Padova. In particolare presso l’Azienda-Policlinico Universitario di Padova, Centro Regionale Veneto di trapianti di organi e tessuti e l’AULLS 3. Il fuoco di questa attività è di offrire spazi di consapevolezza e ascolto polisensoriale tra gli operatori della Salute per favorire la relazione di cura
con le persone richiedenti cure.`;

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

let clarisse_curriculum=`Clarisse Talato Clarisse è  psicologa psicoterapeuta iscritta all’ordine degli psicologi del Piemonte numero 1942. Psicoterapeuta contemplativa secondo il modello Core Process Psycothrapy formata con Anne Overzee e Deirdre Gordon (docenti del Karuna Institute in Inghiltera)  Supervisore  psicoterapia Contemplativa, EMDR Practitioner, danzaterapeuta, esperta nel suono del tamburo e pratiche espressive dell’Africa subsahariana. Specializzata negli imprinting prenatale e alla nascita, seguendo l’approccio del maestro Dominique Degranges e delle teorie della terapia Prenatale e della Nascita, elaborata da Ray Castellino. In formazione per divenire insegnante di yoga tibetano con le pratiche del Kum Nye con la docente Maura Sills del Karuna Institute  Uk `;
  
let gemma_curriculum = `Gemma è insegnante certificata Yoga Ratna, metodo che ha approfondito formandosi alla scuola della maestra Gabriella Cella. Lo yoga ratna, rispettando l’insegnamento tradizionale indiano, integra le tecniche corporee della sapienza occidentale attraverso una pratica sempre nuova, fondata sulla simbologia e l’ascolto.
Gemma è impegnata in un percorso di formazione continuo sullo yoga e le discipline della salute indiane, iniziato nel 2006 in India, dove si reca regolarmente, proponendo anche viaggi culturali.
È diplomata in Hatha yoga e yoga terapia e, oltre al metodo yoga ratna, si dedica all’insegnamento del Vinyasa yoga, secondo la tradizione di Mysore.`;

let anushka_curriculum=`Insegno meditazione, lavoro come consulente per le organizzazioni, e
faccio coaching di leadership in indiividuale e in team. Attraverso il
mio lavoro, porto le pratiche orientali nella vita moderna occidentale,
rendendole accessibili agli individui e alle organizzazioni. Sono
particolarmente interessata ad integrare leadership, creatività e
consapevolezza, aiutando i leader a sviluppare coraggio, chiarezza e
compassione, affinché la loro visione possa realizzarsi. Insegno in
workshop e ritiri in tutto il mondo all'interno di organizzazioni,
conferenze e programmi di leadership.
Il mio lavoro di consulenza strategica e di coaching è basato su un BA
di Harvard, un MBA di Yale focalizzato sulla leadership e sul
comportamento organizzativo, e sulla certificazione in coaching
dell'Institute Coaching Training (Istituto di formazione per coach). Ho
più di 20 anni di esperienza di consulenza con gruppi nei settori
corporativo, governativo e no profit. Sono interessata alla vita della
città e sono stata nominata sindaco della commissione di San Francisco
per lo sviluppo della comunità, oltre ad aver servito in molti consigli
direttivi di organizzazioni no profit. Sono da sempre coinvolta in
movimenti per la giustizia sociale e diritti civili e ho avuto la
fortuna di lavorare con numerose grosse organizzazioni comunitarie.
Pratico la  meditazione buddista da più di 30 anni, principalmente
Vipassana o Meditazione Insight (la fonte della Mindfulness secolare).
Dopo aver studiato Buddhismo ad Harvard, mi sono formata in meditazione,
per quattro anni a tempo pieno negli Stati Uniti, India e Sri Lanka.
Sono stata invitata ad insegnare Dharma nel 1998 e più tardi ho
partecipato ad un programma di formazione per insegnanti di meditazione
della durata di quattro anni insieme a Jack Kornfield, Joseph Goldstein,
Sharon Salzberg e altri importanti insegnanti di meditazione buddista
occidentale. Sono dal 2011 membro del  Consiglio degli Insegnanti al
Spirit Rock Meditation Center.
Il mio lavoro è stato descritto in pubblicazioni come Tricycle, Lion’s
Roar, Turning Wheel, Inquiring mind, così come sul mio blog sull'
Huffington Post,
dedicato al dharma e alla politica.`

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
                <h2 className="title">Pratiche contemplative quotidiane per cuori CORaggiosi</h2>
                <h2 className="">Ritiri - laboratori  di ricerca interiore</h2>
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

<h2 className="">REQUISITI DI PARTECIPAZIONE </h2>
<h5 align="left">Questo percorso è aperto a tutti i ricercatori spirituali, in particolare psicoterapeuti, operatori della salute, insegnanti, meditanti che abbiano una regolare pratica e abbiano già fatto un significativo lavoro su di sé, abbiano familiarità con il lavoro  in gruppo e con la pratica del silenzio  e  desiderano offrire la propria autenticità alla vita nella consapevolezza della sacralità di ogni singola espressività e nella consapevolezza che tutte le manifestazioni dell’essere originano dalla stessa Sorgente che accoglie e sostiene</h5>
<h5 align="left">Nota Bene: L’iscrizione al percorso è soggetta a colloquio conoscitivo</h5>
<p>È possibile  partecipare ad un singolo incontro, a un gruppo di incontri o  abbracciare l’intero percorso nella consapevolezza che la pratica del cuore è ospitante...ma verrà data precedenza di partecipazione a coloro che seguono l’intero percorso.</p>
<h2 className="">STRUTTURA DELLA SCUOLA </h2>
<h5 align="left">Il percorso  che inizia a dicembre 2020 e termina nel 2025  è suddiviso in moduli di tre o quattro giorni e prevede anche  due ritiri che saranno il  primo di 7 giorni nel 2021  e il secondo finale di 7/10 giorni da definire nel 2025.</h5>
<h5 align="left">In tutto 15 moduli, di cui quattro  di 4 giorni e    nove di 3  giorni per un totale di 43 giorni di formazione più un ritiro  di 7 giorni  volto a sostenere e approfondire il percorso con <strong>Anushka Fernandopulle Insegnante di Vipassana e Heartfulness dello Spirit Rock Meditation Center di San Francisco</strong> con cui sono previste  5 giornate di pratica Vipassana e due giornate  di pratiche  heartfulness  e colloqui individualizzati per gli allievi della scuola e  infine un ritiro laboratorio finale (da definire rispetto a tempi date e costi)  in  un luogo dal  forte impatto energetico e naturalistico in cui tutte le pratiche verranno coltivate contemporaneamente con l’intento di </h5>
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

<h2 className="">RITIRO DI VIPASSANA E HEARTFULNESS CON ANUSHKA FERNANDOPULLE </h2>
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
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione-events" tag={Link}
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
<h2 className="">WORKSHOP CON ANUSHKA FERNANDOPULLE</h2>
<h3 align="center" className="bold" >UN SENTIERO RADICALE DI ADDESTRAMENTO MENTALE</h3>
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
<Button
                    block
                    className="btn-round"
                    color="info"
                    to="/formazione-events" tag={Link}
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
<h2 className="">COACHING DI UNA GIORNATA CON ANUSHKA FERNANDOPULLE</h2>
<h5 align="center"><strong>Eremo di Montecastello (Bs) 8 ottobre 2021</strong><br/><br/></h5>
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
                    to="/formazione-events" tag={Link}
                    size="sm"
                  >Per maggiori informazioni
                    </Button>  
{/* ------------------------------------------------------------- */}

<h2 className=""> DATE E LUOGO</h2>
<h5 align="left">Ogni modulo si svolgerà, se di quattro giorni, dal giovedì alle 14.30 alla domenica alle ore 13.00 o se di tre giorni, dal venerdì alle 14.30 alla domenica  alle ore 13.00 presso il Centro D’Ompio a Pettenasco (NO).

Il ritiro dall'1 al 5 ottobre 2021 e le giornate di Heartfulness dal 7 all’8 ottobre saranno presso l’Eremo di Montecastello (BS).

Il ritiro finale è da definire.</h5>  
<h5 align="left">1 modulo 10-13 dicembre 2020: Quando lo Spazio si fa Sacro...Marinella Visconti e Simone Spina    </h5>
<h5 align="left">2 modulo 4-7 marzo 2021: Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Prima parte.    Marinella Visconti e Sanda Stojkovich </h5>
<h5 align="left">3 modulo 1-8 ottobre 2021 <strong>Ritiro di Vipassana e  Heartfulness</strong> 1-5 ottobre e 7-8 ottobre<strong>pratiche di  Heartfulness e colloqui individualizzati con Anushka Fernandopulle</strong>  presso eremo di Montecastello(BS)</h5>
<h5 align="left">4 modulo 9-12 dicembre 2021 : Cercare l’innocenza in ogni forma. Un viaggio nella profondità della relazione accompagnati dalle perfezioni del cuore.

Seconda parte.    Marinella Visconti e Sanda Stojkovich </h5>             
<h5 align="left">5 modulo 8-10 aprile 2022: Allenare il coraggio del cuore con l’audacia della espressività. Marinella Visconti e Dafna Moscati</h5>
<h5 align="left">6 modulo 23-25 settembre 2022:  Allenare il coraggio del cuore con l’audacia della danza contemplativa.   Marinella Visconti e Clarisse Zaccarino</h5>
<h5 align="left">7 modulo 2- 4 dicembre 2022 : Allenare il coraggio del cuore con l’audacia del Kum Nye.   Marinella Visconti e Marialuisa Carenzi

</h5>
<h5 align="left">8  modulo 24-26 marzo 2023: Allenare il coraggio del cuore con l’audacia delle vibrazioni armoniche. Marinella Visconti e Elsa Chiesa</h5>
<h5 align="left">9 modulo 22-24 settembre 2023: Allenare il coraggio del cuore con l’audacia della fluid awareness.   Marinella Visconti e Federica Gonzati</h5>
<h5 align="left">10 modulo 1-3 dicembre 2023 : Allenare il coraggio del cuore con l’audacia del Qi Gong.     Marinella Visconti e Paolo Testa</h5>
<h5 align="left">11  modulo 22-24 marzo 2024: Allenare il coraggio del cuore con l’audacia della poesia.   Marinella Visconti e Giovanna Santoro </h5>
<h5 align="left">12 modulo 20-22 settembre 2024: Allenare il coraggio del cuore con l’audacia del movimento.   Marinella Visconti e Gemma D'Alessandro</h5>
<h5 align="left"> 13 modulo 12-15 dicembre 2024: Allenare il coraggio del cuore con l'audacia della creazione. Marinella Visconti e Valeria Giunta  </h5>
<h5 align="left"> 14 modulo 13-16 marzo 2025: Allenare il coraggio del cuore con l’audacia della Presenza...il cuore trascendente. Marinella Visconti e Simone Spina </h5>
<h5 align="left">15 modulo 2025: RITIRO LABORATORIO FINALE IN LUOGO A FORTE IMPATTO NATURALISTICO SPIRITUALE DA DEFINIRE</h5>



              </Col>
            </Row>
          
          </Container>
        </div>

 {/* Conduttori ------------------------------------------------------------- */}
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
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/anuska.jpg")}
                    ></img>
                    <h4 className="title">Anushka Fernandopulle </h4>
                    <p className="category text-info">Insegnante allo Spirit Rock Meditation Centre</p>    
                  </div>
                  <AlertDialogSlide content={anushka_curriculum}/> 
                </Col>   
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/sanda.jpg")}
                    ></img>
                    <h4 className="title">Sanda Stojkovich </h4>
                    <p className="category text-info"> Formzione continua in core process psychotherapy - Educatrice perinatale</p>    
                  </div>
                  <AlertDialogSlide content={sanda_curriculum}/> 
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
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/clarisse.jpeg")}
                    ></img>
                    <h4 className="title">Clarisse Zaccarino </h4>
                    <p className="category text-info"> Psicoterapeuta ad orientamento contemplativo -  danza contemplativa</p>    
                  </div>
                  <AlertDialogSlide content={clarisse_curriculum}/> 
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
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/elsa01.png")}
                    ></img>
                    <h4 className="title">Elsa Chiesa</h4>
                    <p className="category text-info"> Mindfulness Counselor e biomusica</p>    
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/elsa-chiesa/"
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col>  
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/federica.jpeg")}
                    ></img>
                    <h4 className="title">Federica Gonzati </h4>
                    <p className="category text-info">  Sociologa operatore olistico craniosacrale biodinamica </p>    
                  </div>
                  <AlertDialogSlide content={federica_curriculum}/> 
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/paolo_testa.jpg")}
                    ></img>
                    <h4 className="title">Paolo Testa </h4>
                    <p className="category text-info">  Psicoterapeuta ad orientamento transpersonale e contemplativo Qi Gong </p>    
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/paolo-testa/"
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/giovanna.jpg")}
                    ></img>
                    <h4 className="title">Giovanna Santoro</h4>
                    <p className="category text-info">  Mindfulness counselor la pratica contemplativa e la poesia</p>    
                  </div>
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="http://centromindfulnessmilano.com/myportfolio/giovanna-santoro-2/"
                    size="sm"
                  >Curriculum
                    </Button>  
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/valeria.jpg")}
                    ></img>
                    <h4 className="title">Valeria Giunta </h4>
                    <p className="category text-info"> Arteterapeuta - la  pratica  contemplativa del mandala</p>    
                  </div>
                  <AlertDialogSlide content={valeria_curriculum}/> 
                </Col> 
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Gemma.png")}
                    ></img>
                    <h4 className="title">Gemma D'Alessandro </h4>
                    <p className="category text-info"> Insegnante di yoga</p>    
                  </div>
                  <AlertDialogSlide content={gemma_curriculum}/> 
                </Col> 
              </Row>
            </div>
            <br/>
            <h2 className="">Costi</h2>
            
            <h5 align="left">Il costo del percorso quadriennale  è di 1350 euro l’anno  divisibile in tre rate annuali due da 400 euro e la prima di 550 euro, più la tessera associativa di 25 euro da rinnovare ogni anno. Il  costo comprende i costi del ritiro di ottobre  2021 e le due giornate di Heartfulness e i colloqui individualizzati con Anushka Fernandopulle.</h5>
            <h5 align="left">La quota non comprende il ritiro finale (modulo 15) da definire sia rispetto alla meta che ai tempi e ai costi di formazione e il   costo per vitto e alloggio  da pagare presso il Centro D’Ompio per i seminari della scuola  e il costo di vitto e alloggio per l’eremo di Montecastello che ospiterà  il  ritiro.</h5>
            <h5 align="left">Ecco le coordinate bancarie per il bonifico:</h5>
            <h5 align="left">Associazione Mudita c/o Intesa San Paolo spa</h5>
            <h5 align="left">Iban IT83 E030 6909 6061 0000 0128 339</h5>
            <h5 align="left">Bic BCITITMM (per i bonifici dall'estero)</h5>
            <h5 align="left">Causale: Cognome e Nome del partecipante – Iscrizione Braveheartfulness School o modulo n.    Braveheartfulness school</h5>
      

          </Container>
        </div>
{/* Luogo ------------------------------------------------------------- */}
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