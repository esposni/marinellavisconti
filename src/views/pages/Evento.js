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

export default function Evento(props) {

  return (
    <>
     <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="" md="4">
              <img
                      alt="..."
                      style={{width:"20em",height:"40em"}}
                      src={require("assets/img/ritiri/"+props.image)}
                    ></img><br/><br/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
 
                <h2 className="title" style={{color:"#dbbb4b"}}>{props.title}</h2>
                {(props.conduttori!=="")?<h5 align="center"><strong>{props.conduttori}</strong><br/><br/></h5>:"" } 
                
                <h5 align="center"><strong>{props.date}</strong><br/></h5>
                {/* <img
                      alt="..."
                      className="info-event"
                      src={require("assets/img/ritiri/"+props.image)}
                    ></img><br/><br/> */}
                {(props.school)? 
                <div>
                <img id="small-logo" src={require("assets/img/logo1.png")} alt=""/><br/>
                <img id="small-logo-text" src={require("assets/img/logo-text.jpeg")} alt=""/>
                </div>: ""}
                    {(props.cit!==[])? props.cit.map((t)=>{
                      return <p>" {t.text} "   -    {t.author}</p>
                    }) : ""}
                    {props.text.map((t)=>{
                      return <h5 align="left">{t}</h5>
                    })}

          {(props.prerequisiti!==[])? props.prerequisiti.map((t)=>{
                      return <h5 align="left"><strong>{t}</strong></h5> 
                    }) : ""}

         {(props.data_luogo!=="")?<h5 align="left"><strong>DATA E LUOGO</strong><br/>{props.data_luogo}</h5>:"" } 
         {(props.costo!=="")?<h5 align="left"><strong>COSTO</strong><br/>{props.costo}</h5>:"" } 
         {(props.offerta_libera)?<h5 align="left"><strong>Il ritiro come da tradizione è ad offerta libera sia per quanto concerne gli insegnamenti che per la traduzione.</strong></h5>:"" } 
         {(props.vitto_alloggio!=="")?<h5 align="left"><strong>Costo vitto e alloggio</strong><br/>{props.vitto_alloggio}</h5>:"" } 
         {(props.contatto!=="")?<h5 align="left"><strong>PER INFO E ISCRIZIONI CONTATTARE</strong><br/><a href={"mailto:"+props.contatto}>{props.contatto}</a></h5>:"" } 
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
          <hr></hr>
        </div>

    </>
  );
}

