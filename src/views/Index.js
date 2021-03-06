import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import CookieConsent from "react-cookie-consent";

// sections for this page
import Collaborazioni from "./index-sections/Collaborazioni.js";
import ConduttoriHome from "./pages/ConduttoriHome"

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
   
    
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
  
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        <CookieConsent>This website uses cookies to enhance the user experience. Read more: <a href="\trattamento-dei-dati-personali">cookie e privacy</a></CookieConsent>

          <ConduttoriHome />
          <Collaborazioni />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
