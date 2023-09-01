import "./App.css";

function App() {
  const members = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "Mean Mock",
      age: 55,
      weight: 64,
      running: 70,
      status: "Extreme",
    },
    {
      name: "Mock J",
      age: 2,
      weight: 8,
      running: 12,
      status: "Good",
    },
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay data={members} />
    </div>
  );
}

const RunningForm = () => {
  return (
    <form id="data-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
      <br />
      <br />

      <label htmlFor="weight">Weight:</label>
      <input type="number" id="weight" name="weight" />
      <br />
      <br />

      <label htmlFor="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" />
      <br />
      <br />

      <button type="button">Add Data</button>
    </form>
  );
};

const TableDisplay = (props) => {
  const memberData = props.data;
  return (
    <>
      <h1>Entered Data</h1>
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
        <TableBody tableData = {memberData} />
      </table>
    </>
  );
};

// const TableBody = (props) => {
//   const showData = props.tableData;
//   return (
//     for (let i=0; i<= showData.length; i++){
//       <tr>
//         <td>{showData[i].name}</td>
//         <td>{showData[i].age}</td>
//         <td>{showData[i].weight}</td>
//         <td>{showData[i].running}</td>
//         <td>{showData[i].status}</td>          
//       </tr>
//     }
//     // <tr>
//     //   <td>{showData[0].name}</td>
//     //   <td>{showData[0].age}</td>
//     //   <td>{showData[0].weight}</td>
//     //   <td>{showData[0].running}</td>
//     //   <td>{showData[0].status}</td>          
//     // </tr>
//   );
// }

const TableBody = (props) => {
  return (
    props.tableData.map((item) =>      
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.weight}</td>
          <td>{item.running}</td>
          <td>{item.status}</td>          
        </tr>     
    )  // end memberData.map
  );
}

// const TableBody = () => {
//   return (
//     {memberData.map((item) => {
//       return (
//         <tr>
//           <td>{item.name}</td>
//           <td>{item.age}</td>
//           <td>{item.weight}</td>
//           <td>{item.running}</td>
//           <td>{item.status}</td>          
//         </tr>
//       );
//     } // end table memberData.map
//     ) } // end {} memberData.map
//   )
// }

export default App;
