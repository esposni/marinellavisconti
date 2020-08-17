import React from "react";

// reactstrap components
import { 
  // Button, 
  Container } from "reactstrap";

// core components

export default function PageHeader(props) {
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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/"+props.image) + ")"
          }}
          ref={pageHeader}
        ></div>
       
          <Container>
            {(props.ifdesc)?<p className="category" style={{color:"gold",fontSize:"1.5em",marginTop:"20vh"}}>{props.title}</p>:
            <h1 className="title" style={{color:"gold",marginTop:"20vh"}}> {props.title} </h1> }
          
           
            {/* <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </div> */}
          </Container>

      </div>
    </>
  );
}
