import React from "react";


// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DataFormMessage from"components/DataFormMessage.js";
import Evento from "views/pages/Evento.js";

export default function EventoPage(props) {

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
      <PageHeader title={props.type} image="budda-face.jpeg" />
       <Evento title={props.title}
          conduttori={props.conduttori}
          date={props.date}
          image={props.image}
          text={props.text}
          cit={props.cit}
          users={props.users}
          more_info={props.more_info}
          type={props.type}/>
        <DataFormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

