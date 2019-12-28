import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {  Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
         <h3 className="title">Collaborazioni</h3>
          <Row>
            <div className="col">
              <a href="https://www.mindproject.com/wp/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/cropped-prova_logo.jpg")}
                ></img>
              </a>
            </div>
            <div className="col">
              
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/IlFiloDOro_logo.png")}
                ></img>
           
              
            </div>
            <div className="col">
              <a href="https://www.acsicraniosacrale.it/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/logo_acsi.png")}
                ></img>
              </a>
            </div>
          </Row>
          <br/>
          <Row>
          <div className="col">
              <a href="https://www.centro-craniosacrale.it/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/logo_cbc.png")}
                ></img>
              </a>
            </div>
            <div className="col">
              <a href="https://www.karuna-institute.co.uk/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/Karuna-Institute-logo.png")}
                ></img>
              </a>
            </div>
            <div className="col">
              <a href="http://associazionemudita.org/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/mudita.png")}
                ></img>
              </a>
            </div>
          </Row>
          <br/>
          <Row>
          <div className="col">
              <a href="http://centromindfulnessmilano.com/" target="_blank" rel="noopener noreferrer" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/collaborazioni/mindfulness.png")}
                ></img>
              </a>
            </div>
            <div className="col">
              <a href="https://www.facebook.com/mindfulnessacomo/" target="_blank" rel="noopener noreferrer" >
              <h3 className="title"><i className="fab fa-facebook-square"></i>  Centro Mindfulness Como</h3>
              </a>
            </div>
            <div className="col">
              <a href="http://centromindfulnessmilano.com/myportfolio/simone-spina/" target="_blank" rel="noopener noreferrer" >
              <h3 className="title">Simone Spina</h3>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
