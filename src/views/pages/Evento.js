import React from "react";

// reactstrap components
import {
   Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
// core components

import AlertDialogSlide from "components/PopUpButton.js";
// import { isPropertySignature } from "typescript";



// import AlertDialogSlide from "components/PopUpButton.js";

export default function Evento(props) {

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
     <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
 
                <h2 className="title">{props.title}</h2>
                <h5 align="center"><strong>{props.conduttori}</strong><br/><br/></h5>
                <h5 align="center"><strong>{props.date}</strong><br/></h5>
                <img
                      alt="..."
                      src={require("assets/img/ritiri/"+props.image)}
                    ></img><br/><br/>
                    {(props.cit!=="")? <p>{`"`+props.cit+`"`}</p>: ""}
                    {props.text.map((t)=>{
                      return <h5 align="left">{t}</h5>
                    })}
                     
         {(props.users.length!==0)? <h5 align="left"><strong>CONDUTTORI</strong><br/> </h5>:""}
          <Container>
          
            <div className="team">
              <Row>
                {props.users.map((el)=>{
                  return <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/"+el.img)}
                    ></img>
                    <h4 className="title">{el.name} </h4>
                    <p className="category text-info">{el.desc} </p>    
                  </div>
                  {(el.curriculum==="")? 
                      (el.link==="me")?
                          <Button
                            block
                            className="btn-round"
                            color="info"
                            to="/profile-page" tag={Link}
                            size="sm"
                          >Curriculum
                          </Button>    
                          :
                          <Button
                          block
                          className="btn-round"
                          color="info"
                          href={el.link}
                          size="sm"
                          >Curriculum
                          </Button>   
                     :
                     <AlertDialogSlide content={el.curriculum}/> 
                  
                }
                  
                </Col>  
                })}
                
                

              </Row>
            </div>
          </Container> <br/>
          {(props.more_info!=="")?
         
              <Button
                      block
                      className="btn-round"
                      color="info"
                      href={props.more_info}
                      size="lg"
                    >Per maggiori informazioni
                  </Button>  
         
          :""
          } 


              </Col>
            </Row>
          
          </Container>
        </div>

    </>
  );
}

