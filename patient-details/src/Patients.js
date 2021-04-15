import React from "react";
import "./App.css";
import myJson from './patient.json';

export const Patients = () => {
  return (
    <>
      <div className="patient-container"> 
        <h2>Patient Details</h2>
        {myJson.identifier.map((patientDetail, index)=>{
            return (
            <div>
            {patientDetail.name.map(function(nameDetail,index){
                return <h5>Name of patient: {nameDetail.given} {nameDetail.family}</h5>
            })}
            <h5>Organization name: {patientDetail.managingOrganization.display}</h5>
            <h5>Gender: {patientDetail.gender}</h5>
            <h5>Number of conditions they have: {patientDetail.conditions.length}</h5>
            <h5>List of all conditions: </h5>
            <ul>
                {patientDetail.conditions.map(function(condition,index){
                    return <h5><li>{condition}</li></h5>
                })}
            </ul>
            </div>
            )
        })}

      </div>
    </>
  );
};