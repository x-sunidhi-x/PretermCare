import React, { useState } from 'react';
import './Diagnostics.css';
import Navbar from './Navbar';

function Diagnostics() {
  const [phValue, setPhValue] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handlePhInputChange = (event) => {
    setPhValue(event.target.value);
  };

  const handleCheckButtonClick = () => {
    const pH = parseFloat(phValue);

    if (pH >= 4.5 && pH <= 5) {
      setDiagnosis('Bacterial vaginosis');
      setSymptoms(
        'Malodorous; homogenous; clear, white, or gray discharge that may worsen after intercourse; pelvic discomfort may be present.'
      );
    } else if (pH >= 4.1 && pH <= 4.4) {
      setDiagnosis('Vulvovaginal candidiasis');
      setSymptoms(
        'No odor; white, thick, cheesy, or curdy discharge; vulvar itching or burning.'
      );
    } else if (pH >= 5.1 && pH <= 6) {
      setDiagnosis('Trichomoniasis');
      setSymptoms(
        'Green or yellow, frothy discharge; foul odor; pain with sexual intercourse, vaginal soreness, dysuria.'
      );
    } else if (pH >= 3.5 && pH <= 4.0) {
      setDiagnosis('Normal Range');
      setSymptoms('Healthy and normal secretion.');
    } else {
      setDiagnosis('Invalid pH value');
      setSymptoms('Null');
    }
  };

  return (
    <div>
        <Navbar/>
       
        
    <div className="container1">
      <div>
        <h1>Screening for Infection</h1>
        <p>
          Maintaining the pH balance of the vagina is essential to keeping it
          healthy. Doctors can take a vaginal pH measurement to determine how
          acidic the vaginal environment is. It is also possible to test this at
          home using a pH strip.
        </p>
      </div>

      <p>Enter your pH value:</p>
      <input type="text" value={phValue} onChange={handlePhInputChange} />
      <button onClick={handleCheckButtonClick}>Check</button>

      {diagnosis && (
        <div className="diagnosis-container">
          <p>Diagnosis: {diagnosis}</p>
          <p>Symptoms: {symptoms}</p>
        </div>
      )}
      
    </div>
    
   
    </div>
   
   
   
  );
}

export default Diagnostics;
