import React from "react";


// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import data from "assets/data_events.json"
import AnteprimaEvento from "views/pages/AnteprimaEvento.js";


export default function FormazioneEvents() {
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
        <PageHeader image="ciotola.jpeg" 
        title="Eventi Residenziali" />
       {/* {data.map( (el)=>{
          return  <Evento title={el.title}
          conduttori={el.conduttori}
          date={el.date}
          data_luogo={el.data_luogo}
          image={el.image}
          text={el.text}
          cit={el.cit}
          costo={el.costo}
          contatto={el.contatto}
          prerequisiti={el.prerequisiti}
          offerta_libera={el.offerta_libera}
          vitto_alloggio={el.vitto_alloggio}
          school={el.school}
          users={el.users}
          more_info={el.more_info}
          type={el.type}/>
        })} */}
        {data.map( (el)=>{
           if(el.type==="Ritiri Laboratori" || el.type==="Ritiro di Vipassana" || el.type==="Ritiri KumNye")
               return <AnteprimaEvento 
              key={el.id}
              num={el.id}
              all={true}
              title={el.title}
              conduttori={el.conduttori}
              date={el.date}
              image={el.image}
              type={el.type}
              self_link={el.self_link}/> 
          else
            return ""
            
        })}
        
     
        <DefaultFooter />
      </div>
    </>
  );
}