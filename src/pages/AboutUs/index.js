import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./AboutUs.css";

function AboutUs() {
    return (
      <div>
        <h1 className="hhome">Trufa y Bosque</h1>
        <Container>
          <Row>
            <Col md-6>
              <div className="content">
                <Jumbotron fluid>
                 <Container fluid>
                   <h3 className="display-3">¿Quienes somos?</h3>
                   <p className="lead">En México existen muchas personas con problemas de sobre peso y obesidad,  pero este no es el unico problema, tambien muchas veces ingerimos frutas
                    y verduras que no sabemos que tan dañinas pueden ser si se les aplicaron productos quimicos como pesticidas o productos para acelerar el crecimiento que pueden tener consecuencias 
                    muy malas para las personas y algunas sustancias podrian incluso provocar algun tipo de cancer
                    . Somos una empresa que busca generar un cambio de bien estar en la alimentación de las personas, con este proposito ofrecemos productos alimenticios de calidad, cultivados
                    sin uso de productos quimicos, como pesticidas entre muchos otros, lo que nos permite obtener un fruto mas organico y a su vez un alimento mas saludable para las personas.
                    Ademas impulsaremos la economia de nuestro país </p>
                 </Container>
               </Jumbotron>
             </div>
            </Col>
            <Col md-6>
             <div className="content">
                <Jumbotron fluid>
                 <Container fluid>
                   <h3 className="display-3"> Misión</h3>
                   <p className="lead"> Nuestro principal objetivo es crear una oportunidad de cambio para las personas que se interesen mucho por la salud alimenticia, necesitamos a su vez apoyar a un cultivo 
                   mas ecologimanete sustentable por lo que buscamos conectar con los agricultores Mexicanos que promuevan el cultivo natural sin uso de productos quimicos ya que tambien es una forma de cuidar el medio ambiente.
                   </p>
                 </Container>
               </Jumbotron>
             </div>
            </Col>
            <Col md-6>
             <div className="content">
                <Jumbotron fluid>
                 <Container fluid>
                   <h3 className="display-3"> Visión</h3>
                   <p className="lead"> Ser una empresa lider y pionera en cambiar la ideologia de las personas, apoyando a tener acceso a una alimentación de calidad
                   y saludable para las personas
                   </p>
                 </Container>
               </Jumbotron>
             </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default AboutUs;