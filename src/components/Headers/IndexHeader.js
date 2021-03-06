/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/budda.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div style={{display:"flex",justifyContent:"flex-end",flexDirection:'row',alignItems:"center",justifyContent:"center",height:"100%"}}>
          <div className=""style={{display:"flex",justifyContent:"center",flexDirection:'column',marginTop:'30vh', marginLeft:'40vw'}}>
         
            <h1  style={{color:"#dbbb4b",
            
            // fontSize:"4.5em"
            }} align="center" ><strong>Progetto<br/><span style={{fontSize:"1.5em"}}>P</span>ien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i><span style={{fontSize:"1.5em"}}>E</span>ssere</strong></h1>
            <h3  className="h3-seo" align="center" style={{color:"#dbbb4b",
            // fontSize:"3.5em"
            }}>Pratiche contemplative nella vita quotidiana</h3>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
