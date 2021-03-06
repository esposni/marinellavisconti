import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
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
      <div
        className="page-header clear-filter page-header-small"
        filter-color=""
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/budda2.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
         {(props.image!=="")? <div className="photo-container" style={{marginTop:"50px"}}>
            <img alt="..."  src={require("assets/img/"+props.image)}></img>
          </div>:<div className="photo-container" style={{marginTop:"50px"}}></div> }
         
          {(props.home)?<p className="category" style={{color:"#dbbb4b",fontSize:"1.5em",marginTop:"20px"}}>Progetto Pien<i style={{color:"#dbbb4b",fontSize:"1.5em"}}className="fas fa-heart"></i>Essere</p> :<h3 className="title">{props.name}</h3>}
        
          {(props.home)? <p className="category" style={{color:"#dbbb4b",fontSize:"1.5em"}}>{props.desc}</p>:<p className="category">{props.desc}</p>}
          
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
