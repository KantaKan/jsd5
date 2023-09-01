import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

function RunningForm() {
  const addData = () => {
    // Logic to add data to the table
    console.log("Adding data...");
  };

  return(   
    <form id="data-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" /><br /><br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" /><br /><br />

      <label htmlFor="weight">Weight:</label>
      <input type="number" id="weight" name="weight" /><br /><br />

      <label htmlFor="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" /><br /><br />

      <button type="button" onClick={addData}>Add Data</button>
    </form>
  );
}

function TableDisplay() {
  return (
    <table id="data-table" border="1" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Current Running (Minutes)</th>
          <th>Good Running</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
}

export default App;
