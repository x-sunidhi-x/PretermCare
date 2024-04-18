import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="body-container">
      <Navbar/>
      <section id="about"style={{marginLeft:"10%",marginRight:"10%",opacity:"1"}}>
        <h1>PretermCare</h1>
        <div style={{ height: "15px" }}></div>
        <p >
          Preterm delivery is a critical issue on a global scale, affecting
          millions of pregnancies each year. Approximately 15 million babies are
          born prematurely worldwide annually, accounting for more than one in
          ten births. These preterm births are a leading cause of neonatal
          mortality, with complications from preterm birth responsible for
          nearly one million deaths each year. In India, 3.02 million preterm
          births were recorded in 2020, the highest worldwide, comprising over
          20 per cent of all preterm births globally, as reported in a study
          published in the Lancet journal.
        </p>
        <p>
          PretermCare is an innovative online platform designed to empower
          expectant mothers and healthcare professionals with advanced
          predictive analytics. By leveraging cutting-edge neural network
          technology for preterm delivery risk assessment, it identifies the type
          of infection and hypertension-related disorders, providing
          comprehensive insights into potential risk factors. User-friendly
          interfaces and intuitive data input forms for easy information
          submission by expectant mothers.
        </p>
      </section>
      <section id="our-product" class="lis" style={{marginLeft:"10%",marginRight:"10%"}}>
        
        <h3>Our Services</h3>
        {/* <div style={{ height: "15px" }}></div> */}
        <ls>
          <ul>
            <b>Preterm Birth Prediction: </b>
          Our preterm birth prediction service utilizes advanced algorithms to assess the likelihood of premature delivery based carefully curated parameters.
          </ul>
        
          <ul>
            <b>Assistance: </b>Our Chatbot provides personalized guidance and support for expectant mothers regarding preterm birth concerns.
          </ul>
          <ul>
          <b>Infection Classification: </b>Through pH analysis, we accurately identify the type of vaginal infection in pregnant women, enabling timely treatment and management. 
          </ul>
          <ul>
          <b>Hypertension: </b>Our platform accurately detects the type of hypertension in pregnant women, facilitating early intervention to ensure maternal and fetal health.
          </ul>
        </ls>
      </section>
    </div>
  );
}
