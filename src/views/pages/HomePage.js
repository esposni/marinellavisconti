import React from "react";
// reactstrap components
import {
  // Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  // Row,
  // Col,
  // UncontrolledTooltip
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

export default function HomePage() {
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader 
          image="marinella5.jpg" 
          name=""
          desc="Pratiche contemplative nella vita quotidiana"
          home={true}/>
        <div className="section">
          <Container>
            <h3 className="title">Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere</h3>
            <h5 align="left">Il Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere, la Mindfulness transpersonale in relazione nella vita quotidiana,
nasce come uno dei frutti di una esperienza di formazione e crescita spirituale molto originale e preziosa iniziata oltre 15 anni fa con due terapeute del Karuna Institute Anne Overzee e Deirdre Gordon, dagli apporti formativi di Maura Sills e Franklin Sills, fondatori del Karuna Institute, dalla ricerca e approfondimenti attraverso l’approccio transpersonale che riconosce gli aspetti spirituali e trascendenti dell’esperienza umana e dalla saggezza e contaminazione di differenti tradizioni spirituali.
Promuove il coltivare gli aspetti trascendentali della coscienza che ci portano in quel campo in cui nessuno subisce l’altro e da cui nasce lo scambio attraverso atti di gentilezza che rendono possibile relazionarsi nella maniera più elevata possibile, moltiplicando le opportunità.
Circa 15 anni fa un gruppo stabile di praticanti, principalmente psicoterapeuti si sono ritrovati per due/tre volte l’anno senza aspettative di formazione ma al solo scopo di fare una propria ricerca spirituale e di andare molto a fondo nella propria autenticità trasformando il dolore in poesia condivisa. <br/>
E in questo viaggio la cui originalità è stata proprio la continuità del Sangha/tribù è stato possibile creare un particolare campo di contenimento psico-spirituale in cui coloro che nel tempo si sono uniti potevano immediatamente beneficiare del lavoro di consapevolezza e di cuore che era stato generato nel tempo.
Uno degli intenti principali dell’associazione consiste proprio nel generare campi di contenimento Psico-Spirituali permeati dalle energie del Cuore e sostenuti dalla mente subliminale dove l’approccio contemplativo onora la natura processuale del sé evidenziando la relazione Essere a Essere in connessione con la Sorgente.<br/>
Nell’approccio contemplativo Il modo in cui gli insegnamenti del Buddha vengono utilizzati è estremamente pratico ed incarnato in questo senso la pratica del Dharma rappresenta un progetto etico ed è pratica dell’umano fiorire.<br/>
Il pieno fiorire implica la capacità di rispondere alla, situazione presente non facendo la cosa giusta ma ciò che è più amorevole fare.... Le sfide della vita secondo questa pratica vengono affrontate attraverso l’etica situazionale che enfatizza l’ambiguità.
Il Dharma così inteso diviene cura, il come trovare un modo di vivere senza avere opinioni e credenze e il Dharma compreso è quello in cui gli insegnamenti vengono messi in pratica, sono incarnati.<br/>
Uno degli intenti principali dell’associazione è l’attivismo contemplativo, sostenere coloro che sostengono, (psicoterapeuti , medici, psichiatri, insegnanti, educatori, ricercatori spirituali nella convinzione che attraverso la generosità cominciamo a rendere felici i rapporti. Si dice infatti che il più elevato tipo di dana si abbia allorché una persona degna da qualcosa a un’altra persona degna.
Sostenere le persone sagge, perché sostengono molti altri .Così i saggi entrano a far parte del nostro tempio di consapevolezza e sostengono la nostra coscienza .
L’Intento fondante del Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere è valorizzarci e onorarci e questo ha a che fare con l’evoluzione del cuore, con il sapere quanto valiamo, con il glorificarci e l’essere certi della
nostra natura sacra promuovendo l’arte di vivere.<br/>
In questo senso L’aspetto pratico, incarnato è della massima importanza.<br/>
Si darà origine a spazi radicali dove allenare la mente e il cuore usando la pratica nelle varie manifestazioni per cambiare se stessi ed essere di ispirazione portando la creatività al servizio della gioia compartecipe (attivismo contemplativo)
"Ci piace infatti pensare citando Tiziano Terzani : “che i problemi dell’umanità possano essere risolti un giorno da una congiura di poeti che lascia volare il cuore e che lascia libera la propria fantasia senza la pesantezza del quotidiano ed è capace di pensare diversamente”
Immaginare il Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere come un “cantiere aperto” in cui coloro che accedono contribuiscono a prendersi cura di uno spazio dedicato al risveglio del Cuore per generare movimento e cambiamento.
Il Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere aspira ad un Sangha che non ama il potere e nasce dalla poesia e la vera poesia è una qualità della vita interiore, e non si può spiegare...la poesia inizia dentro ognuno di noi e si esprime in tutto ciò che facciamo con uno stato di coscienza limpido e luminoso. È quello stato di coscienza che crea la vera poesia. Da quello stato di coscienza si opera come Sorgente lasciando andare le personalità....
    <br/><br/>
Il Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere si propone come uno spazio di crescita per leader, psicoterapeuti, insegnanti, operatori sociali che cercano di realizzare il Dharma nella vita...riconoscendo la
soggettività di ognuno come dono che possiamo dare all’umanità. Ogni essere umano è qui per sviluppare originalità e unicità, per nascere a se stessi ed esercitare il pieno diritto di autocreazione, noi siamo fatti per la gioia e il primo atto di libertà è la sovranità.
Queste professionalità hanno la responsabilità di essere consapevoli, integri e di coltivare la pace della mente...le emozioni distruttive come rabbia e attaccamento oscurano infatti la nostra lucidità mentre quando la mente è compassionevole e calma è possibile usare l’intelletto in modo pratico lucido realistico e con determinazione
Una volta che si è coltivato un genuino senso di preoccupazione per gli altri , non c’è spazio per la manipolazione , per l’arroganza e lo sfruttamento, al contrario si può essere onesti sinceri e trasparenti nella propria condotta.
PCi preme Coltivare il desiderio di creare una comunità solidale, coinvolgendo il Sangha/Tribù in un progetto:
“IL BARATTO DELL’ESSERE E DEL FARE” un’iniziativa che promuove il TEMPO DEL CUORE attraverso lo scambio di tempo, competenze, saperi, facendone un dono alla comunità, in particolare a quella comunità che sostiene e può contribuire a gettare le basi di un cambiamento radicale nelle coscienze.
L’intento è contribuire a creare un modello di incontro dove la solidarietà, la generosità e i piccoli gesti quotidiani siano fondanti..
È nel cuore il potere di azione e realizzazione. È il cuore che ha le ali......<br/>
“La nostra pratica sarà assecondata, sorretta e stimolata dal crescente contatto con amici e insegnanti che cercano di realizzare il Dharma nella loro esistenza...siamo esseri partecipi che abitano in una realtà condivisa, alla ricerca di relazioni capaci di accrescere il senso della vita. Un tale amico è qualcuno su cui possiamo contare per migliorare la nostra comprensione del significato della vita e che è in grado di guidarci quando siamo smarriti....tali amici sono dei maestri, nel senso che sono esperti dell’arte di apprendere da ogni situazione....il loro compito non è di rendersi indispensabili, ma di diventare superflui.
La pratica del Dharma fiorisce soltanto quando fioriscono tali rapporti; non possiede altre modalità di trasmissione....
È possibile immaginare una comunità di amici in cui la diversità sia apprezzata anziché censurata, in cui la piccola dimensione del gruppo sia considerata un successo anziché un insuccesso e le domande siano più importanti delle risposte.” (Liberamente tratto da un testo di S. Batchelor
Il Progetto Pienessere rappresenta il punto di partenza, un esperimento, per la realizzazione di un contesto relazionale capace di trasformare non solo l’individuo ma anche la società.
Questi contesti etici e di pratica diventano così laboratori, luoghi di immanenza etica dove consentire alla compassione di diventare azione e pensare a progettare la nuova “Sangha Society”.</h5>
          
         
          
          </Container>
          
          <FormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}
