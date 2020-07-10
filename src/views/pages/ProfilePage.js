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

function ProfilePage() {
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
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">Chi sono</h3>
            <h5 >
            Psicoterapeuta sistemico relazionale ad orientamento contemplativo e transpersonale e Supervisione contemplativa.Foundation Course con il Karuna Institute England.
Formazione continua in Core Process Psychotherapy con Anne Overzee e Deirdre Gordon, docenti del Karuna Institute.Terapista Craniosacrale Biodinamica, approfondimenti della pratica con ritiri seminari tenuti da Franklin Sills co-fondatore del Karuna Institute e M. Shea.
Training e pratica di Kum Nye con Maura Sills Fondatrice del Karuna Institute England. Ricercatrice in formazione del Filo d’oro con Daniel Lumera.
Praticante di meditazione Vipassana e sostenitrice dell’integrazione tra psicologia buddhista e psicoterapia occidentale.Docente in percorsi di formazione professionale e di crescita personale e spirituale in Mindfulness in relazione e Mindfulness transpersonale e co-fondatore e membro dell’Associazione Mudita (www.associazionemudita.org) riferimento in Italia del Modello di Mindfulness in relazione ispirato alla Core Process Psychotherapy del Karuna Institute England. È socio, membro e co-referente organizzativo del Centro Mindfulness Milano.
            </h5>
            <h5 align="left">Davanti alle sfide della vita, sin da bambina, alcune domande mi hanno guidata negli anni con curiosità e determinazione:</h5>
            <h5 align="left">E’ possibile restituire dignità a tutte le esperienze nella vita?</h5>
            <h5 align="left">Quando si inizia ad avvertire qualcosa di più grande di noi?</h5>
            <h5 align="left">È possibile immaginare un gruppo di amici di Dharma (Sangha) maestri dell’apprendere da ogni situazione?</h5>
            <h5 align="left">Cosa ci aiuta a far fiorire l’essere che ci abita?</h5>
            <h5 align="left">Cosa ci aiuta a coltivare la persona vera semplicemente che fa ciò che dice e dice ciò che fa? La persona che aspira ad una radicale onestà?</h5>
            <h5 align="left">È possibile cercare le fondamenta di una nuova cultura?</h5>
            <h5 align="left">Da queste domande è sorta l’esigenza di dare il proprio personale contributo al fondare con altri un’associazione che per più di dieci anni ha organizzato seminari di crescita personale con un gruppo stabile di partecipanti con cui è stato possibile scendere molto in profondità nell’autenticità.</h5>
            <h5 align="left">La conoscenza della pratica meditativa e del Dharma (gli insegnamenti del Buddha) mi hanno permesso di scoprire di respirare, mi hanno fatto percepire il momento presente e mi hanno insegnato ad assaporare qualsiasi cosa stessi vivendo e hanno restituito dignità e maggiore comprensione ad esperienze di picco che mi hanno accompagnata fin da bambina.</h5>
            <h5 align="left">L’apertura mentale e l’autonomia mi spinge a cercare e incontrare ciò che funziona e sostiene le relazioni intorno a noi facendo la differenza nel qui e ora e che  consente di coltivare relazioni capaci di accrescere il senso della vita coltivando le migliori qualità del cuore che sono il lievito della trasformazione.</h5>
            <h5 align="left">Il cuore in tutto questo diventa l’insegnante, per rafforzare la capacità di essere connessi, fluidi e presenti nella vita.</h5>
            
            {/* <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          </Container>
          <FormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;