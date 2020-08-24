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
import FormMessage from"components/FormMessage.js";
import utenti from "../../assets/utenti.json"
import Conduttore from "views/pages/Conduttore"
import DonazioneButton from "views/pages/Donazione"
import Ricetta from "views/pages/Ricette"
// import AlertDialogSlide from "components/PopUpButton.js";

export default function CorpoCiboPage() {
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
        <PageHeader image="orecchio.jpeg" title={`“Non è tanto quello che facciamo, ma quanto amore mettiamo nel farlo. Non è tanto quello che diamo, ma quanto amore mettiamo nel dare”. -  Madre Teresa di Calcutta`}  ifdesc={true}/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">

              <img
                      alt="..."
                     style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/corpocibo.jpeg")}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
              
                <h2 className="title">{`"Ad ogni corpo il suo cibo..."`} </h2>
                <h5 align="left"><strong>…..mi-ALI-mento….</strong></h5>
                <h5 align="left">Vorrei che fossero questo i nostri incontri, appuntamenti che avranno a che fare con il cibo, con il nutrimento del corpo e dello spirito.</h5>
                <h5 align="left">La scelta degli ingredienti, gli abbinamenti, la concentrazione nel godere di essi.</h5>
                <h5 align="left">Un gioco, un accrescimento, una consapevolezza che passa dal forno al cuore, dalla tavola al corpo...</h5>
                <h5 align="left">Passare da una alimentazione distratta ad un nutrimento in totale Pienessere.</h5>
                <h5 align="left">Equilibri sospesi fra sapori, colori e profumi, nel ricordo ancestrale che ci radica alla terra e ci slancia nell’evoluzione verso il cielo.</h5>
                <h5 align="left">Un cammino che si svelerà a noi strada facendo;  un viaggio senza metà nella rincorsa di un'idea travestita da stella.</h5>
                <h5 align="left">Ci incontreremo settimanalmente se sarà possibile o comunque ogni volta in cui nel cuore si sedimenterà un'idea di brillante ALI-mentazione.</h5>
                <h5 align="left">Con il cuore aperto e le ali spiegate mi appresto a questo con chi avrà l’entusiasmo di seguirci. </h5>
                {/* <h5 align="left"></h5> */}
                <br/>
                <h5 align="left"><strong>…..mi-ALI-mento….</strong></h5>
                <h5 align="left">Piccola rubrica di alimentazione contemplativa</h5>
                <h5 align="left">A cura di Monia Talenti</h5>
                <Ricetta title="Cuori sovrapposti" desc={`Eccoci al primo appuntamento della rubrica…..mi-ALI-mento!
Pensiamo ad una persona che ci sta a cuore, un amico, un famigliare, qualcuno che possa avere bisogno di un nostro pensiero speciale.
Focalizziamoci sui cuori; sul nostro cuore e sul quello della nostra persona speciale….
Prepareremo un dolce da donare proprio a lui/lei; “ Cuori sovrapposti"
Impareremo a cucinare un impasto estremamente versatile con il quale potremo fare biscotti di tanti diversi tipi, crostate o torte di frutta.
Naturalmente  le ricette che vi proporrò non conterranno né grassi animali né zuccheri raffinati. Dolci leggeri e naturali così come proponiamo nella cucina della Grande Via del Dr. Berrino.`}
ricetta={["300 g farina di tipo 2",
"10 g polvere lievitante",
"90 g di uvetta ammollata e scolata",
"60 g di olio extra vergine di oliva",
"70 g di succo di mela",
"La scorza di un limone",
"Cannella",
"1 pz di sale",
"2 C di marmellata senza zucchero",
"Granella dei pistacchio per decorare"]}
preparazione={`Mettete in una ciotola capiente la farina, il lievito e gli aromi. Mescolateli e metteteli da parte.
In un boccale del frullatore mettete le parti liquide: olio, uvetta e succo di mela. Frullate fino ad
ottenere una crema omogenea.
Unite l'emulsione alla farina e impastate il tempo necessario affinché si formi un impasto elastico e facilmente lavorabile.
Se necessario e vi accorgete che la farina assorbe molti liquido aggiungete qualche cucchiaio ancora di succo di mela.
Formate una palla e copritela con la pellicola per qualche istante.
Con un cartoncino alimentare di recupero (il cartone del latte vegetale per esempio) tagliate un cuore che utilizzerete come taglia pasta.
Ora siamo pronti per la preparazione finale; infarinate leggermente un piano di lavoro appoggiateci sopra la pasta e stendetela con l’aiuto di un matterello fino alle spessore di 0,5 cm.
Appoggiate il cartoncino sopra l’impasto e ricavate due cuori.
Poi dal cartoncino ritagliate un altro cuore più piccolo con il quale intaglierete il centro uno dei due cuori.
Prendete il cuore di pasta intero e spalmatelo di marmellata.
Infine posizionate sopra il cuore con la marmellata quello il buco al centro.
Ecco pronti i “Cuori sovrapposti”.
Infarnate il cuore a forno caldo a 180° per 20/22 minuti circa, lasciatelo raffreddare e preparatevi per donarlo insieme al vostro sorriso più bello!


P.s. con l’impasto rimasto dal cuore potrete preparare dei meravigliosi biscottini girella come da foto.
Stendete l’impasto, spalmatelo di marmellata
`}
img="ric1.jpg"/>
              </Col>
            </Row>
          
          </Container>
        </div>

        <div className="section section-team text-center">
          <Container>
          <h5 align="left">E’ molto gradita l’iscrizione all'associazione. Ci aiutereste così a sostenere chi sostiene che è il nostro intento principale. 
            </h5><h5 align="left">Se desideri fare una donazione per favore clicca il bottone sottostante</h5>
         <DonazioneButton text={false}/>
            <h2 className="title">CONDUTTORI</h2>
            <Row>
            <Conduttore id={utenti[12].id}
                    img={utenti[12].img}
                    name={utenti[12].name}
                    desc={utenti[12].desc}
                    self={utenti[12].self}
                    link={utenti[12].link}
                    />
            </Row>
          </Container>
        </div>
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

