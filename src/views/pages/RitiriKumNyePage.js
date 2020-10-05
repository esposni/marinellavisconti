import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
// import FormMessage from"components/FormMessage.js";
import data from "assets/data_events.json"
import AnteprimaEvento from "views/pages/AnteprimaEvento.js";

export default function RitiriKumNyePage() {

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
        title="Ritiri Kum Nye" />
      
        {data.map( (el)=>{
          if(el.type==="Ritiri Kum Nye"){
            return  <AnteprimaEvento 
            key={el.id}
            num={el.id}
            all={false}
            title={el.title}
            conduttori={el.conduttori}
            date={el.date}
            image={el.image}
            type={el.type}
            self_link={el.self_link}/>
          }else{
            return ""
          }
          
        })}
        {/* <FormMessage/> */}
     
        <DefaultFooter />
      </div>
    </>
  );
}