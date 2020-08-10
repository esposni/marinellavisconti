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
import Quest1 from"components/Quest1";

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
          image="" 
          name="L'attenzione è la forma più rara e più pura della generosità"
          desc=""
          home={false}/>
        <div className="section">
          <Container>
            <div align="center">
            <img
                alt="..."
                className=""
                style={{width:"20.5em",height:"20.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
            </div>
       
            <p className="category" style={{color:"gold",fontSize:"3.5em",marginTop:"20px"}}>Progetto Pien<i style={{color:"gold",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere</p> 
            <p className="category" style={{color:"gold",fontSize:"2.5em"}}>Pratiche contemplative nella vita quotidiana</p>
            <h5 align="left">Progetto Pien<i style={{color:"gold"}}className="fas fa-heart"></i> Essere, la Mindfulness transpersonale in relazione nella vita quotidiana,
nasce come uno dei frutti di una esperienza di formazione continua e crescita spirituale molto
originale e preziosa iniziata oltre 15 anni fa con due terapeute del Karuna Institute Anne Overzee e Deirdre Gordon, dagli apporti formativi di Maura Sills e Franklin Sills, fondatori del Karuna Institute, dalla ricerca e approfondimenti attraverso l’approccio transpersonale che riconosce gli aspetti spirituali e trascendenti dell’esperienza umana e dalla saggezza e contaminazione di differenti tradizioni spirituali.
Promuove il coltivare gli aspetti trascendentali della coscienza che ci portano in quel campo in cui nessuno subisce l’altro e da cui nasce lo scambio attraverso atti di gentilezza che rendono possibile relazionarsi nella maniera più elevata possibile, moltiplicando le opportunità.
Circa 15 anni fa un gruppo stabile di praticanti, principalmente psicoterapeuti si sono ritrovati per due/tre volte l’anno ogni anno per più di dieci anni senza aspettative di formazione ma al solo scopo di fare una propria ricerca spirituale e di andare molto a fondo nella propria autenticità trasformando il dolore in poesia condivisa. .
E in questo viaggio la cui originalità è stata proprio la continuità del Sangha/tribù è stato possibile creare un particolare campo di contenimento psico-spirituale in cui coloro che nel tempo si sono uniti potevano immediatamente beneficiare del lavoro di consapevolezza e di cuore che era stato
generato nel tempo....ed è proprio questa preziosa esperienza che il Progetto Pien<i style={{color:"gold"}}className="fas fa-heart"></i> Essere intende promuovere e approfondire.
Uno degli intenti principali dell’associazione consiste infatti nel generare campi di contenimento Psico-Spirituali permeati dalle energie del Cuore e sostenuti dalla mente subliminale dove l’approccio contemplativo onora la natura processuale del sé evidenziando la relazione Essere a Essere in connessione con la Sorgente.
Nell’approccio contemplativo il modo in cui gli insegnamenti del Buddha vengono utilizzati è estremamente pratico ed incarnato in questo senso la pratica del Dharma rappresenta un progetto etico ed è pratica dell’umano fiorire.
Le sfide della vita secondo questa pratica vengono affrontate attraverso l’etica situazionale che enfatizza l’ambiguità attraverso la capacità di rispondere non facendo la cosa giusta ma ciò che è più amorevole fare.
Il Dharma così inteso diviene cura, il come trovare un modo di vivere senza avere opinioni e credenze e il Dharma compreso è quello in cui gli insegnamenti vengono messi in pratica, sono incarnati.
Un aspetto fondante del Progetto Pien<i style={{color:"gold"}}className="fas fa-heart"></i> Essere è valorizzarci e onorarci e questo ha a che fare con l’evoluzione del cuore, con il sapere quanto valiamo, con il glorificarci e l’essere certi della
nostra natura sacra promuovendo l’arte di vivere.
In questo senso L’aspetto pratico, incarnato è della massima importanza.
Daremo origine a spazi radicali dove allenare la mente e il cuore usando la pratica nelle varie manifestazioni per cambiare se stessi ed essere di ispirazione portando la creatività al servizio della gioia compartecipe.
"Ci piace infatti pensare citando Tiziano Terzani : “che i problemi dell’umanità possano essere risolti un giorno da una congiura di poeti che lascia volare il cuore e che lascia libera la propria fantasia senza la pesantezza del quotidiano ed è capace di pensare diversamente”
 Progetto Pien
  <i style={{color:"gold"}}className="fas fa-heart"></i> Essere intende promuovere l’attivismo contemplativo, sostenendo in particolare coloro che sostengono, (psicoterapeuti , medici, psichiatri, insegnanti, educatori, ricercatori
spirituali nella convinzione che attraverso la generosità cominciamo a rendere felici i rapporti e nella convinzione che il più elevato tipo di dãna si abbia allorché una persona degna dà qualcosa a un’altra persona degna. Sostenere le persone sagge, perché sostengono molti altri .
il Progetto Pien<i style={{color:"gold"}}className="fas fa-heart"></i> Essere è come un “cantiere aperto” in cui coloro che accedono contribuiscono a prendersi cura di uno spazio dedicato al risveglio del Cuore per generare movimento e
cambiamento ed aspira ad un Sangha che non ama il potere e nasce dalla poesia. La vera poesia è una qualità della vita interiore, e non si può spiegare.... Da quello stato di coscienza si opera come Sorgente lasciando andare le personalità....
Si propone come uno spazio di crescita per leader, psicoterapeuti, insegnanti, operatori sociali che cercano di realizzare il Dharma nella vita...riconoscendo la soggettività di ognuno come dono che possiamo dare all’umanità. Ogni essere umano è qui per sviluppare originalità e unicità, per nascere a se stessi ed esercitare il pieno diritto di autocreazione, noi siamo fatti per la gioia.
 Progetto Pien
 
Queste professionalità in particolare hanno la responsabilità di essere consapevoli, integri e di coltivare la pace della mente e un genuino senso di preoccupazione per gli altri indispensabile premessa per coltivare il desiderio di creare una comunità solidale e gettare le basi di un cambiamento radicale delle coscienze ed è nel cuore il potere di azione e realizzazione.
L’intento è contribuire a creare un modello di incontro dove la solidarietà, la generosità e i piccoli gesti quotidiani siano fondanti..
È possibile immaginare una comunità di amici in cui la diversità sia apprezzata anziché censurata, in cui la piccola dimensione del gruppo sia considerata un successo anziché un insuccesso e le domande siano più importanti delle risposte?
Il Progetto Pienessere rappresenta il punto di partenza, un esperimento, per la realizzazione di contesti relazionali capaci di trasformare non solo l’individuo ma anche la società.
Questi contesti etici e di pratica diventano così laboratori, luoghi di immanenza etica dove consentire alla compassione di diventare azione e pensare a progettare la nuova “Sangha Society”.
</h5> 
<h2 className="title"> Sostenere chi sostiene</h2>
<h5 align="left"><strong>Sono benvenuti e invitati a partecipare e a contribuire al Progetto Pien<i style={{color:"gold"}}className="fas fa-heart"></i> Essere, sostenendo chi sostiene tutti coloro che si sono formati in modo continuativo nell’Associazione Mudita alla
Mindfulness in relazione avanzata in questi ultimi 15 anni, sono invitati a contribuire coloro che conoscono la Mindfulness in relazione e transpersonale, gli insegnanti di Dharma, gli insegnanti di pratiche corporee di consapevolezza e tutti coloro che attraverso la loro professione cercano di incarnare il Dharma.
Prerequisito fondamentale è aver fatto un significativo lavoro su di sé, avere una regolare pratica e sentire una motivazione profonda a donare e a donarsi.</strong>
</h5><h5>Chi fosse interessato può scrivere a <a href="mailto:info@progettopienessere.com">info@progettopienessere.com</a> e compilare il Questionario sotto:
          </h5>
          <Quest1/>
          </Container>
          
          <FormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}
