import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if(window.location.pathname==="/index"){
        setNavbarColor("");
      }else{
        if (
          document.documentElement.scrollTop > 399 ||
          document.body.scrollTop > 399
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 400 ||
          document.body.scrollTop < 400
        ) {
          setNavbarColor("navbar-transparent");
        }
      }
     
     
    };
    window.addEventListener("scroll", updateNavbarColor);
    window.addEventListener("load", updateNavbarColor);
    
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      {/* change info color */}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              // target="_blank"
              id="navbar-brand"
              to="/" tag={Link}
            >
            <div className="photo-container" style={{width:"4.5em",height:"4.5em"}}>
                  <img
                alt="..."
                className=""
                // style={{width:"5.5em"}}
                src={require("assets/img/marinella5.jpg")}
              ></img>
            </div>
            {/* <i style={{color:"#dbbb4b",fontSize:"2.5em"}} class="fas fa-home"></i> */}
              {/* Pien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i>essere */}
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
             <NavItem>
                <NavLink
                  href="#pablo"
                  to="/progetto" tag={Link}
                >
                  <p>Progetto <br/>Pien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i>essere</p>
                </NavLink>
              </NavItem>

              
             
              
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Chi sono</p>
                </NavLink>
              </NavItem> */}
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Formazione <br/> psico-spirituale</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    // target="_blank"
                    to="/premessa" tag={Link}
                  >
                   Intento formativo
                  </DropdownItem>
                  <DropdownItem to="/formazione" tag={Link}>
                  Formazione in mindfulness <br/>transpersonale e in relazione
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/formazione-avanzata" tag={Link}
                  >
                   Formazione in mindfulness transpersonale <br/> e in relazione avanzata
                  </DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Ritiri e <br/>ritiri laboratori </p>
                </DropdownToggle>
                <DropdownMenu>
               
                  <DropdownItem
                    // target="_blank"
                    to="/ritiri-vipassana" tag={Link}
                  >
                   Ritiri di Vipassana
                  </DropdownItem>

                  <DropdownItem
                    // target="_blank"
                    to="/ritiri" tag={Link}
                  >
                   Ritiri Laboratori
                  </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>

              

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Attivismo contemplativo</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    // target="_blank"
                    to="/pratica-di-servizio" tag={Link}
                  >
                   Attivismo contemplativo ONLINE
                  </DropdownItem>

                  <DropdownItem
                    // target="_blank"
                    to="/gruppi-solidali" tag={Link}
                  >
                   Gruppi solidali di Ascolto Profondo "da essere a essere "
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/pratica-contemplativa" tag={Link}
                  >
                  Meditazione: la pratica contemplativa nella vita quotidiana
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/percorso-crescita" tag={Link}
                  >
                 Percorsi di crescita psico-spirituale inviduale e di coppia
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/distance-healing" tag={Link}
                  >
                  Distance Healing : Pratiche di guarigione a distanza
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/corpo-cibo" tag={Link}
                  >
                 "Ad ogni corpo il suo cibo..."
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/rilassamento-yoga" tag={Link}
                  >
                 Rilassamento. Yoga Nidra del Cuore
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/traduzione-testi" tag={Link}
                  >
                 Coordinamento traduzioni testi di DHARMA dall'inglese all'italiano
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/cuore-cura" tag={Link}
                  >
                 Nel cuore della cura
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/sangha" tag={Link}
                  >
                 Sangha cittadini e regionali
                  </DropdownItem>
                  
                  
              </DropdownMenu>
              </UncontrolledDropdown>



              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Psicoterapia e <br/> pratiche di <br/>risorsificazione</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    // target="_blank"
                    to="/psicoterapia" tag={Link}
                  >
                   Psicoterapia transpersonale e contemplativa
                  </DropdownItem>
                  <DropdownItem
                    // target="_blank"
                    to="/psicoterapia-online" tag={Link}
                  >
                   Psicoterapia transpersonale e contemplativa - online
                  </DropdownItem>
                  
                  <DropdownItem
                    // target="_blank"
                    to="/craniosacrale" tag={Link}
                  >
                   Craniosacrale Biodinamico
                  </DropdownItem>
                 
              </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Eventi</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    // target="_blank"
                    to="/formazione-events" tag={Link}
                  >
                   Eventi residenziali
                  </DropdownItem>

                  <DropdownItem
                    // target="_blank"
                    to="/eventi-centro" tag={Link}
                  >
                   Eventi al Centro Mindfulness Milano
                  </DropdownItem>
              </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href="#pablo"
                  to="/consapevolezza" tag={Link}
                >
                  <p>Consapevolezza in cammino</p>
                </NavLink>
              </NavItem>
              

{/* Social                 ---------------------------------------------- */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="https://web.facebook.com/Progetto-Pienessere-ETS-103325588180193"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                Progetto Pien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/braveheartfulneschool"
                  target="_blank"
                  id="facebook-tooltip2"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip2">
                Braveheartfulness School 
                </UncontrolledTooltip>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow me on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
