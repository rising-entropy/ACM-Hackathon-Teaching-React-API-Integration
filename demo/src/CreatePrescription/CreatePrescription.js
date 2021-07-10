import React from 'react'
import { useState } from "react";
import axios from "axios";


export default function CreatePrescription() {

    const [patientUsername, setPatientUsername] = useState("");
  const [medicines, setMedicines] = useState("");
  const [remarks, setRemarks] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const patientUsernameHandler = (e) => {
    setPatientUsername(e.target.value);
  };

  const medicinesHandler = (e) => {
    setMedicines(e.target.value);
  };

  const remarksHandler = (e) => {
    setRemarks(e.target.value);
  };

  const diagnosisHandler = (e) => {
    setDiagnosis(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      PatientUsername: patientUsername,
      DoctorUsername: localStorage.getItem("username"),
      medicines: medicines,
      remarks: remarks,
      diagnosis: diagnosis,
    };

    const url = "https://ph7apharmahelp.herokuapp.com/api/createprescription";

    axios.post(
        url,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).then(
        response => {
            if(response.status === 200){

              const data = response.data;
              if(data.status === "201 Created")
              {
                  console.log(data)
                //window.location="/"
                return 0;
              }
              window.location = '/createPrescription'
            }
        }
      )
      .catch(
        err => {
            console.log(err)
            window.location="/createPrescription"
        }
      );
    }




    return (
        <div>
            <form onSubmit={submitHandler} >

            <label for="PatientUsername">PatientUsername </label>
            <input type="text" name="PatientUsername" onChange={patientUsernameHandler} required/>
            

            <label for="medicines">medicines </label>
            <input type="text" name="medicines" onChange={medicinesHandler} required/>
         

            <label for="remarks">remarks</label>
            <input type="text" name="remarks" onChange={remarksHandler} required/>

            <label for="diagnosis">diagnosis</label>
            <input type="text" name="diagnosis" onChange={diagnosisHandler} required/>

            <button type="submit">Add Prescription</button>
            </form>
        </div>
    )
}