import React, { useState } from "react";
import "./Diagnostics.css";
import Navbar from "./Navbar";

function Hypertension() {
  const [hbpBeforePregnancy, setHbpBeforePregnancy] = useState("");
  const [hbpDuringPregnancy, setHbpDuringPregnancy] = useState("");
  const [proteinuria, setProteinuria] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "hbpBeforePregnancy":
        setHbpBeforePregnancy(value);
        break;
      case "hbpDuringPregnancy":
        setHbpDuringPregnancy(value);
        break;
      case "proteinuria":
        setProteinuria(value);
        break;
      default:
        break;
    }
  };

  const handleCheckButtonClick = () => {
    if (
      hbpBeforePregnancy === "yes" &&
      hbpDuringPregnancy === "yes" &&
      proteinuria === "yes"
    ) {
      setDiagnosis("Preeclampsia superimposed on chronic hypertension");
    } else if (
      hbpBeforePregnancy === "yes" &&
      hbpDuringPregnancy === "yes" &&
      proteinuria === "no"
    ) {
      setDiagnosis("Chronic Hypertension");
    } else if (
      hbpDuringPregnancy === "yes" &&
      hbpBeforePregnancy === "no" &&
      proteinuria === "no"
    ) {
      setDiagnosis("Gestational Hypertension");
    } else if (
      hbpBeforePregnancy === "no" &&
      hbpDuringPregnancy === "yes" &&
      proteinuria === "yes"
    ) {
      setDiagnosis("Preeclampsia");
    } else {
      setDiagnosis("Insufficient information for diagnosis.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container1">
        <div>
          <h1>Screening for Hypertension</h1>
          <p>
            Managing hypertension in pregnant women is vital to prevent
            complications such as preeclampsia and fetal growth restriction.
            Untreated hypertension can endanger both maternal and fetal health,
            leading to adverse outcomes such as preterm birth and developmental
            issues. Timely monitoring and intervention are crucial to ensure the
            well-being of both mother and baby during pregnancy.
          </p>
        </div>

        <div className="option-container">
          <label>Do you have hypertension before pregnancy?</label>
          <select
            name="hbpBeforePregnancy"
            value={hbpBeforePregnancy}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="option-container">
          <label>Do you have hypertension during pregnancy?</label>
          <select
            name="hbpDuringPregnancy"
            value={hbpDuringPregnancy}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="option-container">
          <label>Do you have proteinuria?</label>
          <select
            name="proteinuria"
            value={proteinuria}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button onClick={handleCheckButtonClick}>Check</button>

        {diagnosis && (
          <div className="diagnosis-container">
            <p>Diagnosis: {diagnosis}</p>
            {diagnosis === "Chronic Hypertension" && (
              <p>Symptoms: Headaches, vision changes, fatigue</p>
            )}
            {diagnosis === "Preeclampsia" && (
              <p>
                Symptoms: High blood pressure, proteinuria, swelling,
                potentially seizures
              </p>
            )}
            {diagnosis === "Preeclampsia superimposed on chronic hypertension" && (
              <p>
                Symptoms: Combines symptoms of both conditions, often
                exacerbating risks for the mother and baby
              </p>
            )}
            {diagnosis === "Gestational Hypertension" && (
              <p>
                Symptoms: High blood pressure without proteinuria after 20 weeks
                of pregnancy, often resolving postpartum
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hypertension;
